export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Políticas y organismos para el desarrollo económico',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Políticas macroeconómicas: políticas monetarias, fiscales y comerciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Políticas monetarias',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Políticas comerciales',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Política fiscal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Política fiscal expansiva',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Política fiscal restrictiva o contractiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas de la política fiscal',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Impacto de la política fiscal en el desarrollo económico',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Organismos económicos internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'FMI',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El Banco Mundial',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'OMC',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo:
              'El papel de la OMC, el Banco Mundial y el FMI en el desarrollo económico',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Acuerdos de libre comercio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Importancia de los TLC en el crecimiento económico',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Zevallos Avilés, G. (2016). Macroeconomía fundamental I: ( ed.). Difusora Larousse - Ediciones Pirámide. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/49174?page=12 ',
    },
    {
      referencia:
        'CUE MANCERA, A. Introducción a la macroeconomía: un enfoque integral para México. ed. México D.F: Grupo Editorial Patria, 2015. 345 p. Disponible en: ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/39386?page=12 ',
    },
    {
      referencia:
        'EGGERS, F. G. Elementos de micro y macroeconomía. ed. Buenos Aires: Editorial Maipue, 2016. 191 p. Disponible en: ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/77331?page=9',
    },
    {
      referencia:
        'MASSAD A. C. Mis clases de economía. y algo más: microeconomía-macroeconomía. ed. Santiago de Chile: Editorial Universitaria de Chile, 2013. 464 p. Disponible en: ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67701?page=11. ',
    },
    {
      referencia:
        'MOCHÓN MORCILLO, F. Principios de macroeconomía. ed. Madrid: McGraw-Hill España, 2006. 226 p. Disponible en: ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/50106?page=14 ',
    },
    {
      referencia:
        'FLORES BARRERA, C. La economía: virtudes e inconvenientes: manual básico para no economistas. ed. Santiago de Chile: RIL editores, 2006. 454 p. Disponible en: ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/67970?page=14 ',
    },
    {
      referencia:
        'Van Den Berghe Romero, E. (2014). Tratados de libre comercio: retos y oportunidades: ( ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70420 ',
    },
    {
      referencia:
        'Van Den Berghe Romero, E. (2014). Tratados de libre comercio: retos y oportunidades: ( ed.). Ecoe Ediciones. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70420 ',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de Libre Comercio (ALC)',
      significado:
        'Convenio entre dos o más países que busca reducir o eliminar barreras arancelarias y comerciales para fomentar el intercambio de bienes y servicios. Ejemplo: El Tratado de Libre Comercio de América del Norte (TLCAN).',
    },
    {
      termino: 'Arancel',
      significado:
        'Impuesto que un país impone a las importaciones con el fin de proteger la producción nacional o generar ingresos fiscales.',
    },
    {
      termino: 'Banco Mundial (BM)',
      significado:
        'Organismo financiero internacional que brinda asistencia técnica y financiera a países en desarrollo con el objetivo de reducir la pobreza y fomentar el desarrollo económico.',
    },
    {
      termino: 'Déficit Fiscal',
      significado:
        'Situación en la que los gastos del gobierno superan sus ingresos en un período determinado, lo que puede llevar a un aumento de la deuda pública.',
    },
    {
      termino: 'Fondo Monetario Internacional (FMI)',
      significado:
        'Institución financiera internacional que ofrece asistencia económica y asesoramiento a los países miembros para estabilizar sus economías, prevenir crisis y promover el crecimiento sostenible.',
    },
    {
      termino: 'Gasto Público',
      significado:
        'Total de recursos financieros utilizados por el Estado para proveer bienes y servicios a la población, incluyendo educación, salud e infraestructura.',
    },
    {
      termino: 'Impuesto',
      significado:
        'Tributo obligatorio que los ciudadanos y empresas deben pagar al gobierno para financiar el gasto público y garantizar el funcionamiento del Estado.',
    },
    {
      termino: 'Inflación',
      significado:
        'Aumento generalizado y sostenido de los precios de bienes y servicios en un período determinado, lo que reduce el poder adquisitivo de la moneda.',
    },
    {
      termino: 'Organización Mundial del Comercio (OMC)',
      significado:
        'Entidad internacional que regula el comercio entre países, busca reducir barreras comerciales y resolver disputas comerciales mediante acuerdos multilaterales.',
    },
    {
      termino: 'Política Comercial',
      significado:
        'Conjunto de medidas adoptadas por un gobierno para regular el comercio exterior, incluyendo aranceles, tratados comerciales y cuotas de importación.',
    },
  ],
}
