let selectPais = document.getElementById("selectPais");
let selectDepartamento = document.getElementById("selectDepartamento");

let poblarPaises = () => {
  let options = "<option value = 0> --- Seleccione un pais ---</option>";
  paises.forEach((objPais) => {
    options += `<option value="${objPais.id}">${objPais.nombre}</option>`;
  });
  selectPais.innerHTML = options;
};

let poblarDepartamentos = (index) => {
  let options = "";
  departamentos.forEach((objDepa) => {
    if (objDepa.paisId.toString() === index) {
      options += `<option value="${objDepa.id}">${objDepa.nombre}</option>`;
    }
  });
  selectDepartamento.removeAttribute("disabled");
  selectDepartamento.innerHTML = options;
};

poblarPaises();

selectPais.onchange = (e) => {
  poblarDepartamentos(selectPais.value);
};
