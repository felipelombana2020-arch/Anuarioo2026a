
const libro = document.getElementById("libro");
const portada = document.getElementById("portada-principal");
const zonaLibro = document.getElementById("zona-libro");

const indicador = document.getElementById("indicador-pagina");
const puntosPagina = document.getElementById("puntos-pagina");

let paginaActual = 0;
let cambioEnCurso = false;

/*
  PERSONALIZA AQUÍ LOS 30 ESTUDIANTES.
  Cambia nombres, historias, aspiraciones y fotografías.
*/
const estudiantes = [
  {
    nombre: "LAURA LINEY ALARCON CORTES",
    aspiraciones: [
      "Enfermera",
      "Doctora",
      "Ingeniera"
    ]
  },
  {
    nombre: "NARLY LIZETH AMAYA LOSADA",
    aspiraciones: [
      "Seguir estudiando",
      "Terminar hasta sacar el tecnólogo",
      "Trabajar para conseguir mis cosas"
    ]
  },
  { nombre: "NYCOLT DANIHELA BARRERA MOSQUERA", aspiraciones: ["Estudiar en el SENA.", "Hacer sentir orgullosa a mi madre.", "Ser infante de Marina.", "Ser chef."], foto: "img/estudiante-04.png" },
  { nombre: "ANDRES FELIPE BASTIDAS LOMBANA", aspiraciones: ["Ser odontólogo."], foto: "img/estudiante-04.jpg" },
  { nombre: "ESTIVEN JULIAN BENITEZ CASTRO", aspiraciones: ["Convertirme en doctor.", "Alcanzar mis metas profesionales.", "Prepararme con dedicación para cuidar la salud de las personas."] },
  { nombre: "NIKOLL LIZETH BOCANEGRA GIRALDO", aspiraciones: ["Estudiar la carrera de mis sueños."], foto: "img/nikoll-bocanegra.png" },
  { nombre: "DANNA VALENTINA CAVIEDES PERDOMO", aspiraciones: ["Estudiar psicología o continuar con el técnico."] },
  { nombre: "ZAIDY LICETH CUELLAR CAVIEDES", aspiraciones: ["Estudiar en el SENA.", "Hacer sentir orgullosa a mi familia.", "Cumplir mi sueño sin rendirme.", "Crecer como persona y aprender de mis errores."], foto: "img/estudiante-09.jpg" },
  { nombre: "KEWIN DANIEL ESCOBAR RAMIREZ", aspiraciones: ["Ser profesional en multimedia.", "Debutar como jugador."], foto: "img/kewin-escobar.png" },
  { nombre: "LAURA FUENTES ARANDA", aspiraciones: ["Ser programadora.", "Tener una vida tranquila y digna."], foto: "img/estudiante-03.jpg" },
  { nombre: "LAURA VALENTINA GALINDO DIAZ", aspiraciones: ["Especializarme en lo que más aspiro."] },
  { nombre: "MARIANA GARCIA PEREZ", aspiraciones: ["Estudiar psicología o licenciatura en lengua castellana."] },
  { nombre: "JESUS FERNANDO GUTIERRES DIZ", aspiraciones: ["Convertirme en médico."] },
  { nombre: "LAURA ANGELINE MARINEZ OLAYA", aspiraciones: ["Estudiar derecho."] },
  { nombre: "JOHAN SEBASTIAN MASMELAS VEGA", aspiraciones: ["Hacer un doctorado en educación.", "Tener salud.", "Ser feliz."] },
  { nombre: "FRANCY FIDELINA MEDINA GARCIA", aspiraciones: ["Graduarme.", "Ingresar a la universidad y estudiar medicina.", "Crecer como persona.", "Ayudar a mi familia.", "Conocer nuevos lugares y cumplir mis sueños."] },
  { nombre: "ISABELLA MONJE VEGA", aspiraciones: ["Tener mi propia empresa.", "Componer mis propias canciones."] },
  { nombre: "SAORY VALENTINA MONTAÑA PIÑEROS", aspiraciones: ["Graduarme del colegio y formar una carrera."] },
  { nombre: "JULIETH VALENTINA MORA ESQUIVEL", aspiraciones: ["Estudiar lo que me gusta y terminarlo.", "Trabajar en lo que estudié.", "Formar una hermosa familia."] },
  { nombre: "CRISTIAN RENE MUÑOZ QUINTERO", aspiraciones: ["Estudiar en el SENA.", "Hacer sentir orgullosa a mi familia.", "Cumplir mi sueño sin rendirme.", "Crecer como persona y aprender de mis errores."], foto: "img/cristian-munoz.jpg" },
  { nombre: "ALEX FELIPE ORTIZ NARVAEZ", aspiraciones: ["Estudiar la carrera de mis sueños.", "Ser un gran profesional."] },
  { nombre: "DUVAN FELIPE ORTIZ SARMIENTO", aspiraciones: ["Terminar mis estudios y graduarme del colegio.", "Estudiar lo que me gusta y convertirme en un gran profesional.", "Tener un buen trabajo y una casa propia.", "Ayudar económicamente a mi familia.", "Viajar y conocer nuevos lugares.", "Ser responsable, humilde y respetuoso.", "Construir un futuro lleno de felicidad y éxitos."] },
  { nombre: "JOAN SEBASTIAN RAMIREZ GARCIA", aspiraciones: ["Ser un gran empresario."] },
  { nombre: "JULIETA ROCHA", aspiraciones: ["Ser profesora de pedagogía infantil y enseñar a los niños.", "Estudiar para ser azafata."] },
  { nombre: "HEILYN YIRETH SANCHEZ DUSSAN", aspiraciones: ["Llegar a ser una persona exitosa e independiente."] },
  { nombre: "THALIANA SOFIA SANCHEZ ROCHA", aspiraciones: ["Ser feliz."] },
  { nombre: "HILLARY NATALIA SERRATO ACOSTA", aspiraciones: ["Terminar mi bachillerato y graduarme.", "Estudiar para ser licenciada en educación infantil."] },
  { nombre: "LAURA SOFIA SERRATO", aspiraciones: ["Graduarme feliz junto a mis amigos.", "Terminar el tecnólogo.", "Homologar y estudiar diseño.", "Estudiar más cursos en el SENA.", "Estudiar biología en la universidad.", "Graduarme de la universidad y ser profesional."] },
  { nombre: "NICOLAS SOTO CALDERON", aspiraciones: ["Tener un trabajo estable.", "Obtener un título profesional de ingeniero.", "Estar junto a mis padres."] },
  { nombre: "ANCIZAR STEVEN TRIANA MURCIA", aspiraciones: ["Terminar el tecnólogo.", "Irme del país junto a mi familia.", "Ir a la universidad.", "Tener hijos."] },
  { nombre: "YUVETTSLIT YUNDA CORTES", aspiraciones: ["Ayudar a mi mamá.", "Llegar a ser profesional en marketing.", "Viajar y tener un trabajo estable.", "Obtener dinero y especializarme en algo."] }
];

