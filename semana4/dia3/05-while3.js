let cantidad = +prompt(`Ingrese cantidad de numeros del Array`);
let array = [];
let pivot = 0,
  numero = 0,
  negativo = 0,
  positivo = 0,
  zero = 0;

while (pivot < cantidad) {
  numero = +prompt(`Ìngrese un numero`);
  array.push(numero);
  pivot++;
}
pivot = 0;
while (pivot < array.length) {
  if (array[pivot] > 0) {
    positivo += 1;
  } else if (array[pivot] < 0) {
    negativo += 1;
  } else {
    zero += 1;
  }
  pivot++;
}
console.log(`La cantidad de numeros positivos es: ${positivo}`);
console.log(`La cantidad de numeros negativos es: ${negativo}`);
console.log(`La cantidad de ceros es: ${zero}`);
