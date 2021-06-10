<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 6
      h1 Gestión de proyectos

    figure.mb-5
      img(src='@/assets/curso/banner-tema6.jpg', alt='Gestión de proyectos')   
    p.mb-4.texto-resaltado 
      span.etiqueta.text-bold La gestión de proyectos involucra la planificación, la organización, la motivación, el control de las tareas y los recursos,
      | con el propósito de alcanzar los objetivos esperados. Un proyecto es un emprendimiento temporal para producir un producto u ofrecer un servicio, que se logrará mediante el desarrollo de unas acciones concretas, que tendrá un inicio y fin definido. 

    .row
      .col-lg-7
        p La gestión determina que se necesita hacer para alcanzar la meta del proyecto y los objetivos asociados, quien lo hará, cuánto tiempo se necesitará y cuál será el costo; esto será determinante para el éxito del mismo. La gestión también involucra acciones concretas correspondientes a: administrar el inicio y supervisión de los avances en relación con las tareas programadas; controlar y solucionar las dificultades que se presenten durante la etapa de ejecución; definir la finalización, aprobación y evaluación del proyecto.
      .col-lg-5
        figure
          img(src='@/assets/curso/gestion-proyectos.png', alt='Grupo de personas gestionando proyectos')  

    .super-separador
      .separador2        


    // 6.1
    #t_6_1.titulo-segundo
      .h2 6.1 Identificar los requerimientos

    p La gestión de un proyecto relaciona el análisis, desarrollo, documentación y verificación de requerimientos, por ello es necesario tener en cuenta lo siguiente: 

    .row.justify-content-center
      .col-lg-5.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-8.px-lg-4.p-4
              h3 Claridad
              p.mb-0 El proyecto debe ser comprensible en cuanto a su propósito y alcance, sin dar lugar a ambigüedades, posibilitando una única interpretación.
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/lupa.svg', alt='Icono de lupa')    
      .col-lg-5.col-clientes
        .cajon.color-naranja.mb-4
          .row.justify-content-center
            .col-lg-8.px-lg-4.p-4
              h3 Realismo
              p.mb-0 Su desarrollo debe ser viable y ser coherente en relación con el presupuesto y recursos requeridos.
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/diamante.svg', alt='Icono de diamante') 

      .col-lg-5.col-clientes
        .cajon.color-naranja
          .row.justify-content-center
            .col-lg-8.px-lg-4.p-4
              h3 Relevancia
              p.mb-0 Su consecución debe ser necesaria, es decir, aporta de manera significativa en la solución de un problema o suplir una necesidad.
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/favorito.svg', alt='Icono de favorito')    
      .col-lg-5.col-clientes
        .cajon.color-naranja
          .row.justify-content-center
            .col-lg-8.px-lg-4.p-4
              h3 Verificabilidad
              p.mb-0 Debe permitir corroborar y demostrar los resultados alcanzados con respecto a los objetivos del proyecto, ya se traten de indicadores de tipo cuantitativo o cualitativo.
            .col-lg-3.col-5.py-4
              figure
                img(src='@/assets/curso/divisa.svg', alt='Icono de divisa')

    .super-separador
      .separador2


    // 6.2
    #t_6_2.titulo-segundo
      .h2 6.2. Fases y metodologías de programación de proyectos

    p Las fases de un proyecto son:

    .row.justify-content-center
      .col-lg-10
        figure
          img.mb-5(src='@/assets/curso/fases-del-proyecto.png', alt='Infografía sobre fases del proyecto')

    p A continuación, se detalla a manera general las fases del proyecto, objetivo y tareas      

    .tabla-b.color-acento-contenido
      table
        thead.tabla-b__header
          tr
            th.h3 Fase 
            th.h3 Objetivos
            th.h3 Tareas 
        tbody    
          tr
            td Inicio y análisis del proyecto
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Los objetivos son claros.
                li 
                  i.fas.fa-circle
                  p.mb-0 Se ha realizado el análisis de viabilidad.
                li 
                  i.fas.fa-circle
                  p.mb-0 Se obtuvo la aprobación de propuesta.
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Analizar costos (presupuesto). 
                li 
                  i.fas.fa-circle
                  p.mb-0 Analizar el contexto y riesgos asociados (político, económico, social, tecnológico).
                li 
                  i.fas.fa-circle
                  p.mb-0 Elaborar planeación general del proyecto.     
                li 
                  i.fas.fa-circle
                  p.mb-0 Organizar el equipo de trabajo.    
          tr
            td Ejecución y seguimiento del proyecto
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Se ha fijado un plan de trabajo.
                li 
                  i.fas.fa-circle
                  p.mb-0 Se han establecido las bases para la ejecución exitosa del proyecto.
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Definir las tareas requeridas y el orden en el que se deben llevar a cabo. 
                li 
                  i.fas.fa-circle
                  p.mb-0 Realizar la estructura de división del trabajo, asignando responsabilidades.
                li 
                  i.fas.fa-circle
                  p.mb-0 Elaborar cronograma de trabajo (tiempos y recursos para cada actividad).    
                li 
                  i.fas.fa-circle
                  p.mb-0 Elaborar un plan de costos.
          tr
            td Planificación del proyecto
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Se han procesado y aprobado los resultados del proyecto.
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Ejecutar las tareas programadas.
                li 
                  i.fas.fa-circle
                  p.mb-0 Realizar control del proyecto, tareas programadas / tareas ejecutadas.
                li 
                  i.fas.fa-circle
                  p.mb-0 Medir avance real del proyecto comparándolo con lo planeado.   
                li 
                  i.fas.fa-circle
                  p.mb-0 Tomar acciones correctivas si fueran necesarias.     
                li 
                  i.fas.fa-circle
                  p.mb-0 Gestionar en curso los riesgos y amenazas.
          tr
            td Evaluación del proyecto y cierre
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Se ha llevado a cabo una retrospectiva crítica del proyecto.
                li 
                  i.fas.fa-circle
                  p.mb-0 El proyecto se ha concluido formalmente.
            td 
              ul.lista.lista-ul--color.p-1.mt-2
                li 
                  i.fas.fa-circle
                  p.mb-0 Analizar los resultados obtenidos. 
                li 
                  i.fas.fa-circle
                  p.mb-0 Redactar un informe final del proyecto.
                li 
                  i.fas.fa-circle
                  p.mb-0 Presentación final.    
                li 
                  i.fas.fa-circle
                  p.mb-0 Retroalimentación frente a los resultados alcanzado.

    .super-separador
      .separador2


    // 6.3
    #t_6_3.titulo-segundo
      .h2 6.3. Recursos

    p.mb-4 Uno de los aspectos más importantes a la hora de ejecutar un proyecto es el manejo de recursos, por ello los equipos y empresas de hoy en día tienen un área específica de gestión de recursos. Cuando hablamos de la palabra recurso, nos referimos a 
      strong un conjunto de elementos disponibles para resolver un problema o necesidad. 
      | existen varios tipos de recursos en una organización: 

    .row.justify-content-center
      .col-lg-10
        figure
          img.mb-5(src='@/assets/curso/empresa.png', alt='Infografía sobre empresa')

      .row.justify-content-center
        .col-lg-10
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-4
            .row.m-0.align-items-center.justify-content-between
              .col-lg-3.mb-4.mb-lg-0
                .h3.mb-0 Económicos
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p Al terminar la etapa de planificación se necesita buscar recursos para la ejecución del proyecto, no solo económicos sino los recursos físicos o tangibles como una oficina, por ejemplo. 
                    strong De acuerdo con cronograma y la proyección de actividades, se debe identificar que recursos son necesarios, y en qué montos y cantidades. 
                    | Dependiendo de la capacidad adquisitiva, se podrá recurrir a diferentes fuentes de financiación, ahorros, aportes de socios, préstamo a un banco o entidad crediticia, depósitos, bonos etc.
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-4 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-3.mb-4.mb-lg-0
                .h3.mb-0 Físicos y tecnológicos.
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p Ya mencionamos en el cuadro anterior que 
                    strong el recurso físico es la infraestructura que tiene una empresa, son activos tangibles y que por lo general tienen un tiempo de duración y se deprecian con el paso de los días. 
                    | Maquinaria, automóviles, edificios, locales, materiales, equipos de computo, muebles, escritorios, sillas, teléfonos, inventario, insumos hacen parte de la extensa lista. Es importante decir que el buen uso de estos recursos es fundamental; por ejemplo, una empresa compra nuevos equipos de producción, pero su equipo de trabajo no tiene el conocimiento para ponerlos en funcionamiento, siendo necesario capacitar al equipo de trabajo para que la compra de esos equipos no se convierta en una pérdida sino un elemento en favor de la producción.
          .bloque-texto-a.color-primario.p-4.p-md-5.mb-4 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-3.mb-4.mb-lg-0
                .h3.mb-0 Tecnológicos.
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p El recurso tecnológico se vale de la tecnología para conseguir un propósito. Estos medios suelen ser tangibles como la maquinaria, las computadoras, impresoras, entre otros; sin embargo, encontramos medios intangibles asociados al software, como los programas de diseño, las aplicaciones móviles, las plataformas virtuales y el internet. 
                    strong La adquisición de estos recursos debe ser un proceso dinámico y evolutivo, de manera constante con los avances y las nuevas tecnologías. 
                    | De nada sirve conseguir un excelente proyecto en diseño, si ni siquiera contamos con un computador que tenga los programas requeridos. Para ser competitiva una organización debe gestionar de manera estratégica la adquisición de estos recursos, dadas por las dinámicas externas del entorno y el mercado. 
          .bloque-texto-a.color-primario.p-4.p-md-5
            .row.m-0.align-items-center.justify-content-between
              .col-lg-3.mb-4.mb-lg-0
                .h3.mb-0 Humanos.
              .col-lg-9
                .bloque-texto-a__texto.p-4
                  p El recurso humano o capital humano, es el más importante en cualquier proyecto, empresa o entidad, sin este no podría existir la organización, por ende, el proyecto. Este recurso es el que 
                    strong aporta el conocimiento, saberes, oficios, constancia, dedicación y aprendizaje, cada persona de acuerdo con sus conocimientos desempeñan un rol y responsabilidades bien definidas.  
                    | El correcto funcionamiento del área de recursos humanos, el buen ambiente laboral y las condiciones justas y equitativas, propenden en tener un excelente equipo de trabajo, que al final se deriva en ganancias para todos. Un empleado contento y bien remunerado, se sentirá feliz en su trabajo, contrario a un trabajador que tiene que laborar en un ambiente conflictivo, con bajo salario y extenuantes horarios laborales.

    .super-separador
      .separador2


    // 6.4
    #t_6_4.titulo-segundo
      .h2 6.4. Seguimiento

    .row
      .col-lg-7
        p El proceso de seguimiento y control del proyecto, 
          strong son un conjunto de elementos y acciones que se realizan para medir y comprobar la ejecución de las tareas propuestas durante la fase inicial, 
          | establecidas en el momento de la planificación; generalmente la supervisión esta a cargo de un director de proyectos, quien define si se está llevando el orden consecutivo de los pasos consignados dentro del plan de trabajo. 
        p El seguimiento es la base para la toma de decisiones importantes que permiten encauzar los propósitos del proyecto, por lo cual debe llevarse acabo con cierta periodicidad y rigurosidad, para lo cual es importante (OBS, s.f.):  
        ul.lista.lista-ul--color.p-1.mt-2
          li 
            i.fas.fa-circle
            p.mb-0 Definir qué se debe monitorizar y evaluar.
          li 
            i.fas.fa-circle
            p.mb-0 Establecer los indicadores clave para el seguimiento del proyecto.
          li 
            i.fas.fa-circle
            p.mb-0 Recolectar y organizar la información.   
          li 
            i.fas.fa-circle
            p.mb-0 Analizar e interpretar los datos.
          li 
            i.fas.fa-circle
            p.mb-0 Indicar y comunicar el grado de progreso del proyecto.
          li 
            i.fas.fa-circle
            p.mb-0 Informar de las incidencias, riesgos o imprevistos que puedan surgir.
          li 
            i.fas.fa-circle
            p.mb-0 Proponer un plan de acciones para mitigar los riegos.
          li 
            i.fas.fa-circle
            p.mb-0 Establecer las fechas de los hitos de cada proyecto y confirmar las mismas periódicamente.          
      .col-lg-5
        figure
          img(src='@/assets/curso/seguimiento.png', alt='Imagen de dos personas reunidas')  


    
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
