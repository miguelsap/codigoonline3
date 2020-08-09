const buscarPorDni = (dni, callback) => {
  let nombreEncontrado = "`-----";
  setTimeout(function () {
    console.log(`Buscando en la BD`);
    nombreEncontrado = "Miguel Arbieto";
    callback(nombreEncontrado);
  }, 2000);
  if (nombreEncontrado === "Miguel Arbieto") {
    console.log(`Hola`);
  }
};

let encontrado = buscarPorDni(`71455680`, (nombre) => {
  console.log(nombre);
});
console.log(encontrado);
