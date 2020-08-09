$(document).ready(function () {
  $("#example").DataTable({
    language: {
      paginate: {
        first: "Primero",
        last: "Ultimo",
        next: "Siguiente",
        previous: "Anterior",
      },
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ entradas",
      info: "Mostrando _START_ al _END_ de _TOTAL_ entradas",
    },
    dom: "Bfrtip",
    buttons: ["copy", "csv", "excel", "pdf", "print"],
  });
});
