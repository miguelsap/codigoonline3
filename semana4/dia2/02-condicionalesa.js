//Condicionales
// debugger;
let edad = +prompt(`Ingresa tu edad`);
//comparadores aritmeticos

// > mayor
// < menor
// >= mayor o igual
// <= menor o igual
// !== diferente
// === igual
if (edad > 17) {
  let peso = +prompt(`Ingrese su peso`);
  if (peso >= 85) {
    console.log(`No, no hay pase laborar #quedateencasa`);
  } else {
    console.log(`Si hay pase laboral`);
  }
} else {
  console.log(`No, no hay pase laborar #quedateencasa😢`);
}
