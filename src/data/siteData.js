export const menuItems = [
  {
    label: 'Conocenos',
    children: [
      { label: 'Nuestra Historia', href: 'pdf/Historia1.pdf', external: true },
      { label: 'Mision y Vision', href: '#' },
      { label: 'Directorio', href: '#' },
      { label: 'Objetivos Institucionales', href: 'pdf/OBJETIVOS-INSTITUCIONALES-Y-DE-CARRERAS-1.pdf', external: true }
    ]
  },
  {
    label: 'Oferta Educativa',
    children: [
      { label: 'Ing. en Sistemas Computacionales', href: 'ISC.html' },
      { label: 'Ing. en Industrias Alimentarias', href: 'IIA.html' },
      { label: 'Ing. en Mecatronica', href: 'IM.html' },
      { label: 'Lic. en Administracion', href: 'LA.html' },
      { label: 'Contador Publico', href: 'CP.html' },
      { label: 'Posgrado', href: 'Pos.html' },
      { label: 'Educacion a Distancia', href: 'https://educacionadistanciatecjerez.com', external: true }
    ]
  },
  {
    label: 'Alumnos',
    children: [
      { label: 'Control Escolar', href: 'http://itscontrol2.ddns.net/cloud/site/login.do', external: true },
      { label: 'Evaluacion Docente', href: '#' },
      { label: 'E-Libro', href: 'https://elibro.net/es/lc/jerez/login_usuario/', external: true },
      { label: 'Revistas Taylor & Francis', href: 'https://www.tandfonline.com/', external: true }
    ]
  },
  {
    label: 'Servicios Escolares',
    children: [
      { label: 'Inscripcion Nuevo Ingreso', href: 'pdf/Escolares/1. Requisitos inscripcion nuevo ingreso-1.pdf', external: true },
      { label: 'Constancia o Kardex', href: 'pdf/Escolares/2. Solicitud constancia o kardex.pdf', external: true },
      { label: 'Guia de Acceso a Control Escolar', href: 'pdf/Escolares/GUIA-ACCESO-CIE-H-ESTUDIANTES-2-1.pdf', external: true },
      { label: 'Certificado Parcial o Total', href: 'pdf/Escolares/4. Requisitos para certificado parcial o total.pdf', external: true },
      { label: 'Cedula Electronica', href: 'pdf/Escolares/7. Requisitos cedula electronica.pdf', external: true },
      { label: 'Acto Recepcional Licenciatura', href: 'pdf/Escolares/5. Requisitos acto recepcional licenciatura.pdf', external: true },
      { label: 'Acto Recepcional Posgrado', href: 'pdf/Escolares/6. Requisitos acto recepcional posgrado.pdf', external: true }
    ]
  },
  {
    label: 'Convocatorias',
    children: [
      { label: 'Convocatoria Escolarizada 2026', href: 'pdf/convocatorias/licenciaturaEscolarizada.pdf', external: true }
    ]
  },
  {
    label: 'Transparencia',
    children: [
      { label: 'Aviso de Privacidad Integral', href: 'pdf/Transparencia/Aviso_de_Privacidad_Integral_ITSJ.pdf', external: true },
      { label: 'Aviso de Privacidad Simplificado', href: 'pdf/Transparencia/Aviso_de_privacidad_Simplificado_ITSJ.pdf', external: true },
      { label: 'Cuenta Publica', href: '#' }
    ]
  },
  {
    label: 'Lineamientos',
    children: [
      { label: 'Reglamento General', href: 'pdf/Lineamientos/Reglamento_General.pdf', external: true },
      { label: 'Titulacion Integral', href: 'pdf/Lineamientos/Titulacion_Integral,pdf', external: true },
      { label: 'Movilidad Estudiantil', href: 'pdf/Lineamientos/Movilidad_Estudiantil.pdf', external: true },
      { label: 'Residencia Profesional', href: 'pdf/Lineamientos/Operacion_y_Acreditacion_de_la_Residencia_Profesional.pdf', external: true }
    ]
  }
]

