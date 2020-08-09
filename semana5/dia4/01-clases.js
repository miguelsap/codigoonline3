/**
 * Los nombres de las clases deben iniciar con una Mayuscula
 */
class Restaurant {
  aforo;
  nroMesas;
  direccion;
  categoria;
  telefonos;
  nombre;
  delivery;
  constructor(
    _aforo = 0,
    _nroMesas = 0,
    _direccion = "Sin Direccion",
    _categoria = "Sin Categoria",
    _telefonos = [],
    _nombre = "Sin nombre",
    _delivery = false
  ) {
    this.aforo = _aforo;
    this.nroMesas = _nroMesas;
    this.direccion = _direccion;
    this.categoria = _categoria;
    this.telefonos = _telefonos;
    this.nombre = _nombre;
    this.delivery = _delivery;
  }
  imprimirTelefonos() {
    console.log(`Telefonos del restaurant ${this.nombre}`);
    for (let i = 0; i < this.telefonos.length; i++) {
      console.log(`📞 ${this.telefonos[i]}`);
    }
  }
  imprimirTelefonos2() {
    for (const tel of this.telefonos) {
      console.log(tel);
    }
  }
}

//Instanciando una clase: Creando un objeto a partir de una clase
let objLaLucha = new Restaurant(
  800,
  200,
  "Vallecito",
  "Comida Criolla",
  ["965424337", "123456789"],
  "La Lucha",
  true
);
let objTanta = new Restaurant();

//Modificando los atributos de un objeto
objTanta.aforo = 500;
objTanta.delivery = true;

console.log(objLaLucha);
console.log(objTanta);

objLaLucha.imprimirTelefonos();
objLaLucha.imprimirTelefonos2();