const TOTAL = estudiantes.length;

const frasesPorDefecto = [
  "Una de las personas más auténticas y especiales del colegio ♡",
  "Siempre amable, siempre auténtica ♡",
  "Los mejores recuerdos se quedan para siempre.",
  "Una historia que apenas comienza ♡"
];

const datosPorNombre = {
  "laura liney alarcon cortes": { fraseFavorita: "El que persevera alcanza", momentoFavorito: "Haber encontrado una persona realmente leal en mi vida", agradecimientos: "Agradezco a Dios y a mi familia que me acompañaron en esta etapa, por su apoyo, consejos y paciencia." },
  "narly lizeth amaya losada": { fraseFavorita: "No entendí nada", momentoFavorito: "Mi recuerdo favorito es conocer a amistades que me ayudaron en el peor momento y me sacaban una sonrisa", agradecimientos: "A mis padres y a todos los docentes que me acompañaron" },
  "nycolt danihela barrera mosquera": { fraseFavorita: "\" Su Madreeee \"", momentoFavorito: "Mi recuerdo favorito fue cuando iniciamos nuestro grupito de 4 en septimo con unas amigas", agradecimientos: "Le doy gracias a mi madre por darme u apoyo incondicional en mis etudios y por siempre confiar en mi" },
  "andres felipe bastidas lombana": { fraseFavorita: "Relax que yo remonto", momentoFavorito: "Mi noviazgo", agradecimientos: "Agradezco a mis padre por todo el esfuerzo que hicieron todos estos años para que yo pudiera llegar hasta acá MI GRADO DE BACHILLER" },
  "estiven julian benitez castro": { fraseFavorita: "Mire a este negro", momentoFavorito: "Sin duda, mi recuerdo favorito fue el día en que me organizaron una fiesta de cumpleaños sorpresa. Ver reunidos a mis 4 mejores amigos, para celebrar conmigo es un momento que guardo con muchísimo cariño en el corazón.", agradecimientos: "Agradezco profundamente a mis compañeros, familiares y profesores por haberme acompañado y guiado en esta etapa. Su apoyo y compañía fueron fundamentales durante todo mi proceso educativo en la secundaria." },
  "nikoll lizeth bocanegra giraldo": { fraseFavorita: "En nombre de Dios, todo lo lograre", momentoFavorito: "Todos los recuerdos de octavo, pero especialmente cuando dañamos un candado para no tener clases con una profesora", agradecimientos: "Gracias a mi familia por el apoyo" },
  "danna valentina caviedes perdomo": { fraseFavorita: "ay Dios mio", momentoFavorito: "Mi recuerdo favorito es cuando unos compañeros estaban jugando con una pelota de papel, y accidentalmente le pegaron a una profesora casi dañándole las gafas.", agradecimientos: "Les doy las gracias a mis padres por su apoyo emocional, económico, a mis maestros por su paciencia, y todas las enseñanzas que me han dejado." },
  "zaidy liceth cuellar caviedes": { fraseFavorita: "Ay no que pena", momentoFavorito: "Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.", agradecimientos: "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida." },
  "kewin daniel escobar ramirez": { fraseFavorita: "ole no", momentoFavorito: "el dia que jugue un torneo departamental", agradecimientos: "le agradesco a mi familia por apoyarme" },
  "laura fuentes aranda": { fraseFavorita: "Estoy siendo victima de Xenofobia por parte de mi compañero Benítez", momentoFavorito: "Todos los días a partir de 9no (2024) han sido como el mejor de todos. Pero los mejores como Prom fueron las horas lúdicas a la ultima hora de todos los miércoles.", agradecimientos: "Agradezco a cada uno de mis compañeros por haber formado parte de los recuerdos más bonitos de mi último año escolar. Me llevo conmigo las risas, las enseñanzas, los momentos compartidos y la tristeza de saber que una etapa tan especial está llegando a su fin.\nA Yuvettslit Yunda, por ser mi primera amiga al llegar a la institución, por permitirme verla crecer y por ocupar un lugar en mi corazón que el tiempo nunca podrá borrar. A Julieta Rocha, por ser mi compañía, cómplice, apoyo incondicional y una de las amistades más valiosas de este camino. A Isabella Monje, por tenderme la mano cuando más lo necesité; a Laura Serrato, por los momentos vividos; a Estiven Benítez, por su liderazgo, amistad y por hacerme bullying de vez en cuando; a Laura Marinez, por tantas risas y su apoyo; a Cristian Muñoz, por su compañía; a Heilyn Sánchez y Saory Montaña, por estar presentes cuando pudieron; a Laura Galindo, por su cariño y confianza; y a Johan Ramírez, por su carisma y honestidad. Gracias a todos por dejar un pedacito de ustedes en esta historia que siempre recordaré con cariño.\nA mis profesores, especialmente al profe Sebastián Masmelas, gracias por despertar en mí el amor por la programación.\n\nA mi padre, Leonardo Fuentes, por su apoyo económico durante mi formación; a mis hermanos mayores, Cristian Galindo y Yonatan Galindo, por tenderme la mano cuando lo necesité; y a Esther Hernández, por acompañarme espiritual y emocionalmente en este proceso.\n\nPero, sobre todo, mi agradecimiento más profundo es para mi mamá, Lina Aranda. Gracias por cada sacrificio, por cada esfuerzo silencioso y por luchar incansablemente para darme un futuro mejor. Gracias por salvarme de la ignorancia, por creer en mí incluso en medio de las dificultades y por dejarlo todo con tal de verme llegar lejos. Si hoy puedo soñar con un futuro lleno de oportunidades, es porque tú has construido el camino con tus propias manos." },
  "laura valentina galindo diaz": { fraseFavorita: "Tengo Sueño", momentoFavorito: "Mi recuerdo favorito es cuando conocí por primera vez a mi mejor amiga Valeria", agradecimientos: "Le agradezco a mis padres por darme motivación y fuerzas para lograr mis metas y poder seguir adelante." },
  "mariana garcía pérez": { fraseFavorita: "Falsos", momentoFavorito: "La vez que hicieron caer a Edwin y de paso a Natalia en el puente de guaunda y quedó cochino", agradecimientos: "Agradezco principalmente a Dios y a mis padres sobre todo a mi hermana Nubia quien ah hecho el papel principal en apoyarme tanto académica como financieramente, los amo." },
  "jesus fernando gutierres diz": { fraseFavorita: "Los errores ocurren", momentoFavorito: "Cuando obtuve las 80horas sociales sin hacer practicamente nada.", agradecimientos: "Gracias a mis padres, hermano y profesores que me apoyaron en todo para poder salir adelante." },
  "laura angeline marinez olaya": { fraseFavorita: "no joda", momentoFavorito: "Con mis padres de pequeña", agradecimientos: "agradezco a mi familia" },
  "johan sebastian masmelas vega": { fraseFavorita: "La constancia consede la victoria", momentoFavorito: "Cuando me gradue de Ingeniero", agradecimientos: "A mi familia quiero agradecerles por ser mi mayor refujio y mi equipo incondicional." },
  "francy fidelina medina garcia": { fraseFavorita: "Todo es mental", momentoFavorito: "mi recuerdo favorito en general es cuando compartimos", agradecimientos: "Agradezco a mi familia, docentes y compañeros por su apoyo, dedicación y enseñanzas durante esta etapa, que han contribuido a mi formación personal y académica." },
  "isabella monje vega": { fraseFavorita: "Te cuento un chiste amisga", momentoFavorito: "Cuando estaba en el puente con mis amigos y nos inventamos un caso para un juicio", agradecimientos: "Le agradezco a mi mamá, tío y abuela por nunca dejarme sola y confiar en mi incluso cuando yo no lo podía hacer" },
  "saory valentina montaña piñeros": { fraseFavorita: "tengo hambre", momentoFavorito: "cuando me la pasaba jugando voleibol", agradecimientos: "agradecimiento a todos los que me acompañaron en mi formación académica" },
  "julieth valentina mora esquivel": { fraseFavorita: "somos la resistencia", momentoFavorito: "en 7mo cuando jugábamos futbol la mayoría del salón unidos", agradecimientos: "agradezco primeramente a Dios por haberme permitirme estar donde estoy y con vida, y a mis padres por apoyarme en cada momento de mi vida y supliendo cada necesidad q tengo" },
  "cristian rene muñoz quintero": { fraseFavorita: "Ay no que pena", momentoFavorito: "Mi recuerdo favorito de decimo fue compartir risas, locuras y momento inovidables con mis compañeros, creando recuerdos que siempre llevare en mi corazó.", agradecimientos: "Agradezco a mis padres por su amor incondicional, por apoyarme en cada momento y por hacer tantos esfuerzos para darme lo mejor. Gracias por sus consejos, por confiar en mí y por motivarme a seguir adelante, incluso cuando las cosas se ponen difíciles. Ustedes son una parte fundamental de mi vida y una de mis mayores motivaciones para cumplir mis sueños. Todo lo que hacen por mí lo llevo en mi corazón, y espero algún día poder devolverles un poquito de todo lo que me han dado. Los amo mucho y me siento muy afortunada de tenerlos en mi vida." },
  "alex felipe ortiz narvaez": { fraseFavorita: "No mienta", momentoFavorito: "cuando jugaba micro con mi compañeros", agradecimientos: "Primero que todo, quiero dar gracias a Dios por haberme permitido vivir esta experiencia escolar con salud y vida. También agradecer a los profesores que se esforzaron por enseñarnos con dedicación, paciencia y esfuerzo todos sus conocimientos y valores que nos puedan servir en nuestra vida cotidiana. Por último, estaré infinitamente agradecido con mis padres por haberme acompañado y apoyado en todos mis proyectos y en mi trayectoria como estudiante a través del tiempo." },
  "duvan felipe ortiz sarmiento": { fraseFavorita: "yo si estudie pero se me olvido todo", momentoFavorito: "cuando jugué futbol con mis compañeros y nos golearon pero no faltaron las risas", agradecimientos: "Gracias, Dios, por permitirme vivir esta hermosa etapa de mi vida, por darme la oportunidad de aprender, por cada compañero que puso una sonrisa en mis días y por cada maestro que me enseñó algo más que una lección. Gracias por los momentos felices, por las dificultades que me hicieron más fuerte y por los recuerdos que siempre llevaré en mi corazón. Hoy entiendo que el colegio no solo me dejó conocimientos, sino también amistades, experiencias y enseñanzas que me acompañarán toda la vida." },
  "joan sebastian ramirez garcia": { fraseFavorita: "sapa", momentoFavorito: "c", agradecimientos: "ccc" },
  "julieta": { fraseFavorita: "Todo pasa por algo, los planes de Dios son perfectos", momentoFavorito: "c", agradecimientos: "c" },
  "heilyn yireth sanchez dussan": { fraseFavorita: "ya quisiera yo", momentoFavorito: "el compartir de la salchipapa", agradecimientos: "agradezco a mi familia, amigos , compañeros y profesores por darme enseñanzas , ejemplos y aprendizaje que me ayudaron a formarme como la persona que soy ahora ." },
  "thaliana sofia sanchez rocha": { fraseFavorita: "vive la vida", momentoFavorito: "el 2022 con mis amigas", agradecimientos: "agradezco a mdzs , a mis padres, a mis profesores y a los compañeros para ayudarme a lograr mis metas" },
  "hillary natalia serrato acosta": { fraseFavorita: "\"No todo es para siempre, pero tú sí vas a poder con todo.\"", momentoFavorito: "Una vez que estaba caminando con mis amigos por el patio del colegio y después nos fuimos para un lado el cual había un río esa vez me lanzaron al río con otro compañero yo no quería culpar ni avisar a la responsable pero ya la habían delatado en coordinación nos llevaron para allá le pusieron observación y nos regañaron", agradecimientos: "Quiero terminar mi bachillerato con la ayuda de Dios graduarme y estudiar para ser un gran licenciada en educación infantil" },
  "laura sofia serrato": { fraseFavorita: "uy no atrás satanás", momentoFavorito: "mi recuerdo favorito es cuando todos fuimos a la casa de el man que me gustaba y ellos se pusieron a de serenata la canción de la ventana marroncita", agradecimientos: "gracias a mis amigos: Laura fuentes, Ancizar Triana, Joan Ramírez, Isabella moje, Yuvettslit Yunda... y a todo el salón por ser tan especial para mi y por ser tan unidos a pesar de nuestras diferencias" },
  "nicolas soto calderon": { fraseFavorita: "yo que me saque un 3 me conformo", momentoFavorito: "cuando jugamos un partido con mis amigos y nos golearon", agradecimientos: "Primero que todo darle el agradecimiento a mis padres que son los que me han apoyado siempre y en cualquier circunstancia también a mis abuelas que es otro mérito de orgullo saber que tengo una familia unida y que me apoya en todo y gracias a eso es podido con todo y siempre salir adelante afrontando todo" },
  "ancizar steven triana murcia": { fraseFavorita: "six seven", momentoFavorito: "El día del compartir en 10°", agradecimientos: "Agradezco a mis padres por el gran amor que me han dado, a mis hermanos, al profe sebas por ser tan buen docente y a mis amigos por hacer los dias tan divertidos y mas faciles" },
  "yuvettslit yunda cortes": { fraseFavorita: "Life goes on", momentoFavorito: "mi mamá y yo en la graduación de 9no, por como se veía y sentí su orgullo", agradecimientos: "A mi mamá y a mi hermano, por acompañarme durante todo este proceso, por su esfuerzo para conseguir lo que yo necesitaba y, sobre todo por demostrarme su apoyo, amor y orgullo" }
};

