export default {
  global: {
    componenteFormativo: 'Gestión de los servicios en la nube',
    descripcionCurso:
      'Este componente formativo brinda los datos e información necesaria para operar las aplicaciones y servicios en la nube, teniendo en cuenta la disponibilidad del servicio y las buenas prácticas de <em>cloud computing</em>.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Plan de gestión de servicios de TI',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Gestión de la capacidad',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Gestión de la continuidad',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Gestión de la disponibilidad',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Acuerdo de nivel de servicios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Acceso a servicios en la nube',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Mejor práctica: Mesa de ayuda',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Planes de mantenimiento',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      texto:
        'Ministerio de Tecnologías de la Información y Comunicaciones. 2019 G.ST.01 Guía del dominio de servicios tecnológicos.',
      tipo: 'Documento guía',
      link:
        'https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capacidad',
      significado:
        'Propiedad de poder contener cierta cantidad de alguna cosa hasta un límite determinado.',
    },
    {
      termino: 'Continuidad',
      significado:
        'En tecnología, hace referencia al principio en el que los recursos, información, servicios y aplicaciones se mantienen mantengan en funcionamiento continuo ante un evento no deseado.',
    },
    {
      termino: 'Disponibilidad',
      significado:
        'En tecnología, hace referencia al principio en el que los recursos, información, servicios y aplicaciones están disponibles para quienes tienen derecho de acceso a ellos.',
    },
    {
      termino: 'Servicio de TI',
      significado:
        'Conjunto de recursos tecnológicos disponibles para ser utilizados como apoyo operativo de las actividades de negocio dentro de una organización, que entregan valor para la misma, facilitando el cumplimiento de las actividades y objetivos.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ministerio de Tecnologías de la Información y Comunicaciones 2019. G.ST.01 Guía del dominio de servicios tecnológicos. ',
      link:
        'https://sena4.sharepoint.com/:w:/r/sites/PROYECTO35-FORTALECIMIENTOOFERTAVIRTUAL-P2-Ciberseguridad/_layouts/15/Doc.aspx?sourcedoc=%7B7B09DD52-BD84-4E6A-A77D-1B1BDE6F40AA%7D&file=CF_07_.docx&action=default&mobileredirect=true&wdOrigin=TEAMS-WEB.teams.files&wdExp=TEAMS-CONTROL&wdhostclicktime=1640622867695',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Pablo Cesar Pardo Ortiz',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Hernando José Peña Hidalgo',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'José Luis Bastidas Pérez',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Joaquín Patiño Cerón',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Peter Emerson Pinchao Solís',
        cargo: 'Experto temático',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Instructor',
        centro:
          'Centro de teleinformática y producción industrial - Regional Cauca',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Metodóloga para la formación virtual',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
