<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Acceso a servicios en la nube
    .row.bg-color8.mb-5
      .col-12.px-5
        .row
          .col-lg-5
            figure.mb-4.mb-lg-0(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/img1.png' style="width: 450px").m-auto
          .col-lg-7
            .row.mb-3
              .row.align-items-start.pt-5.mb-4.mb-lg-4.mb-xl-0
                .col-auto
                  figure.pt-2
                    img(src='@/assets/curso/tema3/img1.svg' style="width: 30px").m-auto
                .col
                  p.mb-0.txt-deco2 La organización debe entender que la informática en la nube tiene considerables ventajas empresariales y técnicas.
              .col-12.bg-color5.mb-lg-0.mb-xl-5.p-2
                p.mb-0 Para migrar un servicio o aplicación a la nube es importante que se tenga presente las capacidades necesarias y realizar una planeación del uso de los recursos de acuerdo con lo requerido por la plataforma.
            .tarjeta.color-primario.p-3.mb-4
              .row.justify-content-around.align-items-center
                .col-2
                  img(src="@/assets/curso/tema3/img3.svg")
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1.text-white Guía del dominio de servicios tecnológicos
                      p.text-small.text-white Para la gestión del despliegue de servicios en la nube es importante que vaya al numeral 2.5 (Acceso a servicios en la nube, LI.ST.04.) de la Guía del dominio de servicios tecnológicos G.ST.01 del MinTIC, que puede acceder en el enlace. 
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://mintic.gov.co/arquitecturati/630/articles-9277_recurso_pdf.pdf" target="_blank")
                        span(style="color: #000 !important") Abrir enlace
                        i.fas.fa-link(style="color: #000 !important")
    .bloque-texto-a.color-acento-contenido.p-4.p-md-4.mb-5(data-aos="zoom-in-up")
      .row.m-0.align-items-center.justify-content-between
        .col-lg-2.mb-4.mb-lg-0
          figure
            img(src='@/assets/curso/intro/img1.svg' style="width: 100px").m-auto
        .col-lg-10
          .bloque-texto-a__texto.p-4
            p En la guía mencionada se encuentra la tabla que describe las prácticas recomendadas para la creación de nuevas aplicaciones de nube o migración de aplicaciones existentes a la nube:
    .row.justify-content-center
      .col-lg-11
        .titulo-sexto.color-acento-contenido.mb-5
          p.mb-0 #[b Tabla 1]. Prácticas para la creación de nuevas aplicaciones
        .tabla-a.color-acento-botones
          table
            thead
              tr
                th(style="width: 30%") Práctica recomendada
                th Tácticas
            tbody
              tr
                td Diseñar teniendo en cuenta el fallo de hardware y software
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Estructurar un plan de copia de seguridad y restauración coherente para los datos automatizados.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Crear hilos de proceso que se reanuden al iniciar.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Permitir que el estado del sistema pueda volver a sincronizarse y volver a cargar mensajes de las colas.
                    li
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Conservar imágenes virtuales preconfiguradas y pre optimizadas para admitir en la ejecución/arranque.
              tr(style="background-color: #E8E8E8")
                td Desacoplar los componentes
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Crear componentes que no tengan estrechas dependencias entre sí, por si un componente falla por alguna razón, el resto de componentes están creados para que puedan seguir funcionando.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Crear sistemas asíncronos y escalar de forma horizontal, pues permitirá escalar añadiendo instancias al mismo componente y diseñar modelos híbridos.
                    li 
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Utilizar cola o búfer para conectar dos componentes.
              tr
                td Implementar la elasticidad
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Automatizar el proceso de implementación y optimizar el proceso de configuración y creación.
              tr(style="background-color: #E8E8E8")
                td Pensar en paralelo
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Aplicar el concepto de la paralelización donde sea posible.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Incluir varios procesos en las solicitudes.
                    li
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Combine la elasticidad con la paralelización.
              tr
                td Mantener los datos dinámicos más cerca de la estructura informática y los estáticos más cerca del usuario final
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Conservar los datos lo más cerca de sus elementos informáticos o de procesamiento con el objetivo de reducir la latencia.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Enviar y transferir los datos a la primera nube cuando sea necesario procesar una gran cantidad de datos que residen en el exterior de la nube.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Si los datos se generan en la nube, las aplicaciones que consuman los datos deberán implementarse también en la nube, para sacar provecho de las transferencias de datos libres dentro de la nube.
                    li
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Si los datos son estáticos se debe utilizar un servicio de distribución de contenido para que estos datos sean almacenados en la caché.
              tr(style="background-color: #E8E8E8")
                td Prácticas de seguridad
                td
                  ul
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Implementar prácticas de seguridad en todas las capas de la arquitectura de nube.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Proteger los datos en tránsito.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Proteger los datos que se encuentran en reposo.
                    li.mb-3
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Proteger las credenciales.
                    li
                      i.fas.fa-plus(style="color: #2EC49F")
                      |  Proteger la aplicación.

</template>

<script>
export default {
  name: 'Tema3',
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
