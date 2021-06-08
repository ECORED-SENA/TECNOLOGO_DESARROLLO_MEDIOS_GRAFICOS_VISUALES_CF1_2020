<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Historia del arte

    figure.mb-5
      img(src='@/assets/curso/banner-tema2.png', alt='Historia del arte')   
    p.mb-5.texto-resaltado La historia del arte es 
      span.etiqueta.text-bold   la disciplina de las ciencias sociales encargada de estudiar la evolución del arte a través de cada etapa del tiempo,
      |  basando sus estudios en la clasificación y observación de culturas, pueblos y civilizaciones. Su campo de exploración permite identificar cómo el hombre ha evolucionado a través de los tiempos y cuál era su visión respecto al mundo que lo rodeaba en cada etapa desde su existencia. Su estudio requiere ayuda de otras múltiples disciplinas como la arqueología, antropología, geografía, historia y otras más.  Por medio de la historia identificamos aspectos importantes en las sociedades como, cultura, creencias, política, costumbres, agricultura, vestimenta y muchas más.

    .row.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/tema2-infografia.png', alt='Infografia Historia del arte')  

    .separador


    // 2.1
    #t_2_1.titulo-segundo
      .h2 2.1 Prehistoria

    h3.mb-4 Paleolítico (2.5 millones a 10000 a. C.)

    .row.mb-3
      .col-lg-7
        p La palabra paleolítico significa “piedra antigua”, es un periodo que empieza con la vida misma del ser humano; durante este periodo el hombre empieza a desarrollar herramientas útiles con diversos materiales como piedras, maderas, huesos tallados y demás elementos que encontraba en la naturaleza. Aparecen varias técnicas agrícolas y se dice que durante este periodo se hace el descubrimiento del fuego, descubrimiento de gran importancia para todos los periodos venideros. 
        p El periodo se divide en tres fases: 
          strong paleolítico inferior, paleolítico medio, paleolítico o superior.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/paleolitico.png', alt='Bizonte de Altamira, España')  


    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Paleolítico inferior" :icono="require('@/assets/curso/ico-paleolitico-inferior.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.px-md-5.px-3
            .h3 Paleolítico inferior
            p Es la etapa inicial de la historia de la humanidad, abarcó desde 3 millones de años atrás hasta el 250.000 a. C., tiene lugar en diferentes momentos y en diversas partes del mundo. Los humanos eran nómadas, cazadores y depredadores, se refugiaban en cavernas para protegerse del frío y de los animales salvajes. El gran aporte para la humanidad fue la utilización del fuego, para preparar alimentos, mantener el calor corporal y alejar animales.
          .col-md-6
            figure
              img(src='@/assets/curso/img-paleolitico-inferior.svg', alt='Paleolítico inferior cavernicolas construyendo')

      .py-4.py-md-5(titulo="Paleolítico medio" :icono="require('@/assets/curso/ico-paleolitico-medio.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.px-md-5.px-3
            .h3 Paleolítico medio
            p Esta segunda etapa abarcó aproximadamente desde el 250.000 a. C. hasta el 30.000 a. C. La especie humana en continua evolución alcanza la fase de hombre de Neandertal, que se caracterizó por una complexión robusta, sofisticada inteligencia, conciencia de grupo y parentesco, y capacidad para mejorar las armas que utilizaban para la caza.
          .col-md-6
            figure
              img(src='@/assets/curso/img-paleolitico-medio.svg', alt='Paleolítico medio cavernicolas cazando')
      
      .py-4.py-md-5(titulo="Paleolítico superior" :icono="require('@/assets/curso/ico-paleolitico-superior.svg')")
        .row
          .col-md-6.mb-4.mb-md-0.px-md-5.px-3
            .h3 Paleolítico superior
            p Esta tercera etapa abarcó desde 30.000 a. C. hasta el 10.000 a. C., y supone la etapa final de paleolítico. Se destaca en esta etapa el dominio del fuego, el perfeccionamiento de herramientas de caza, y se encontró la mayor cantidad de evidencias de desarrollo artístico (pinturas rupestres encontradas en las cuevas de Altamira ubicadas en la región española de Cantabria y pequeñas esculturas de arcilla o de hueso, que escenifican rituales de caza a través de la representación de dibujos humanos y animales). La evolución del humano alcanzó la fase de hombre de Cromañón, con una mayor capacidad para comunicarse (Uriarte, 20).
          .col-md-6
            figure
              img(src='@/assets/curso/img-paleolitico-superior.svg', alt='Paleolítico superior cavernicolas pintando, haciendo fuego y con armas de caza')
    

    h3.mb-4 Neolítico, nueva piedra (12.000 - 5.000 a. C.)

    p.mb-4 El periodo neolítico es el último denominado dentro de la Edad de Piedra. Este periodo presenta especial importancia ya que el hombre tiene un gran desarrollo cultural y agrícola, doméstica algunos animales y por primera vez deja de ser nómada. Este es uno de los periodos con mayores cambios especialmente a nivel social, ya que se empiezan a formar los primeros asentamientos y con ello a construir lo que conocemos hoy en día como las grandes sociedades. 
    p.mb-4 El hombre aprende nuevas técnicas de siembra, cultiva arroz, maíz y trigo, lleva a cabo avances en la agricultura, recoge frutos y empieza la domesticación de animales destinado a la ganadería y se adapta el medio ambiente a sus necesidades; a pesar de esto con el crecimiento de la población, se empiezan a magnificar los problemas, se presentan las primeras guerras y se enfrentan muchos problemas de corte social. Continúa elaborando herramientas y elementos en piedra, madera y otros materiales.

    .row.justify-content-center
      .col-lg-10
        figure
          img(src='@/assets/curso/neolitico.png', alt='Infografia Historia del arte')  

    .separador


    // 2.2
    #t_2_2.titulo-segundo
      .h2 2.2 Edad antigua

    .row.mb-3
      .col-lg-7
        p La edad antigua inicia aproximadamente en el año 4.000 a.C. Esta parte de la historia se caracteriza por varios avances que al igual que en el periodo neolítico son fundamentales en el desarrollo y trascender de la humanidad. Si bien es cierto el hombre desde el paleolítico ya dejaba su huella en las cuevas de Altamira, la escritura no se había desarrollado hasta este momento. El desarrollo de los pueblos y la necesidad de comunicarse hacen que se manifiesten otras formas de comunicación diferentes a la expresión oral. Es en este periodo que muchos pueblos empiezan a implementar diversos símbolos que representan el lenguaje hablado, los primeros indicios de escritura, se encuentran en civilizaciones como los egipcios, griegos y los chinos.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/edad-antigua.png', alt='Edad antigua')    

    .row.justify-content-center.mb-4
      .col-lg-10.cajon.color-naranja2
        .row.justify-content-center.align-items-center
          .col-lg-2.col-3.p-lg-5.p-4
            figure
              img(src='@/assets/curso/ico2-2-1.svg', alt='Vela prendida')
          .col-lg-9.p-lg-5.px-4
            p La religión toma fuerza y se profetizan las religiones politeístas que adoran y veneran muchos dioses; los griegos, por ejemplo, adoraban a Zeus dios del cielo, Poseidón dios de los mares, Hades dios del inframundo; Los egipcios también tenían sus propios dioses, Horus que tenía forma de halcón, Ra el que alumbra cada día, Thot dios de la escritura.
    .row.justify-content-center.mb-5
      .col-lg-10.cajon.color-naranja2
        .row.justify-content-center.align-items-center
          .col-lg-2.col-4.p-lg-4.p-4
            figure
              img(src='@/assets/curso/ico2-2-2.svg', alt='Balanza')
          .col-lg-9.p-lg-5.px-4
            p Se instauran las primeras normas y leyes para la sana convivencia de los pueblos, las familias poderosas confieren el mando y el poder a sus predecesores, sólo se puede llegar al poder heredado.

    h3.mb-4 Egipto  
    .row.justify-content-center.mb-5
      .col-lg-7
        p Civilización antigua que se originó en la parte oriental de África del Norte, a lo largo del cause medio y alto del rio Nilo, en lo que hoy es el estado moderno de Egipto. La civilización se unificó en torno al año 3150 a. C., con la unificación política del Alto y el Bajo Egipto en el reinado del primer faraón, considerado el represéntate de Dios en la tierra y cuyo poder era supremo.
        p El éxito de la antigua civilización egipcia está relacionado en gran parte por su capacidad de adaptabilidad a las condiciones del valle del río Nilo; su ubicación geográfica influye mucho en su desarrollo artístico, cultural y social. Es una sociedad fluvial, la inundación previsible y riego controlado a los campos fértiles permitió cultivos prósperos fuentes de riqueza.
        .cajon.color-acento-botones.p-4.mb-4
          p.m-0 Tuvo un gran desarrollo en las ciencias, el comercio, la religión y las artes; el 
            strong arte Antiguo Egipto 
            | comprende los estilos de pintura, escultura, artesanía y arquitectura desarrollados desde el año 5000 a. C hasta el 300 d. C., se caracteriza por un sentido de orden: 
            strong las líneas claras y sencillas, combinadas con formas simples y áreas planas de color. 
            | Los artesanos utilizaban las líneas perpendiculares, verticales y horizontales, formando una red y dar las proporciones correctas en su trabajo. El arte refleja la situación social, religiosa y política (enciclopedia, 2010).
        p El arte egipcio guarda un gran simbolismo en cuanto a temas funerarios y religiosos; el misticismo, las supersticiones sobre el más allá, y la devoción a los dioses, se expresa en todo su esplendor. 
      .col-lg-5
        figure
              img(src='@/assets/curso/egipto.svg', alt='Egipto')

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Arquitectura")
        .row
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/egipto-arquitectura.svg', alt='Arquitectura egipcia')
          .col-md-7.px-md-5
            .h3 Arquitectura
            p Los egipcios utilizaron principalmente la piedra en sus construcciones, por su acceso y durabilidad. Sus edificaciones eran monumentales, con bases fuertes y muros gruesos.
            p Debido a la escasez de materiales, predominan en construcción el adobe (ladrillos de barro) y la piedra, fundamentalmente piedra caliza, también piedra arenisca y granito en cantidades enormes. Del imperio antiguo en adelante, la piedra fue reservada generalmente para tumbas y templos, mientras que los ladrillos fueron utilizados en viviendas, incluso en los palacios reales, fortalezas, muros de los recintos de los templos y de las ciudades, y para edificios subsidiarios en los complejos de los templos.
            p El clima de Egipto, afortunadamente seco y cálido preservó, como la aldea de Deir el-Medina, la ciudad de Kahun del imperio medio, o las fortalezas en Buhen y Mirgissa. Por otra parte, muchos templos y tumbas han perdurado porque fueron construidos de piedra, o asentadas en tierras altas, no afectadas por las inundaciones del rio Nilo. Muchas antiguas ciudades egipcias han desaparecido porque estaban situadas cerca de las zonas cultivables del valle del Nilo, que eran inundadas periódicamente con el lodo del río y se elevaron lentamente durante milenios; o porque los ladrillos de adobe, con que se construyeron, fueron utilizados como fertilizante por los campesinos. Otros edificios son inaccesibles, ya que las nuevas construcciones fueron erigidas sobre las antiguas (Castro, 2014).                
      .py-3.py-md-4(titulo="Escritura")
        .row
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/egipto-escritura.svg', alt='Escritura egipcia')  
          .col-md-7.px-md-5
            .h3 Escritura
            p Los egipcios fueron grandes poseedores de conocimientos, durante siglos su escritura fue casi que indescifrable hasta que apareció la piedra Rosetta, la cual ayudó a descifrar algunos símbolos. Los egipcios no solo utilizaban los pictogramas también tenían dentro de su escritura fonemas con un valor sonoro. Dichos jeroglíficos podían ser leídos en varias direcciones, de izquierda a derecha, de derecha a izquierda, de abajo a arriba y viceversa.
            p La piedra Rosetta es descubierta en 1779 cerca al brazo del Nilo, en Rosetta de donde toma su nombre, un oficial francés hace el descubrimiento y observan tres tipos de escritura diferente. La piedra es llevada a Londres en donde se empiezan a realizar estudios por varios eruditos, que terminan descifrando finalmente su contenido.


    h3.mb-4 Grecia  
    .row.justify-content-center.mb-4
      .col-lg-7
        p La civilización es una de las más importantes, pues ha sido el fundamento del mundo occidental. Allí nació la democracia. Sin lugar a duda, la cultura griega, es la base de la cultura occidental. Esta se extiende a un período de mil años. Recibió la influencia de otras culturas como la egipcia y la del próximo oriente. Su ubicación geográfica en el Mediterráneo hizo que tuviera un intercambio más dinámico con otras culturas y formas de pensamiento, favorecido por el comercio y la economía. Estaban organizados en ciudades-estado o polis, independientes y enfrentadas usualmente; sin embargo, compartían la misma lengua, la religión que era politeísta y se unificaban culturalmente en la Hélade (endónimo con el cual los antiguos griegos identificaban su región). Atenas fue la protagonista, pero debido al profundo intercambio entre sus ciudades-estado, la demanda artística se hizo más variada y menos lujosa, y surgió la competencia. En ese momento, la naturaleza fue sinónimo de armonía numérica, basada en la simetría y la proporción, por ende, transmitía belleza. 
        .cajon.color-acento-botones.p-4.mb-4
          p.m-0 
            strong Los griegos 
            | consideraban que eran una raza superior y 
            strong propendían por el perfeccionismo, 
            | para ellos el hombre era el centro de todo, así como la vida; tenían certeza que sus divinidades tenían apariencia humana, pero eran eternos y dotados de poderes. Allí nació la mitología, por medio de la cual el hombre se conocía así mismo, explicando racionalmente el mundo, permitiendo el surgimiento de la filosofía, explicando que nada es casual y que el mundo es un todo ordenado y dinámico. Entonces surgieron, la ciencia, para comprender cómo funciona el mundo, se desarrollaron las matemáticas, por ende, la física y la astronomía, y emerge con mayor esplendor la música y el arte.
      .col-lg-5
        figure
          img(src='@/assets/curso/grecia.svg', alt='Grecia')      

    p Este auge en Grecia se produjo en tres etapas:   

    .row.mb-4
      .col-lg-4.col-grecia
        .cajon.color-naranja.p-4.mb-4
          .row.mb-3
            .col-8
              h4.mb-0 Arcaica
              p (Siglos VII y VI a. C.)
            .col-4 
              figure
                img(src='@/assets/curso/ico-grecia-arcaica.svg', alt='Grecia arcaica')  
          p Surgimiento de una nueva escritura (adopción del alfabeto fenicio).
      .col-lg-4.col-grecia
        .cajon.color-naranja.p-4.mb-4
          .row.mb-3
            .col-8
              h4.mb-0 Clásica
              p (Siglos V y IV a.C.)
            .col-4 
              figure
                img(src='@/assets/curso/ico-grecia-clasica.svg', alt='Grecia clásica')  
          p Sinónimo de perfecto y digno de imitar, con logros artísticos importantísimos, época que termina con la muerte de Alejandro Magno y finalmente la época. 
      .col-lg-4.col-grecia
        .cajon.color-naranja.p-4.mb-4
          .row.mb-3
            .col-8
              h4.mb-0 Helenística
              p (Siglos III - I a.C.)
            .col-4 
              figure
                img(src='@/assets/curso/ico-grecia-helenistica.svg', alt='Grecia helenística')  
          p Se fragmenta Grecia y culmina con la conquista Romana.   

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="La arquitectura griega")
        .row
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/griega-arquitectura.svg', alt='La arquitectura griega')
          .col-md-7.px-md-5
            .h3 La arquitectura griega
            p Constituyó el punto de partida de lo que se iba a desarrollar posteriormente en el transcurso de más de dos mil años. Al principio utilizaron adobe o madera, que fue reemplazada por la piedra, sobre todo mármol. Trabajaron el espacio axial y ortogonal, las cubiertas horizontales, los espacios fueron diseñados para el hombre en forma inteligente, articulados al igual que un ser viviente, manteniendo perfecta simetría y proporción. Construyeron santuarios, que eran ciudades sagradas, en los cuales sacerdotes y pitonisas, buscaban la respuesta de los dioses a través del oráculo, se realizan juegos y pruebas deportivas, actividades musicales y teatrales. Las construcciones estaban rodeadas de columnas, idearon tres estilos de órdenes: dórico, jónico y corintio. En la cornisa, que es un componente horizontal, levantaron monstruosas gárgolas; otro elemento fundamental e importante a destacar son las obras de carácter lúdico como lo es el teatro, construidos en laderas de montañas, a gran escala y de forma semicircular. En cuanto a la vivienda urbana, se observa que tenían una planta rectangular con un patio en el centro, hacia el cual daban las estancias. Se puede afirmar, que se mantuvo el orden ortogonal arquitectónica y urbanísticamente, dando nacimiento al urbanismo, como pauta que determina como distribuir el espacio vital.            
      .py-3.py-md-4(titulo="Escultura y pintura")
        .row
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/griega-escritura.svg', alt='Escultura y pintura')  
          .col-md-7.px-md-5
            .h3 Escultura y pintura
            p Los romanos eran monoteístas y al conquistar Grecia, destruyeron muchas pinturas, pues los dominados eran politeístas. 
              strong La escultura se centró en la perfección del cuerpo humano, 
              | usualmente atletas desnudos que habían triunfado en los diversos juegos deportivos de la época. También elaboraron estatuas de dioses. Utilizaron la piedra caliza y el mármol; trabajaron el bronce, la madera, el oro, el marfil, piedras de colores y coronas de metal, entre otros.
            p Inicialmente, los cuerpos eran rígidos, a medida que evolucionó la escultura, le imprimieron movimiento, se hizo menos rígido el cuerpo, se arqueó y se evitó la verticalidad. Entonces recurrieron a la geometría para llegar a la perfección de las medidas corporales. Utilizaron nuevas técnicas de relieve y el retrato, posteriormente, propendieron por esculturas en posiciones más naturales, alejándose de la geometría y acercándose a la anatomía humana, alcanzando el realismo de la escultura helenística.
            p Los vasos de cerámica que eran utilizados para el uso doméstico, se adornaban con figuras humanas de frente. Por medio de la técnica del escorzo, que es un recurso, utilizado para dar la sensación de profundidad, ubicando las figuras en forma oblicua o perpendicular sobre la superficie que se pinta.


    h3.mb-4 Roma  
    .row.justify-content-center.mb-4
      .col-lg-7
        p Hacia el siglo III a. C., Roma inicia la conquista de territorios y empieza a expandir sus dominios, sobre casi toda la Europa de hoy, Asia menor y el norte de África. La conquista de Grecia continental y por ende las islas del mar Egeo, verdadero centro de la cultura y el arte helenístico hizo que los romanos fueran influenciados.
        p Roma fue gobernada por los emperadores, tenía una sólida economía, una misma lengua (el latín), una misma religión (politeísta), una moneda única, y un ordenamiento jurídico que reguló las actividades de sus ciudadanos (crearon el derecho). 
          strong Las primeras expresiones de arte romano tomaron forma en el arte de los etruscos, 
          | pueblo asentado en la actual Toscana, que se destacó por el arte funerario expresado en pinturas y esculturas, destacándose sus terracotas. Se caracterizaba este arte por el naturalismo, la frescura que le imprimía a los bustos de bronce (fueron sus creadores). En cuanto a la arquitectura, sus casas eran de adobe, con estructura de madera, revestidos de barro cocido y los templos construidos a base de piedra.
      .col-lg-5
        figure
          img(src='@/assets/curso/roma.svg', alt='Roma') 

    .row.justify-content-center.align-items-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.px-md-4.p-4
        figure
          img(src='@/assets/curso/casco-romano.svg', alt='Casco Romano')
      .col-lg-9.p-lg-4.px-4
        p Los romanos tenían su propia visión del mundo. Ellos entendían la vida como el cumplimiento de la voluntad de sus dioses, entonces el hombre asignaba un orden en la naturaleza, y se adoraban a los dioses en búsqueda de protección. Por ello 
          strong el arte romano 
          | se caracterizó por 
          strong el realismo, 
          | aquí los rostros captaban la fuerza del momento, ellos no buscaban la perfección de los griegos. Roma fue una sociedad rígida, en la que coexistían hombres libres, patricios, plebeyos y esclavos. Las esculturas de los emperadores, quienes tenían la categoría de divinidad, siempre hacían referencia a importantes hechos históricos. La religión romana tenía carácter oficial, se relacionaba con la política y recordaba a cada uno el lugar que le correspondía en la sociedad, todo inspirado en el servicio a las divinidades.

    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/coliseo-romano.png', alt='Coliseo romano')  

    p Los romanos crearon el concepto de urbe, para dar nombre a la ciudad, pues las ciudades se erigían conforme a un diseño circular llamado orbis. En el centro residía el poder político, cruzado por dos ejes, que significaban la salida y el regreso en las conquistas. Utilizaron piedra, hormigón (verdadero aporte romano que permite la arquitectura abovedada) y ladrillo, a veces revestían con mármol. Construyeron el teatro (influenciado por el teatro griego), el anfiteatro (lugar donde se enfrentaban los gladiadores), el circo (donde se realizaban competencias de carros tirados por caballos y conducidos por aurigas), el acueducto (fueron sus inventores, y construyeron cloacas para conducir las aguas residuales), numerosos puentes y calzadas para que los ciudadanos pudieran comunicarse, termas o baños públicos para relajarse (calentaban el agua por medio de un horno subterráneo o hipocausto), la basílica (lugar de reunión para realizar transacciones comerciales y de administración de justicia), templos y viviendas unifamiliares llamadas domus (eran rectangulares, con un patio central y un jardín posterior). Los romanos revestían sus casas con pinturas murales al fresco y el suelo con mosaicos de mármol, también expresaron el arte por medio de retratos, paisajes y bodegones.
    p Queda claro que 
      strong el aporte más importante de los romanos el arte, se dio en la arquitectura, 
      | pues todas las construcciones aquí mencionadas fueron creación exclusiva de los romanos, ya que solamente el teatro y el templo tuvieron influencia griega.

    .separador


    // 2.3
    #t_2_3.titulo-segundo
      .h2 2.3 Edad media   

    h3 El arte bizantino  

    .row.mb-4
      .col-lg-7
        p La palabra Bizantino corresponde al Imperio romano de oriente, cuya capital era Bizancio, en el período comprendido entre el 395 al 1454, año en que Constantinopla fue tomada por los turcos. El emperador Constantino, pretendió consolidar la unidad política, trasladando la capital imperial de Roma a Bizancio que era una ciudad griega, en los límites entre Europa y Asia. Hoy se conoce como Estambul. Pero en el año 395, el emperador Teodosio dividió el imperio, separando el mundo latino del griego. Luego de enfrentar la invasión germánica, solamente las provincias de oriente continuaron el legado cultural romano, fundiéndose con la cultura helenística. En ese momento el imperio era teocrático con un solo Dios y una sola autoridad, el emperador, quien estaba encargado de defender y propagar la fe; sin embargo, la división del imperio produjo también la división religiosa, en Oriente eran ortodoxos y en occidente cristianos. Esta situación produjo también cambios en el arte, debido a su ubicación privilegiada entre Europa y Oriente. 
        p 
          strong La arquitectura bizantina, proviene de la romana adoptando algunos de sus elementos y de la paleocristiana, 
          | porque en los inicios del cristianismo, la basílica o el templo eran muy importantes, entonces la arquitectura se refleja en una planta central con cúpula y varias naves, reservando espacios amplios para el clero. Las cúpulas de oriente se cubrieron con ladrillo y un sistema de contrarresto. 
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-bizantino.png', alt='El arte bizantino')      

    .row.mb-3
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-bizantino2.png', alt='El arte bizantino')  
      .col-lg-7
        p La pintura en este período representa el absoluto influjo de la religión en la vida social y política del Imperio Oriental, pero a comienzos del año 730, bajo la autoridad del emperador León III, surgió una crisis iconoclasta que duró hasta el siglo IX, cuando prohíbe la elaboración de imágenes religiosas en el Imperio, ya que consideró que dichas imágenes conducen a la idolatría, porque en la materia estaba lo maligno y por lo tanto no contribuían en propósito de seguir el camino a lo divino. Por esa razón los mosaicos fueron cubiertos con yeso, y dañaron muchas obras religiosas; dentro de los templos los motivos religiosos se reemplazaron por retratos del emperador, escenas de guerra, de carreras de caballos o de caza, vegetales y animales. Pero en 843, los ortodoxos derrotaron a los destructores, luego vino el cisma entre las iglesias de Constantinopla y Roma, entonces las imágenes volvieron a ser admitidas en los templos, pero con un valor sagrado, rindiendo culto a Dios por medio de ellas. Sin embargo, la libertad del artista se limitó, debiendo ajustarse a temas antiguos y conservando el estilo clásico. La parte superior de las construcciones religiosas, son una reproducción de los mundos celestiales, mientras que la tierra correspondía a la zona situada entre el suelo y el arranque de los arcos. 
        
    .row.justify-content-center.align-items-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.px-md-4.p-4
        figure
          img(src='@/assets/curso/cruz-bizantina.svg', alt='Cruz arte bizantino')
      .col-lg-9.p-lg-4.px-4
        p 
          strong Los temas más importantes son Cristo, la Virgen María, los santos, el juicio final y algunas fiestas cristianas. 
          | Se destacan los mosaicos con colores brillantes, revistieron los muros con teselas de vidrio, oro y plata, por el contrario, la pintura bizantina con sus iconos o imágenes sagradas trabajadas sobre madera con técnicas propias y utilizando colores opacos; elaboraron iconos, que eran imágenes sagradas pintadas sobre madera, recubiertas de una fina capa de yeso, en la que con un buril se dibujaba y se aplicaban colores al temple.

    // El arte románico
    h3 El arte románico 

    .row.mb-3
      .col-lg-7
        p El arte románico surge en el siglo X y se extiende hasta el XII. En el siglo X, Otón es proclamado emperador del Sacro Imperio Romano Germánico. Este emperador junto con Carlomagno quien gobernó en el siglo IX, fijó las bases de la Europa feudal caracterizada por el feudo y la dependencia de los vasallos respecto a su señor. En el centro de la propiedad que era una enorme extensión de tierra estaba el castillo, la catedral o la abadía. El poder dependía de la cantidad de tierras que se poseyeran y en la cúspide social estaba el rey. En esa época la iglesia católica logró la unidad de Europa; pero la Iglesia estaba manejada por el poder civil, pues los obispos eran nobles a quienes los reyes u otros nobles les entregaban sus diócesis; en correspondencia, la institución del papado se fortaleció. Los monjes se dedicaron a realizar trabajos manuales, tareas agrícolas y artesanales, convirtiéndose los monasterios benedictinos en centros económicos independientes y en focos culturales de primera importancia, ya que copiaban manuscritos antiguos, realizaron pinturas de miniaturas y redactaron crónicas históricas. Pero los monasterios también se implican en el entramado de la vida social y política de Europa, lo que conllevó inmoralidad y desorden. Por esta razón en el año 910, nació la primera Abadía de Cluny, fundada por Guillermo el piadoso, 
          strong con la intención de regresar a una mayor espiritualidad, imponiendo el estilo románico 
          | en forma uniforme al construir conventos e iglesias y se vuelcan más en lo mundano que en lo divino, 
          strong poniendo la belleza al servicio de la fe, pues nada era ostentoso ni extremadamente rico para adorar a Dios. 
          | Pero frente a esta abadía, surge la orden de Císter, fruto de otra reforma, basada en la austeridad y la pobreza. Esta orden eliminó todo lo decorativo, suprimieron pinturas y esculturas, para ellos lo importante era lo estructural, dando origen al arte gótico.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-romanico.png', alt='El arte románico')      

    .row.mb-3
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-romanico2.png', alt='El arte románico')  
      .col-lg-7
        p La iglesia promovió las peregrinaciones, las cuales incentivaron la vida cultural y artística, ya que fue necesario construir iglesias del estilo románico, en las que se realizaba el culto a las reliquias, como los cuerpos de los santos y sus objetos personales. Esto requería construcciones arquitectónicas en las que debía reposar el cuerpo del santo, y alojar a los peregrinos y fieles, así como una gran producción de imágenes en pinturas y esculturas, que aún son objeto de devoción. Así surgió la ruta de peregrinación de Santiago de Compostela. 
        
    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-3.justify-content-center.col-5.px-md-5.p-4
        figure
          img(src='@/assets/curso/monasterio-romanico.svg', alt='Monasterio románico')
      .col-lg-9.p-lg-4.px-4
        p En cuanto a 
          strong la arquitectura románica, se caracteriza por las iglesias en forma de cruz latina, 
          | usualmente tienen una cripta en la que se depositaban los cuerpos de los santos. En esta época se retomaron materiales y técnicas de construcción de los romanos, también construyeron campanarios (estructura construida para disponer las campanas). La arquitectura tenía un significado religioso, por eso la escultura románica es monumental y estas obras como iban dirigidas a los fieles y peregrinos se ubicaban en las portadas de las iglesias, dentro de ellas y en los conventos. Las imágenes tienen como protagonista a Cristo, utilizaron la decoración geométrica, vegetal, humana o animal dispuesta en sentido radial. En las columnas también esculpieron estatuas; las representaciones en general eran religiosas, relacionadas con diferentes pasajes de la Biblia, por ejemplo, los cuatro evangelistas, el juicio final y otros. La ubicación de las imágenes dentro de las iglesias se hacía por orden jerárquico y de importancia, por ejemplo, en el norte está el antiguo testamento, el sur es el nuevo y el oeste el juicio final; las pinturas murales se ubicaron en el ábside o parte posterior del altar.

    // El arte gótico
    h3 El arte gótico

    .row.mb-3
      .col-lg-7
        p Se inició en el siglo XII, alcanzando su esplendor en los siglos XIII al XV. Los cambios en la sociedad produjeron el desplazamiento de los campos hacia las regiones urbanas, en donde dominó la burguesía, clase fundamentalmente comerciante, que propendió por el sentido comunal, la defensa de los intereses de sus habitantes y la autonomía municipal. Por esa razón al lado del poder religioso representado en las catedrales, se construyeron los ayuntamientos. Los artesanos y los artistas se organizaron en gremios que buscaban evitar la competencia y el monopolio. Los gremios se encargaron de realizar numerosas obras artísticas, siendo la ciudad un polo de desarrollo cultural, sobre todo por el surgimiento de las universidades, que desplazaron a los monasterios. En esa época, Santo Tomás de Aquino afirmaba que la razón precede a la fe, mientras que San Francisco de Asís anteponía la fe a la racionalidad. Ambas corrientes coincidían en que 
          strong el hombre había encontrado a Dios, 
          | pues él también habitaba en la tierra, y ya no era necesario buscarlo como se afirmaba en la época románica; 
          strong este pensamiento fue la base del estilo artístico gótico. 
          | Como la presencia divina se manifestaba a través de la luz, en la arquitectura gótica se utilizó el vidrio con tonos preferencialmente azules y rojos, y la piedra en forma de sillares, por cuanto lo estructural tuvo para la época enorme valor estético
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-gotico.png', alt='El arte gótico')      

    .row.mb-3
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arte-gotico2.png', alt='El arte gótico')       
      .col-lg-7
        p La escultura también presentó un desarrollo importante; sin embargo, la pintura no se destacó sino hasta la primera mitad del siglo XIV, especialmente en Italia. También cambió el diseño de las catedrales más altas y de estructura nítida en el que las diferentes unidades espaciales perdieron independencia en pro de una mayor integración, procurando que entrara más luz, por eso los muros se construyen con grandes ventanales. El arco que caracterizó este período es el apuntado o también llamado ojival, siendo más esbelto, igualmente se construyeron canales para expulsar el agua lluvia a través de la boca de gárgolas. El arte gótico se caracterizó por ser vertical y abierto; alrededor de las ciudades se construyeron murallas, dos calles principales se cortaban en cruz, en el centro la iglesia y el ayuntamiento. Hacia el siglo XIV, la catedral deja de ser el principal centro y se construyeron casas consistoriales y palacios, iniciando una tendencia con muchos ornamentos, por lo que en el siglo XV se produce el gótico tardío (periodo final). Sin embargo, Italia siguió apegándose a lo clásico, por lo que a principios del siglo XV en Florencia se originó el renacimiento, mientras que el resto de Europa vivía la máxima expresión gótica. 
        
    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.px-md-3.p-4
        figure
          img(src='@/assets/curso/catedral-de-milan.svg', alt='Catedral de Milán')
      .col-lg-9.p-lg-4.px-4
        p La escultura gótica tuvo una función didáctica, ya que la mayoría de los fieles eran analfabetas, volvió al naturalismo y la armonía del hombre con la naturaleza. 
          strong Las imágenes se tornaron más reales, semejando movimiento y sentimientos, 
          | expresando el lado humano, apegándose a lo material y a lo individual como medio para llegar a Dios. En los templos la escultura tuvo mayor importancia, porque estaban en decadencia los frescos (llamada también pintura mural), pues los muros tenían grandes ventanales. Los retablos hechos de madera se llenaron de imágenes esculpidas o pintadas y reemplazaron las pinturas románicas.

    .row.mb-4
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/Giotto-di-Bondone.png', alt='Giotto di Bondone')  
      .col-lg-7
        p Hasta el siglo XIV en Italia y en Flandes en el siglo XV, la pintura se desarrolló más tarde que la arquitectura y la escultura. En Italia 
          strong la pintura tenía influencia bizantina, 
          | manteniendo un estilo idealista, con curvas delicadas, fondos dorados y cuerpos alargados, conservando la mayor parte de los descubrimientos helenísticos que pasaron a la edad media. Pero las demandas de la burguesía adinerada exigían más obras pictóricas realistas, en las que se reprodujera el mundo visible aplicando el naturalismo de los escultores góticos. Pintaron especialmente figuras en un espacio que representara profundidad. Giotto utilizó el fresco con dominio completo, introdujo la tercera dimensión, lo que consiguió a través del escorzo y el juego entre luces y sombras, y el fondo antes dorado lo sustituyó por el cielo y el paisaje. Podemos afirmar que entonces lo divino se acercó más a lo humano; Giotto se hizo famoso, hecho que era nuevo pues hasta el momento las obras de arte eran anónimas y se convirtió en el precedente de la perspectiva, que fue la gran conquista del Renacimiento. 

    .row
      .col-lg-7
        p En cuanto a Flandes se produjo una renovación en la pintura, inclinándose hacia la realidad partiendo de la observación, incorporando todos los detalles posibles, utilizando el claroscuro lo cual hizo ganar en profundidad y volumen a las obras, dando mayor apariencia de vida. Utilizaron el óleo cubierto al final con una capa de barniz. Esta técnica pictórica permite desarrollar el estilo flamenco, pintando imágenes religiosas y el retrato de los burgueses flamencos, quienes preferían pinturas en caballete por ser más fáciles de transportar. En ese momento histórico Italia ya se encaminaba al Renacimiento.
      .col-lg-5
        figure
          img(src='@/assets/curso/arte-gotico3.png', alt='El arte gótico')          

    .separador


    // 2.4
    #t_2_4.titulo-segundo
      .h2 2.4 Edad moderna

    h3 Renacimiento 

    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-3.justify-content-center.col-5.px-md-5.p-4
        figure
          img(src='@/assets/curso/renacimiento.svg', alt='Renacimiento')
      .col-lg-9.p-lg-4.px-4
        p Fue el nombre que se le dio a un importante movimiento filosófico y artístico que se produjo en Europa a finales del siglo XIV hasta el siglo XVI y fue una etapa de transición de la Edad Media a la Era Moderna. Su principal desarrollo se produjo en Italia. Su denominación se debe a que en esta época se redescubrieron la cultura greco-romana y la filosofía clásica. Se inspiró en la olvidada cultura de la edad media, el racionalismo, la experimentación, y también en 
          strong la exaltación de la naturaleza humana, pues el hombre fue el centro del universo, 
          | la medida de todas las cosas. En esa etapa se produjeron grandes descubrimientos científicos en medicina, astronomía, matemáticas, geografía y física, se buscaron nuevas rutas marítimas, se conquistaron nuevos territorios. El Renacimiento nació en Italia, ya que, debido al profuso comercio sobre el Mediterráneo, se expandió a través del mar hacia otros países, lo que revivió el intercambio cultural entre oriente y occidente.

    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/renacimiento.png', alt='Renacimiento')      

    p A medida que más personas aprendían a leer y que los libros se imprimieron y llegaron a sitios geográficos diversos gracias al invento de la imprenta, creación de 
      strong Johannes Gutenberg, 
      | la capacidad de raciocinio, se generó una revolución intelectual en la búsqueda del conocimiento, pues la difusión de textos propendía por la renovación cultural y por la reinterpretación de los valores tradicionales greco-romanos. Los cambios se dieron gradualmente y afectaron a toda la sociedad en todos los aspectos. Esa revolución intelectual, condujo a que muchas personas empezaran a cuestionarse el papel de la iglesia católica, situación que conllevó al surgimiento del protestantismo. Sin embargo, el hombre renacentista no era pagano, solamente tenía una práctica religiosa, diferente a épocas anteriores.        
    p.mb-5 Durante el Renacimiento, los artistas firmaron sus obras y la burguesía compraba imágenes o estatuas de sí mismos, formando parte del hedonismo que caracterizó a la época. Los artistas eran realistas, porque integraban al hombre con la naturaleza, la creación y el universo, y dependían económicamente de mecenas (patrocinio que se otorgaba a los artistas) quienes eran comerciantes, banqueros, aristócratas, incluso Papas.    

    .row.mb-4
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/mona-lisa.png', alt='Retrato de Lisa Gherardini')          
      .col-lg-7
        p El auge del Renacimiento fue entre 1490 y 1527, y en cuanto a la arquitectura Filippo di Ser Brunellesco Lapi, fue el más destacado, también fue escultor y orfebre. Utilizó sus grandes conocimientos en matemáticas para inventar la perspectiva cónica, utilizando también los elementos constructivos de la antigüedad. Sus principales obras son la cúpula de la catedral de Florencia, la basílica de San Lorenzo, la fachada del hospital de los Inocentes.  Otro destacado representante del Renacimiento fue Michelangelo Buonarroti, quien era arquitecto, escultor y pintor, caracterizado por su perfeccionismo en la escultura y en la pintura (realizó la obra excepcional de la bóveda de la capilla Sixtina por imposición del Papa Julio II), elaboró esculturas muy importantes como La Piedad y El David. Así mismo, 
          strong Leonardo Da Vinci fue considerado el último hombre del Renacimiento, 
          | fue un gran polímata (persona que tiene conocimiento en diferentes disciplinas) por cuanto era pintor, anatomista, matemático, arquitecto, científico, escritor, paleontólogo, botánico, escultor, filósofo, ingeniero, músico, urbanista e inventor, tuvo creaciones relacionadas con el helicóptero, el submarino entre otras. Sus obras más representativas son La Gioconda y La Última Cena.

    // El Barroco
    h3 El Barroco

    .row.mb-3
      .col-lg-7
        p Este período abarcó el siglo XVII y principios del XVIII, y surgió en un período lleno de tensiones religiosas entre católicos y protestantes, y tuvo variaciones en cada país conforme a si se trataba de un país regido por una monarquía absolutista o parlamentaria. Se extendió en Europa occidental y sus colonias americanas recientemente conquistadas. Nació en Italia en el período conocido como Seicento, que inicialmente se refería a un estilo artístico recargado y excesivo. El barroco expresaba una sensibilidad desengañada, crítica, compleja y pesimista. El término fue utilizado inicialmente para referirse a algo engañoso o recargado en forma despectiva, pero desde el siglo XIX, el término se utilizó para referirse no sólo al período sino a las manifestaciones artísticas que contradijeran los valores del clasicismo, mediante una negación simbólica y artística de lo clásico, por eso fue femenino, irracional y dionisíaco. 
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/barroco.png', alt='El Barroco')      

    .row.justify-content-center.mb-4.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.p-4
        figure
          img(src='@/assets/curso/fuente.svg', alt='Fuente')
      .col-lg-9.p-lg-4.px-4
        p El barroco enfatizó 
          strong lo cotidiano y efímero de la vida, 
          | lo cual produjo una vulgarización del imaginario religioso, consideró que lo nacional y religioso eran expresiones de poder político, por eso se elaboraron obras monumentales y recargadas que propendían por hacer resaltar el poder dominante, pero mediante engaños y artificios. 

    p.mb-5 La pintura fue una expresión artística del barroco, se distinguen dos vertientes, una 
      strong naturalista 
      | y la otra es el 
      strong clasicismo, 
      | caracterizadas por el realismo superficial, los colores ricos, y el contraste entre las luces y las sombras. Exponentes de este período son Rembrandt, Rubens, Velásquez, Poussin, Vermeer y Caravaggio, quien realizaba una minuciosa observación anatómica con el uso del claroscuro que otorgaba dramatismo a su obra y que llegó a conocerse como tenebrismo. Caravaggio, plasmó vívidos momentos y escenas relacionadas con luchas violentas, muerte o tortura.

    TabsA.color-primario.color-custom.mb-5
      .tarjeta.color-primario.color-custom.p-4(titulo="Naturalisa")
        .row
          .col-xl-1
          .col-xl-4
            .p.titulo__template--a.mb-4 Su  estilo se basa en la observación de la naturaleza
          .col-xl-1
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/Naturalisa.png', alt='Naturalisa')
      .tarjeta.color-primario.color-custom.p-4(titulo="Clasicismo")
        .row
          .col-xl-1
          .col-xl-4
            .p.titulo__template--a.mb-4 Opuesta al naturalismo con un estilo más realista y racional, predominando el dibujo sobre el color
          .col-xl-1
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/Clasicismo.png', alt='Clasicismo')

    .row
      .col-lg-7
        p En cuanto a la arquitectura, en el barroco tuvo formas más dinámicas, con amplio sentido teatral, así como decoración excesiva y exuberante. Utilizaron las formas cóncavas y convexas, los juegos ópticos con perspectiva y dieron importancia al urbanismo, pues los gobernantes deseaban transformar los espacios públicos en ciudades.
        p La escultura barroca estuvo vinculada con la religión y con la arquitectura porque decoraban los espacios públicos, los palacios y locaciones religiosas. Eran dinámicas, expresivas y ornamentadas; expresaban pasiones y estaban recargadas de detalles. Esta se expresó en dos vertientes, una la gótica y otra la renacentista.  En términos generales durante el período barroco se siguieron trabajando los temas de historia, mitología y religión, aunque preferían las obras llenas de dramatismo. La Iglesia Católica prefirió los temas como la inmaculada concepción, la virgen, la eucaristía, los santos, asuntos claves en la disputa del protestantismo.
      .col-lg-5
        figure
          img(src='@/assets/curso/arquitectura-barroca.png', alt='Retrato de Michelangelo Merisi da Caravaggio - Iglesia barroca')      

    .separador


    // 2.5
    #t_2_5.titulo-segundo
      .h2 2.5 Edad contemporánea

    h3 Cubismo

    .row.mb-3
      .col-lg-7
        p Fue un movimiento artístico que prosperó entre 1907 y 1924, cuyos creadores fueron Pablo Picasso y Georges Braquese. Ese término, a pesar de que fue un movimiento realmente corto, plasmó la ruptura definitiva con la pintura tradicional y la norma clásica en la composición, transformando la perspectiva, la naturaleza y la profundidad.
        p Pasó por dos etapas, la primera, el 
          srong cubismo analítico 
          | y la segunda, llamada 
          strong cubismo sintético. 
          | Sus pinturas son paisajes, retratos y bodegones, en los que se eliminaron aquellos colores que caracterizaron al impresionismo, centrándose en colores sin brillo como grises, marrones y verdes, posteriormente se recurrió a otros colores.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/Pablo-Ruiz-Picasso.png', alt='Pablo Ruiz Picasso')      
  
    TabsA.color-primario.color-custom.mb-5
      .tarjeta.color-primario.color-custom.p-4(titulo="Cubismo analítico")
        .row
          .col-xl-1
          .col-xl-4
            .p.titulo__template--a.mb-4 Fragmentó las masas en figuras geométricas, representando cuerpos complejos en forma simple en un mismo plano.
          .col-xl-1
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/Cubismo-analitico.png', alt='Cubismo analítico')
      .tarjeta.color-primario.color-custom.p-4(titulo="Cubismo sintético")
        .row
          .col-xl-1
          .col-xl-4
            .p.titulo__template--a.mb-4 Se centró en la composición bidimensional. En cuanto al rostro humano, este aparecía con la nariz de perfil y el ojo de frente, se pierde la sensación de la profundidad, careciendo de detalles.
          .col-xl-1
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/Cubismo-sintetico.png', alt='Cubismo sintético')

    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.px-lg-5.p-4
        figure
          img(src='@/assets/curso/picasso.svg', alt='Picasso')
      .col-lg-9.p-lg-4.px-4
        p El cubismo también se desarrolló en la escultura, con técnicas parecidas al 
          strong collage 
          | del cubismo sintético, que integró señales y fragmentos de cosas reales. Se elaboró con materiales de desecho, compuestas de diversas piezas, con huecos y vacíos en la superficie. En la arquitectura el cubismo no tuvo casi representación, se realizó sobre todo en Checoeslovaquia, como en la casa de la Virgen negra de Praga

    // Impresionismo
    h3.mb-4 Impresionismo

    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.p-4
        figure
          img(src='@/assets/curso/pintura.svg', alt='Pintura')
      .col-lg-9.p-lg-4.px-4
        p Este movimiento artístico se desarrolló a partir de la segunda mitad del siglo XIX en Europa, especialmente en Normandía. 
          strong Propendía por plasmar la luz con la impresión visual en un instante determinado, 
          | gracias a la evolución y creación de nuevos pigmentos, que generaron gran variedad de colores y como además los óleos venían en tubos, eso impedía que se secaran cuando pintaban al aire libre. Los pintores usaron colores puros, dando origen a la ley del contraste cromático, ya que todo color es relativo a los colores que le rodean, y a la ley de los colores complementarios. Contrastaron la luz con la oscuridad, generando la ilusión de profundidad por medio del modelado de color, que consiste en que por medio del color se crea volumen, con una zona de luz, de media sombra y sombra más profunda, agregando blanco para la luz y negro para la sombra. 

    .row.mb-5
      .col-lg-7
        p Para los pintores impresionistas el dibujo y la forma pasaban a un segundo plano, siendo 
          strong el reto más importante plasmar la iluminación y el color sobre el cuerpo o el objeto. 
          | Por eso muchas imágenes se ven como diluidas o mezcladas. Buscaron iluminación interior, exterior, iluminación natural filtrada o al aire libre con los reflejos sobre el agua, o la luz del sol a través de las hojas de los árboles. Ellos entendieron la ciudad como un paisaje. Sentían que un momento era irrepetible y que debía captarse de inmediato, igualmente comprendieron el efecto de la refracción de la luz sobre los objetos, seleccionando ángulos imprevistos en sus pinturas. Igualmente, los momentos desapercibidos u ocultos a los espectadores, fueron captados en las pinturas y el dibujo perfectamente delineado fue eliminado, coloreando directamente sobre el lienzo; recurriendo a dos técnicas, la primera mezclando un color sobre el otro, la segunda, colocando colores primarios uno al lado del otro para que, al ser observados, se cause la percepción de color secundario. Igualmente, como economizaron detalles, realizaron pinceladas directas a veces brochazos o trazos gruesos. Pintaron estaciones de tren, fiestas, parques, comidas, carreras de caballos, la vida bohemia entre otros temas.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/impresionismo.png', alt='Impresionismo')      

    // Neoclasicismo
    h3.mb-4 Neoclasicismo
      
    p Fue un movimiento artístico con raíces filosóficas y estéticas de la antigüedad clásica, movimiento moralizante, social e intelectual, para adaptarse a la modernidad y reinterpretar sus formas, que surgió a mediados del siglo XVIII y se extendió hasta el XIX. Su furor se produjo debido al descubrimiento de Pompeya y Herculano, por lo que se realizaron numerosas expediciones para conocer las obras antiguas en sus lugares de origen. Además, 
      strong apareció la Ilustración o el Iluminismo, que defendía la razón y el conocimiento para fomentar el progreso; 
      | igualmente, tuvo lugar la revolución industrial que modificó los modos de producción y organización social, y la revolución francesa con sus proclamas de igualdad, libertad y fraternidad. Este movimiento se originó en Francia.
    
    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/Neoclasicismo.png', alt='Neoclasicismo')  
    
    p.mb-4 Fue un movimiento artístico con raíces filosóficas y estéticas de la antigüedad clásica, movimiento moralizante, social e intelectual, para adaptarse a la modernidad y reinterpretar sus formas, que surgió a mediados del siglo XVIII y se extendió hasta el XIX. Su furor se produjo debido al descubrimiento de Pompeya y Herculano, por lo que se realizaron numerosas expediciones para conocer las obras antiguas en sus lugares de origen. Además, 
      strong apareció la Ilustración o el Iluminismo, que defendía la razón y el conocimiento para fomentar el progreso; 
      | igualmente, tuvo lugar la revolución industrial que modificó los modos de producción y organización social, y la revolución francesa con sus proclamas de igualdad, libertad y fraternidad. Este movimiento se originó en Francia.

    .row.justify-content-center.mb-5.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.p-4
        figure
          img(src='@/assets/curso/arco-del-triunfo.svg', alt='Icono del Arco del triunfo')
      .col-lg-9.p-lg-4.px-4
        p El arte de este período tomó como temas modelos, 
          strong ideas morales de la historia grecolatina, la historia de las repúblicas y de la revolución francesa; 
          | elaboraron retratos y algunas pinturas religiosas. En cuanto a la pintura el dibujo era de vital importancia, se usó el fresco, pero primordialmente el óleo; supresión de objetos decorativos, en cuanto a la anatomía se utilizó lo impuesto por los clásicos antiguos, las pinceladas no se distinguen en las obras, la luz es clara y fría. 

    .row
      .col-lg-7
        p En cuanto a la escultura se prefirió el mármol, el alabastro y el cobre, exaltando la belleza ideal y el equilibrio conforme a los clásicos antiguos; se dejó a un lado la policromía que consistía en el arte de pintar o decorar con varios colores las obras; la representación de las emociones era sutil; las esculturas no son dinámicas.
        p En relación con la arquitectura, el estilo neoclásico fue el preferido para realizar construcciones civiles y oficiales en el siglo XVIII y gran parte del XIX, pero también se ejecutaron algunas construcciones religiosas. 
          strong La arquitectura se basaba en el respeto de los planos y volúmenes, 
          | el material fundamental era la piedra y se introduce el hierro, se dejan influenciar por las columnas de la arquitectura griega y las cubiertas son abovedadas como en el arte romano, la decoración es escasa y clásica, las líneas rectas dominan sobre las curvas. En este período se construyen edificios como museos, teatros, bibliotecas, monumentos y cementerios públicos.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/arco-del-triunfo.png', alt='Foto del Arco del triunfo')     

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
