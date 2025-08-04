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
  imagen: ""
},
{
  nombre: "PIANITO",
  categoria: "Juguetes / Regalos",
  descripcion: "¡La música empieza aquí! Un mini pianito ideal para que los más pequeños se diviertan y estimulen su creatividad.",
  precios: {
    "1": 8.95,
  },
  imagen: ""
},
{
  nombre: "FIAMBRERA TÉRMICA",
  categoria: "Hogar / Cocina",
  descripcion: "¡Lleva tu almuerzo siempre caliente! Esta fiambrera térmica conserva el calor y es perfecta para la oficina, colegio o viajes.",
  precios: {
    "1": 8.95,
    "3": 7.95,
  },
  imagen: ""
},
{
  nombre: "MINI ATOMIZADOR KWAI",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Refresca tu rostro al instante. El mini atomizador Kawaii es recargable y portátil, ideal para llevar a todas partes.",
  precios: {
    "1": 3.95,
    "3": 2.95,
  },
  imagen: ""
},
{
  nombre: "UNGÜENTO DE CANNABIS",
  categoria: "Belleza / Cosmética",
  descripcion: "Alivia dolores y relaja tus músculos con este poderoso ungüento natural de cannabis. ¡Tu aliado para el descanso!",
  precios: {},
  imagen: ""
},
{
  nombre: "PAPEL TISSUE, 300 HOJAS APROX.",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "Suave, absorbente y rendidor. Ideal para el hogar u oficina con 300 hojas de comodidad.",
  precios: {},
  imagen: ""
},
{
  nombre: "ROMPE CHORRO",
  categoria: "Hogar / Cocina",
  descripcion: "¡Ahorra agua y evita salpicaduras! Este rompe chorro se adapta fácilmente a cualquier grifo.",
  precios: {},
  imagen: ""
},
{
  nombre: "BURLETE",
  categoria: "Hogar / Cocina",
  descripcion: "Aísla el polvo, insectos y el ruido. El burlete adhesivo es ideal para puertas y ventanas.",
  precios: {},
  imagen: ""
},
{
  nombre: "SET DE 12 GANCHOS PARA ROPA / CLOSET",
  categoria: "Organización / Almacenamiento",
  descripcion: "Mantén tu closet ordenado con este set de 12 ganchos resistentes y prácticos.",
  precios: {},
  imagen: ""
},
{
  nombre: "BALDE CANCHERO + VASO TOMATODO \"PITUFOS\"",
  categoria: "Juguetes / Regalos",
  descripcion: "¡Diversión y estilo para los más peques! Incluye balde canchero y vaso tomatodo con diseño de Los Pitufos.",
  precios: {},
  imagen: ""
},
{
  nombre: "CURITAS X 100",
  categoria: "Higiene / Cuidado Personal",
  descripcion: "¡Siempre prevenido! Pack económico de 100 curitas adhesivas para cortes y raspones. Indispensables en casa, oficina o viajes.",
  precios: {},
  imagen: ""
},
{
  nombre: "CANASTILLA PLEGABLE",
  categoria: "Organización / Almacenamiento",
  descripcion: "Organiza con estilo. Esta canastilla se pliega fácilmente cuando no la usas, ahorrando espacio y manteniendo todo en orden.",
  precios: {},
  imagen: ""
},
{
  nombre: "LIMPIADOR MULTIUSOS",
  categoria: "Hogar / Cocina",
  descripcion: "Poder de limpieza en tus manos. Este limpiador multiusos elimina grasa, suciedad y deja todo reluciente. ¡Imprescindible!",
  precios: {},
  imagen: ""
},
{
  nombre: "ESCURRIDOR DE ACERO",
  categoria: "Hogar / Cocina",
  descripcion: "Escurre tus platos con elegancia. Fabricado en acero resistente, combina funcionalidad y diseño moderno para tu cocina.",
  precios: {},
  imagen: ""
},
{
  nombre: "COMEDERO + BEBEDERO DE MASCOTA",
  categoria: "Mascotas",
  descripcion: "¡Comodidad para tu engreído! Combo práctico de comedero y bebedero para mantener a tu mascota feliz y bien alimentada.",
  precios: {},
  imagen: ""
},
{
  nombre: "MINI CÁMARA ESPÍA",
  categoria: "Electrónica / Gadgets",
  descripcion: "Discreta y potente. Esta mini cámara espía graba video y audio en alta calidad. Ideal para seguridad o vigilancia personal.",
  precios: {},
  imagen: ""
},
{
  nombre: "GUIRNALDA DECORATIVA CORAZÓN",
  categoria: "Decoración / Fiesta",
  descripcion: "Dale un toque romántico a tus espacios. Esta guirnalda con corazones es perfecta para decorar cuartos, fiestas o regalos.",
  precios: {},
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







];
