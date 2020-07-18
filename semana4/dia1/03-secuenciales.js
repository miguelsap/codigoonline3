let costoBoleto = 0;
let recorrer = +prompt(`Ingrese los kilometros a recorrer`);
let costoKilometro = +prompt(`ingrese el costo por kilometro`);

costoBoleto = recorrer * costoKilometro;

console.log(`Costo por boleto => ${costoBoleto} soles`);
