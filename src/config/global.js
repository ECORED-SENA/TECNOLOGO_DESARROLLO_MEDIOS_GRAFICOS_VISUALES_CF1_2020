export default {
  global: {
    componenteFormativo: 'Diseño gráfico',
    descripcionCurso:
      'En un sentido amplio, el arte hace referencia a cualquier actividad que desarrolla el ser humano y que recurre a emociones y al intelecto para crear obras con características estéticas y que se expresan en un lenguaje universal; el arte abarca distintos  ámbitos como la escultura, la pintura, la arquitectura, entre otras expresiones artísticas que han ido evolucionando a lo largo de la historia de la humanidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Definición e historia del diseño gráfico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Arte vs diseño',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Historia del arte',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Exponentes, movimientos y tendencias del diseño',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Diseño básico',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Brief',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de brief y sus elementos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Análisis e interpretación de la información',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Diseño, creatividad e innovación',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Gestión de proyectos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Identificar los requerimientos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Fases y metodologías de programación de proyectos',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Recursos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Seguimiento',
            hash: 't_3_4',
          },
        ],
      },
    ],
    subMenu: [
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor pedagógico',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor',
        centro: 'Centro para la Industria de la Comunicación Gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Javier Enrique Santana',
        cargo: 'Experto temático',
        centro: 'Centro de Gestión Industrial',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Dayra Maritza Paz Calderón',
        cargo: 'Diseñadora y Evaluadora Instruccional',
        centro: 'Centro de Diseño y Metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Integración de recursos y pruebas',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Juan Carlos Tapias Rueda',
        cargo: 'Diseño web',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Revisión de contenido',
        centro: 'Centro Industrial del Diseño y la Manufactura',
        regional: 'Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Brayan Stiven Pinto Diaz',
        cargo: ['Desarrollo front-end', 'Validación de recursos'],
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Antica-editions (s.f.). Par le paquebot L Atlantique. [Figura]',
      link:
        'https://www.antica-editions.com/fr/index.php?id_product=166&controller=product',
    },
    {
      referencia:
        'Cartwright, M. (2014). La piedra de Rosetta. En ancient.eu. ',
      link: 'https://www.ancient.eu/trans/es/1-12408/la-piedra-de-rosetta/',
    },
    {
      referencia: 'Castro, J. (2014). Urbanismo y arquitectura de Egipto. ',
      link:
        'https://es.slideshare.net/jonathan823/urbanismo-y-arquitectura-de-egipto',
    },
    {
      referencia: 'Coelho, F. (2019). Retroalimentación. En Significados.com',
      link: 'https://www.significados.com/retroalimentacion/',
    },
    {
      referencia:
        'Diccionario etimológico. (2020). Imagen. En diccionario etimológico.',
      link:
        'http://etimologias.dechile.net/?imagen#:~:text=La%20palabra%20%22imagen%22%20viene%20del,imitaci%C3%B3n%22%20de%20la%20figura%20real.',
    },
    {
      referencia: 'Diez, G y Parra, R. (2015). Mucho más sobre Bauhaus.',
      link: 'https://issuu.com/gabrieladiez/docs/bauhause',
    },
    {
      referencia:
        'Diseño gráfico. (s.f.). La forma y los elementos conceptuales del diseño.',
      link:
        'https://www.apadisenografico.com/la-forma-elemento-conceptual-del-diseno/',
    },
    {
      referencia: 'Ecured (s.f.). Saul Bass. [Figura].',
      link: 'https://www.ecured.cu/Saul_Bass',
    },
    {
      referencia: 'Enciclopedia. (2010). Arte del antiguo Egipto.',
      link: 'http://enciclopedia.us.es/index.php/Arte_del_Antiguo_Egipto',
    },
    {
      referencia: 'Godoy, J. (2009). Cuadernos del diseño básico, contraste.',
      link: 'https://issuu.com/azulcero/docs/contraste/4',
    },
    {
      referencia:
        'Godoy, J. (2009). Cuadernos del diseño básico, la radiación.',
      link: 'https://issuu.com/azulcero/docs/la_radiacion/2',
    },
    {
      referencia: 'Lexico. (s.f.). Color. En Lexico.com.',
      link: 'https://www.lexico.com/es/definicion/color',
    },
    {
      referencia:
        'Lozano, I (s.f.). Los 5 elementos claves para un mensaje efectivo.',
      link:
        'https://blog.locutora.org/los-5-elementos-clave-para-crear-un-mensaje-efectivo/',
    },
    {
      referencia:
        'OBS business school. (s.f.). Seguimiento de proyectos, una herramienta infalible para el control de la empresa.',
      link:
        'https://obsbusiness.school/es/blog-investigacion/sistemas-y-operaciones/seguimiento-de-proyectos-una-herramienta-infalible-para-el-control-de-la-empresa',
    },
    {
      referencia:
        'Real Académica Española. (s.f.). Simetría. En el diccionario de la lengua española.',
      link: 'https://dle.rae.es/simetr%C3%ADa',
    },
    {
      referencia:
        'Reizenstein, R. (2004). Cliente. En Enciclopedia de la gestión sanitaria.',
      link: 'https://sk.sagepub.com/reference/healthcaremanagement/n176.xml',
    },
    {
      referencia:
        'Ruiz, L. (2019). El padre del diseño gráfico moderno, Paul Rand. [Figura].',
      link:
        'https://www.enfoquegaussiano.com/el-padre-del-diseno-grafico-moderno-paul-rand/#',
    },
    {
      referencia: 'Uriarte, J. (2020). Resumen y características paleolítico.',
      link: 'https://www.caracteristicas.co/paleolitico/',
    },
    {
      referencia: 'Wikiart. (s.f.). Cassandre. [Figura].',
      link: 'https://www.wikiart.org/es/cassandre',
    },
    {
      referencia: 'Wikipedia. (2020). Ilustración Walter Gropius. [Figura].',
      link: 'https://es.wikipedia.org/wiki/Walter_Gropius',
    },
    {
      referencia:
        'Wong, W. (1991). Fundamentos del diseño bi- y tri-dimensional.',
      link:
        'https://centroculturalhaedo.edu.ar/cch/actualizacion_permanente/Fundamentos%20del%20Diseno%20Bidimensional%20y%20tridimensional,%20Wucius%20Wong.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Axial',
      significado:
        'termino utilizado para hacer referencia a la simetría alrededor del eje.',
    },
    {
      termino: 'Escorzo',
      significado:
        'técnica que permite percibir una sensación de profundidad en una obra.',
    },
    {
      termino: 'Feedback',
      significado:
        'término que en ingles que significa retroalimentación, y se entiende como la respuesta u opinión que da un interlocutor, a partir de la información recibida por parte del emisor.',
    },
    {
      termino: 'Gárgola',
      significado:
        'son figuras mitológicas, en forma de animales o humanos, utilizadas en iglesias y catedrales como objetos decorativos o también para drenajes de agua, un estilo artístico de la edad media especialmente en el arte gótico.',
    },
    {
      termino: 'Helenista',
      significado:
        'persona instruida en la lengua, cultura y literatura griega.',
    },
    {
      termino: 'Ortogonal',
      significado:
        'se emplea para hacer referencia a que está en ángulo recto, ángulo de 90º.',
    },
    {
      termino: 'Polis',
      significado:
        'hace referencia a las ciudades-estado en la antigua Grecia, territorios independientes gobernados de manera autónoma.',
    },
    {
      termino: 'Rosetta',
      significado:
        '“la piedra de Rosetta es una estela incompleta de granodiorita gris y rosa que data del 196 a. C., que presenta un decreto sacerdotal sobre el rey Ptolomeo V de Egipto. El texto está en tres versiones diferentes: jeroglíficos, escritura demótica y griego, cosa que ayudó inmensamente a descifrar por fin los jeroglíficos egipcios” (Cartwright, 2014).',
    },
    {
      termino: 'Simetría',
      significado:
        'según el diccionario de la Real Academia Española – RAE (s.f.). “es correspondencia exacta en forma, tamaño y posición de las partes de un todo”.',
    },
    {
      termino: 'Target',
      significado:
        'es un término inglés, que no forma parte del diccionario de la RAE, se emplea en al campo de la publicidad para designar al público objetivo o nicho de mercado al cual se destinará una campaña, producto o servicio. ',
    },
  ],
  complementario: [
    {
      texto: 'Wong, W. (1991). Fundamentos deldiseño bi- y tri-dimensional.',
      tipo: 'Libro PDF',
      link:
        'https://centroculturalhaedo.edu.ar/cch/actualizacion_permanente/Fundamentos%20del%20Diseno%20Bidimensional%20y%20tridimensional,%20Wucius%20Wong.pdf',
    },
  ],
}