const firmasPorNombre = {
  "laura liney alarcon cortes": "img/firma-laura-liney-alarcon-cortes.png",
  "narly lizeth amaya losada": "img/firma-narly-lizeth-amaya-losada.png",
  "nycolt danihela barrera mosquera": "img/firma-nycolt-danihela-barrera-mosquera.png",
  "andres felipe bastidas lombana": "img/firma-andres-felipe-bastidas-lombana.png",
  "estiven julian benitez castro": "img/firma-estiven-julian-benitez-castro.png",
  "nikoll lizeth bocanegra giraldo": "img/firma-nikoll-lizeth-bocanegra-giraldo.png",
  "danna valentina caviedes perdomo": "img/firma-danna-valentina-caviedes-perdomo.png",
  "zaidy liceth cuellar caviedes": "img/firma-zaidy-liceth-cuellar-caviedes.png",
  "kewin daniel escobar ramirez": "img/firma-kewin-daniel-escobar-ramirez.jpg",
  "laura fuentes aranda": "img/firma-laura-fuentes-aranda.jpg",
  "laura valentina galindo diaz": "img/firma-laura-valentina-galindo-diaz.jpg",
  "mariana garcia perez": "img/firma-mariana-garcia-perez.png",
  "jesus fernando gutierres diz": "img/firma-jesus-fernando-gutierres-diz.jpg",
  "laura angeline marinez olaya": "img/firma-laura-angeline-marinez-olaya.jpg",
  "johan sebastian masmelas vega": "img/firma-johan-sebastian-masmelas-vega.jpg",
  "francy fidelina medina garcia": "img/firma-francy-fidelina-medina-garcia.png",
  "isabella monje vega": "img/firma-isabella-monje-vega.png",
  "saory valentina montana pineros": "img/firma-saory-valentina-montana-pineros.png",
  "julieth valentina mora esquivel": "img/firma-julieth-valentina-mora-esquivel.png",
  "cristian rene munoz quintero": "img/firma-cristian-rene-munoz-quintero.png",
  "alex felipe ortiz narvaez": "img/firma-alex-felipe-ortiz-narvaez.png",
  "duvan felipe ortiz sarmiento": "img/firma-duvan-felipe-ortiz-sarmiento.png",
  "joan sebastian ramirez garcia": "img/firma-joan-sebastian-ramirez-garcia.png",
  "julieta rocha": "img/firma-julieta-rocha.png",
  "heilyn yireth sanchez dussan": "img/firma-heilyn-yireth-sanchez-dussan.jpg",
  "thaliana sofia sanchez rocha": "img/firma-thaliana-sofia-sanchez-rocha.jpg",
  "hillary natalia serrato acosta": "img/firma-hillary-natalia-serrato-acosta.jpg",
  "laura sofia serrato": "img/firma-laura-sofia-serrato.png",
  "nicolas soto calderon": "img/firma-nicolas-soto-calderon.png",
  "ancizar steven triana murcia": "img/firma-ancizar-steven-triana-murcia.jpg",
  "yuvettslit yunda cortes": "img/firma-yuvettslit-yunda-cortes.png"
};

