<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Organismos económicos internacionales'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5.align-items-center
      .col-lg-3.order-2
        figure
          img(src="@/assets/curso/tema3/1.svg", data-aos="zoom-in")
      .col-lg-9.order-1.mb-3.mb-lg-0
        p.mb-0(data-aos="fade-left") En un mundo cada vez más interconectado, los organismos económicos internacionales desempeñan un papel clave en la estabilidad financiera y el desarrollo global.
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Organismos económicos internacionales
            p.mb-4(data-aos="fade-right") En el PDF <b>Organismos económicos</b> internacionales, se analizan las principales instituciones que regulan la economía mundial, su impacto en la cooperación entre países y las estrategias que implementan para promover el crecimiento sostenible. A través del estudio de entidades como el Fondo Monetario Internacional, el Banco Mundial y la Organización Mundial del Comercio, se explora su influencia en la reducción de desigualdades, la integración comercial y la formulación de políticas económicas.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Organismos económicos internacionales.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/2.png', alt='')
    

    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] FMI
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-9.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El <b>Fondo Monetario Internacional (FMI)</b>, es una organización internacional cuyo propósito es promover la estabilidad financiera y la cooperación económica a nivel global. Fue creado en 1944 durante la <b>Conferencia de Bretton Woods</b>, como respuesta a la necesidad de establecer un sistema monetario internacional que evitara crisis económicas similares a las de las décadas anteriores. Su fundación oficial tuvo lugar en 1945, iniciando sus operaciones en 1947, con la adhesión de 29 países miembros.
        p(data-aos="fade-left") Actualmente, el FMI cuenta con 190 países miembros y continúa desempeñando un papel crucial en la estabilidad y desarrollo de la economía global.
        h5 Sus funciones son:

    .bg-full-width.bg-color-10
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 01
                p.text-center Supervisar la economía global, evaluando el desempeño de los países y brindando asesoramiento sobre políticas económicas y financieras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 02
                p.text-center Proporcionar asistencia financiera, otorgando préstamos a países que enfrentan dificultades en su balanza de pagos, con el objetivo de estabilizar sus economías.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 03
                p.text-center Fomentar la cooperación internacional, promoviendo políticas que favorezcan el crecimiento económico y la reducción de la pobreza.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 04
                p.text-center Brindar asistencia técnica y capacitación, apoyando a los países en el fortalecimiento de sus instituciones económicas y financieras.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 05
                p.text-center Realizar préstamos ocasionales a los miembros que tengan dificultades en su balanza de pagos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 06
                p.text-center Acortar la duración y disminuir el grado de desequilibrio en las balanzas de pagos de los miembros.
    
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
    
    p.mb-4 Y las actividades que realiza FMI, son:

    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Supervisión" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Supervisión
            p El Fondo Monetario Internacional (FMI), monitorea y evalúa las políticas cambiarias de los países miembros, considerando tanto el contexto económico global como la estrategia política de cada nación. Para ello, el organismo elabora y publica dos veces al año, el informe <em>World Economic Outlook</em>, en el que analiza las tendencias económicas mundiales. Además, lleva a cabo consultas anuales con cada país miembro para revisar su situación económica y recomendar posibles ajustes. En casos específicos, el FMI establece acuerdos de supervisión más estrictos, con el propósito de dar seguimiento a programas concretos. Estas intervenciones buscan, principalmente, restablecer la confianza internacional en la estabilidad económica y la capacidad de pago futuro de los países en dificultades.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/12.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Asistencia técnica" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Asistencia técnica
            p El FMI proporciona apoyo especializado a los países miembros mediante estudios detallados sobre su economía y el diseño de estrategias para fortalecer sus sistemas financieros. Su asesoramiento abarca áreas claves como la formulación e implementación de políticas monetarias y fiscales, el desarrollo y consolidación de instituciones financieras, como bancos centrales, y la mejora en la recopilación y análisis de datos estadísticos. Además, ofrece programas de capacitación dirigidos a funcionarios gubernamentales y expertos locales, con el fin de mejorar sus capacidades en la gestión económica.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/13.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Ayuda financiera" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Ayuda financiera
            p Para apoyar a los países que enfrentan dificultades económicas, el FMI otorga préstamos y créditos destinados a respaldar políticas de ajuste y reformas estructurales. Estos fondos buscan corregir desequilibrios en la balanza de pagos y estabilizar la economía de los países afectados. A cambio, los gobiernos beneficiarios suelen comprometerse a implementar medidas que fomenten la estabilidad económica y el crecimiento sostenible, asegurando así el uso eficiente de los recursos otorgados.
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/14.png', alt='', style="width: 100%;")
    
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] El Banco Mundial

    p.mb-4 El Banco Mundial es una de las instituciones financieras más influyentes en el desarrollo global, proporcionando financiamiento, asistencia técnica y apoyo a la inversión privada en países de ingresos bajos y medianos.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El Banco Mundial
            p.mb-4(data-aos="fade-right") En el PDF <b>El Banco Mundial</b>, se analizan las cinco instituciones que conforman este organismo, su impacto en el crecimiento económico y su papel en la reducción de la pobreza. A través del estudio de sus funciones y estrategias, se explora cómo el Banco Mundial contribuye a la estabilidad financiera, la inversión en infraestructura y la promoción del desarrollo sostenible a nivel global.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El Banco Mundial.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/15.png', alt='')
    
    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] OMC
    
    p.mb-4 La <b>Organización Mundial del Comercio (OMC)</b> es un organismo internacional encargado de regular y facilitar el comercio entre las naciones, promoviendo un sistema comercial abierto, predecible y libre de discriminaciones. Su principal función es garantizar que el comercio global se desarrolle de manera fluida, justa y equitativa, estableciendo reglas y normas que regulan el intercambio de bienes y servicios entre los países miembros.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/16.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-9.p-4.mb-5(data-aos="fade-left")
          p La OMC fue establecida formalmente el 1 de enero de 1995, como resultado de las negociaciones llevadas a cabo durante la Ronda de Uruguay (1986-1994) del Acuerdo General sobre Aranceles Aduaneros y Comercio (GATT, por sus siglas en inglés). Sin embargo, sus raíces se remontan a la creación del propio GATT en 1947, que surgió con el propósito de reducir barreras arancelarias y promover el comercio internacional después de la Segunda Guerra Mundial.
          p.mb-0 El GATT fue el primer acuerdo multilateral que estableció normas comerciales internacionales, pero a lo largo del tiempo se consideró insuficiente, dado que no contaba con una estructura institucional formal. Por ello, con la firma del Acuerdo de Marrakech en 1994, los países participantes decidieron reemplazar el GATT con la OMC, otorgándole un carácter permanente, una estructura institucional sólida y un mayor alcance en la regulación del comercio de bienes, servicios y propiedad intelectual.
        p(data-aos="fade-left") Actualmente, la OMC cuenta con <b>164 países miembros</b> que representan aproximadamente el 98 % del comercio mundial.
        p(data-aos="fade-left") Los principios de la OMC son:
    
    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/17.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="No discriminación")
            p La OMC establece que los países miembros no pueden otorgar un trato preferencial a un socio comercial sin extenderlo a los demás miembros, lo que garantiza igualdad de condiciones en el comercio internacional. 
            p Este principio se divide en la <b>Cláusula de la Nación Más Favorecida (NMF)</b> y el <b>Trato Nacional</b>. La NMF obliga a que cualquier ventaja concedida a un país se aplique también a todos los miembros de la OMC, evitando discriminaciones arbitrarias. Por otro lado, el Trato Nacional exige que, una vez que un producto extranjero entra en el mercado de un país, reciba el mismo trato que los productos nacionales en términos de impuestos y regulaciones. 
            p <b>Ejemplo.</b> Si un país reduce los aranceles para un producto importado desde un socio comercial, está obligado a aplicar esa misma reducción a los productos similares provenientes de cualquier otro miembro de la OMC.
          .div(titulo="Libre comercio (reducción de barreras comerciales)")
            p Este principio promueve la eliminación progresiva de obstáculos que dificulten el flujo de bienes y servicios entre países, como aranceles elevados, cuotas de importación y normativas excesivas. La reducción de estas barreras comerciales se negocia en rondas multilaterales, permitiendo a las economías integrarse mejor y acceder a mercados más amplios. La disminución de restricciones al comercio favorece la eficiencia productiva, puesto que los países pueden especializarse en aquello que producen mejor y a menor costo. 
            p <b>Ejemplo.</b> Gracias a las negociaciones en la OMC, muchos países han reducido significativamente sus aranceles sobre productos electrónicos, lo que ha permitido una mayor disponibilidad de dispositivos tecnológicos a precios más accesibles en los mercados globales.
          .div(titulo="Previsibilidad y transparencia")
            p La estabilidad en las políticas comerciales es fundamental para generar confianza entre los actores económicos. La OMC exige a sus miembros que publiquen sus normativas comerciales y notifiquen cualquier cambio en sus políticas que pueda afectar el comercio internacional. Esto evita medidas arbitrarias que perjudiquen a los inversionistas y empresarios, asegurando un entorno predecible para la toma de decisiones. Además, la organización supervisa que los países cumplan con sus compromisos a través de exámenes periódicos de sus políticas comerciales. 
            p <b>Ejemplo.</b> Un país miembro no puede subir repentinamente los aranceles a un producto sin notificarlo y sin justificarlo dentro de los términos establecidos por la OMC, lo que evita sorpresas perjudiciales para los exportadores e importadores.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/18.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Competencia leal")
            p Para evitar prácticas que distorsionen el comercio, la OMC prohíbe medidas como los subsidios excesivos, el dumping y otras formas de competencia desleal. El dumping ocurre cuando un país vende productos en el extranjero a un precio inferior al de su mercado interno o incluso por debajo del costo de producción, lo que perjudica a los productores locales del país importador. Para contrarrestar estas prácticas, la OMC permite que los países adopten medidas <em>antidumping</em> y regulaciones sobre subvenciones estatales que otorguen ventajas indebidas. 
            p <b>Ejemplo.</b> Si una empresa de un país vende acero a otro mercado a precios por debajo de su costo real de producción, el país importador puede presentar una queja ante la OMC y, si se comprueba el <em>dumping</em>, imponer aranceles adicionales a esos productos.    
          .div(titulo="Fomento del desarrollo económico")
            p La OMC reconoce que no todos los países tienen las mismas condiciones económicas y, por ello, permite a las <b>naciones en desarrollo</b> contar con plazos más amplios para implementar acuerdos comerciales y cumplir con las regulaciones. Además, promueve programas de asistencia técnica y capacitación para fortalecer la capacidad de estos países en la gestión del comercio internacional. La organización también impulsa el comercio preferencial para los países menos desarrollados, otorgándoles acceso preferente a mercados sin exigir reciprocidad inmediata. 
            p <b>Ejemplo.</b> Algunos países desarrollados eliminan aranceles para productos agrícolas provenientes de países menos desarrollados, permitiéndoles exportar con mayor facilidad y mejorar su economía.
    
    p.mb-4 Y sus funciones son las siguientes:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Supervisión y aplicación de los acuerdos comerciales
              p La OMC administra un conjunto de normas y acuerdos que rigen el comercio internacional, garantizando que los países miembros cumplan con los compromisos adquiridos. Para ello, supervisa las políticas comerciales nacionales mediante revisiones periódicas y exige que los países informen sobre cualquier cambio en sus regulaciones que pueda afectar el comercio. Además, ofrece un marco para la negociación y resolución de disputas en caso de incumplimientos. Esta función es clave para evitar barreras comerciales arbitrarias y fomentar un sistema basado en normas claras y predecibles. 
              p <b>Ejemplo.</b> Si un país impone un arancel más alto del acordado en un tratado de la OMC, otro país miembro puede solicitar su revisión y exigir el cumplimiento del acuerdo.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cooperación con otras organizaciones internacionales
              p La OMC colabora con instituciones como el Banco Mundial, el Fondo Monetario Internacional (FMI) y la Conferencia de las Naciones Unidas sobre Comercio y Desarrollo (UNCTAD) para coordinar políticas económicas globales. Esta cooperación permite abordar temas como el desarrollo sostenible, la estabilidad financiera y el impacto del comercio en el medio ambiente. 
              p <b>Ejemplo.</b> La OMC trabaja junto al Banco Mundial para facilitar financiamiento a países en desarrollo que desean mejorar su infraestructura portuaria y logística para potenciar sus exportaciones.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Foro para negociaciones comerciales
              p La OMC actúa como un espacio donde los países pueden negociar la reducción de barreras al comercio y mejorar las reglas del sistema multilateral. A través de rondas de negociaciones, los miembros acuerdan modificaciones en aranceles, subsidios, acceso a mercados y normas comerciales. Estas negociaciones buscan equilibrar los intereses de todas las naciones, fomentando un comercio más equitativo y dinámico. 
              p <b>Ejemplo.</b> La Ronda de Doha, iniciada en 2001, se centró en reducir los obstáculos comerciales para los países en desarrollo, con el objetivo de mejorar su acceso a los mercados de bienes y servicios.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Supervisión de la transparencia en las políticas comerciales
              p La OMC exige que sus miembros publiquen y comuniquen regularmente sus medidas comerciales para garantizar que los demás países conozcan sus políticas y regulaciones. La transparencia es fundamental para evitar sorpresas y conflictos en el comercio internacional. Además, la OMC realiza revisiones periódicas de las políticas comerciales de los países, especialmente de aquellos con mayor impacto en el comercio mundial. 
              p <b>Ejemplo.</b> China, al ingresar a la OMC en 2001, tuvo que modificar varias de sus prácticas comerciales para cumplir con los requisitos de transparencia y notificación de políticas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Asistencia técnica y apoyo a países en desarrollo
              p La OMC reconoce que los países en desarrollo enfrentan dificultades para competir en el comercio internacional, por lo que ofrece capacitación, asesoramiento y asistencia técnica. A través de programas de formación y financiamiento, se ayuda a estos países a mejorar sus capacidades comerciales, negociar acuerdos y fortalecer sus instituciones. También se promueve un trato especial y diferenciado para que puedan acceder a mercados en condiciones favorables. 
              p <b>Ejemplo.</b> La OMC impulsa el programa "Ayuda para el Comercio", que apoya a los países menos desarrollados en la mejora de su infraestructura y capacidad de exportación.

    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/24.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mecanismo de solución de diferencias comerciales
              p Cuando un país considera que otro ha violado una norma comercial, puede presentar una queja ante la OMC. El organismo proporciona un mecanismo estructurado de resolución de disputas que permite a los países afectados defender sus intereses. A través de paneles de expertos y un órgano de apelación, la OMC analiza los casos y emite resoluciones vinculantes que los países deben acatar. Si un país no cumple con el fallo, la OMC permite la imposición de represalias comerciales. 
              p <b>Ejemplo.</b> En el 2019, la OMC autorizó a Estados Unidos a imponer aranceles a la Unión Europea debido a los subsidios ilegales otorgados a la aerolínea Airbus, lo que perjudicaba a Boeing.

    #t_3_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.4] El papel de la OMC, el Banco Mundial y el FMI en el desarrollo económico

    p.mb-4 Las organizaciones internacionales desempeñan un papel fundamental en el desarrollo económico global, facilitando el comercio, el financiamiento y la estabilidad macroeconómica.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") El papel de la OMC, el Banco Mundial y el FMI en el desarrollo económico
            p.mb-4(data-aos="fade-right") En el PDF <b>El papel de la OMC Banco Mundial y FMI</b>, se analiza cómo estas instituciones contribuyen a la reducción de barreras comerciales, el financiamiento de proyectos de infraestructura y la estabilidad del sistema financiero internacional. A través del estudio de sus funciones y desafíos, se examina su impacto en el crecimiento económico de los países y en la formulación de estrategias para el desarrollo sostenible.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> El papel de la OMC, el Banco Mundial y el FMI en el desarrollo económico.
    
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema3/25.png', alt='')



    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/articulo.oa?id=279162403008" target="_blank" rel="noopener noreferrer") Nemiña, P., & Larralde, J. (2018). Etapas históricas de la relación entre el Fondo Monetario Internacional y América Latina (1944-2015). América Latina en la Historia Económica. Revista de Investigación, 25(1). 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.imf.org/external/pubs/ft/exrp/what/spa/whats.pdf " target="_blank" rel="noopener noreferrer") Fondo Monetario Internacional. (s.f.). Guía del FMI: ¿Qué es el Fondo Monetario Internacional? FMI.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/lw2uhek-Pto?si=JRDLbh7JqCiMybo1 " target="_blank" rel="noopener noreferrer") YouWit del Tecnológico de Monterrey (2017, 4 de mayo) ¿Cuál es la diferencia entre FMI y BM? [Video]. Youtube 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/pxgBCF45XXY?si=JXk42UVll-V_BBVu" target="_blank" rel="noopener noreferrer") Los 7 datos sobre (2023, 17 de octubre) Banco Mundial: IMPACTO y CONTROVERSIA [Video]. Youtube 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