export const carreras = [
  {
    nombre: 'Ingenieria en Sistemas Computacionales',
    descripcion: 'Desarrollo de software, redes, bases de datos e inteligencia artificial.',
    href: 'ISC.html',
    icono: 'code',
    tema: 'azul'
  },
  {
    nombre: 'Ingenieria en Mecatronica',
    descripcion: 'Automatizacion, robotica, electronica y sistemas de control.',
    href: 'IM.html',
    icono: 'gear',
    tema: 'azul-claro'
  },
  {
    nombre: 'Ingenieria en Industrias Alimentarias',
    descripcion: 'Procesamiento, conservacion y calidad de alimentos.',
    href: 'IIA.html',
    icono: 'layers',
    tema: 'azul-oscuro'
  },
  {
    nombre: 'Licenciatura en Administracion',
    descripcion: 'Gestion empresarial, finanzas, mercadotecnia y capital humano.',
    href: 'LA.html',
    icono: 'monitor',
    tema: 'oscuro'
  },
  {
    nombre: 'Contador Publico',
    descripcion: 'Contabilidad, auditoria, fiscal y gestion financiera.',
    href: 'CP.html',
    icono: 'dollar',
    tema: 'azul'
  },
  {
    nombre: 'Posgrado',
    descripcion: 'Maestria en Ingenieria Industrial con reconocimiento CONAHCYT.',
    href: 'Pos.html',
    icono: 'graduation',
    tema: 'dorado'
  }
]

export const servicios = [
  { nombre: 'Control Escolar', href: 'http://itscontrol2.ddns.net/cloud/site/login.do', icono: 'grid', external: true },
  { nombre: 'Correo Institucional', href: 'https://login.microsoftonline.com/?whr=tecnm.mx', icono: 'mail', external: true },
  { nombre: 'SGI-3', href: 'http://calidad3.ddns.net/sgi-3', icono: 'login', external: true },
  { nombre: 'E-Libro', href: 'https://elibro.net/es/lc/jerez/login_usuario/', icono: 'book', external: true },
  { nombre: 'Revistas T&F', href: 'https://www.tandfonline.com/', icono: 'books', external: true },
  { nombre: 'Educacion a Distancia', href: 'https://educacionadistanciatecjerez.com', icono: 'globe', external: true }
]

export const documentos = [
  { nombre: 'Codigo de Etica', href: 'pdf/anexos/SFP-CE-2019_Codigo_de_Etica.pdf' },
  { nombre: 'Pronunciamiento de no Discriminacion', href: 'pdf/anexos/Pronunciamiento.pdf' },
  { nombre: 'Protocolo de Prevencion', href: 'pdf/anexos/Protocolo_HSyAS.pdf' },
  { nombre: 'Estrategias de Austeridad', href: 'pdf/anexos/estrategias_austeridad.pdf' },
  { nombre: 'Decreto de Creacion TecNM', href: 'pdf/anexos/decreto_tecnm.pdf' },
  { nombre: 'PRODEP - Que es el S247', href: 'pdf/PRODEP/QUE ES EL S247 2025.pdf' }
]

export const sitiosInteres = [
  { nombre: 'CONAHCYT', href: 'https://www.conacyt.gob.mx/', img: 'img/interes/CONACYT.png' },
  { nombre: 'CONRICYT', href: 'https://www.conricyt.mx/', img: 'img/interes/CONRICYT.png' },
  { nombre: 'INAI', href: 'http://www.ifai.org.mx/', img: 'img/interes/INAI.png' },
  { nombre: 'Gobierno de Zacatecas', href: 'https://www.zacatecas.gob.mx/', img: 'img/logos/logozac.jpg' },
  { nombre: 'TecNM', href: 'https://www.tecnm.mx/', img: 'img/logos/tecnm.jpg' }
]

export const heroSlides = [
  {
    etiqueta: 'Convocatoria Abierta',
    titulo: 'Inscripciones Escolarizadas 2026',
    subtitulo: 'Forma parte de la comunidad TecNM Campus Jerez. Ofrecemos programas de licenciatura e ingenieria con calidad educativa.',
    cta: 'Ver convocatoria',
    href: 'pdf/convocatorias/licenciaturaEscolarizada.pdf',
    tema: 'azul'
  },
  {
    etiqueta: 'Posgrado',
    titulo: 'Maestria en Ingenieria Industrial',
    subtitulo: 'Impulsa tu carrera profesional con nuestro programa de posgrado reconocido por CONAHCYT.',
    cta: 'Conocer mas',
    href: 'Pos.html',
    tema: 'oscuro'
  },
  {
    etiqueta: 'Modelo Educativo',
    titulo: 'Tecnologia y Calidad para la Vida',
    subtitulo: 'Educacion integral con enfoque en innovacion, emprendimiento y desarrollo sustentable.',
    cta: 'Explorar',
    href: 'https://www.tecnm.mx/',
    tema: 'azul-claro'
  }
]

