<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Políticas macroeconómicas: políticas monetarias, fiscales y comerciales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-5.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las políticas macroeconómicas son herramientas utilizadas por los gobiernos para influir en el desempeño económico de un país; a través de estas políticas, se busca mantener la estabilidad financiera, fomentar el crecimiento y garantizar un equilibrio en los mercados. Estas estrategias impactan el desarrollo interno, y también tienen repercusiones en el comercio internacional y en la inversión.
        p(data-aos="fade-left") Para conocer qué son las políticas macroeconómicas, lo invitamos a escuchar el siguiente podcast.
    

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-6
        TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
          texto="Fundamentos de la innovación estratégica"
          tiempo
          :audio="require('../../assets/curso/podcast/podcast1.mp3')"
        )
    
    h2(data-aos="fade-left") Tipos de políticas macroeconómicas
    p.mb-5 Existen tres principales tipos de políticas macroeconómicas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7
              h5 Política monetaria
              p Es la estrategia utilizada por los bancos centrales para controlar la cantidad de dinero en circulación y las tasas de interés con el fin de mantener la estabilidad económica. Se divide en expansiva (aumenta la liquidez para estimular el crecimiento) y restrictiva (reduce la liquidez para controlar la inflación).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7
              h5 Política fiscal
              p Se basa en la gestión del gasto público y la recaudación de impuestos para influir en la actividad económica. Un aumento del gasto o una reducción de impuestos puede estimular el crecimiento, mientras que un ajuste fiscal puede contener el déficit y evitar el sobreendeudamiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7
              h5 Política comercial
              p Conjunto de medidas que regulan el comercio exterior de un país, como aranceles, tratados de libre comercio y subsidios a exportaciones. Su propósito es fomentar la competitividad, equilibrar la balanza comercial y fortalecer sectores estratégicos de la economía.
        

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Políticas monetarias
    
    p.m-4 El control de la oferta monetaria y la regulación del crédito son herramientas clave en la estabilidad macroeconómica de cualquier país.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Políticas monetarias
            p.mb-4(data-aos="fade-right") En el PDF <b>Políticas monetarias</b>, se estudian los principios fundamentales de la política monetaria, sus objetivos y las estrategias implementadas por los bancos centrales para controlar la inflación, estimular el crecimiento y garantizar la estabilidad financiera. Además, se analizan los instrumentos utilizados, como la tasa de interés, las operaciones de mercado abierto y los requerimientos de reserva, así como su impacto en la economía y en la toma de decisiones financieras.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Políticas monetarias.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Políticas comerciales
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Las <b>políticas macroeconómicas comerciales</b>, son estrategias y regulaciones implementadas por los gobiernos para influir en el comercio internacional y la actividad económica nacional. Su propósito es promover el crecimiento económico, mantener la estabilidad de precios, fomentar el empleo y garantizar el equilibrio en la balanza de pagos. Estas políticas se desarrollan a partir de instrumentos fiscales, monetarios y regulatorios, que impactan el comercio exterior y la competitividad de un país en los mercados globales.
        h5 Los objetivos de las políticas comerciales son:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Políticas macroeconómicas comerciales")
            p Buscan promover el comercio exterior, fomentando la exportación de bienes y servicios mediante incentivos y estrategias que faciliten la inserción de los productos nacionales en mercados internacionales. Todo esto se puede lograr a través de tratados comerciales, eliminación de barreras arancelarias y no arancelarias, y la implementación de incentivos fiscales para las empresas exportadoras.
    
          .div(titulo="Protección de la industria nacional")
            p Objetivo fundamental es la protección de la industria nacional, especialmente en sectores estratégicos que requieren apoyo gubernamental para desarrollarse y competir frente a productos extranjeros. Para ello, se aplican medidas como aranceles, cuotas de importación y normativas regulatorias, que limitan la entrada de bienes que puedan afectar la producción local.
    
          .div(titulo="La estabilidad del tipo de cambio")
            p Se hace necesaria para mantener el equilibrio en las transacciones internacionales y evitar fluctuaciones abruptas en la moneda nacional. Un tipo de cambio inestable puede generar incertidumbre en los mercados, afectar los costos de importación y exportación, y perjudicar la competitividad de las empresas. Para evitar estos efectos negativos, los gobiernos pueden intervenir en el mercado cambiario mediante políticas monetarias y fiscales, regulando la oferta de dinero y controlando las tasas de interés.
    
          .div(titulo="Control de la inflación y la estabilidad de precios")
            p Son objetivos necesarios para garantizar un entorno económico favorable para el comercio. Cuando los precios de los bienes y servicios suben de manera descontrolada, el poder adquisitivo de los consumidores se reduce, afectando la demanda interna y la competitividad de los productos en el extranjero. A través de una adecuada política monetaria y fiscal, los gobiernos buscan evitar que la inflación impacte negativamente en el comercio y la producción nacional, asegurando costos estables y previsibles para los empresarios y consumidores.
          .div(titulo="La generación de empleo y el desarrollo económico")
            p Son prioridades en la formulación de políticas macroeconómicas comerciales. Cuando el  entorno económico es estable y competitivo incentiva a las empresas a invertir en la producción nacional, lo que se traduce en un mayor número de empleos y un aumento en el nivel de ingresos de la población. Además, el desarrollo económico derivado del comercio permite mejorar la infraestructura, la tecnología y la capacidad productiva del país, impulsando un crecimiento sostenible en el largo plazo.
    
    h2(data-aos="fade-left") Instrumentos de las políticas macroeconómicas comerciales
    p.mb-5 Según la Organización Mundial del Comercio OMC (2012), las políticas comerciales son un conjunto de medidas que regulan la relación de un país con el comercio internacional. Estas incluyen herramientas que afectan tanto las importaciones como las exportaciones y buscan equilibrar el mercado interno con la competencia global. Conozcamos algunos de ellos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Aranceles y barreras no arancelarias
              p Uno de los instrumentos más relevantes dentro de las políticas comerciales son los aranceles y barreras no arancelarias. Los aranceles son impuestos que se aplican a los bienes importados con el propósito de encarecerlos y proteger a la industria nacional de la competencia extranjera. Pueden ser aranceles específicos (una cantidad fija por unidad de producto) o ad valorem (un porcentaje sobre el valor del bien). Por otro lado, las barreras no arancelarias incluyen regulaciones sanitarias, técnicas y ambientales, que restringen la entrada de ciertos productos al mercado interno.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acuerdos de libre comercio (ALC)
              p Son tratados bilaterales o multilaterales que buscan reducir o eliminar barreras comerciales entre países. A través de estos acuerdos, las naciones participantes establecen condiciones favorables para el intercambio de bienes y servicios, promoviendo la integración económica y aumentando la competitividad de sus productos en mercados internacionales. Ejemplos de estos acuerdos incluyen el Tratado entre México, Estados Unidos y Canadá (T-MEC), la Unión Europea (UE) y el Mercado Común del Sur (MERCOSUR).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Subsidios a la exportación
              p Otro instrumento clave dentro de las políticas comerciales, se basa en los subsidios a la exportación, que consisten en apoyos financieros del gobierno a empresas nacionales para reducir sus costos y facilitar su incursión en mercados extranjeros. Estos subsidios pueden adoptar diversas formas, como devoluciones fiscales, créditos a tasas preferenciales o financiamiento de infraestructura para facilitar la logística de exportación. Sin embargo, estos incentivos pueden generar conflictos en la competencia internacional y ser motivo de disputas comerciales en organismos como la Organización Mundial del Comercio (OMC).
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Políticas de tipo de cambio
              p Las políticas de tipo de cambio también influyen en el comercio exterior. Un país puede optar por un tipo de cambio fijo, flotante o administrado, según sus objetivos macroeconómicos. Un tipo de cambio subvaluado favorece las exportaciones al hacer que los productos nacionales sean más baratos en el exterior, mientras que un tipo de cambio sobrevaluado, puede hacer que las importaciones sean más accesibles y reducir el costo de insumos para la producción nacional. En algunos casos, los gobiernos intervienen en los mercados de divisas, para evitar fluctuaciones bruscas que puedan afectar la estabilidad comercial.
    
    h2.mb-5(data-aos="fade-left") Beneficio de las políticas comerciales

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Impulso el crecimiento económico.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aumento de la competitividad.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Generar empleo y mejorar los ingresos de la población.
    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Contribuyen a la estabilidad macroeconómica.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Transferencia de tecnología y conocimiento.
    
      

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0121-47722001000100007" target="_blank" rel="noopener noreferrer") Bonilla González, R. (2001). Política macroeconómica y sector productivo. Revista de Economía Institucional, 3(4), 141-168. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.banrep.gov.co/es/banrep-educa/econo-cimientos/politica-monetaria   " target="_blank" rel="noopener noreferrer") Banco de la república (2025) Econo-cimientos: Política monetaria.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.wto.org/spanish/tratop_s/tpr_s/s265_sum_s.pdf" target="_blank" rel="noopener noreferrer") Organización Mundial del Comercio (OMC). (2012). Examen de las políticas comerciales: Colombia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Profe de Economía (2018, 26 de marzo) Políticas macroeconómicas 1: tipos de políticas macroeconómicas [Video]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
