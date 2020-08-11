/**
 * Las promesas nos ayudan a esperar el resultado
 * de un proceso asincrono
 */
let miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    // ambas funcionan como un return
    // resolve
    // reject
    resolve(["71455680", "01232626", "25684132"]);
  }, 2000);
});

miPromesa
  .then((rpta) => {
    console.log("Bien");
    console.log(rpta);
  })
  .catch((error) => {
    console.log("Ups!");
    console.log(error);
  });