export const cifras = [
  { numero: '5', label: 'Programas Academicos' },
  { numero: '1', label: 'Posgrado' },
  { numero: '+20', label: 'Anos de Trayectoria' },
  { numero: 'ED', label: 'Educacion a Distancia' }
]

export const noticiaDestacada = {
  href: 'pdf/convocatorias/licenciaturaEscolarizada.pdf',
  tag: 'Convocatoria',
  titulo: 'Convocatoria Escolarizada 2026',
  texto: 'Se abre el periodo de inscripciones para todas las carreras de licenciatura e ingenieria en modalidad escolarizada.',
  fecha: 'Marzo 2026',
  icono: 'documento'
}

export const noticiasSecundarias = [
  {
    href: '#',
    tag: 'Aviso',
    titulo: 'Encuesta Estudiantes de Nuevo Ingreso',
    fecha: 'Marzo 2026',
    icono: 'reloj',
    variante: 'dorado'
  },
  {
    href: '#',
    tag: 'Institucional',
    titulo: 'Violentometro - Espacios Libres de Violencia',
    fecha: '2026',
    icono: 'escudo',
    variante: 'gris'
  }
]

export const barraGobierno = {
  logo: 'https://framework-gb.cdn.gob.mx/landing/img/logoheader.svg',
  enlaces: [
    { label: 'Tramites', href: 'https://www.gob.mx/tramites' },
    { label: 'Gobierno', href: 'https://www.gob.mx/gobierno' }
  ]
}

export const logosInstitucionales = [
  { href: 'https://www.gob.mx/sep', img: '/img/logos/educacion.png', alt: 'SEP' },
  { href: 'https://www.tecnm.mx/', img: '/img/logos/tecnm.jpg', alt: 'TecNM' },
  { href: '/', img: '/img/logos/ITSJ.png', alt: 'TecNM Campus Jerez' }
]

export const encabezado = {
  titulo: 'Campus Jerez',
  subtitulo: 'Tecnologico Nacional de Mexico',
  correo: 'https://login.microsoftonline.com/?whr=tecnm.mx'
}

export const redesIntegradas = [
  {
    titulo: 'Facebook TecNM Campus Jerez',
    src: 'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftecjerez&tabs=timeline&width=400&height=480&small_header=true',
    permitir: 'encrypted-media'
  },
  {
    titulo: 'YouTube TecNM Campus Jerez',
    src: 'https://www.youtube.com/embed/FUXHgEbG9O4?si=Q4DTv4tTu7yZPF6d',
    permitir: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
  }
]

export const footer = {
  direccion: ['Libramiento Fresnillo-Tepetongo S/N', 'C.P. 99361, Campus Jerez', 'Jerez, Zacatecas, Mexico'],
  telefono: '4949451226',
  telefonoTexto: '494 945 1226',
  email: 'dir_jerez@tecnm.mx',
  actualizacion: 'Marzo 2026',
  redes: [
    { nombre: 'Facebook', href: 'https://www.facebook.com/tecjerez', texto: 'f' },
    { nombre: 'Twitter', href: 'https://twitter.com/TecNM_MX', texto: 'X' },
    { nombre: 'YouTube', href: 'https://youtube.com', texto: '\u25B6' }
  ],
  enlaces: [
    { label: 'Portal de Transparencia', href: 'http://portaltransparencia.gob.mx/buscador/search/search.do?method=begin', external: true },
    { label: 'INAI', href: 'http://inicio.ifai.org.mx/SitePages/ifai.aspx', external: true },
    { label: 'Aviso de Privacidad', href: 'https://www.gob.mx/cms/uploads/attachment/file/328462/Proyecto_Aviso_Privacidad_TecNM_16052018.pdf', external: true },
    { label: 'Buzon de Sugerencias', href: 'mailto:dir_jerez@tecnm.mx' },
    { label: 'Reglamento General', href: 'pdf/Lineamientos/Reglamento_General.pdf', external: true }
  ],
  mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.927234415429!2d-103.02008722590973!3d22.656501479432062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8682eff731000001%3A0x791d2db6559b9fd!2sINSTITUTO%20TECNOLOGICO%20SUPERIOR%20DE%20JEREZ!5e0!3m2!1ses!2smx!4v1686843791062!5m2!1ses!2smx',
  privacidad: 'https://www.gob.mx/cms/uploads/attachment/file/328462/Proyecto_Aviso_Privacidad_TecNM_16052018.pdf'
}
