<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Acuerdos de libre comercio'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema4/1.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        p.mb-0(data-aos="fade-left") Los acuerdos de libre comercio (TLC) son herramientas fundamentales para la integración económica entre países, facilitando la circulación de bienes, servicios y capitales en condiciones favorables.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Acuerdos de libre comercio
            p.mb-4(data-aos="fade-right") En el PDF <b>Acuerdos de libre comercio</b>, se analizan los principios básicos de estos tratados, sus implicaciones en el desarrollo económico y los principales acuerdos firmados por Colombia. A través de este estudio, se examinan los beneficios y desafíos que enfrentan los países al participar en estos acuerdos, así como su impacto en la competitividad, la inversión extranjera y el comercio internacional.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Acuerdos de libre comercio.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/2.png', alt='')

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Importancia de los TLC en el crecimiento económico

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.order-2
          figure
            img(src='@/assets/curso/tema4/3.png', alt='')
        .col-lg.order-1.mb-3.mb-lg-0
          .p-4
            p.mb-0(data-aos="fade-up") Los Tratados de Libre Comercio (TLC), desempeñan un papel fundamental en el crecimiento económico al facilitar el intercambio de bienes y servicios entre países, eliminando barreras arancelarias y fomentando la inversión extranjera. Estos acuerdos permiten a las empresas acceder a nuevos mercados, aumentando su competitividad y promoviendo la diversificación productiva. Además, impulsan la generación de empleo y el desarrollo tecnológico al incentivar la transferencia de conocimientos y mejores prácticas. Al reducir costos y ampliar oportunidades comerciales, los TLC contribuyen al fortalecimiento de las economías nacionales, estimulando el crecimiento sostenido y la integración en la economía global.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.wto.org/spanish/tratop_s/tpr_s/s265_sum_s.pdf " target="_blank" rel="noopener noreferrer") Organización Mundial del Comercio. (2012). Examen de las políticas comerciales: Colombia. OMC. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.wto.org/spanish/res_s/booksp_s/wtr23_s/wtr23_s.pdf" target="_blank" rel="noopener noreferrer") Organización Mundial del Comercio. (2023). Informe sobre el comercio mundial 2023. OMC. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/6YFpbGHBIuA?si=0uuvMkNGQb9jAoPn" target="_blank" rel="noopener noreferrer") Periodico desdeabajo (2012, 14 de mayo) TLC Estados Unidos - Colombia, introducción [Video]. Youtube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de las siguientes opciones describe mejor el PIB de un país?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El valor total de los bienes y servicios producidos en un año. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La cantidad de dinero circulante en la economía nacional.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'El nivel de inversión extranjera directa en un periodo.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La suma de exportaciones e importaciones en un año.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El PIB refleja la producción económica de un país en un periodo, siendo un indicador clave del crecimiento y la actividad económica.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Cómo se define la inflación en términos económicos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El crecimiento de la base monetaria en un sistema financiero.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'El aumento de la inversión extranjera en un país en desarrollo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La variación de la oferta y demanda en mercados internacionales.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'El incremento sostenido y generalizado de los precios de bienes y servicios',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Muy bien! La inflación mide el aumento del costo de vida, afectando el poder adquisitivo y la estabilidad económica de los consumidores y empresas.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto: '¿Qué representa la tasa de desempleo en una economía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'El nivel de productividad de la fuerza laboral empleada. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'La cantidad de trabajadores contratados en un periodo específico.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'El porcentaje de la población económicamente activa sin empleo',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'La diferencia entre empleo formal e informal en un país.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Estupendo! La tasa de desempleo refleja la disponibilidad de trabajo y la eficiencia del mercado laboral, impactando el bienestar social y el crecimiento económico.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: '¿Qué función cumplen las tasas de interés en la economía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Controlan el flujo de importaciones y exportaciones. ',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Determinan el costo del dinero en préstamos y ahorros',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Fijan el precio de los productos básicos en los mercados.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Regulan la cantidad de billetes emitidos por el banco central.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Excelente! Las tasas de interés influyen en el acceso al crédito, la inversión y el consumo, afectando directamente la actividad económica y la estabilidad financiera.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto: '¿Qué expresa la tasa de cambio en una economía?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El valor de una moneda en relación con otra divisa. ',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'El precio promedio de bienes importados en el país.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La variación de la inflación en un año determinado.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'El nivel de ingresos generados por exportaciones.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La tasa de cambio impacta el comercio internacional y la competitividad, afectando costos de importaciones, exportaciones y la estabilidad financiera de un país.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
