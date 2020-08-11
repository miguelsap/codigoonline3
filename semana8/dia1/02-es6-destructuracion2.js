// Destructuracion de Objetos

let restaurante = {
  nombre: "El pollo real",
  tipo: "Pollería",
  aforo: 500,
  geo: {
    lat: -70,
    lng: -16,
  },
};

// Creando una variable "nombre" que es copia de restaurante.nombre
let { nombre, aforo: capacidad } = restaurante;
console.log(nombre);
console.log(capacidad);

let {
  geo: { lat: latitud, lng: longitud },
} = restaurante;
console.log(latitud);
console.log(longitud);

const nombreYAforo = ({ nombre, aforo }) => {
  console.log(nombre, aforo);
};

nombreYAforo(restaurante);

// Forma correcta de copiar un objeto por completo
let copiaRest = { ...restaurante };
console.log(copiaRest);

const modificarAforo = (objRestaurante, nuevoAforo) => {
  return {
    ...objRestaurante,
    aforo: nuevoAforo,
  };
};

let restaurantGrande = modificarAforo(restaurante, 5000);
console.log(restaurantGrande);
