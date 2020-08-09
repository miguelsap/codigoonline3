let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades = [20, 15, 75, 68, 45, 25];

let buscar = prompt(`Ingrese el nombre a buscar en la base de datos🙀`);
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
  console.log(`i = ${i}`);
  if (nombres[i] === buscar) {
    console.log(`Encontrado ${buscar}`);
    console.log(`Edad: ${edades[i]}`);
    encontrado = true;
    break;
  }
}
if (!encontrado) {
  console.log(`No encontrado`);
}
for (let i = 0; i < edades.length; i++) {
  if (edades[i] > 60) {
    continue;
  }
  console.log(`Nombre ${nombres[i]}`);
  console.log(`Edad ${edades[i]}`);
}
