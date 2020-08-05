let productos = [];

const dibujarCards = () => {
  // 1. Limpiar el section#productos
  $("#productos").html("");
  productos.forEach((objProducto) => {
    $("#productos").append(`
    <div class="productos__producto">
      <h4>${objProducto.nombre}</h4>
      <p><span>Codigo:</span>${objProducto.codigo}</p>
    </div>`);
  });
};

$("#formulario").submit((e) => {
  e.preventDefault();
  let objProducto = {
    nombre: $("#inputNombre").val(),
    codigo: $("#inputCodigo").val(),
  };
  productos.push(objProducto);
  dibujarCards();
});
