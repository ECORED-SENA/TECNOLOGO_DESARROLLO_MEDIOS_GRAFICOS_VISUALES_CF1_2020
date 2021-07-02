<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.png", alt="intro diseño grafico")
    
    p.mb-1 Los medios gráficos y el arte van de la mano, los dos constituyen un fenómeno social, que desde tiempos remotos ha cambiado y revolucionado la forma y la manera en que vemos y percibimos el mundo que nos rodea. Tanto los medios visuales como el arte avanzan con el tiempo, la cultura, la religión, las creencias y costumbres de un pueblo; permitiéndonos contextualizar los hechos que hicieron parte de una etapa de la historia, y brindándonos herramientas sólidas para conocer los diversos elementos utilizados en cuanto al diseño y sus corrientes, el color, la forma, la moda, los movimientos artísticos, la revolución del pensamiento y los avances tecnológicos. 

    .row.justify-content-center
       .col-lg-10.p-2
        .row.justify-content-center.align-items-center 
          .col-lg-2.col-5.p-4
            figure
              img(src='@/assets/curso/ico-intro1.svg', alt='Icono intro')
          .col-lg-10.p-4
            p 
              strong El arte 
              | ha sido utilizado desde tiempos remotos por el hombre como 
              strong manifestación estética y comunicativa, para expresar sentimientos e ideales, 
              | a través de pinturas en cuevas, talla en piedra, artículos en cerámica y barro, madera, hueso y otros materiales, de una manera muy libre y espontánea.
        .row.justify-content-center.align-items-center 
          .col-lg-2.col-5.p-4
            figure
              img(src='@/assets/curso/ico-intro2.svg', alt='Icono intro')
          .col-lg-10.p-4
            p Por su parte, los 
              strong medios gráficos, el diseño 
              | y demás, aparecen como un concepto siglos más tarde, dando solución a problemas de diversa índole, generando elementos y piezas funcionales que dan respuesta a diferentes necesidades; es allí, donde radica su importancia, sobre todo en el mundo actual, en donde el impacto visual y la funcionalidad de las cosas es fundamental, teniendo como misión 
              strong crear un mensaje claro y objetivo, que genere una responsabilidad ética y moral, sobre aquel que lo ejerza.
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
