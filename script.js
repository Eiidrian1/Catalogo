const productos = [
  {
    nombre: "Producto A",
    imagen: "https://via.placeholder.com/200x150?text=Producto+A",
    precios: {
      unidad: 10,
      "3": 28,
      "6": 50
    }
  },
  {
    nombre: "Producto B",
    imagen: "https://via.placeholder.com/200x150?text=Producto+B",
    precios: {
      unidad: 12,
      "5": 45,
      "10": 85
    }
  },
  {
    nombre: "Producto C",
    imagen: "https://via.placeholder.com/200x150?text=Producto+C",
    precios: {
      unidad: 9,
      "3": 25
    }
  }
];

function mostrarProductos(lista) {
  const contenedor = document.getElementById('catalogo');
  contenedor.innerHTML = "";

  lista.forEach(p => {
    let preciosHTML = "";

    for (let cantidad in p.precios) {
      let label = cantidad === "unidad" ? "Unidad" : `Pack x${cantidad}`;
      preciosHTML += `<p><strong>${label}:</strong> S/${p.precios[cantidad]}</p>`;
    }

    contenedor.innerHTML += `
      <div class="producto">
        <h3>${p.nombre}</h3>
        <img src="${p.imagen}" alt="${p.nombre}">
        ${preciosHTML}
      </div>
    `;
  });
}

mostrarProductos(productos);
