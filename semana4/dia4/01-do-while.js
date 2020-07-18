//do-while
let nota = 0;
let cont = 0;
let suma = 0;
do {
  nota = +prompt(`Ingrese la nota`);
  if (nota > 0) {
    cont++;
    suma += nota;
    console.log(`Nota ${cont}: ${nota}`);
  }
} while (nota > 0);
console.log(`El promedio es ${suma / cont}`);
