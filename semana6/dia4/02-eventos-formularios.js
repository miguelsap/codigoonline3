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
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(email) === false) {
      helperEmail.innerText = "Error, ingrese un correo valido";
      helperEmail.classList.add("text-danger");
    } else {
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
  /**
   * Evento que se ejecuta cuando se hace submit en un formulario
   */
  formulario.onsubmit = (e) => {
    /**
     * preventDefault => previene todas las acciones automaticas
     * disparadas por cualquier evento
     * ejem: el CLICK en un enlace <a> redirecciona a una pagina
     * ejm: el SUBMIT de un formulario envia datos al server
     * y actualiza la pagina
     * ejm: el CLICK DERECHO en cualquier zona, abre un menu
     * contextual en la pagina
     * CONCLUSION: cualquiera de estos eventos pueden ser evitados
     */
    e.preventDefault();
    console.log("submit del formulario");
    let objUsuario = {
      usuario: inputEmail.value,
      password: Inputpassword.value,
    };
    console.log("Enviando......");
    console.log(objUsuario);
  };

  enlace.onclick = (e) => {
    e.preventDefault();
  };
};
