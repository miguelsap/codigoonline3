/**
 * setTimeout
 */
let resultado = [];
const traerDatos = () => {
  console.log("Conectandose a la base de datos");
  console.log("Los datos llegaron del servidor");
  resultado = [5000, 8500, 10000];
};
console.log("LOG 1");
//funcion asincrona
setTimeout(traerDatos, 2000);
// setTimeout(() => {
//   console.log("Se trajeron datos mas pesados");
// }, 2000);
console.log("LOG 2");
console.log(resultado);
console.log("LOG 3");
