/**
 * Funcion que se dispora cuando se ha cargado todos los elementos hijos
 * de un elemento
 */
window.onload = () => {
  let formulario = document.getElementById("formulario");
  let inputEmail = document.getElementById("inputEmail");
  let Inputpassword = document.getElementById("Inputpassword");
  let enlace = document.getElementById("enlace");

  const validarEmail = (email) => {
    let helperEmail = document.getElementById("helperEmail");
    let resultados = usuarios.filter((Objusuario) => {
      if (Objusuario.correo === email) {
        return Objusuario;
      }
    });
    if (resultados.length > 0) {
      helperEmail.innerText = "ERROR! el email ya esta siendo usado";
      helperEmail.classList.remove("text-success");
      helperEmail.classList.add("text-danger");
      inputEmail.setAttribute("class", "input-danger");
    } else {
      helperEmail.innerText = "BIEN! el email esta disponible";
      helperEmail.classList.remove("text-danger");
      helperEmail.classList.add("text-success");
      inputEmail.setAttribute("class", "input-success");
    }
  };

  // const validarEmail = (email) => {
  //   let helperEmail = document.getElementById("helperEmail");
  //   let resultados = usuarios.filter((Objusuario) => {
  //     Objusuario.correo === email;
  //   });
  //   helperEmail.innerText =
  //     resultados.length > 0
  //       ? "ERROR! el email ya esta siendo usado"
  //       : "BIEN! el email esta disponible";
  // };

  /**
   * funcion que se ejecuta cuando una tecla es presionada y soltada
   * sobre un elemento objetivo
   * @param {*} e
   */
  inputEmail.onkeyup = (e) => {
    // console.log(e);
    console.log(inputEmail.value);
    validarEmail(inputEmail.value.trim());
  };
};
