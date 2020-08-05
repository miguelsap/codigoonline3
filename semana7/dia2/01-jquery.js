//Capturar elementos con JQuery
// let btnCambiarParrafo = $("#btnCambiarParrafo");

//envetos en JQuery
$("#btnCambiarParrafo").click(() => {
  //modificar el texto (innerText) de un elemento
  $("#parrafo1").text("Nuevo texto del parrafo");
});
$("#btnAgregarNumero").click(() => {
  let random = (Math.random() * (47 - 0) + 0).toFixed(0);
  //Crear elementos JQuery y agregarlos a otros elementos
  let li = $(`<li>${random}</li>`);
  $("#numeros").append(li);
});
$("#btnEstilosLi").click(() => {
  //Aplicar estilos css a uno o varios elementos
  $("#numeros li").css("background-color", "#444").css("color", "#fff");
});
$("#btnFormulario").click(() => {
  $("#formulario").addClass("formulario");
});
