<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.bg-color3.mb-5
      .col-12.px-5
        .row
          .col-lg-5
            figure
              img(src='@/assets/curso/sintesis/img1.png' style="width: 450px").m-auto
          .col-lg-7
            .row.pt-5.pb-4
              .col-12.bg-color5.mb-lg-0.mb-xl-5
                p Este componente busca orientar a los aprendices del programa tecnológico de gestión de servicios en la nube en la implementación del dominio de servicios tecnológicos, que corresponde con un plan de gestión, el cual está integrado con aspectos vistos durante el programa, como son: el directorio de servicios tecnológicos, los elementos para el intercambio de información.
            .row.pb-5.pb-lg-5.pb-xl-3.align-items-start
              .col-auto
                figure.pt-2
                  img(src='@/assets/curso/sintesis/img1.svg' style="width: 30px").m-auto
              .col
                p.mb-0.txt-deco2 #[b Es necesario tener claro las actividades que corresponden con la gestión de servicios, en relación a su capacidad de atención, la continuidad del servicio, la disponibilidad y la seguridad de los mismos.]
            .cajon.color-primario.p-4.bg-color11
              p.mb-0 Por otra parte, tanto la mesa de ayuda como los planes de mantenimiento, determinan acciones propias, que llevan a que los roles estén pendientes de acciones de prevención y mejora.
    .row.bg-color6
      .col-12.px-5
        br
        .bloque-texto-a.color-secundario.p-4.p-md-4.mb-5.pt-5
          .row.m-0.align-items-center.justify-content-between
            .col-lg-2.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/intro/img1.svg' style="width: 100px").m-auto
            .col-lg-10
              .bloque-texto-a__texto.p-4
                p #[b El contenido de este componente se relaciona de manera directa con la G.ST.01 Guía del dominio de servicios tecnológicos, emitida por el Ministerio de Tecnologías de la Información y las Comunicaciones, la cual es un documento guía de fácil manejo y aplicación en la implementación de servicios en la nube. Una breve revisión de los temas vistos, se encuentran en el siguiente mapa conceptual.]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/sintesis/img3.svg').m-auto

</template>

<script>
export default {
  name: 'Sintesis',
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
