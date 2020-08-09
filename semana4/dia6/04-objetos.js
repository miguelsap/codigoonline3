// Un objeto es un elemento que abstrae caracteristicas
// o atributos en comun o que guardan relacion
let objPersona = {
  nombre: `Jorge`,
  apellido: `Garnica`,
  edad: 28,
  peso: 72,
  casado: false,
  cazado: true,
};
// Forma de acceder a los atributos
console.log(objPersona.nombre);
console.log(objPersona[`apellido`]);

// Forma 1 modificar atributo
objPersona.casado = true;
objPersona.peso = 70;
console.log(objPersona);

// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = [`Cebiche`, `Pastel de papa`, `Rocoto Rellena`];
console.log(objPersona);

for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
  console.log(objPersona.platosFavoritos[i]);
}

//------------------------------------------------------------------//
let productos = [
  {
    nombre: `TV Samsung 50`,
    precio: 8000.0,
    codigo: 10101,
    coloresDisponibles: [`Azul`, `Blanco`, `Plomo`, `Negro`],
  },
  {
    nombre: `TV Samsung 42`,
    precio: 7000.0,
    codigo: 10102,
    coloresDisponibles: [`Azul`, `Blanco`],
  },
  {
    nombre: `TV Samsung 39`,
    precio: 8000.0,
    codigo: 10103,
    coloresDisponibles: [`Negro`],
  },
  {
    nombre: `TV Samsung 25`,
    precio: 5000.0,
    codigo: 10104,
    coloresDisponibles: [`Azul`, `Negro`],
  },
];
for (let i = 0; i < productos.length; i++) {
  console.log(`----Producto ${i + 1}----`);
  console.log(`Nombre ${productos[i].nombre}`);
  console.log(`Nombre ${productos[i].precio}`);
  console.log(`Nombre ${productos[i].codigo}`);
  console.log(`Colores Disponibles`);
  for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
    console.log(productos[i].coloresDisponibles[j]);
  }
}
