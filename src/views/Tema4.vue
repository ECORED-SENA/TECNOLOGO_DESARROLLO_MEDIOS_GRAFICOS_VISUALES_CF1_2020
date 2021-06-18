<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 4
      h1 Diseño básico

    figure.mb-5
      img(src='@/assets/curso/banner-tema4.jpg', alt='Diseño básico')   
    p.mb-4.texto-resaltado El diseño visual, base de la creación del diseño, es considerado hoy un eje fundamental de la vida cotidiana de los individuos; puesto que vivimos en un mundo cada vez más globalizado, donde estamos saturados por miles de imágenes que a diario que se distribuyen a través de diversos medios. El lenguaje como definición se puede entender como la capacidad exclusiva del ser humano para expresar pensamientos y sentimientos por medio de la palabra. Es así como nos comunicamos por medio del lenguaje escrito, verbal y visual, cada uno con un código en particular, utilizados en diversos campos y ámbitos de la vida cotidiana.  Si nos referimos al 
      span.etiqueta.text-bold lenguaje visual
      | podemos decir entonces que 
      span.etiqueta.text-bold es la capacidad de comunicarnos mediante imágenes,
      | utilizadas como medio de expresión en todas sus formas y posibilidades, 
      span.etiqueta.text-bold para dar a conocer sensaciones, pensamientos, emociones y sentimientos,
      | que se pueden expresar en representaciones gráficas.

    .row
      .col-lg-7
        p Según el diccionario etimológico (2020), la palabra imagen, proviene del latín “imago”, la cual significa retrato, copia o imitación. A pesar de esto la imagen a diferencia de la escritura o el lenguaje, suele tener un grado de dificultad en cuanto a su lectura, ya que cada individuo puede realizar su propia interpretación de la misma, lo cual no sucede con las palabras, por ejemplo; al decir perro, todos inmediatamente hacemos la asociación con un animal de 4 patas, indiferente de su raza. 
        p No siempre una imagen vale más que mil palabras; 
          strong por ejemplo, esta señal significa circulación prohibida, es probable que pocos asocien la imagen a este concepto.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/diseno-basico.png', alt='Señal de tránsito vacía')  

    .super-separador
      .separador2       


    // 4.1
    #t_4_1.titulo-segundo
      .h2 4.1 Herramientas del lenguaje visual

    .p.titulo__template--a.mb-5 El lenguaje visual se organiza a partir de dos tipos de herramientas:  

    h3 a) Herramienta de configuración 
    p.mb-4 Dentro de las herramientas de configuración podemos resaltar las siguientes: tamaño, forma, color, textura e iluminación.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.align-items-center 
        .row.align-items-center 
          .col-lg-6
            .tarjeta-avatar-b.tarjeta-iconos.mb-3
              img(src='@/assets/curso/image-tamano.svg' alt='Tamaño de imagen')
              .tarjeta.color-naranja
                .p-4
                  .h3 Tamaño
                  p Hace referencia a la dimensión adecuada con la cual trabajar una imagen de acuerdo con los criterios requeridos, para conseguir los mejores resultados. 
            .tarjeta-avatar-b.tarjeta-iconos.mb-3
              img(src='@/assets/curso/formas.svg' alt='Formas geometricas')
              .tarjeta.color-naranja
                .p-4
                  .h3 Forma
                  p Todo aquellos que nos rodea tiene una forma, la podríamos definir como el aspecto exterior de las cosas, que presentan un contorno, textura, tamaño y color. 
            .tarjeta-avatar-b.tarjeta-iconos.mb-3
              img(src='@/assets/curso/suelo.svg' alt='Textura')
              .tarjeta.color-naranja
                .p-4
                  .h3 Textura
                  p Toda figura tiene una superficie, esta puede tener diferentes características, unas suaves, otras ásperas, arrugadas, lisas o abultadas. Existen la textura visual y la textura táctil que serán abordadas más adelante. 

          .col-lg-6
            .tarjeta-avatar-b.tarjeta-iconos.mb-5
              img(src='@/assets/curso/rueda-de-color.svg' alt='Rueda de color')
              .tarjeta.color-naranja
                .p-4
                  .h3 Color
                  p El color lo podemos definir como “la impresión que producen en la retina los rayos de luz reflejados y absorbidos por un cuerpo, según la longitud de onda de estos” (Léxico, s.f.).  El lenguaje visual tiene como gran recurso la utilización del color, el cual puede aportar mucha fuerza, carácter e información que enriquece la imagen. Mediante el color se pueden afianzar los conceptos, frío, calor, primavera, invierno, entre otros, de igual manera ofrece una gama ilimitada de posibilidades en su tratamiento. 


    h3 b) Herramientas de organización 
    p.mb-4 Dentro de las herramientas de organización encontramos: la composición, y la retorica visual.

    .row.justify-content-center.align-items-center
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2.mb-4
              img(src='@/assets/curso/disenador.svg' alt='Icono sobre diseñador')
              .tarjeta.color-naranja
                .p-4
                  .h3 La composición
                  p La composición de una imagen se hace ordenando las herramientas y elementos que integran la obra en pro de la intencionalidad y mensaje a transmitir.  
      
      .col-lg-10.align-items-center
        .tarjeta-avatar-b.tarjeta-iconos2
          img(src='@/assets/curso/discurso-de-burbuja.svg' alt='Icono sobre discurso de burbuja')
          .tarjeta.color-naranja
            .p-4
              .h3 La retórica visual
              p Reconecta los significados de los componentes del producto visual, para transmitir mensajes y sensaciones más allá del sentido literal.  Los tres componentes de la retórica visual son:
              ul.lista.lista-ul--color.p-1.mt-2.lista2  
                li 
                  i.fas.fa-atom
                  p.mb-0 
                    strong Metáfora: 
                    | comparación implícita de dos términos a partir de la semejanza de sus significados estableciendo una relación. Ejemplo, el sueño eterno, para referirse a la muerte.
                li 
                  i.fas.fa-atom
                  p.mb-0 
                    strong Alegoría: 
                    | metáfora extendida o sucesión de metáforas para expresar algo diferente a lo dicho. Ejemplo, ella gira dentro de mi cabeza.
                li 
                  i.fas.fa-atom
                  p.mb-0 
                    strong Metonimia: 
                    |  reemplazar el nombre de un elemento por otro con el que se relaciona, o existe una relación.                  

    .super-separador
      .separador2 


    // 4.2
    #t_4_2.titulo-segundo
      .h2 4.2 Gramática del lenguaje visual

    .row.mb-5
      .col-lg-7
        p Así como el lenguaje escrito necesita de un abecedario, signos y símbolos para poder llegar a manifestar de forma asertiva un mensaje; el lenguaje visual también necesita de ciertos recursos gráficos para comunicar de manera correcta aquello que desea expresar, ordenando para ellos los elementos que hacen parte de la comunicación gráfica, desde el punto y la línea. No obstante, no podemos negar que el proceso visual es una síntesis de conocimientos perceptivos que acompañan al individuo, por lo que su lectura respecto a la imagen es individual.  
      .col-lg-5
        h3 En resumen, podemos decir que la gramática visual, ordena los elementos que hacen parte de sí misma, los procesos que lleva a cabo y las relaciones que se producen.

    h3 Forma, repetición, estructura, contraste y textura
    p.mb-4 Cuando hablamos de elementos del diseño, podemos decir que existen elementos conceptuales y elementos visuales. 

    .row.columnas-iguales.justify-content-md-center
      .col-lg-6.justify-content-md-center.mb-5.p-5.tarjeta.color-naranja.columna-left
        figure
          img.p-2.mb-4(src='@/assets/curso/cubo-3d.svg', alt='Cubo 3D')
        p.text-center.mb-4 Al referirnos a los 
          strong elementos conceptuales, 
          | nos referimos a aquellos elementos que, aunque no son visibles, están en nuestra mente por asociación; por ejemplo, cuando dibujamos un cubo por medio de líneas, implícitamente le damos una tridimensionalidad que no es real, pero que se forma como reflejo de la imagen y la asociación.
      .col-lg-6.justify-content-md-center.mb-5.p-5.tarjeta.color-celeste.columna-right
        figure
          img.p-2.mb-4(src='@/assets/curso/cubos-de-azucar.svg', alt='Cubos de azucar')
        p.text-center.mb-4 Por otro lado, están los 
          strong elementos visuales 
          | que hacen destacar las características de una imagen, como su color, textura, ancho y alto. Un concepto muy utilizado dentro del diseño es el 
          strong módulo, 
          | elemento tomado como unidad de medida, utilizada dentro de una composición gráfica, la cual suele repetirse sistemáticamente.

    // Forma
    h3 Forma 

    .row.mb-3
      .col-lg-7
        p Como fuera señalado, los elementos conceptuales no son visibles, así el punto, la línea o el plano, cuando son visibles pasan a ser una forma. Un punto sobre el papel por pequeño que sea debe tener una figura, un tamaño, un color y una textura si se pretende que sea visto. También debe señalarse lo mismo de una línea o de un plano. En un diseño bidimensional, el volumen es imaginario.
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/forma.png', alt='Forma')      

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="La forma como punto")
        .row.justify-content-center
          .col-md-8
            .h3 La forma como punto
            p.mb-5 Una forma es reconocida como un punto porque es pequeña. El tamaño desde luego es relativo. Una forma puede parecer bastante grande cuando está contenida dentro de un marco pequeño, pero la misma forma puede parecer muy pequeña si se coloca de un marco mucho más amplio.
            .row.justify-content-center
              .col-md-10
                figure
                  img(src='@/assets/curso/forma-como-punto.svg', alt='La forma como punto')
      .py-3.py-md-4(titulo="La forma como línea")
        .row.justify-content-center
          .col-md-8
            .h3 La forma como línea
            p Una forma es reconocida como una línea por dos razones:
            ol.lista-ol--cuadro
              li 
                .lista-ol--cuadro__vineta
                  span 1
                | Su ancho es extremadamente reducido.
              li 
                .lista-ol--cuadro__vineta
                  span 2
                | Su longitud es sobresaliente.
            p.mb-5 Una línea por lo general transmite la sensación de delgadez. La delgadez igual que el tamaño es relativo.
            .row.justify-content-center  
              .col-md-10
                figure
                  img(src='@/assets/curso/forma-como-linea.svg', alt='La forma como línea')
      .py-3.py-md-4(titulo="La forma como plano")
        .row.justify-content-center
          .col-md-8
            .h3 La forma como plano
            p.mb-5 Es una superficie bidimensional, todas las formas lisas que comúnmente no sean reconocidas como puntos o líneas son planos. Una forma plana es limitada por líneas conceptuales que constituyen los bordes de la forma. Las características de estas líneas conceptuales y sus interrelaciones determinan la figura de la forma plana (Diseño grafico, s.f.).      
            .row.mb-4
              .col-md-5
                p.mb-3
                  strong a.  Geométricas
                figure
                  img(src='@/assets/curso/formas-geometricas.svg', alt='Formas Geométricas')
              .col-md-2    
              .col-md-5
                p.mb-3 
                  strong b. Orgánicas
                figure
                  img(src='@/assets/curso/formas-organicas.svg', alt='Formas Orgánicas')
            .row
              .col-md-5
                p.mb-3
                  strong c.  Rectilíneas
                figure
                  img(src='@/assets/curso/formas-rectilineas.svg', alt='Formas Rectilíneas')
              .col-md-2    
              .col-md-5
                p.mb-3 
                  strong d.  Irregulares  
                figure
                  img(src='@/assets/curso/formas-irregulares.svg', alt='Formas Irregulares')      

    // Repetición
    h3 Repetición 

    p.mb-4 La repetición 
      strong tiene como función unificar el diseño, 
      | se da como resultado a partir de la repetición continua de un mismo elemento dentro de un espacio, lo cual permite una igualdad ritmo y equilibrio a nivel visual.

    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/repeticion.png', alt='Repetición')

    // Estructura
    h3 Estructura 

    p.mb-4 La estructura 
      strong sugiere un orden 
      | y predefine las relaciones internas de las formas en un diseño, es decir la posición. Podemos haber creado un diseño sin haber pensado conscientemente en la estructura, pero la estructura está siempre presente cuando hay una organización (Wong, 1991). 
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/Estructura.png', alt='Estructura')

    // Radiación
    h3 Radiación 

    p.mb-4 Puede ser descrita como como 
      strong un caso especial de repetición. 
      | Los módulos repetidos o las subdivisiones estructurales que giran regularmente alrededor de un centro común produciendo un efecto de radiación. La radiación es un fenómeno común en la naturaleza; por ejemplo, lanzar una piedra a un lago genera ondas concéntricas, provocando una gradación, serie ordenada gradualmente (Godoy, 2009).
    .row.justify-content-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/Radiacion.png', alt='Radiación')

    // Contraste
    h3 Contraste 

    p El contraste ocurre siempre, aunque su presencia pueda no ser advertida. Se presenta el contraste cuando una forma está rodeada de un espacio blanco; cuando una línea recta se cruza con una curva; cuando una forma es mucho mayor que otra; cuando coexisten direcciones verticales y horizontales. El contraste 
      strong es solo una clase de comparación, por la cual las diferencias se hacen claras.
    p.mb-4 Dos formas pueden ser similares en algunos aspectos y diferentes en los otros. Sus diferencias quedan enfatizadas cuando hay un contraste. Una forma puede no parecer grande si es vista por si sola, pero puede parecer gigantesca junto a formas diminutas.  

    .row.justify-content-center.mb-4
      .col-lg-10.tarjeta.color-naranja.p-5.pb-0
        SlyderC(:datos="datosSlyder")

    p.mb-5 La regularidad no produce necesariamente un buen diseño, aunque puede garantizar cierto grado de armonía. El mismo grupo de módulos utilizados en una estructura de repetición, pueden derivar a un diseño opaco en las manos de un diseñador y a un diseño llamativo en manos de otro. El debido uso del contraste en los elementos de relación puede explicar esa diferencia.  El contraste puede ser derivado de elementos como la figura, el tamaño, el color, la textura, la dirección de los elementos, la posición, el espacio y la gravedad (Godoy, 2009).     

    // Textura
    h3 Textura 

    .row.mb-3
      .col-lg-7
        p De acuerdo con Wong (1991), la textura 
          strong se refiere a las características de una superficie de una figura. 
          | Toda figura tiene una superficie y toda superficie debe tener ciertas características, que pueden ser descritas como suave, rugosa, lisa o decorada, opaca o brillante, blanda o dura. Aunque generalmente suponemos que una superficie plana y pintada no tiene textura alguna, en realidad la capa de pintura es ya una textura; como también, la textura del material sobre el que fue creada la figura; la textura apropiada añade riqueza a un diseño. 
      .col-lg-5
        figure.mb-4
          img(src='@/assets/curso/Textura.png', alt='Textura')    

    .p.titulo__template--a.mb-4 La textura puede ser clasificada en dos importantes categorías; 
      strong textura visual y textura táctil.

    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span a
        strong Textura visual  

    p La textura visual es bidimensional, se puede apreciar a través de la vista, aunque pueda evocar también sensaciones táctiles. Se distinguen tres clases de textura visual:    

    .row.mb-5
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/Textura-decorativa.png', alt='Textura decorativa')
        p.mb-3 
          strong Textura decorativa
        p Decora una superficie y queda subordinada a la figura, En otra palabra la textura misma es solo un agregado que puede ser quitado sin afectar mucho a las figuras. 
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/Textura-espontanea.png', alt='Textura espontánea')
        p.mb-3 
          strong Textura espontánea
        p No decora una superficie, sino que es parte del proceso de creación visual. La figura y la textura no pueden ser separadas, porque las marcas de la textura en una superficie son al mismo tiempo las figuras. Las formas dibujadas a mano y las accidentales contienen frecuentemente una textura espontánea. 
      .col-lg-4
        figure.mb-4
          img(src='@/assets/curso/Textura-mecanica.png', alt='Textura mecánica')
        p.mb-3 
          strong Textura mecánica
        p Textura obtenida por medios mecánicos especiales y en consecuencia la textura no está necesariamente subordinada a la figura. Un ejemplo es el granulado fotográfico o la retícula que encontramos a menudo en los impresos. La textura mecánica puede encontrarse asimismo en los diseños creados por la tipografía y en los gráficos de computadoras. 


    ol.lista-ol--cuadro
      li 
        .lista-ol--cuadro__vineta
          span b
        strong Textura táctil  

    p.mb-5 Se percibe a través del tacto, generando una sensación que puede describirse como una superficie lisa o con relieve; la textura puede ser propia del material, modificada cuando se ha agregado una textura adicional a la natural; y organizada cuando se unen o sobreponen materiales generando una nueva textura.

    h3.mb-4 Composición, percepción y equilibrio visual

    .row.justify-content-center.mb-4.cajon.color-acento-botones
      .col-lg-2.justify-content-center.col-5.px-md-5.p-4
        figure
          img(src='@/assets/curso/idea.svg', alt='Icono sobre idea')
      .col-lg-9.p-lg-4.px-4
        p La 
          strong composición 
          | en diseño 
          strong es el ordenamiento y disposición de los distintos elementos dentro del espacio visual de manera ordenada, con el fin de transmitir un mensaje objetivo al público. 
          | El éxito de cualquier proyecto gráfico reside en que la composición, que sea clara, concisa, sencilla y directa, esto posibilita una mejor lectura de esta. La composición consiste en jugar con los elementos, rotarlos, cambiarlos de posición, ubicarlos por grupos, por colores, etc. 

    .p.titulo__template--a.mb-4 Existen algunas reglas que pueden ser de gran ayuda a la hora de emprender cualquier proyecto:

    .row.justify-content-center.mb-3
      .col-lg-8.tarjeta.color-naranja.p-4.mb-4
        .row.justify-content-center 
          .col-lg-4
            p Elementos ubicados a la derecha o en la parte de la margen inferior, tiene mayor fuerza a nivel visual.
          .col-lg-6
            figure
              img(src='@/assets/curso/elementos-1.png', alt='Elementos ubicados a la derecha y en la parte de la margen inferior')
      .col-lg-8.tarjeta.color-naranja.p-4.mb-4
        .row.justify-content-center 
          .col-lg-4
            p Formas largas y angulares amplían el campo de visión.
          .col-lg-6
            figure
              img(src='@/assets/curso/elementos-2.png', alt='Formas largas y angulares')
      .col-lg-8.tarjeta.color-naranja.p-4.mb-4
        .row.justify-content-center 
          .col-lg-4
            p Las formas simétricas, sencillas y regulares son más fáciles de recordar.
          .col-lg-6
            figure
              img(src='@/assets/curso/elementos-3.png', alt='Formas simétricas, sencillas y regulares')              
      .col-lg-8.tarjeta.color-naranja.p-4.mb-4
        .row.justify-content-center 
          .col-lg-4
            p Las imágenes de gran tamaño producen el efecto de fortaleza, lo contrario sucede con las imágenes pequeñas.
          .col-lg-6
            figure
              img(src='@/assets/curso/elementos-4.png', alt='Formas de diferentes tamaños')
      .col-lg-8.tarjeta.color-naranja.p-4.mb-3
        .row.justify-content-center 
          .col-lg-4
            p Los colores vibrantes tienen un mayor efecto visual.
          .col-lg-6
            figure
              img(src='@/assets/curso/elementos-5.png', alt='Formas de colores diferentes')

    .row.justify-content-center.cajon.color-acento-botones.mb-5
      .col-lg-2.justify-content-center.col-5.p-4
        figure
          img(src='@/assets/curso/percepcion.svg', alt='Icono sobre percepción')
      .col-lg-9.p-lg-4.px-4
        p La 
          strong percepción 
          | la podemos definir como la 
          strong capacidad de construir, interpretar y hasta corregir, un esquema de información recibido por medio de los órganos sensoriales. 
          | Esta percepción suele estar condicionada a patrones o aprendizajes memorizados con anterioridad. En el caso de la percepción visual, diríamos que es la capacidad de procesar e interpretar la información recibida por medio del ojo como órgano principal, se hace uso de ciertos principios de la percepción, basados en las leyes de la Gestalt, teoría de la psicología que permite estudiar los modos de cómo percibimos lo que vemos. 

    // Diseño bidimensional
    h3 Diseño bidimensional 

    .row.mb-4
      .col-lg-7
        p Un elemento bidimensional 
          strong es aquel que representa su altura y anchura sin manifestar su profundidad, 
          | ya que se realiza en un espacio plano el cual solo tiene estas 2 dimensiones.  Ejemplo de esto, un dibujo de un rectángulo en una hoja de papel. 
        p Es así como al referirnos al diseño bidimensional, estaremos hablando de aquel diseño que puede ser expresado por medio de dibujos, planos, ilustraciones, tipografías, fotografías, imágenes, etc. Lo podemos encontrar en diversas corrientes como las artes visuales, el diseño gráfico, el arte, la pintura, el grafiti entre otros. A diferencia del diseño tridimensional, sólo puede ser observado de manera frontal, un ejemplo claro de esto, al mirar una revista, solo apreciamos lo que está frente a nuestros ojos, situación contraria cuando observamos una escultura en un museo, tiene muchos puntos de vista.  
        p En pocas palabras “el diseño es la mejor expresión visual de la esencia de algo” (Wong,1991).
      .col-lg-5
        figure
          img(src='@/assets/curso/Diseno-bidimensional.png', alt='Diseño bidimensional')    

    // Diseño tridimensional
    h3 Diseño tridimensional 

    .row
      .col-lg-7
        p Si hablamos de un elemento tridimensional decimos que 
          strong posee un volumen dado por altura, anchura y profundidad. 
          | La percepción de un elemento tridimensional no puede ser visto a primera vista, tenemos que observarlo desde diferentes ángulos, posiciones y distancias, para hacer una mejor lectura de este. Así el diseño tridimensional presenta muchos retos adicionales al bidimensional, precisamente por todas las aristas de observación; el diseñador tiene que ser muy observador e imaginar el elemento en diversas posiciones y tamaños, teniendo gran importancia el volumen y la ubicación dentro de un espacio; para dicho propósito se debe asimilar sus medidas de manera transversal, vertical y horizontal.
      .col-lg-5
        figure
          img(src='@/assets/curso/Diseno-tridimensional.png', alt='Diseño tridimensional')    

    .super-separador
      .separador2  


    // 4.3
    #t_4_3.titulo-segundo
      .h2 4.3 Lenguaje publicitario: características

    .row
      .col-lg-7
        p.mb-4.texto-resaltado La publicidad es un fenómeno de la era industrial. El mundo ha cambiado a pasos agigantados especialmente en los últimos siglos después de la primera y segunda revolución industrial, crece la oferta y la demanda de miles de productos, en la llamada “sociedad de consumo”; 
          span.etiqueta.color2.text-bold la función principal de la publicidad es fomentar técnicas de consumo pertinentes y asertivas,
          | llegar a todas partes, a través de los diferentes medios de comunicación (radio, prensa, cine, televisión), medios de sentido unidireccional, que van directamente al emisor. 
        p Un ejemplo representativo son las televentas, las 24 horas del día vendiendo. Más acorde a nuestros días, las aplicaciones móviles en donde podemos comprar lo que queramos, 365 días del año sin cierre. El proceso de lenguaje publicitario presenta una serie de características con respecto a los otros actos de comunicación ya que el mensaje es escrito por varios emisores. 
        .row.justify-content-center.mb-4.cajon.color-acento-botones.mb-5.p-4.mx-1
          p.mb-4
            strong Características:
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta
                span 1
              | El canal de difusión es múltiple, ya que se desea llegar a la mayor cantidad de receptores posible, a través de medios como: prensa, vallas publicitarias, pautas en la radio, internet, revistas, rótulos, etc.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Debe cumplir con las siguientes características básicas, las cuales suelen ser muy efectivas (Lozano, s.f.).
      .col-lg-5
        figure
          img(src='@/assets/curso/lenguaje-publicitario.png', alt='Lenguaje publicitario')  

    .row.mb-5
      figure
        img(src='@/assets/curso/Mensaje-publicitario-efectivo.png', alt='Mensaje publicitario efectivo')     

    
    // Estructura y funciones del lenguaje publicitario
    h3 Estructura y funciones del lenguaje publicitario

    p.mb-4 El lenguaje publicitario tiene la siguiente estructura: 

    .row.mb-5
      figure
        img(src='@/assets/curso/estructura-lenguaje-publicitario.png', alt='Estructura lenguaje publicitario') 

    .row
      .col-lg-7
        p Las funciones del lenguaje publicitario son:
        ul.lista.lista-ul--color.p-1.mt-2
          li 
            i.fas.fa-circle
            p.mb-0 
              strong Función informativa: 
              | permite dar una información por medio de la imagen.
          li 
            i.fas.fa-circle
            p.mb-0 
              strong Función apelativa: 
              | recurre a ciertas herramientas para influir su decisión.
          li 
            i.fas.fa-circle
            p.mb-0 
              strong Función referencial: 
              | las imágenes utilizadas hacen referencia al producto.
          li 
            i.fas.fa-circle
            p.mb-0 
              strong Función fática:
              | procura iniciar y capturar la atención del consumidor.
          li 
            i.fas.fa-circle
            p.mb-0 
              strong Función emotiva:
              | recurre a la evocación para provocar sentimientos y emociones.        
      .col-lg-5
        figure
          img(src='@/assets/curso/funciones-lenguaje-publicitario.png', alt='Imagen manos sosteniendo carteles')  

    
</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    datosSlyder: [
      {
        titulo: 'Contraste de figura.',
        imagen: require('@/assets/curso/contraste-de-figura.jpg'),
      },
      {
        titulo: 'Contraste de tamaño.',
        imagen: require('@/assets/curso/contraste-de-tamano.jpg'),
      },
      {
        titulo: 'Contraste de color.',
        imagen: require('@/assets/curso/contraste-de-color.jpg'),
      },
      {
        titulo: 'Contraste de textura.',
        imagen: require('@/assets/curso/contraste-de-textura.jpg'),
      },
      {
        titulo: 'Contraste de dirección.',
        imagen: require('@/assets/curso/contraste-de-direccion.jpg'),
      },
      {
        titulo: 'Contraste de dirección.',
        imagen: require('@/assets/curso/contraste-de-direccion2.jpg'),
      },
    ],
  }),
}
</script>

<style lang="sass" scoped></style>
