<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p El desarrollo económico de un país está estrechamente ligado a las políticas implementadas por los gobiernos y a la intervención de organismos internacionales.
              p.mb-0 En esta unidad, se explorará el papel fundamental de las políticas macroeconómicas y los organismos económicos internacionales, en la promoción del crecimiento sostenible y la equidad social.      

        p(data-aos="fade-left") Mediante el estudio de las políticas y organismos económicos, se puede determinar la estabilidad financiera, la competitividad de los países y las oportunidades de inversión; por lo tanto, conocer cómo funcionan herramientas como la política monetaria, fiscal y comercial, así como el rol de entidades como el Fondo Monetario Internacional (FMI), el Banco Mundial y la Organización Mundial del Comercio (OMC), permite a los estudiantes entender mejor el contexto en el que operan las empresas y los mercados. Además, el análisis de los acuerdos de libre comercio ayuda a comprender sus implicaciones en el crecimiento y la integración económica.

    .bg-full-width.bg-color-2
      .px-4.px-md-5.pb-md-3
        p.mb-4 Esta unidad se estructura en cuatro grandes bloques temáticos: primero, se abordará las políticas macroeconómicas, incluyendo las monetarias, fiscales y comerciales, luego, profundizarán en la política fiscal y sus herramientas, posteriormente, analizarán el papel de los organismos económicos internacionales en el desarrollo económico y finalmente, estudiarán los acuerdos de libre comercio, su impacto y ejemplos relevantes.
        p.mb-5 Al finalizar esta unidad, los estudiantes serán capaces de:

        div.row.justify-content-center.align-items-stretch.mb-3
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/3.svg" alt="" style="width: 90px")
              p.mb-0.text-center Analizar el impacto de las políticas macroeconómicas y el papel de los organismos internacionales en el desarrollo económico. 
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
              p.mb-0.text-center Además, aplicarán este conocimiento para diseñar estrategias que fomenten el crecimiento sostenible y la equidad dentro del contexto empresarial y social.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
              p.mb-0.text-center Tomar decisiones informadas en su vida profesional y contribuir al desarrollo económico desde su campo de especialización.
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Se espera que los estudiantes participen activamente en foros de discusión, análisis de casos y actividades prácticas que les permitan aplicar los conocimientos adquiridos. Para un mejor aprovechamiento de la unidad, es recomendable contar con nociones básicas de economía y estar al tanto de la actualidad económica global.
      

</template>
