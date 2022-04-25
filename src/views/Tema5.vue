<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Planes de mantenimiento
    .row.bg-color3
      .col-12.px-5
        .row
          .col-lg-5
            figure
              img(src='@/assets/curso/tema5/img1.png' style="width: 450px").m-auto
          .col-lg-7
            .row.pt-5
              .col-12.bg-color5.mb-lg-3.mb-xl-5
                p Las interrupciones del servicio pueden ser causadas además por labores de mantenimiento y/o actualización. Estas interrupciones programadas afectan la disponibilidad del servicio y por lo tanto deben ser planificadas para minimizar el impacto. Se deben aprovechar franjas horarias de inactividad para realizar las tareas que implican la degradación o interrupción del servicio.
            .row.pb-2.pt-0.pt-lg-0.pt-xxl-2.align-items-center
              .col-auto
                figure
                  img(src='@/assets/curso/tema5/img1.svg' style="width: 30px").m-auto
              .col
                p.mb-0.txt-deco2 #[b Para ejecutar un mantenimiento es necesario realizar las siguientes actividades:]
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido.my-5
          p.mb-0 #[b Figura 7]. Actividades de Mantenimiento
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema5/img2.svg').m-auto

</template>

<script>
export default {
  name: 'Tema5',
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
