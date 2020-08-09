/**
 * El callback se ejecuta tantas veces como elementos
 * tenga el arreglo
 */
// peliculas.forEach((elemento) => {
//   console.log(elemento);
// });

// let arreglo = ["Jorge", "Luis", "Karla", "Jane"];
// arreglo.forEach((element) => {
//   console.log(element);
// });

// peliculas.forEach((objPelicula) => {
//   console.log(objPelicula.title);
// });

// filter
/**
 * Funcion de los arreglos que recibe un callback en el cual
 * se pueden retornar uno o mas elementos de acuerdo a ciertas condiciones
 * Sirve como filtro de elementos
 * Ejecuta el callback tantasa veces como elementos tenga
 * (elemnto_actual,iteracion?,copia_del_arreglo?)=>{}
 */
// let numeros = [20, 1, 7, 82, 6, 9, 32, 10, 0, 45];
// let mayoresQueDiez = numeros.filter((elemento, i, arreglo) => {
//   if (elemento >= 10) {
//     return elemento;
//   }
// });
// console.table(mayoresQueDiez);

// let peliculasEx = peliculas.filter((elemento) => {
//   if (elemento.original_language !== "en") {
//     return elemento;
//   }
// });
// console.log(peliculasEx);
