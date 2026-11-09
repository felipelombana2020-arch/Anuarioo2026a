Add-Type -AssemblyName System.IO.Compression.FileSystem

$workbookPath = 'C:\Users\Admin\Documents\anuario\Información de contacto (Respuestas).xlsx'
$imageDirectory = 'C:\Users\Admin\Documents\anuario\img'
$rowOrder = @(27, 9, 25, 20, 29, 31, 7, 6, 21, 30, 22, 3, 8, 32, 33, 23, 24, 5, 4, 14, 10, 12, 11, 26, 2, 17, 18, 15, 13, 28, 16)
$archive = [System.IO.Compression.ZipFile]::OpenRead($workbookPath)

try {
    $sharedStream = $archive.GetEntry('xl/sharedStrings.xml').Open()
    $sharedXml = [System.Xml.XmlDocument]::new()
    $sharedXml.Load($sharedStream)
    $sharedStream.Close()

    $sharedStrings = [System.Collections.Generic.List[string]]::new()
    foreach ($item in $sharedXml.SelectNodes("//*[local-name()='si']")) {
        $text = ''
        foreach ($part in $item.SelectNodes(".//*[local-name()='t']")) {
            $text += $part.InnerText
        }
        [void]$sharedStrings.Add($text)
    }

    $sheetStream = $archive.GetEntry('xl/worksheets/sheet1.xml').Open()
    $sheetXml = [System.Xml.XmlDocument]::new()
    $sheetXml.Load($sheetStream)
    $sheetStream.Close()

    $relationsStream = $archive.GetEntry('xl/worksheets/_rels/sheet1.xml.rels').Open()
    $relationsXml = [System.Xml.XmlDocument]::new()
    $relationsXml.Load($relationsStream)
    $relationsStream.Close()

    $relations = [System.Collections.Hashtable]::new()
    foreach ($relation in $relationsXml.SelectNodes("//*[local-name()='Relationship']")) {
        $relations[$relation.GetAttribute('Id')] = $relation.GetAttribute('Target')
    }

    $namesByRow = [System.Collections.Hashtable]::new()
    foreach ($row in $sheetXml.SelectNodes("//*[local-name()='sheetData']/*[local-name()='row']")) {
        foreach ($cell in $row.SelectNodes("*[local-name()='c']")) {
            if ($cell.GetAttribute('r') -match '^B(\d+)$') {
                $value = $cell.SelectSingleNode("*[local-name()='v']").InnerText
                if ($cell.GetAttribute('t') -eq 's') {
                    $value = $sharedStrings[[int]$value]
                }
                $namesByRow[$Matches[1]] = $value.Trim()
            }
        }
    }

    $linksByRow = [System.Collections.Hashtable]::new()
    foreach ($hyperlink in $sheetXml.SelectNodes("//*[local-name()='hyperlink']")) {
        if ($hyperlink.GetAttribute('ref') -match '^H(\d+)$') {
            $rowNumber = $Matches[1]
            $relationshipId = $hyperlink.GetAttribute('id', 'http://schemas.openxmlformats.org/officeDocument/2006/relationships')
            $linksByRow[$rowNumber] = $relations[$relationshipId]
        }
    }

    for ($index = 0; $index -lt $rowOrder.Length; $index++) {
        $rowNumber = [string]$rowOrder[$index]
        try {
            $target = $linksByRow[$rowNumber]
            $match = [regex]::Match($target, '(?:id=|/d/)([^/&]+)')
            if (-not $match.Success) {
                throw 'No se encontró el identificador de Drive'
            }

            $request = [System.Net.HttpWebRequest]::Create('https://drive.usercontent.google.com/download?id=' + $match.Groups[1].Value + '&export=download')
            $request.AllowAutoRedirect = $true
            $request.Timeout = 30000
            $request.ReadWriteTimeout = 30000
            $response = $request.GetResponse()
            $contentType = $response.ContentType.Split(';')[0].ToLowerInvariant()
            $extension = switch ($contentType) {
                'image/jpeg' { '.jpg' }
                'image/png' { '.png' }
                'image/webp' { '.webp' }
                'image/gif' { '.gif' }
                default { throw ('Formato no admitido: ' + $contentType) }
            }

            $fileName = 'estudiante-{0:D2}{1}' -f ($index + 1), $extension
            $filePath = [System.IO.Path]::Combine($imageDirectory, $fileName)
            $source = $response.GetResponseStream()
            $destination = [System.IO.File]::Create($filePath)
            $source.CopyTo($destination)
            $destination.Close()
            $source.Close()
            $response.Close()
            [System.Console]::WriteLine(('{0:D2} | fila {1} | {2} | {3}' -f ($index + 1), $rowNumber, $namesByRow[$rowNumber], $fileName))
        }
        catch {
            [System.Console]::WriteLine(('{0:D2} | fila {1} | ERROR | {2}' -f ($index + 1), $rowNumber, $_.Exception.Message))
        }
    }
}
finally {
    $archive.Dispose()
}
