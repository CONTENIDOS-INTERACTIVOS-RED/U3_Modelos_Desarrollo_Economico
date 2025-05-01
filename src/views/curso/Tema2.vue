<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Política fiscal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") La política fiscal se refiere al conjunto de decisiones y acciones que toma el gobierno en relación con la recaudación de impuestos y el gasto público, con el objetivo de estabilizar la economía y fomentar el desarrollo. Se basa en la intervención del Estado en la economía, para corregir desequilibrios y promover el bienestar de la sociedad.
        p.mb-5(data-aos="fade-left") El objetivo fundamental de la política fiscal es lograr un equilibrio entre el crecimiento económico, la estabilidad de precios y el empleo. Para ello, el gobierno puede aumentar o disminuir impuestos y modificar sus niveles de gasto, dependiendo de la situación económica.

    
        .bg-color-1.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La política fiscal es una herramienta fundamental utilizada por los gobiernos para influir en la economía. Su aplicación varía según  la situación económica del país. Dos enfoques principales son la política fiscal <b>expansiva</b>, utilizada en tiempos de recesión o bajo crecimiento, y la <b>restrictiva o contractiva</b>, aplicada cuando hay un sobrecalentamiento de la economía que puede generar inflación. A continuación, se profundiza en cada una de ellas.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Política fiscal expansiva

    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3
        p.mb-4 La política fiscal expansiva se utiliza cuando la economía experimenta:

        div.row.justify-content-center.align-items-stretch.mb-3
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/3.svg" alt="" style="width: 90px")
              h5.text-center Recesión o contracción económica
              p.mb-0.text-center Disminución del Producto Interno Bruto (PIB) durante dos trimestres consecutivos o más.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/4.svg" alt="" style="width: 90px")
              h5.text-center Desempleo elevado
              p.mb-0.text-center Muchas personas están sin trabajo, lo que reduce el consumo y la demanda agregada.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/5.svg" alt="" style="width: 90px")
              h5.text-center Baja inversión empresarial
              p.mb-0.text-center Las empresas no invierten por la incertidumbre económica o la falta de demanda.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.svg" alt="" style="width: 90px")
              h5.text-center Deflación o bajo nivel de inflación
              p.mb-0.text-center Caída de precios que desincentiva la producción y la inversión.
    
    p.mb-4 Para estimular la economía, el gobierno implementa medidas como:

    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/7.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="0%" y="63%" numero="+")
                h5 01. Aumento del gasto público
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Inversión en infraestructura (carreteras, puentes, hospitales, escuelas) para generar empleo y dinamizar la economía.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Aumento en salarios del sector público o subsidios para fomentar el consumo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Programas sociales para apoyar a sectores vulnerables y mantener el poder adquisitivo.
    
              .bg-color-white.box-shadow.p-3(x="87%" y="23%" numero="+")
                h5 02. Reducción de impuestos
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 A personas. Reducción del impuesto sobre la renta para que los ciudadanos tengan más dinero disponible.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 A empresas. Disminución de impuestos corporativos para incentivar la inversión y la generación de empleo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Al consumo. Rebajas en el IVA o impuestos especiales para incentivar la compra de bienes y servicios.
    
              .bg-color-white.box-shadow.p-3(x="100%" y="63%" numero="+")
                h5 03. Políticas de incentivo a la inversión
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Créditos a bajas tasas de interés para que las empresas puedan expandirse.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 Subsidios o incentivos fiscales a sectores estratégicos.
    
    h2.mb-5(data-aos="fade-left") Ejemplo real de política fiscal expansiva
    

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/8.svg", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Durante la crisis financiera de 2008 - 2009, muchos países adoptaron políticas fiscales expansivas. Estados Unidos, bajo el plan de estímulo del gobierno de Barack Obama, aumentó el gasto público en infraestructura y brindó incentivos fiscales para estimular el crecimiento. 
    
    h2.mb-5(data-aos="fade-left") Posibles riesgos o desventajas  

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.bg-color-8
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-4.p-lg-0
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Déficit fiscal.</b> Si el gobierno gasta más de lo que recauda, puede generar un aumento en la deuda pública.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Inflación.</b> Si la política expansiva es excesiva, puede haber un aumento generalizado de precios.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Efecto sobre el tipo de cambio.</b> Un mayor gasto público puede devaluar la moneda y afectar el comercio exterior.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Política fiscal restrictiva o contractiva

    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3
        p.mb-4 Se implementa cuando la economía experimenta:

        div.row.justify-content-center.align-items-stretch.mb-3
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.svg" alt="" style="width: 90px")
              h5.text-center Crecimiento económico excesivo
              p.mb-0.text-center Cuando la demanda supera la capacidad productiva del país.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/11.svg" alt="" style="width: 90px")
              h5.text-center Alta inflación
              p.mb-0.text-center Un aumento generalizado de precios que reduce el poder adquisitivo de los ciudadanos.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.svg" alt="" style="width: 90px")
              h5.text-center Déficit fiscal insostenible
              p.mb-0.text-center Cuando el gobierno gasta mucho más de lo que recauda, lo que puede generar crisis de deuda.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.svg" alt="" style="width: 90px")
              h5.text-center Burbujas económicas
              p.mb-0.text-center Excesivo crecimiento en sectores como bienes raíces o bolsa de valores, que pueden colapsar repentinamente.
    
    p.mb-5 Para enfriar la economía y evitar desequilibrios, el gobierno adopta medidas como:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Reducción del gasto público" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Reducción del gasto público
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Disminución en inversiones estatales en infraestructura.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Recortes en el gasto en salarios públicos y programas sociales.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Eliminación o reducción de subsidios.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/14.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Aumento de impuestos" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Aumento de impuestos
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>A personas.</b> Subida del impuesto sobre la renta para reducir el dinero disponible y disminuir el consumo.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>A empresas.</b> Incremento en tributos corporativos para reducir la inversión excesiva y frenar el sobrecalentamiento de la economía.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 <b>Al consumo.</b> Incremento en el IVA o en impuestos especiales para desalentar el gasto y controlar la inflación.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/15.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Medidas de control del déficit y la deuda" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Medidas de control del déficit y la deuda
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Reducción del endeudamiento público.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right.bg-color-7
                p.mb-0 Pago de deuda para estabilizar las finanzas del país.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/16.png', alt='', style="width: 100%;")
    
    h2(data-aos="fade-left") Ejemplo real de política fiscal restrictiva
    p En la década de 1980, países como México aplicaron medidas de austeridad recomendadas por el Fondo Monetario Internacional (FMI) para reducir el déficit fiscal y controlar la inflación. Se incrementaron impuestos y se redujo el gasto público, aunque esto también tuvo efectos negativos en el crecimiento y el empleo.
    h5.mb-5 Posibles riesgos o desventajas:

    .bg-full-width.bg-color-8.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center.bg-color-8
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.p-4.p-lg-0
                ul.lista-ul--color
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Desaceleración del crecimiento económico.</b> Puede frenar la producción y reducir las oportunidades de empleo.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Aumento del desempleo.</b> La reducción del gasto público puede llevar a despidos en el sector público y menos contrataciones en el sector privado.
                  li.mb-3.d-flex
                    i.far.fa-arrow-alt-circle-right.bg-color-7
                    p.mb-0 <b>Mayor carga fiscal sobre la población.</b> El aumento de impuestos puede reducir el consumo y afectar el nivel de vida.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 
    
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Herramientas de la política fiscal
    
    p.mb-4 La política fiscal se implementa a través de dos grandes instrumentos: <b>los ingresos públicos</b> (recaudación de recursos por parte del Estado) y <b>los gastos públicos</b> (asignación de estos recursos a diferentes áreas de la economía). Dentro de estos instrumentos existen diversas herramientas que permiten a los gobiernos intervenir en la economía, con el objetivo de promover el crecimiento, estabilizar los ciclos económicos y garantizar la equidad social.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Herramientas de la política fiscal
            p.mb-4(data-aos="fade-right") En el PDF <b>Herramientas de la política fiscal</b>, se estudian los principales instrumentos utilizados por los gobiernos para recaudar ingresos, gestionar el gasto público y regular la economía a través de incentivos y normativas. Se analizan los diferentes tipos de impuestos, el endeudamiento público, las estrategias de inversión y los subsidios, destacando su impacto en el crecimiento económico y el bienestar social.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas de la política fiscal.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/18.png', alt='')

    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Impacto de la política fiscal en el desarrollo económico
    
    p.mb-4 El impacto positivo de la política fiscal en el desarrollo económico se manifiesta en su capacidad para estimular el crecimiento, fomentar la inversión y promover la equidad social. Al implementar medidas expansivas, como la reducción de impuestos o el aumento del gasto público en infraestructura, educación y salud, se incentiva el consumo y se generan empleos, lo que a su vez impulsa la demanda interna y fortalece el capital humano. 

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Este tipo de políticas permiten redistribuir la riqueza mediante sistemas tributarios progresivos y programas de asistencia social, reduciendo las brechas de desigualdad y facilitando el acceso a oportunidades que potencian el desarrollo a largo plazo.
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/21.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, la inversión en proyectos de largo plazo, no solo moderniza la infraestructura y mejora la competitividad del país en el mercado global, sino que también sienta las bases para un crecimiento sostenible y resiliente frente a crisis económicas.
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/22.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Por otro lado, los posibles impactos negativos de la política fiscal pueden materializarse cuando se implementan medidas que, sin un adecuado control y equilibrio, conducen a desequilibrios macroeconómicos y a un crecimiento insostenible. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Por ejemplo, un exceso de endeudamiento público para financiar políticas expansivas o un incremento desproporcionado en el gasto pueden generar déficits fiscales elevados, lo que a largo plazo se traduce en una acumulación de deuda y dependencia del financiamiento externo. Asimismo, una reducción excesiva de la carga impositiva puede disminuir los ingresos estatales, afectando la capacidad del gobierno para invertir en sectores fundamentales, lo que puede derivar en una menor calidad de los servicios públicos y en una ampliación de las desigualdades sociales. 
    
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 Además, la aplicación inadecuada de estas políticas puede desencadenar presiones inflacionarias, distorsionar la asignación de recursos y generar incertidumbre en los mercados financieros, lo que a su vez desincentiva la inversión privada y pone en riesgo la estabilidad económica del país.

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=282176350008" target="_blank" rel="noopener noreferrer") Ojeda Joya, J. N., & Guzmán, Ó. (2022). Multiplicadores fiscales y política monetaria en Colombia. Un análisis contrafactual. Cuadernos de Economía, 41(87). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=11820100004" target="_blank" rel="noopener noreferrer") Ramírez Cedillo, E. (2006). Por una política fiscal contracíclica. Problemas del Desarrollo. Revista Latinoamericana de Economía, 37(147). 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.imf.org/external/pubs/ft/fandd/spa/2009/06/pdf/basics.pdf " target="_blank" rel="noopener noreferrer") Fondo Monetario Internacional. (2009). ¿Qué es la política fiscal? FMI.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/FOQAQpOyl9w?si=rijc188rwxLKnlkn " target="_blank" rel="noopener noreferrer") Profe de Economía (2018, 8 de abril) Políticas macroeconómicas 2: política fiscal [Video]. Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
