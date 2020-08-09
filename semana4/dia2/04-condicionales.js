let anio = +prompt(`Ingrese un año`);
if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
  console.log(`bisiesto`);
} else {
  console.log(`normal`);
}
