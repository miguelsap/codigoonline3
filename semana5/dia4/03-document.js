/**
 * window.document
 * document => objeto que sirve para manipular el DOM
 *
 * propiedades mas importantes
 * document.getElementById('ID_DEL_ELEMENTO'); => obtiene en una variable
 * la referencia a un elemento DOM
 */
let header = document.getElementById("header");
// header es un objeto de la clase "ELEMENT"
console.log(header);

/**
 * retorna unn HTMLCollection(similar a un arreglo) de elementos
 * que tengan la clase pasada como parametro
 */
let secciones = document.getElementsByClassName("miseccion");
console.log(secciones);
console.log(`Cantidad de secciones ${secciones.length}`);

// Transformar el HTMLCollection a un Array
let seccionesArreglo = Array.from(secciones);
seccionesArreglo.forEach((sex) => {
  console.log(sex);
});

//Retorna un elemento del DOM dado un selector al estilo CSS
//Por ejemplo .rojo => un elemento con la clase "rojo"
//Solo devuelve un elemento
let footerApp = document.querySelector("#footerApp");
console.log(footerApp);

let divsFooter = document.querySelectorAll(".footerApp__seccion");
console.log(divsFooter);

divsFooter.forEach((div) => {
  console.log(div);
});

let navegacion = document.querySelectorAll("#navegacion");
console.log(navegacion);
