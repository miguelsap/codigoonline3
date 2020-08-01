/**
 * Devuelve un arreglo de lam misma cantidad del arreglo
 * original con las transformaciones que el usuario le haga a cada elemento
 * a diferencia del filter, la funcion map no puede retornar menos elementos
 */
console.log("------------MAP---------------");
let nombres = ["Joaquin", "Maria", "Thamara", "Allison", "Jorge"];
let nombresMayusculas = nombres.map((name, i) => {
  if (i % 2 === 0) {
    return {
      original: name,
      minuscula: name.toLocaleLowerCase(),
      mayuscula: name.toLocaleUpperCase(),
    };
  }
});
console.log(nombresMayusculas);
console.log("-----------SPLICE-------------");
let productos = ["TV samsung", "Tablet Android", "Laptop Razer", "Smartphone"];
//A partir de la posicion 1, eliminar 1 elemento
productos.splice(0, 1);
console.log(productos);

// A partir de la posicion 0, elminar 1 elemento e insertar el elemento PC Gamer
productos.splice(0, 1, "PC Gamer");
console.log(productos);

//A partir de la posicion 2, no elminar elementos e insertar 2 nuevos elementos
productos.splice(2, 0, "Mouse HyperX", "Audifonos Razer");
console.log(productos);

//-----------------indexOf-------------
console.log("----------indexOf------------");
let posicionMouse = productos.indexOf("Mouse HyperX");
console.log(`Posicion del mouse ${posicionMouse}`);

/**
 * POP
 * Sirve para eliminar el ultimo de un arreglo
 * la funcion ademas, retorna dicho elemento
 */
console.log("----------POP--------------");
productos.pop();
console.log(productos);
