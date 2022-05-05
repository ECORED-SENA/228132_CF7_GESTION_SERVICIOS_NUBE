<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Comunicación
    .row.bg-color9.mb-5
      .col-12.px-5
        .row
          .col-lg-7
            .row.align-items-start.py-5
              .col-auto
                figure.pt-2(data-aos="zoom-in")
                  img(src='@/assets/curso/tema4/img2.svg' style="width: 30px").m-auto
              .col
                p.mb-0.txt-deco2 La mesa de servicio es el punto de contacto de toda la organización TI con clientes y usuarios, es por lo tanto imprescindible que:
            figure
              img(src='@/assets/curso/tema4/img3.svg').m-auto
          .col-lg-5
            figure.mb-4.mb-lg-0
              img(src='@/assets/curso/tema4/img1.png' style="width: 450px").m-auto
    p.mb-5 En la siguiente imagen, se puede apreciar la estructura de la mesa que ofrece servicios virtuales, y la relación y dinámica que se ejerce entre sí.
    .row.justify-content-center.mb-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Figura 6]. Estructura mesa de servicios virtual
        figure(data-aos="zoom-in-up")
          img(src='@/assets/curso/tema4/img4.svg').m-auto
    .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/intro/img1.svg' style="width: 100px").m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p Para cumplir estos objetivos es necesario implementar la adecuada estructura física y lógica, al desplegar el siguiente recurso, podrá ver en detalle lo correspondiente a estas estructuras.
    .row
      .col-lg-6
        .row.p-1
          .col-12.bg-color10
            .row.align-items-end.mb-5.mt-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img5.svg' style="width: 100px").m-auto
              .col
                p.mb-0.text-white #[b Estructura lógica]
            p.text-white Los integrantes del Centro de Servicios deben:
            ul
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                |   #[span.text-white Conocer todos los protocolos de interacción con el cliente: guiones, checklists, …]
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                |   #[span.text-white Disponer de herramientas de software que les permitan llevar un registro de la interacción con los usuarios.]
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                |   #[span.text-white Saber cuándo se debe realizar un escalado a instancias superiores o entrar en discusiones sobre cumplimiento de los ANS o Acuerdos de Nivel de Servicio, también conocidos como SLA, por sus siglas en ingles Service Level Agreement.]
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                |   #[span.text-white Tener rápido acceso a las bases de conocimiento para ofrecer un mejor servicio a los usuarios.]
              li
                i.fas.fa-caret-right(style="color: #F59D36")
                |   #[span.text-white Recibir formación sobre los productos y servicios de la empresa.]
      .col-lg-6
        .row.p-1
          .col-12.bg-color10
            .row.align-items-end.mb-5.mt-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img6.svg' style="width: 100px").m-auto
              .col
                p.mb-0.text-white #[b Estructura física]
            p.text-white Dependiendo de las necesidades de servicio: locales, globales, 24/7, … se debe de optar por una estructura diferente para el Centro de Servicios.
            p.text-white Existen tres formatos básicos:
            ul
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                | #[span.text-white #[b Centralizado]: En este caso todo el contacto con los usuarios se canaliza a través de una sola estructura central.]
              li.mb-3
                i.fas.fa-caret-right(style="color: #F59D36")
                | #[span.text-white #[b Distribuido]: Este es la estructura tradicional cuando se trata de empresas que ofrecen servicios en diferentes emplazamientos geográficos (ya sean ciudades, países o continentes).]
              li
                i.fas.fa-caret-right(style="color: #F59D36")
                | #[span.text-white #[b Virtual]: En la actualidad y gracias a las rápidas redes de comunicación existentes la situación geográfica de los Centros de Servicios puede llegar a ser irrelevante.]

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
