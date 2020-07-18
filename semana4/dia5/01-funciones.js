//funciones
//1. funciones que no retornan valor ni reciben parametros
//declarando una funcion
function imprimirFecha() {
  //como crear una variable que guarda la fecha del ordenador
  let fecha = new Date();
  console.log(fecha);
}

//2. funciones que retornan valor y no reciben parametro
function retornarFecha() {
  return new Date();
}
/**
 * Funcion que recibe dos numeros y calcula el
 * binomia cuadrado perfecto de ambos
 * @param {number} a primer numero
 * @param {number} b segundo numero
 * @return {number} el resultado del binomio
 */
//3. funciones que reciben parametro y retornan valor
function retornarBinomio(a, b) {
  let rpta = a * a + 2 * a * b + b * b;
  return rpta;
}

//4. funciones que no retornan valor y reciben parametro
function imprimirPares(numeros) {
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      console.log(numeros[i]);
    }
  }
}

//llamando o invocando a una funcion
imprimirFecha();

//invocando a una funcion que retorna valor
let fecha = retornarFecha();
console.log(fecha);

//invocando a la funcion 3
let a = 5;
let b = 4;
let rpta = retornarBinomio(a, b);
console.log(rpta);

//invocando a la funcion 4
let numeros = [2, 4, 6, 9, 11, 14, 20, 1];
imprimirPares(numeros);
