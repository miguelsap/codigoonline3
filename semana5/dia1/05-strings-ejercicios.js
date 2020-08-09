let frase = "anita lava la tina";
console.log(frase[0]);
for (let i = 0; i < frase.length; i++) {
  console.log(frase[i]);
}
console.log("----------------------");
/**
 * Funcion que retorna la cantidad de palabtas  que tiene
 * un texto
 */
const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  for (let i = 0; i < cadena.trim().length; i++) {
    if (cadena[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};
console.log(contadorDePalabras("porque la vida es bella"));

//----------------------------------------------------
//2
const quitarEspacios = (cadena) => {
  let array = cadena.split(" ");
  let texto = "";
  for (let i = 0; i < array.length; i++) {
    texto += array[i];
  }
  return texto;
};
console.log(quitarEspacios("Hola soy juan"));

//3
const EsPalidromo = (cadena) => {
  let texto1 = quitarEspacios(cadena).toLowerCase();
  let revez = "";
  let posicion = texto1.length - 1;
  for (let i = posicion; i >= 0; i--) {
    revez += texto1[i];
  }
  if (texto1 === revez) {
    return true;
  }
  return false;
};

console.log(EsPalidromo("oso+"));
