let body = document.querySelector("body");
//colocando estilos desde javascript
body.style.background = "#444";

//elemento.classlist
/**
 * Atributo que permite trabajar con las clases de un elemento
 * como añadir clase, listar las clases que el elemento tiene
 * quitar una clase y hasta agregar/quitar clase como un interruptor
 * TODO: remove, contains
 */
let header = document.querySelector("header");
console.log(header.classList);

header.classList.add("header");

//Devuelve el ancho del elemento
let seccion1 = document.querySelector(".seccion1");
console.log(seccion1.clientWidth);
console.log(seccion1.clientHeight);

//elemento.offsetTop => Devuelve la cantidad pixeles que el elemento
//dista con la parte superior del viewport

//elemento.offsetLeft => Devuelve la cantidad pixeles que el elemento
//dista con la parte izquierda del viewport
console.log(`Pixeles desde top .seccion1: ${seccion1.offsetTop}`);
console.log(`Pixeles desde top .seccion1: ${seccion1.offsetLeft}`);

//elemento.scrollTop => Devuelve la cantidad de pixeles que el elemento
//lleva como scroll interno
console.log(`Seccion1 scrollTop ${seccion1.scrollTop}`);

console.log(`body scrollTop ${document.querySelector("html").scrollTop}`);
