let inputNombre = document.getElementById("inputNombre");
let inputApellido = document.getElementById("inputApellido");
let inputFecha = document.getElementById("inputFecha");
let formulario = document.getElementById("formulario");

let inputTurnoM = document.getElementById("inputTurnoM");
let inputTurnoT = document.getElementById("inputTurnoT");
let inputTurnoN = document.getElementById("inputTurnoN");

let objFormulario = {
  nombre: "",
  apellido: "",
  fecha: "",
  turno: "",
};

const actualizarObjFormulario = (e) => {
  objFormulario[e.target.name] = e.target.value;
  // console.log(objFormulario);
};

inputNombre.onkeyup = actualizarObjFormulario;
inputApellido.onkeyup = actualizarObjFormulario;
inputFecha.onchange = actualizarObjFormulario;

inputTurnoM.onchange = actualizarObjFormulario;
inputTurnoT.onchange = actualizarObjFormulario;
inputTurnoN.onchange = actualizarObjFormulario;

formulario.onsubmit = (event) => {
  event.preventDefault();
  console.log("Enviando datos al servidor");
  console.log(objFormulario);
};
