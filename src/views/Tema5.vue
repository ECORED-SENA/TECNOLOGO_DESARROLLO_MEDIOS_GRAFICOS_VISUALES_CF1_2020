<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 5
      h1 Brief

    figure.mb-5
      img(src='@/assets/curso/banner-tema5.jpg', alt='Brief')   
    p.mb-4.texto-resaltado El brief o briefing 
      span.etiqueta.text-bold es un documento tipo instructivo que se realiza en el sector publicitario.
      | Este es elaborado por el ejecutivo de cuenta o el diseñador, a partir de la información que brinda el cliente respecto a su producto.  Este documento es entregado al diseñador en la etapa inicial del proyecto, es aquí donde se definen todos los objetivos que se desean cumplir. Los apartados del brief incluyen la descripción del producto, la empresa, marca, sector al que pertenece, evolución gráfica, evolución en el tiempo, productos de la competencia, ventajas sobre otras marcas, localización, posicionamiento a futuro, cultura corporativa, etc.  El estudio del público o consumidor es muy importante de definir ya que limita el alcance de la campaña; en este sentido, la demografía se refiere a muchos aspectos, como la calidad de vida, hábitos de consumo o condición económica, de cierto grupo poblacional. De igual manera se tiene en cuenta las campañas realizadas anteriormente por la empresa, con el objetivo de utilizar un mismo lenguaje. El brief marca la pauta en cuanto a los tiempos de ejecución, en algunos casos el presupuesto estimado y otros requerimientos del cliente y el diseñador. 

    .row.justify-content-center
      .col-lg-10.cajon.color-acento-botones
        .row.justify-content-center 
          .col-lg-2.justify-content-center.col-5.p-4
            figure
              img(src='@/assets/curso/briefing.svg', alt='Icono sobre Brief')
          .col-lg-9.p-lg-4.px-4
            p  
              strong Por medio del brief podemos saber si las expectativas de un cliente son exageradas o por el contrario un poco tímidas.
              | Cada agencia o diseñador realiza su propio formato de brief, ya que no existe un patrón universal del mismo, es más bien un formato acomodado a las necesidades requeridas.

    .super-separador
      .separador2        


    // 5.1
    #t_5_1.titulo-segundo
      .h2 5.1. Tipos de brief y sus elementos

    figure
      img(src='@/assets/curso/video1.jpg', alt='Video')

    .super-separador
      .separador2  


    // 5.2
    #t_5_2.titulo-segundo
      .h2 5.2. Análisis e interpretación de la información
    
    .row.mb-4
      .col-lg-7
        p Queda claro que el brief es muy importante ya que facilita toda la información del producto en una primera instancia, antes de desarrollar las estrategias pertinentes. Si se llegase a tener dudas o inquietudes, es importante aclarar el contenido, con el cliente antes de empezar.  Para hacer un buen análisis de esta información, hay que ser muy observador, delimitar cualquier tipo de pesquisa por pequeña que parezca, puede ser de gran utilidad en el éxito del proyecto. 
        .row.justify-content-center.cajon.color-acento-botones.mb-5.p-2.mx-1
          .col-lg-3.justify-content-center.col-5.p-4
            figure
              img(src='@/assets/curso/equipo.svg', alt='Equipo de trabajo')
          .col-lg-9.p-lg-3.px-3
            p Junto con el equipo de trabajo se pueden desarrollar preguntas en torno al 
              strong ¿qué?, ¿por qué?, ¿quién?,¿cómo?, 
              | tanto cuando se tiene un brief completo, como cuando no. Un elemento importante para tener una interpretación correcta es el estudio conciso e identificación del público objetivo; en este punto hay que ser muy concretos ya que de este aspecto dependerá el éxito del trabajo.          
      .col-lg-5
        figure
          img(src='@/assets/curso/analisis-interpretacion-informacion.png', alt='Mujer escribiendo sobre libreta')  


    h3.mb-4 Para estudiar un cliente es necesario investigar las siguientes variables:

    .row.mb-2
      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/clientes-objetivo.svg', alt='Icono demográfico')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 Delimitar demográfica y conductualmente el rango de personas que son o van a ser 
                strong clientes objetivos 
                | de nuestro producto. La delimitación demográfica puede ser de gran importancia, pues nos ayuda a entender un sinfín de variables respecto al consumidor. 
      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/grupo-de-edad.svg', alt='Icono sobre Grupo de edad')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 Edad a la cual vamos a dirigirnos, nicho de mercado (porción o segmento de éste), es importante hacer un estudio preciso de este punto ya que no todos los productos son para todas las edades, por ejemplo, un videojuego, no es un producto muy factible para un padre de familia, pero sí para su hijo. 

      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              igure
                img(src='@/assets/curso/sexo.svg', alt='Icono sobre sexo')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 Identificación por sexo, algunos productos son utilizado tanto por hombres como mujeres, sin embargo, algunos son de uso exclusivo de un solo grupo, por ejemplo, la espuma de afeitar.
      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/pin-mapa.svg', alt='Icono de mapa')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 La ubicación geográfica es muy importante tener en cuenta, por ejemplo, tratar de vender una ruana en Tunja y en Cartagena, a pesar de ser dos ciudades de un mismo país, es un producto que solo se venderá en una de ellas, dadas sus condiciones climáticas.

      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              igure
                img(src='@/assets/curso/birrete.svg', alt='Icono de Birrete de graduación')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 El nivel educativo determina muchas acciones respecto a la acción de compra, por ejemplo, una persona analfabeta posiblemente nunca se dirija a una librería a comprar un libro. 
      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/dinero.svg', alt='Icono de dinero')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 El poder adquisitivo, es muy importante determinar a quién va encaminado el producto; por ejemplo, un reloj de lujo va dirigido a un grupo en particular. 

      .col-lg-6.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-3.col-5.py-4
              igure
                img(src='@/assets/curso/puntualidad.svg', alt='Icono sobre puntualidad')
            .col-lg-8.px-lg-4.p-4
              p.mb-0 Hábitos de consumo; por ejemplo, hoy en día, hay muchas personas que han optado por una alimentación vegana, vegetariana, celiaca, o simplemente personas que puede consumir todos los tipos de alimentos, por diferentes motivos.
      .col-lg-6.col-clientes
        
    p.mb-5 Reconocer a quién va dirigido 
      strong (publico objetivo), 
      | ayudará a identificar los detalles del producto o la marca, y las estrategias que se deberán seguir, permitiéndole al diseñador establecer el punto de partida para entender cómo desarrollar la campaña con una propuesta innovadora y cuáles serán los objetivos a conseguir; asimismo, definir los medios más eficientes a utilizar en la estrategia de diseño.


    h3.mb-4 Conociendo al cliente. Revisar la información

    .row.mb-5
      .col-lg-7
        p De acuerdo con Reizenstein (2004), 
          strong “un cliente es la persona o empresa receptora de un bien, servicio, producto o idea, a cambio de dinero u otro artículo de valor”. 
          | Conocer el cliente es fundamental para el buen desarrollo del trabajo, es importante dar una buena primera impresión, mediante la empatía, el ingenio y las buenas ideas para su proyecto. Cuando hay un buen ambiente entre cliente y el diseñador, publicista o agencia de mercadeo, es muy factible asegurar en gran parte el éxito de la campaña.
        p Nunca hay que comenzar un trabajo sin saber lo que el cliente desea del mismo; cuál es la visión de su producto, como ve su propia empresa, si es objetivo respecto a la misma o un poco soñador, esto dará una visión particular del camino que debe recorrer.   
        .row.justify-content-center.cajon.color-acento-botones.mb-5.p-2.mx-1
          .col-lg-3.justify-content-center.col-5.p-4
            figure
              img(src='@/assets/curso/objetivo.svg', alt='Icono sobre objetivo')
          .col-lg-9.p-lg-3.px-3
            p Revisar la información de manera clara y concisa, ejecutando una buena planificación del proyecto, contribuyen al éxito. Es de vital importancia estudiar los datos esenciales del brief, como los objetivos y el direccionamiento de este, teniendo siempre un concepto objetivo, sin desviar el proyecto a capricho personal; 
              strong se debe recordar que, aunque sea la mente creativa, no se trabaja para si mismo sino para otra persona. 
      .col-lg-5
        figure
          img(src='@/assets/curso/conociendo-al-cliente.png', alt='Personas en reunión')  


    h3.mb-4 Retroalimentación de propuestas

    .row.mb-4
      .col-lg-7
        p Como retroalimentación se designa el método de control de sistemas en el cual los resultados obtenidos de una tarea o actividad son reintroducidos nuevamente en el sistema con el fin de controlar y optimizar su comportamiento. Como tal, la retroalimentación se aplica prácticamente a cualquier proceso que involucre mecánicas semejantes de ajuste y autorregulación de un sistema (Coelho, 2019). 
        p La retroalimentación entre el emisor y el receptor se considera el aspecto más importante a tener en cuenta en la comunicación; 
          strong el receptor a partir del mensaje recibido por el emisor, puede establecer una comunicación efectiva 
          | es decir, un intercambio de información en doble vía, que permitirá intensificar las conductas positivas del mensaje, disponer de herramientas creativas a fin de entender y percibir de la mejor manera la información para configurar, cambiar o mejorar el mensaje de su interlocutor. La retroalimentación obedece a ciertos pasos importantes: 
      .col-lg-5
        figure
          img(src='@/assets/curso/retroalimentacion.png', alt='Personas hablando')      

    TabsC.color-primario
      .py-3.py-md-4(titulo="La planificación")
        .row.justify-content-center
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/planificacion.svg', alt='La planificación')
          .col-md-6.px-md-5
            .h3 La planificación
            p Antes de iniciar cualquier actividad es indispensable realizar una planificación, esta nos provee los pasos necesarios para una consecución exitosa de cualquier tarea, esto aplica en la retroalimentación o feedback; es importante definir el objetivo de reunirnos con el cliente, identificar cuál es el problema o la pregunta que deseamos responder, cuáles son las incógnitas a despejar que permita una mejor comprensión la situación; de esta manera, podemos recopilar la información necesaria, relevante y exacta, que por pequeña que parezca puede llegar a ser muy valiosa.
      .py-3.py-md-4(titulo="La ejecución")
        .row.justify-content-center
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/ejecucion.svg', alt='La ejecución')  
          .col-md-6.px-md-5
            .h3 La ejecución
            p Es importante formular las preguntas pertinentes y necesarias, estas permiten la interacción con el equipo de trabajo, y ampliar y contribuir con las propuestas que no se han logrado concretar; así se contará con diferentes puntos de vista que permitirán observar otras aristas del problema, otras áreas por recorrer, otras soluciones para abordar. ¿Cómo crees que se ve el empaque de color rojo?, solo a partir de esta pregunta permitirá, inclusive, generar un plan de acción. El integrar al proceso a todos los implicados conlleva a que la ejecución no sea una meta de un solo elemento aislado sino más bien sea un éxito planeado desde lo grupal.
      .py-3.py-md-4(titulo="El Cierre")
        .row.justify-content-center
          .col-md-5.mb-3.mb-md-0
            figure
              img(src='@/assets/curso/cierre.svg', alt='El Cierre')  
          .col-md-6.px-md-5
            .h3 El Cierre
            p Una vez terminada la sesión de retroalimentación es importante hacer un resumen de la misma, los puntos que se aclaran, los objetivos y acuerdos a los que se llegaron, para que el feedback sea realmente efectivo y lleve a una ganancia personal, del equipo, la empresa y por supuesto el cliente. 

    .super-separador
      .separador2 


    // 5.3
    #t_5_3.titulo-segundo
      .h2 5.3. Diseño, creatividad e innovación           

    p.mb-4 A continuación, conocerá las etapas del proceso creativo.

    figure
      img.mb-5(src='@/assets/curso/etapas-proceso-creativo.png', alt='Infografia sobre las etapas del proceso creativo')  

    h3 Psicología de la imagen

    .row
      .col-lg-7
        p Si observa a las personas en la calle, podemos llegar a imaginar que hacen, a que se dedican, si trabajan, estudian o están desempleados, esto se debe a que, en nuestra imaginación, realizamos asociaciones por medio de la imagen; por ejemplo, podemos asociar el uniforme azul antifluido con un médico, a pesar de que este puede ser utilizado por una manicurista, un aseador, un peluquero o una enfermera. 
        p Tanto el lenguaje corporal, como la ropa, los movimientos y demás, pueden delatar mas de lo que deseamos revelar. 
          strong La psicología no solo funciona con la imagen, funciona con el color, el comportamiento, los gustos y demás aspectos de la vida cotidiana. 
          | Se podría decir que cada cosa que utilizamos cuenta algo de nosotros.
        .row.justify-content-center.cajon.color-acento-botones.mb-5.p-2.mx-1
          .col-lg-3.justify-content-center.col-5.p-4
            figure
              img(src='@/assets/curso/psicologia.svg', alt='Icono sobre psicologia')
          .col-lg-9.p-lg-3.px-3
            p 
              strong La psicología de la imagen 
              | es útil en el diseño, ya que el diseñador tiene que 
              strong transmitir de manera directa y eficaz 
              | por medio de la imagen, un concepto de manera inmediata y eficaz. Para esto, debe tener muy presente el manejo de la percepción, el espacio y el tiempo en que se recibe este mensaje, todo esto para unir los conceptos y estudiar de mejor manera al usuario que va a recibir el mensaje, utilizando los sentidos y las sensaciones, para hacerla memorable.   
      .col-lg-5
        figure
          img(src='@/assets/curso/psicologia-imagen.png', alt='Foto de diferentes expresiones faciales')  

    
</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
