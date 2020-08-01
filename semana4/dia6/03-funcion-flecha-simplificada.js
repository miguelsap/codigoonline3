// Regla 1: Si la funcion solo tiene una linea de ejecucion
// se pueden omitir las llaves {}
const sumar = (a, b) => console.log(a + b);
sumar(5, 2);

// Regla 2: Si la funcion recibe un parametro solamente, se pueden omitir los parentesis
const cuadrado = (numero) => console.log(numero * numero);
cuadrado(5);

// Regla 3: Si la funcion solo tiene una linea de ejecucion y a su vez retorna un valor
// se puede obviar la palabra reservada return y en su lugar, encerrar el retonro en parentesis
const cubo = (n) => n * n * n;
console.log(cubo(3));
