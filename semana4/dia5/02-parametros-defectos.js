//funciones con parametros por defecto
function trinomioCuadrado(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let rpta = a * a * a + b * b * b + c * c * c;
    return rpta;
  } else {
    console.error(`Los datos proporcionados no son correctos`);
  }
}
let resultado = trinomioCuadrado(2, 4);
console.log(resultado);
/**
 *funcion que recibe un arreglo de nombres y
 un nombre a buscar
 * @param {array} nombres
 * @param {string} busqueda
 */
function buscarNombre(nombres = [], busqueda = "") {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      return true;
    }
  }
  return false;
}
let nombres = [`miguel`, `jossie`, `juan`, `ana`];
let boolean = buscarNombre();
console.log(boolean);
