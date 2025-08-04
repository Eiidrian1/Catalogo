const productos = [
 {
  nombre: "PAÑITOS HÚMEDOS X100",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Limpieza rápida y delicada! Estos pañitos húmedos son suaves, resistentes y perfectos para el día a día. Paquete con 100 unidades.",
  precios: {
    "1": 4.95,
    "3": 3.95,
    "6": 3.75,
  },
  imagen: "Img/Img1.jpg"
},
{
  nombre: "PIANITO",
  categoria: "Juguetes / Regalos",
  descripcion: "¡La música empieza aquí! Un mini pianito ideal para que los más pequeños se diviertan y estimulen su creatividad.",
  precios: {
    "1": 8.95,
  },
  imagen: "Img/Img2.jpg"
},
{
  nombre: "FIAMBRERA TÉRMICA",
  categoria: "Hogar / Cocina",
  descripcion: "¡Lleva tu almuerzo siempre caliente! Esta fiambrera térmica conserva el calor y es perfecta para la oficina, colegio o viajes.",
  precios: {
    "1": 8.95,
    "3": 7.95,
  },
  imagen: "Img/Imagen3.jpg"
},
{
  nombre: "MINI ATOMIZADOR KWAI",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Refresca tu rostro al instante. El mini atomizador Kawaii es recargable y portátil, ideal para llevar a todas partes.",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: "Img/Imagen4.jpg"
},
{
  nombre: "UNGÜENTO DE CANNABIS",
  categoria: "Belleza / Cosmética",
  descripcion: "Alivia dolores y relaja tus músculos con este poderoso ungüento natural de cannabis. ¡Tu aliado para el descanso!",
  precios: {
    "1": 4.95,
    "3": 3.25,
    "5": 2.95,
  },
  imagen: "Img/Imagen5.jpg"
},
{
  nombre: "PAPEL TISSUE, 300 HOJAS APROX.",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suave, absorbente y rendidor. Ideal para el hogar u oficina con 300 hojas de comodidad.",
  precios: {
    "1": 2.95,
    "3": 1.85,
    "6": 1.55,
  },
  imagen: "Img/Imagen6.jpg"
},
{
  nombre: "ROMPE CHORRO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Ahorra agua y evita salpicaduras! Este rompe chorro se adapta fácilmente a cualquier grifo.",
  precios: {
    "1": 3.95,
    "3": 2.15,
    "6": 1.85,
  },
  imagen: "Img/Imagen7.jpg"
},
{
  nombre: "BURLETE",
  categoria: "Hogar / Cocina",
  descripcion: "Aísla el polvo, insectos y el ruido. El burlete adhesivo es ideal para puertas y ventanas.",
  precios: {
    "1": 4.95,
    "3": 3.25,
  },
  imagen: "Img/Imagen8.jpg"
},
{
  nombre: "SET DE 12 GANCHOS PARA ROPA / CLOSET",
  categoria: "Organización / Almacenamiento",
  descripcion: "Mantén tu closet ordenado con este set de 12 ganchos resistentes y prácticos.",
  precios: {
    "1": 5.95,
    "3": 4.85,
  },
  imagen: "Img/Imagen9.jpg"
},
{
  nombre: "BALDE CANCHERO + VASO TOMATODO \"PITUFOS\"",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Diversión y estilo para los más peques! Incluye balde canchero y vaso tomatodo con diseño de Los Pitufos.",
  precios: {
    "1": 6.95,
  },
  imagen: "Img/Imagen10.jpg"
},
{
  nombre: "CURITAS X 100",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Siempre prevenido! Pack económico de 100 curitas adhesivas para cortes y raspones. Indispensables en casa, oficina o viajes.",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: ""
},
{
  nombre: "CANASTILLA PLEGABLE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza con estilo. Esta canastilla se pliega fácilmente cuando no la usas, ahorrando espacio y manteniendo todo en orden.",
  precios: {
    "1": 3.95,
  },
  imagen: ""
},
{
  nombre: "LIMPIADOR MULTIUSOS",
  categoria: "Hogar / Cocina",
  descripcion: "Poder de limpieza en tus manos. Este limpiador multiusos elimina grasa, suciedad y deja todo reluciente. ¡Imprescindible!",
  precios: {
    "1": 4.95,
    "3": 3.95,
  },
  imagen: ""
},
{
  nombre: "ESCURRIDOR DE ACERO",
  categoria: "Hogar / Cocina",
  descripcion: "Escurre tus platos con elegancia. Fabricado en acero resistente, combina funcionalidad y diseño moderno para tu cocina.",
  precios: {
    "1": 6.95,
    "3": 5.95,
  },
  imagen: ""
},
{
  nombre: "COMEDERO + BEBEDERO DE MASCOTA",
  categoria: "Mascotas",
  descripcion: "¡Comodidad para tu engreído! Combo práctico de comedero y bebedero para mantener a tu mascota feliz y bien alimentada.",
  precios: {
    "1": 4.95,
    "3": 3.95,
    "6": 3.65,
  },
  imagen: ""
},
{
  nombre: "MINI CÁMARA ESPÍA",
  categoria: "Electrónica / Gadgets",
  descripcion: "Discreta y potente. Esta mini cámara espía graba video y audio en alta calidad. Ideal para seguridad o vigilancia personal.",
  precios: {
    "1": 9.95,
  },
  imagen: ""
},
{
  nombre: "GUIRNALDA DECORATIVA CORAZÓN",
  categoria: "Decoración / Fiesta",
  descripcion: "Dale un toque romántico a tus espacios. Esta guirnalda con corazones es perfecta para decorar cuartos, fiestas o regalos.",
  precios: {
    "1": 5.95,
    "3": 4.95,
  },
  imagen: ""
},
{
  nombre: "AUDÍFONO P9",
  categoria: "Electrónica / Gadgets",
  descripcion: "Sonido envolvente y diseño moderno. El audífono P9 te ofrece calidad inalámbrica para música, llamadas y más.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 100 GUANTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protege tus manos en todo momento. Pack de 100 guantes desechables ideales para limpieza, cocina o cuidado personal.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE PEGATINAS ANTIRAYADURAS",
  categoria: "Hogar / Cocina",
  descripcion: "¡Despídete de los rayones! Coloca estas pegatinas en muebles o electrodomésticos para proteger tus superficies favoritas.",
  precios: {},
  imagen: ""
},
{
  nombre: "ORGANIZADOR DE CALZADO",
  categoria: "Organización / Almacenamiento",
  descripcion: "Ahorra espacio y mantén tus zapatos en orden con este práctico organizador. Ideal para clósets o entradas.",
  precios: {},
  imagen: ""
},
{
  nombre: "ORGANIZADOR DE ESCRITORIO",
  categoria: "Organización / Almacenamiento",
  descripcion: "Dile adiós al desorden. Este organizador mantiene tus útiles, papeles y gadgets siempre a la mano.",
  precios: {},
  imagen: ""
},
{
  nombre: "MOLDE DE SILICONA",
  categoria: "Hogar / Cocina",
  descripcion: "Ideal para repostería creativa. Molde de silicona antiadherente para hacer figuras dulces con estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "ENCENDEDOR INFINITO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Olvídate de los fósforos! Este encendedor recargable es resistente al viento y funciona sin gas ni combustible.",
  precios: {},
  imagen: ""
},
{
  nombre: "ASPIRADORA DE MANO PARA ÁCAROS",
  categoria: "Hogar / Cocina",
  descripcion: "Elimina polvo y ácaros fácilmente. Esta aspiradora portátil es ideal para colchones, almohadas y superficies delicadas.",
  precios: {},
  imagen: ""
},
{
  nombre: "KIT VIAJERO",
  categoria: "Varios",
  descripcion: "Todo lo que necesitas para tu viaje en un solo kit: cómodo, práctico y compacto. ¡Listo para la aventura!",
  precios: {},
  imagen: ""
},
{
  nombre: "TAZA GAMER",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Para los verdaderos gamers! Esta taza con diseño único es perfecta para tus sesiones de juego con café o chocolate.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 3 ORGANIZADORES",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza todo con estilo. Este set de 3 organizadores es ideal para ropa interior, cosméticos o accesorios.",
  precios: {},
  imagen: ""
},
{
  nombre: "ESTANTE ORGANIZADOR DE MICROONDAS",
  categoria: "Hogar / Cocina",
  descripcion: "Aprovecha cada espacio en tu cocina. Este estante metálico sostiene el microondas y organiza utensilios a la vez.",
  precios: {},
  imagen: ""
},
{
  nombre: "ESTANTE DE COCINA",
  categoria: "Hogar / Cocina",
  descripcion: "Práctico y resistente. Mantén tus condimentos, platos o accesorios organizados y siempre al alcance.",
  precios: {},
  imagen: ""
},
{
  nombre: "CHUPA PANZA",
  categoria: "Belleza / Cosmética",
  descripcion: "¡Reduce medidas al instante! Este gel reafirmante ayuda a tonificar la zona abdominal y estilizar tu figura.",
  precios: {},
  imagen: ""
},
{
  nombre: "CÁPSULAS x100 - BIOTINA",
  categoria: "Belleza / Cosmética",
  descripcion: "Fortalece tu cabello, piel y uñas. Suplemento de biotina en cápsulas, con 100 unidades por frasco.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 10 ESPEJOS ADHESIVOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Decora con estilo moderno. Espejos adhesivos fáciles de instalar para dar profundidad y brillo a tus espacios.",
  precios: {},
  imagen: ""
},
{
  nombre: "MANZANA ACRÍLICA SIN LETRAS",
  categoria: "Decoración / Fiesta",
  descripcion: "Una pieza decorativa elegante. Esta manzana acrílica es ideal para regalos, escritorios o espacios creativos.",
  precios: {},
  imagen: ""
},
{
  nombre: "BOLSA DE 144 GANCHOS PINZA PARA ROPA",
  categoria: "Organización / Almacenamiento",
  descripcion: "Gran pack para el hogar. 144 ganchos pinza ideales para colgar ropa, accesorios o sujetar prendas delicadas.",
  precios: {},
  imagen: ""
},
{
  nombre: "TISSUE 1200 HOJAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Tissue extra rendidor. Suavidad y resistencia en un solo producto. Ideal para el hogar o la oficina.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE PLUMÓN DOBLE TRAZO",
  categoria: "Escolar / Papelería",
  descripcion: "¡Doble creatividad! Plumones con punta doble para trazos finos y gruesos. Colores intensos y duraderos.",
  precios: {},
  imagen: ""
},
{
  nombre: "TAPETE CAPYBARA",
  categoria: "Hogar / Cocina",
  descripcion: "Dale estilo a tu entrada con este adorable tapete de capibara. Suave, resistente y antideslizante.",
  precios: {},
  imagen: ""
},
{
  nombre: "GORRO POM POM",
  categoria: "Ropa / Accesorios",
  descripcion: "Calidez con estilo. Gorro tejido con pompones, ideal para el invierno o para looks divertidos.",
  precios: {},
  imagen: ""
},
{
  nombre: "CONTENEDOR DE CEREALES",
  categoria: "Hogar / Cocina",
  descripcion: "Mantén tus cereales frescos y bien organizados. Práctico, hermético y fácil de usar en cualquier cocina.",
  precios: {},
  imagen: ""
},
{
  nombre: "REBANADOR",
  categoria: "Hogar / Cocina",
  descripcion: "Haz cortes perfectos. Este rebanador es ideal para frutas, verduras y más, con seguridad y precisión.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK DE 12 VINCHAS",
  categoria: "Ropa / Accesorios",
  descripcion: "Colores para cada día. Set de 12 vinchas elásticas, cómodas y perfectas para peinados o uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "SENCILLERO",
  categoria: "Organización / Almacenamiento",
  descripcion: "Lleva tu cambio siempre a la mano. Práctico sencillero compacto para bolsos, mochilas o el auto.",
  precios: {},
  imagen: ""
},
{
  nombre: "CHAL",
  categoria: "Ropa / Accesorios",
  descripcion: "Elegancia ligera. Chal suave y versátil ideal para climas frescos o complementar cualquier look.",
  precios: {},
  imagen: ""
},
{
  nombre: "GLOBO BOUQUET - PAPA",
  categoria: "Decoración / Fiesta",
  descripcion: "Sorprende a papá con estilo. Bouquet de globos con temática especial para el Día del Padre.",
  precios: {},
  imagen: ""
},
{
  nombre: "GLOBO FELIZ DÍA PAPA",
  categoria: "Decoración / Fiesta",
  descripcion: "Un detalle festivo que alegra el día. Globo decorativo con mensaje especial para papá.",
  precios: {},
  imagen: ""
},
{
  nombre: "COLLAR EQUIPO",
  categoria: "Ropa / Accesorios",
  descripcion: "Muestra tu pasión por tu equipo. Collar con dije deportivo, ideal como regalo o uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "NOTITAS IMANTADAS PARA REFRI",
  categoria: "Hogar / Cocina",
  descripcion: "Organiza tus pendientes con estilo. Notas adhesivas con imán para colocar en refrigeradores u otras superficies metálicas.",
  precios: {},
  imagen: ""
},
{
  nombre: "KIT DE MANICURE",
  categoria: "Belleza / Cosmética",
  descripcion: "Uñas siempre perfectas. Kit completo con herramientas esenciales para tu cuidado personal en casa o de viaje.",
  precios: {},
  imagen: ""
},
{
  nombre: "GUANTES TOUCH",
  categoria: "Ropa / Accesorios",
  descripcion: "¡Tecnología al alcance de tus dedos! Guantes cálidos compatibles con pantallas táctiles. Ideal para invierno.",
  precios: {},
  imagen: ""
},
{
  nombre: "CARRUSEL MUSICAL",
  categoria: "Juguetes / Regalos",
  descripcion: "Un regalo encantador. Carrusel decorativo que gira al ritmo de una dulce melodía, perfecto para decorar o regalar.",
  precios: {},
  imagen: ""
},
{
  nombre: "GORRO AESTHETIC",
  categoria: "Ropa / Accesorios",
  descripcion: "¡Dale estilo a tu outfit! Gorro moderno con diseño aesthetic, ideal para días fríos o looks urbanos.",
  precios: {},
  imagen: ""
},
{
  nombre: "BOLSO CORAZÓN",
  categoria: "Ropa / Accesorios",
  descripcion: "Tierno y a la moda. Bolso en forma de corazón con correa ajustable, ideal para salidas casuales o regalar.",
  precios: {},
  imagen: ""
},
{
  nombre: "CHUPÓN ALIMENTADOR CON REPUESTO",
  categoria: "Hogar / Cocina",
  descripcion: "Alimentación segura para bebés. Chupón de silicona con orificios y repuesto, ideal para frutas blandas.",
  precios: {},
  imagen: ""
},
{
  nombre: "MINI TELESCOPIO",
  categoria: "Juguetes / Regalos",
  descripcion: "Explora el mundo desde cerca. Mini telescopio compacto y portátil, ideal para niños curiosos o actividades al aire libre.",
  precios: {},
  imagen: ""
},
{
  nombre: "COLLAR PURE LOVE",
  categoria: "Ropa / Accesorios",
  descripcion: "Un símbolo de cariño. Collar con diseño delicado que representa el amor puro. Perfecto como regalo.",
  precios: {},
  imagen: ""
},
{
  nombre: "TAPA SOL CON LICENCIA",
  categoria: "Ropa / Accesorios",
  descripcion: "Protección con estilo. Tapa sol con diseño licenciado para niños, ideal para salidas al aire libre.",
  precios: {},
  imagen: ""
},
{
  nombre: "LAPICERO DOBLE PUNTA",
  categoria: "Escolar / Papelería",
  descripcion: "¡Dos funciones en uno! Lapicero con doble punta para escribir con precisión y comodidad.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 5 FUNDAS PARA CEPILLO DE DIENTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Protege tus cepillos con estilo. Set de 5 fundas plásticas, ideales para viajes o mantener la higiene en casa.",
  precios: {},
  imagen: ""
},
{
  nombre: "PANTUFLAS MEDIAS",
  categoria: "Ropa / Accesorios",
  descripcion: "Comodidad total para el hogar. Pantuflas tipo media con suela antideslizante y diseños adorables.",
  precios: {},
  imagen: ""
},
{
  nombre: "MOLDE PARA GOMITAS",
  categoria: "Hogar / Cocina",
  descripcion: "Haz tus propias gomitas en casa. Molde de silicona reutilizable con figuras divertidas y fácil de desmoldar.",
  precios: {},
  imagen: ""
},
{
  nombre: "CORTADOR DE PASTILLA",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Corte exacto y seguro. Herramienta compacta para dividir pastillas con precisión y sin esfuerzo.",
  precios: {},
  imagen: ""
},
{
  nombre: "FOCO FIESTA",
  categoria: "Decoración / Fiesta",
  descripcion: "Ilumina la diversión. Foco multicolor que proyecta luces giratorias para ambientar cualquier celebración.",
  precios: {},
  imagen: ""
},
{
  nombre: "JABONERA DE LUJO",
  categoria: "Hogar / Cocina",
  descripcion: "Un toque elegante en tu baño. Jabonera resistente con diseño moderno, ideal para el hogar u oficina.",
  precios: {},
  imagen: ""
},
{
  nombre: "CARGADOR TIPO C",
  categoria: "Electrónica / Gadgets",
  descripcion: "Carga rápida y confiable. Cable tipo C compatible con múltiples dispositivos. Resistente y duradero.",
  precios: {},
  imagen: ""
},
{
  nombre: "MUÑEQUITO PARA CELULAR",
  categoria: "Electrónica / Gadgets",
  descripcion: "¡Diversión en miniatura! Soporte decorativo para celular con diseño de muñequito. Práctico y adorable.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK DE 10 PEGA MOSCAS",
  categoria: "Hogar / Cocina",
  descripcion: "Despídete de los insectos. Pack de 10 trampas adhesivas para moscas, práctico, higiénico y fácil de usar.",
  precios: {},
  imagen: ""
},
{
  nombre: "PARCHE DE CANNABIS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Alivio natural. Parche con extracto de cannabis para molestias musculares y relajación localizada.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 8 PLATOS OSITO + BASE",
  categoria: "Hogar / Cocina",
  descripcion: "Comidas divertidas para los peques. Set de platos con forma de osito y base antideslizante, ideal para niños.",
  precios: {},
  imagen: ""
},
{
  nombre: "BLÍSTER DE 12 PARES DE ARETES",
  categoria: "Ropa / Accesorios",
  descripcion: "Variedad y estilo. Blíster con 12 pares de aretes para cambiar de look todos los días.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 50 GANCHOS ADHESIVOS DE COLORES",
  categoria: "Organización / Almacenamiento",
  descripcion: "Coloca y cuelga sin perforar. Set colorido de ganchos adhesivos resistentes y reutilizables.",
  precios: {},
  imagen: ""
},
{
  nombre: "JUGUETE RESORTE RAINBOW",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Diversión sin fin! Juguete resorte con colores arcoíris, ideal para jugar en escaleras o mesas.",
  precios: {},
  imagen: ""
},
{
  nombre: "VOLCÁN LANZA DINO",
  categoria: "Juguetes / Regalos",
  descripcion: "Diversión jurásica. Volcán sorpresa que lanza un pequeño dinosaurio al activarse. ¡Sorprendente y entretenido!",
  precios: {},
  imagen: ""
},
{
  nombre: "LENTES DE SOL 2025",
  categoria: "Ropa / Accesorios",
  descripcion: "Protección y estilo moderno. Lentes de sol con diseño actual, perfectos para cualquier ocasión.",
  precios: {},
  imagen: ""
},
{
  nombre: "FORRO NAVIDEÑO PARA SILLA",
  categoria: "Decoración / Fiesta",
  descripcion: "Decora con espíritu navideño. Forro para silla con diseños festivos, ideal para cenas y reuniones familiares.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK MASITAS CISNE",
  categoria: "Juguetes / Regalos",
  descripcion: "Diversión creativa para niños. Masitas moldeables con temática de cisne, perfectas para jugar y modelar.",
  precios: {},
  imagen: ""
},
{
  nombre: "JUEGO TWISTER",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Gira, estírate y ríe! Juego clásico que pone a prueba tu equilibrio y coordinación. Ideal para reuniones.",
  precios: {},
  imagen: ""
},
{
  nombre: "SOPORTE PARA ASIENTO DE AUTO",
  categoria: "Hogar / Cocina",
  descripcion: "Organiza tu auto fácilmente. Soporte multiuso para colgar bolsas, carteras o accesorios en el asiento del vehículo.",
  precios: {},
  imagen: ""
},
{
  nombre: "ESCUDO Y ESPADA",
  categoria: "Juguetes / Regalos",
  descripcion: "¡A la aventura! Set de escudo y espada de juguete para juegos de rol y horas de entretenimiento.",
  precios: {},
  imagen: ""
},
{
  nombre: "KIT CORTADOR DE PELO DE MASCOTA",
  categoria: "Mascotas",
  descripcion: "Cuida el estilo de tu mascota. Kit completo para cortar pelo en casa de forma segura y eficiente.",
  precios: {},
  imagen: ""
},
{
  nombre: "CORTADOR DE VIDRIO Y CERÁMICA",
  categoria: "Hogar / Cocina",
  descripcion: "Herramienta precisa para bricolaje. Corta fácilmente vidrio o cerámica con precisión profesional.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 12 VELAS NAVIDEÑAS",
  categoria: "Decoración / Fiesta",
  descripcion: "Ilumina la Navidad. Set de velas con diseños festivos para decorar mesas, repisas o centros de mesa.",
  precios: {},
  imagen: ""
},
{
  nombre: "VELA LED NAVIDEÑA",
  categoria: "Decoración / Fiesta",
  descripcion: "Vela LED con diseño navideño que ilumina y decora sin riesgo. Ideal para crear ambientes cálidos y festivos.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 6 INDIVIDUALES + 6 POSAVASOS NAVIDEÑOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Dale un toque navideño a tu mesa con este set decorativo. Incluye 6 individuales y 6 posavasos con diseños festivos.",
  precios: {},
  imagen: ""
},
{
  nombre: "PEINE CEPILLO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Peine y cepillo en un solo producto. Ideal para desenredar y peinar con suavidad y comodidad.",
  precios: {},
  imagen: ""
},
{
  nombre: "TOMATODO CARTOON",
  categoria: "Hogar / Cocina",
  descripcion: "Tomatodo con diseños cartoon llamativos, perfecto para niños o fans de personajes animados.",
  precios: {},
  imagen: ""
},
{
  nombre: "EMBUDO CREMERO",
  categoria: "Hogar / Cocina",
  descripcion: "Embudo práctico y compacto ideal para servir cremas, líquidos o salsas sin derrames.",
  precios: {},
  imagen: ""
},
{
  nombre: "CAJA DE JOYERÍA TRANSPARENTE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza tus joyas con estilo. Caja transparente con compartimentos para mantener todo a la vista y ordenado.",
  precios: {},
  imagen: ""
},
{
  nombre: "KIT DE 100 GLOBOS",
  categoria: "Decoración / Fiesta",
  descripcion: "¡Que comience la fiesta! Kit con 100 globos ideales para decorar cumpleaños, celebraciones o eventos especiales.",
  precios: {},
  imagen: ""
},
{
  nombre: "PAÑITOS HUMEDOS EN LATITA KAWAI",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Prácticos y adorables. Pañitos húmedos en una latita con diseño kawaii, perfectos para llevar a todos lados.",
  precios: {},
  imagen: ""
},
{
  nombre: "PAÑOLETA",
  categoria: "Ropa / Accesorios",
  descripcion: "Añade estilo y color a tu outfit con esta pañoleta versátil. Ideal para el cuello, el cabello o como accesorio de bolso.",
  precios: {},
  imagen: ""
},
{
  nombre: "ALFOMBRA LUMINOSA 40 x 60 cm",
  categoria: "Decoración / Fiesta",
  descripcion: "Ilumina tu espacio con estilo. Alfombra suave de 40 x 60 cm con efecto luminoso ideal para dormitorios o zonas especiales.",
  precios: {},
  imagen: ""
},
{
  nombre: "COLLAR SATURNO",
  categoria: "Ropa / Accesorios",
  descripcion: "Collar moderno con diseño de Saturno, perfecto para destacar tu look con un toque único y astral.",
  precios: {},
  imagen: ""
},
{
  nombre: "JUEGO DE 2 COLLARES – CORAZÓN MAGNÉTICO",
  categoria: "Ropa / Accesorios",
  descripcion: "Collares magnéticos para compartir con alguien especial. Al juntarse forman un corazón, ideal para parejas o amistades.",
  precios: {},
  imagen: ""
},
{
  nombre: "AVE DE EQULIBRIO",
  categoria: "Juguetes / Regalos",
  descripcion: "Curiosa figura de ave que se equilibra mágicamente en una superficie. Sorprende a grandes y chicos.",
  precios: {},
  imagen: ""
},
{
  nombre: "JUGUETE BALANCE",
  categoria: "Juguetes / Regalos",
  descripcion: "Divertido juguete educativo que ayuda a desarrollar la coordinación y el equilibrio en los más pequeños.",
  precios: {},
  imagen: ""
},
{
  nombre: "SHORT LEVANTA POMPIS",
  categoria: "Ropa / Accesorios",
  descripcion: "Short moldeador que realza tu figura. Comodidad y soporte con efecto push-up para tu día a día.",
  precios: {},
  imagen: ""
},
{
  nombre: "MUÑECOS EN ACCIÓN",
  categoria: "Juguetes / Regalos",
  descripcion: "Figuras articuladas llenas de aventura. Ideales para juegos creativos y coleccionistas.",
  precios: {},
  imagen: ""
},
{
  nombre: "CAJA NAVIDEÑA",
  categoria: "Decoración / Fiesta",
  descripcion: "Caja con temática navideña perfecta para regalos, detalles o decoración. Ideal para sorprender en estas fiestas.",
  precios: {},
  imagen: ""
},
{
  nombre: "MINI FREGONA",
  categoria: "Hogar / Cocina",
  descripcion: "Compacta y funcional, esta mini fregona es ideal para limpiezas rápidas en espacios reducidos.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 10 ACCESORIOS PARA EL CABELLO",
  categoria: "Ropa / Accesorios",
  descripcion: "Completo set de accesorios para peinar y decorar tu cabello. Práctico, variado y con mucho estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 6 VASOS NAVIDEÑOS",
  categoria: "Decoración / Fiesta",
  descripcion: "Vasos con diseños festivos para darle alegría a tus celebraciones navideñas. ¡Ideal para compartir!",
  precios: {},
  imagen: ""
},
{
  nombre: "PEGATINA DE TATUAJE",
  categoria: "Belleza / Cosmética",
  descripcion: "Pegatinas de tatuaje temporales para lucir diseños únicos sin compromiso. Fáciles de aplicar y remover.",
  precios: {},
  imagen: ""
},
{
  nombre: "VASO DE BEBIDA REFRIGERANTE",
  categoria: "Hogar / Cocina",
  descripcion: "Vaso térmico diseñado para mantener tus bebidas frías por más tiempo. Ideal para el verano.",
  precios: {},
  imagen: ""
},
{
  nombre: "EXCAVADORA A CONTROL REMOTO",
  categoria: "Juguetes / Regalos",
  descripcion: "Excavadora realista con control remoto. Diversión garantizada para los fanáticos de la construcción.",
  precios: {},
  imagen: ""
},
{
  nombre: "MASCARA HALOWEEN",
  categoria: "Decoración / Fiesta",
  descripcion: "Máscara ideal para fiestas de Halloween o disfraces. Dale un toque terrorífico a tu look.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 12 GANCHITOS",
  categoria: "Ropa / Accesorios",
  descripcion: "Ganchitos coloridos y prácticos para sujetar el cabello o decorar peinados. Útiles y decorativos.",
  precios: {},
  imagen: ""
},
{
  nombre: "LIGA DE CIERRE",
  categoria: "Ropa / Accesorios",
  descripcion: "Liga multiuso con cierre resistente. Ideal para sujetar cables, bolsas o accesorios personales.",
  precios: {},
  imagen: ""
},
{
  nombre: "EQUIPO DE PROTECCIÓN",
  categoria: "Varios",
  descripcion: "Kit básico de protección para tareas que requieren seguridad personal. Incluye elementos esenciales para cuidar tu bienestar.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 10 FOIL + TAPER",
  categoria: "Hogar / Cocina",
  descripcion: "Set práctico de 10 láminas foil con recipiente tipo taper, ideal para conservar y transportar alimentos con estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "CAPA DE HALLOWEEN",
  categoria: "Decoración / Fiesta",
  descripcion: "Capa temática perfecta para complementar tu disfraz de Halloween. Ligera, llamativa y fácil de usar.",
  precios: {},
  imagen: ""
},
{
  nombre: "ORGANIZADOR DE MEDIAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Mantén tus medias ordenadas y al alcance con este organizador práctico y compacto. Ideal para cajones o closets.",
  precios: {},
  imagen: ""
},
{
  nombre: "MOLEDOR DE ESPECIAS",
  categoria: "Hogar / Cocina",
  descripcion: "Muele tus especias favoritas al instante. Ideal para realzar el sabor de tus comidas con ingredientes recién triturados.",
  precios: {},
  imagen: ""
},
{
  nombre: "TACHO KAWAII",
  categoria: "Hogar / Cocina",
  descripcion: "Tacho de basura con diseño adorable estilo kawaii. Perfecto para escritorios o espacios pequeños con un toque tierno.",
  precios: {},
  imagen: ""
},
{
  nombre: "EXTRACTOR DE ABOLLADURAS",
  categoria: "Varios",
  descripcion: "Herramienta útil para reparar pequeñas abolladuras en vehículos de forma rápida y sin dañar la pintura.",
  precios: {},
  imagen: ""
},
{
  nombre: "PAQUETE DE BOLSAS TERMORETRACTIL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Bolsas que se ajustan al contenido con calor, ideales para embalaje seguro, ordenado y profesional.",
  precios: {},
  imagen: ""
},
{
  nombre: "PORTA SANDALIAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza y transporta tus sandalias o zapatos de forma ordenada. Ideal para viajes o almacenaje en casa.",
  precios: {},
  imagen: ""
},
{
  nombre: "PLATO HONGUITO",
  categoria: "Hogar / Cocina",
  descripcion: "Tierno plato con diseño de hongo, perfecto para servir snacks, frutas o decorar tu cocina con un toque divertido.",
  precios: {},
  imagen: ""
},
{
  nombre: "CUCHARA MEZCLADORA",
  categoria: "Hogar / Cocina",
  descripcion: "Práctica cuchara ideal para remover bebidas, jugos o mezclas de cocina. Útil y resistente para el uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "EXPRIMIDOR DE ZUMO",
  categoria: "Hogar / Cocina",
  descripcion: "Extrae jugo de tus frutas favoritas fácilmente. Diseño ergonómico y funcional para un exprimido sin esfuerzo.",
  precios: {},
  imagen: ""
},
{
  nombre: "CUCHARÓN ARDILLA",
  categoria: "Hogar / Cocina",
  descripcion: "Divertido cucharón con forma de ardilla. Ideal para servir sopas o guisos y alegrar tus momentos en la cocina.",
  precios: {},
  imagen: ""
},
{
  nombre: "CREMA BLANQUEADORA CORPORAL - BANANA",
  categoria: "Belleza / Cosmética",
  descripcion: "Crema con extracto de banana que ayuda a aclarar la piel de forma natural. Hidrata, suaviza y da luminosidad.",
  precios: {},
  imagen: ""
},
{
  nombre: "CAJA CUADRADA",
  categoria: "Organización / Almacenamiento",
  descripcion: "Caja multiuso de forma cuadrada, perfecta para almacenar objetos pequeños y mantener todo en orden.",
  precios: {},
  imagen: ""
},
{
  nombre: "CAJA PARA LENTES",
  categoria: "Organización / Almacenamiento",
  descripcion: "Protege tus gafas con esta caja compacta y resistente. Ideal para viajes o uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "RETARDANTE",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Producto especial para prolongar el momento íntimo. Uso discreto, cómodo y efectivo.",
  precios: {},
  imagen: ""
},
{
  nombre: "JABÓN DE ARROZ",
  categoria: "Belleza / Cosmética",
  descripcion: "Jabón con extracto de arroz que limpia profundamente y ayuda a iluminar la piel. Ideal para el uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "COLET ESPIRAL CORAZÓN",
  categoria: "Ropa / Accesorios",
  descripcion: "Colet tipo espiral con diseño de corazón. No maltrata el cabello y añade un toque de estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "COLET BASE GRANDE",
  categoria: "Ropa / Accesorios",
  descripcion: "Elástico resistente de gran tamaño, ideal para recoger cabello abundante con firmeza y comodidad.",
  precios: {},
  imagen: ""
},
{
  nombre: "PERFUME ARABE",
  categoria: "Belleza / Cosmética",
  descripcion: "Exquisito perfume árabe con notas intensas y duraderas. Ideal para quienes buscan un aroma único y elegante.",
  precios: {},
  imagen: ""
},
{
  nombre: "MASCARILLA CON COLÁGENO FLOWER SECRET",
  categoria: "Belleza / Cosmética",
  descripcion: "Mascarilla facial enriquecida con colágeno para hidratar y rejuvenecer la piel. Ideal para una rutina de belleza efectiva.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK DE 25 PAÑITOS HÚMEDOS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Práctico pack de 25 pañitos húmedos, suaves y con aroma refrescante. Perfectos para limpieza rápida y diaria.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE CUIDADO FACIAL",
  categoria: "Belleza / Cosmética",
  descripcion: "Completo set para el cuidado facial diario. Limpia, hidrata y nutre tu piel para mantenerla radiante y saludable.",
  precios: {},
  imagen: ""
},
{
  nombre: "BOLSA DOY PACK DE 200 PAÑITOS HÚMEDOS PETETIN",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Bolsa resellable con 200 pañitos húmedos de alta calidad. Ideal para el hogar o llevar en viajes largos.",
  precios: {},
  imagen: ""
},
{
  nombre: "STICKERS PARA UÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Diseños creativos en stickers para uñas, fáciles de aplicar y perfectos para lograr un look profesional en casa.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE UÑAS POSTIZAS - MODELO #2",
  categoria: "Belleza / Cosmética",
  descripcion: "Set de uñas postizas con diseño moderno. Fáciles de colocar, resistentes y perfectas para cualquier ocasión.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 3 PERFILADORES",
  categoria: "Belleza / Cosmética",
  descripcion: "Pack de 3 perfiladores para cejas y vello facial. Precisión y suavidad para un acabado profesional.",
  precios: {},
  imagen: ""
},
{
  nombre: "MASAJEADOR CORPORAL",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Masajeador manual para relajar músculos y mejorar la circulación. Ideal para aliviar el estrés diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "DELINEADOR 2 EN 1",
  categoria: "Belleza / Cosmética",
  descripcion: "Delineador doble función con punta precisa y otro extremo para difuminar. Perfecto para crear looks intensos y definidos.",
  precios: {},
  imagen: ""
},
{
  nombre: "REMOVEDOR DE VERRUGAS",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Fórmula efectiva para eliminar verrugas de forma segura y sin dolor. Resultados visibles con uso constante.",
  precios: {},
  imagen: ""
},
{
  nombre: "SUERO DE PESTAÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Suero nutritivo que fortalece y estimula el crecimiento de tus pestañas, dándoles volumen y longitud natural.",
  precios: {},
  imagen: ""
},
{
  nombre: "ALMOHADILLAS DE DESCANSO",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Almohadillas suaves para aliviar el cansancio en pies o cuerpo. Ideales para descansar tras un día agitado.",
  precios: {},
  imagen: ""
},
{
  nombre: "PROTECTOR DE TALÓN",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Cómodo protector que evita rozaduras en el talón. Aporta confort al caminar y previene ampollas.",
  precios: {},
  imagen: ""
},
{
  nombre: "GLOSS BRILLO + LLAVERO",
  categoria: "Belleza / Cosmética",
  descripcion: "Brillo labial con efecto hidratante acompañado de un llavero decorativo. Ideal para llevar estilo en tu bolso.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK DE 25 ESPONJAS BEAUTY",
  categoria: "Belleza / Cosmética",
  descripcion: "Pack surtido de esponjas beauty blender. Perfectas para aplicar base o corrector con acabado profesional.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 5 PARCHES ADELGAZANTES",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Parches reductores para zonas específicas del cuerpo. Apóyate en tu rutina fitness con este práctico complemento.",
  precios: {},
  imagen: ""
},
{
  nombre: "MÁSCARA DE PESTAÑAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Realza tus pestañas al máximo con esta máscara de larga duración. Volumen, definición y resistencia al agua en un solo producto.",
  precios: {},
  imagen: ""
},
{
  nombre: "PESTAÑAS POSTIZAS",
  categoria: "Belleza / Cosmética",
  descripcion: "Dale intensidad a tu mirada con estas pestañas postizas naturales y ligeras. Fáciles de colocar y reutilizables.",
  precios: {},
  imagen: ""
},
{
  nombre: "GLITTER LÍQUIDO x 6",
  categoria: "Belleza / Cosmética",
  descripcion: "Set de 6 brillos líquidos con glitter intenso para ojos, labios o rostro. Ideal para looks glamorosos y fiestas.",
  precios: {},
  imagen: ""
},
{
  nombre: "RUBOR LÍQUIDO KEVIN & COCO",
  categoria: "Belleza / Cosmética",
  descripcion: "Rubor líquido de textura ligera que se difumina fácilmente en la piel para un acabado natural y radiante.",
  precios: {},
  imagen: ""
},
{
  nombre: "PESTAÑAS POSTIZAS 6D",
  categoria: "Belleza / Cosmética",
  descripcion: "Pestañas de efecto 6D para una mirada impactante. Mayor volumen y curvatura para destacar tu belleza.",
  precios: {},
  imagen: ""
},
{
  nombre: "FEROMONA - MUJER",
  categoria: "Belleza / Cosmética",
  descripcion: "Fragancia femenina con feromonas, diseñada para resaltar tu atractivo natural. Sutil y envolvente.",
  precios: {},
  imagen: ""
},
{
  nombre: "CACHETERO CAPIBARA PARA NIÑA",
  categoria: "Ropa / Accesorios",
  descripcion: "Ropa interior infantil con diseño de capibara. Suave, cómoda y con estilo divertido para las más pequeñas.",
  precios: {},
  imagen: ""
},
{
  nombre: "BOXER DAMA CK",
  categoria: "Ropa / Accesorios",
  descripcion: "Boxer femenino inspirado en la comodidad y estilo de Calvin Klein. Ajuste perfecto para uso diario.",
  precios: {},
  imagen: ""
},
{
  nombre: "TRUSA CLÁSICA DAMA",
  categoria: "Ropa / Accesorios",
  descripcion: "Trusa clásica para dama, cómoda y de excelente ajuste. Ideal para el uso diario con un diseño sencillo y femenino.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET PLASTILINA + MOLDES",
  categoria: "Juguetes / Regalos",
  descripcion: "Set creativo con plastilina de colores y moldes incluidos. Perfecto para que los niños desarrollen su imaginación.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 7 TEMPERAS + PALETA Y PINCEL",
  categoria: "Escolar / Papelería",
  descripcion: "Kit de pintura ideal para pequeños artistas. Incluye 7 témperas, paleta y pincel para crear sin límites.",
  precios: {},
  imagen: ""
},
{
  nombre: "CINTA DE EMBALAJE DE 60 YARDAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta resistente de 60 yardas ideal para embalar, sellar y proteger cajas y paquetes de manera segura.",
  precios: {},
  imagen: ""
},
{
  nombre: "CINTA DE EMBALAJE DE 200 YARDAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta de embalaje extra larga para trabajos exigentes. Alta adherencia para asegurar tus envíos o almacenamiento.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET x 10 CUTTER GARRITA",
  categoria: "Escolar / Papelería",
  descripcion: "Set de 10 prácticos cutter en forma de garrita. Ideal para uso escolar o manualidades en casa.",
  precios: {},
  imagen: ""
},
{
  nombre: "GUILLOTINA SANRIO / CAPIBARA",
  categoria: "Escolar / Papelería",
  descripcion: "Guillotina temática para papel con diseño divertido de Sanrio o Capibara. Ideal para proyectos escolares o de oficina.",
  precios: {},
  imagen: ""
},
{
  nombre: "ESPIRÓGRAFO",
  categoria: "Escolar / Papelería",
  descripcion: "Herramienta creativa para dibujar patrones y espirales únicos. Ideal para estimular la imaginación y precisión.",
  precios: {},
  imagen: ""
},
{
  nombre: "LÁPIZ PORTA MINA SANRIO",
  categoria: "Escolar / Papelería",
  descripcion: "Lápiz porta mina con diseño adorable de Sanrio. Ideal para estudiantes que disfrutan de lo tierno y funcional.",
  precios: {},
  imagen: ""
},
{
  nombre: "ROLLO CONTACT 1.5m",
  categoria: "Organización / Almacenamiento",
  descripcion: "Rollo adhesivo decorativo de 1.5 metros para proteger, forrar o personalizar superficies. Fácil de cortar y aplicar.",
  precios: {},
  imagen: ""
},
{
  nombre: "CARTUCHERA MIX",
  categoria: "Escolar / Papelería",
  descripcion: "Cartuchera con diseños variados y divertidos, perfecta para organizar tus útiles escolares con estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "CINTA EMBALAJE 400 YARDAS",
  categoria: "Organización / Almacenamiento",
  descripcion: "Súper rollo de cinta de embalaje de 400 yardas. Ideal para uso intensivo en almacenes, envíos y mudanzas.",
  precios: {},
  imagen: ""
},
{
  nombre: "BORRADOR 5 PUNTAS",
  categoria: "Escolar / Papelería",
  descripcion: "Borrador creativo con 5 puntas de colores. Ideal para el colegio, con forma divertida y funcional.",
  precios: {},
  imagen: ""
},
{
  nombre: "BOLSITA DE BAJALENGUA DE COLORES",
  categoria: "Escolar / Papelería",
  descripcion: "Bajalenguas de colores en práctica bolsita. Ideales para actividades escolares, manualidades o juegos didácticos.",
  precios: {},
  imagen: ""
},
{
  nombre: "PACK DE 6 LAPICEROS ARCO IRIS",
  categoria: "Escolar / Papelería",
  descripcion: "Conjunto de lapiceros con tinta de colores vibrantes tipo arco iris. Perfectos para escribir o decorar con estilo.",
  precios: {},
  imagen: ""
},
{
  nombre: "CINTA FRÁGIL",
  categoria: "Organización / Almacenamiento",
  descripcion: "Cinta adhesiva con mensaje 'Frágil' para el cuidado de tus paquetes. Esencial en envíos y mudanzas.",
  precios: {},
  imagen: ""
},
{
  nombre: "TUBO DE 12 CINTAS ESCOLAR 12 mm x 14 yardas",
  categoria: "Escolar / Papelería",
  descripcion: "Set de 12 cintas escolares de colores. Medida perfecta para decorar, forrar cuadernos o manualidades.",
  precios: {},
  imagen: ""
}
];