const extensionesFotoPorNumero = {
  3: "jpg",
  4: "png",
  5: "png",
  6: "png",
  7: "jpg",
  16: "png",
  17: "png",
  19: "png",
  25: "png",
  26: "png",
  28: "png"
};

const aspiracionesPorDefecto = [
  "Cumplir mis sueños profesionales.",
  "Seguir aprendiendo y creciendo.",
  "Hacer sentir orgullosa a mi familia."
];

function escapar(texto) {
  return String(texto ?? "").replace(/[&<>"']/g, letra => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[letra]);
}

function normalizarNombre(nombre) {
  return String(nombre || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function obtenerRutaFoto(indice) {
  const numero = indice + 1;
  const codigo = String(numero).padStart(2, "0");
  const extension = extensionesFotoPorNumero[numero] || "jpg";
  return `img/estudiante-${codigo}.${extension}`;
}

function obtenerEstudiante(indice) {
  const numero = String(indice + 1).padStart(2, "0");
  const estudiante = estudiantes[indice] || {};
  const claveNombre = normalizarNombre(estudiante.nombre || `ESTUDIANTE ${numero}`);
  const datos = datosPorNombre[claveNombre] || {};

  return {
    nombre: estudiante.nombre || `ESTUDIANTE ${numero}`,
    historia: estudiante.historia ||
      "Cada experiencia, cada amistad y cada aprendizaje hicieron de esta etapa algo inolvidable.",
    aspiraciones: estudiante.aspiraciones || aspiracionesPorDefecto,
    frase1: estudiante.frase1 || frasesPorDefecto[0],
    frase2: estudiante.frase2 || frasesPorDefecto[1],
    frase3: estudiante.frase3 || frasesPorDefecto[2],
    frase4: estudiante.frase4 || frasesPorDefecto[3],
    fraseFavorita: datos.fraseFavorita || estudiante.fraseFavorita ||
      "Cree en ti y todo será posible.",
    momentoFavorito: datos.momentoFavorito || estudiante.momentoFavorito ||
      "Compartir momentos especiales con mis amigos.",
    agradecimientos: datos.agradecimientos || estudiante.agradecimientos ||
      "Gracias a mi familia, docentes y compañeros por acompañarme durante esta etapa.",
    foto: estudiante.foto || obtenerRutaFoto(indice),
    firma: estudiante.firma || firmasPorNombre[claveNombre] || `img/firma-${numero}.png`
  };
}

/*
  ESTA ES LA PLANTILLA ORIGINAL DEL ESTUDIANTE,
  ADAPTADA PARA RECIBIR LOS DATOS DE CADA PERSONA.
*/
function crearPagina(estudiante, indice) {
  const numero = String(indice + 1).padStart(2, "0");
  const datos = obtenerEstudiante(indice);

  const aspiraciones = Array.isArray(datos.aspiraciones)
    ? datos.aspiraciones
    : [datos.aspiraciones];

  const pagina = document.createElement("section");
  pagina.className = "pagina-libro";
  pagina.setAttribute("aria-label", `Estudiante ${numero}`);

  pagina.innerHTML = `
    <main class="libro">

      <header class="encabezado">
        <img
          src="img/escudo.png"
          alt="Escudo institucional"
          class="escudo"
          onerror="this.style.visibility='hidden'"
        >

        <div class="institucion">
          <span>INSTITUCIÓN EDUCATIVA</span>
          <h2>EUGENIO FERRO FALLA</h2>
        </div>

        <p class="lema">
          Formando grandes personas,<br>
          para un mejor mañana
        </p>
      </header>

      <section class="portada-estudiante">

        <div class="titulo-fondo" aria-hidden="true">
          ${escapar(datos.nombre)}
        </div>

        <div class="titulo-estudiante">
          <h1>${escapar(datos.nombre)}</h1>
          <span>GENERACIÓN 2026</span>
        </div>

        <article class="estudiante-pagina">

          <img
            src="${escapar(datos.foto)}"
            alt="Fotografía de ${escapar(datos.nombre)}"
            class="foto-estudiante"
            onerror="this.onerror=null; const base = '${escapar(datos.foto).replace(/\.jpg$/i, '').replace(/\.png$/i, '')}'; if (this.src.endsWith('.jpg')) { this.src = base + '.png'; } else { this.src = 'img/foto-estudiante.jpg'; }"
          >

          <div class="informacion">
            <p class="etiqueta">MI HISTORIA</p>
            <h2>Mi paso por el colegio</h2>

            <p>${escapar(datos.historia)}</p>

            <h3>Mis aspiraciones</h3>
            <ul>
              ${aspiraciones.map(item =>
                `<li>${escapar(item)}</li>`
              ).join("")}
            </ul>
          </div>
        </article>

        <aside class="frase frase-izquierda">
          <p>${escapar(datos.frase1)}</p>
          <span class="flecha">↗</span>
        </aside>

        <aside class="frase frase-derecha">
          <p>${escapar(datos.frase2)}</p>
          <span class="flecha">↙</span>
        </aside>

        <aside class="frase frase-inferior-izquierda">
          <p>${escapar(datos.frase3)}</p>
        </aside>

        <aside class="frase frase-inferior-derecha">
          <p>${escapar(datos.frase4)}</p>
        </aside>

      </section>

      <section class="datos-estudiante">

        <article class="dato">
          <h3>Mi frase favorita</h3>
          <p>“${escapar(datos.fraseFavorita)}”</p>
        </article>

        <article class="dato">
          <h3>Mi momento favorito</h3>
          <p>${escapar(datos.momentoFavorito)}</p>
        </article>

        <article class="dato">
          <h3>Mis agradecimientos</h3>
          <p>${escapar(datos.agradecimientos)}</p>
        </article>

      </section>

      <section class="seccion-firma">
        <img
          src="${escapar(datos.firma)}"
          alt="Firma de ${escapar(datos.nombre)}"
          class="firma-estudiante"
          onerror="this.style.display='none'"
        >
        <div class="linea-firma"></div>
        <p class="nombre-firma">${escapar(datos.nombre)}</p>
        <span>Promoción 2026</span>
      </section>

      <footer class="pie">
        <span>GENERACIÓN 2026</span>
        <p>Una etapa termina, miles de sueños comienzan.</p>
        <span>CAMPOALEGRE · HUILA</span>
      </footer>

    </main>
  `;

  return pagina;
}

/* GENERAR LAS 30 PÁGINAS */

function construirLibro() {
  libro.innerHTML = "";
  puntosPagina.innerHTML = "";

  for (let i = 0; i < TOTAL; i++) {
    const pagina = crearPagina(estudiantes[i], i);

    if (i !== 0) {
      pagina.hidden = true;
    }

    libro.appendChild(pagina);

    const punto = document.createElement("button");
    punto.className = "punto";
    punto.type = "button";
    punto.setAttribute("aria-label", `Ir al estudiante ${i + 1}`);
    punto.title = `Estudiante ${i + 1}`;

    punto.addEventListener("click", () => mostrarPagina(i));

    puntosPagina.appendChild(punto);
  }

  actualizarControles();
}

/* MOSTRAR LA PORTADA Y ABRIR EL LIBRO */

function mostrarPortada() {
  zonaLibro.classList.add("oculto");
  portada.classList.remove("oculto");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function abrirLibro() {
  portada.classList.add("oculto");
  zonaLibro.classList.remove("oculto");
  mostrarPagina(0);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* CAMBIAR DE PÁGINA */

function mostrarPagina(indice) {
  if (indice < 0 || indice >= TOTAL || indice === paginaActual || cambioEnCurso) return;

  const paginas = libro.querySelectorAll(".pagina-libro");
  const paginaAnterior = paginas[paginaActual];
  const paginaNueva = paginas[indice];
  const avanzar = indice > paginaActual;

  cambioEnCurso = true;
  paginaNueva.hidden = false;
  paginaNueva.classList.add("debajo");
  paginaAnterior.classList.add(avanzar ? "pasando-siguiente" : "pasando-anterior");
  actualizarControles();

  let transicionFinalizada = false;
  const temporizadorTransicion = window.setTimeout(() => finalizarTransicion(), 700);

  const finalizarTransicion = evento => {
    if (transicionFinalizada || (evento && evento.target !== paginaAnterior)) return;

    transicionFinalizada = true;
    window.clearTimeout(temporizadorTransicion);
    paginaAnterior.removeEventListener("animationend", finalizarTransicion);
    paginaAnterior.hidden = true;
    paginaAnterior.classList.remove("pasando-siguiente", "pasando-anterior");
    paginaNueva.classList.remove("debajo");
    paginaActual = indice;
    cambioEnCurso = false;
    actualizarControles();
  };

  paginaAnterior.addEventListener("animationend", finalizarTransicion);
}

function actualizarControles() {
  indicador.textContent = `Página ${paginaActual + 1} de ${TOTAL}`;

  document.getElementById("anterior").disabled = paginaActual === 0 || cambioEnCurso;
  document.getElementById("siguiente").disabled =
    paginaActual === TOTAL - 1 || cambioEnCurso;

  const puntos = puntosPagina.querySelectorAll(".punto");

  puntos.forEach((punto, i) => {
    punto.disabled = cambioEnCurso;
    punto.classList.toggle("activo", i === paginaActual);

    if (i === paginaActual) {
      punto.setAttribute("aria-current", "page");
    } else {
      punto.removeAttribute("aria-current");
    }
  });
}

function cambiarPagina(direccion) {
  const siguientePagina = paginaActual + direccion;

  if (siguientePagina >= 0 && siguientePagina < TOTAL) {
    mostrarPagina(siguientePagina);
  }
}

/* BOTONES */

document.getElementById("abrir-libro")
  .addEventListener("click", abrirLibro);

document.getElementById("volver-portada")
  .addEventListener("click", mostrarPortada);

document.getElementById("anterior")
  .addEventListener("click", () => cambiarPagina(-1));

document.getElementById("siguiente")
  .addEventListener("click", () => cambiarPagina(1));

document.getElementById("imprimir")
  .addEventListener("click", () => window.print());

/* TECLAS DE NAVEGACIÓN */

document.addEventListener("keydown", evento => {
  if (zonaLibro.classList.contains("oculto")) return;

  if (evento.key === "ArrowRight") {
    cambiarPagina(1);
  }

  if (evento.key === "ArrowLeft") {
    cambiarPagina(-1);
  }

  if (evento.key === "Escape") {
    mostrarPortada();
  }
});

/* INICIAR */

construirLibro();
