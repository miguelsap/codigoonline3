let frase =
  "                Agua que no haz de beber, jala la cadena y dejala correr";
let cantidadLetras = frase.length;
console.log(cantidadLetras);

let minusculas = frase.toLocaleLowerCase();
console.log(minusculas);

let mayusculas = frase.toUpperCase();
console.log(mayusculas);

// posicion, cantidad de registros
let subCadena = frase.substr(2, 20);
console.log(subCadena);

// posicion inicial y final
let subString = frase.substring(2, 20);
console.log(subString);

let buscar = frase.includes("beber");
console.log(buscar);

let posIni = frase.indexOf("cadena");
console.log(posIni);

let quitarEspacios = frase.trim();
console.log(quitarEspacios);
