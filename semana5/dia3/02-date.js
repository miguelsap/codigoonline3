//Date() clase cuyos objetos trabajan con fechas
let hoy = new Date();
console.log(hoy);

//retorna el año de una variable de tipo fecha
let anioActual = hoy.getFullYear();
console.log(anioActual);

//retorna el mes de una variable tipo fecha
let mesActual = hoy.getMonth();
console.log(mesActual);

//retorna el dia del calendario de una variable date
let diaCalendarioActual = hoy.getDate();
console.log(diaCalendarioActual);

let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`;
console.log(stringFecha);

//retorna el numero del dia de de la semana
let diaSemana = hoy.getDay();
console.log(`dia de la semana ${diaSemana}`);

let horaActual = hoy.getHours();
let minutoActual = hoy.getMinutes();
let segundoActual = hoy.getSeconds();

console.log(`La hora es ${horaActual}: ${minutoActual}:${segundoActual}`);

//Iniciar una variable de tipo fecha
//ubicado en navidad por ejemplo
// new Date(anio?,mes?,dia?,horas?,minutos?,segundos?)
let navidad2020 = new Date("2020, 11, 25");
console.log(navidad2020);

//la diferencia de las fechas en milisegundos
let navidadMenosHoy = navidad2020 - hoy;
console.log(navidadMenosHoy);

let semanasParaNavidad = navidadMenosHoy / 1000 / 60 / 60 / 24 / 7;
console.log(semanasParaNavidad);
