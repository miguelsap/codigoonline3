console.log(`Elegir opcion:
1. Login
2. Ver Facturas
3. Ver Reportes`);
let rpta = +prompt(`Ingresar una opcion`);
switch (rpta) {
  case 1:
    console.log(`Usted eligio iniciar sesion`);
    break;
  case 2:
    console.log(`Usted desea ver las facturas`);
    break;
  case 3:
    console.log(`Usted desea ver reportes`);
    break;
  default:
    console.log(`Debe elegir una opcion correcta`);
    break;
}
