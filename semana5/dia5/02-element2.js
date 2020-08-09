let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let seccion1 = document.querySelector(".seccion1");
let activo = false;

// Evento click
btnLight.onclick = () => {
  if (seccion1.classList.contains("sombra-dark")) {
    seccion1.classList.remove("sombra-dark");
  }
  seccion1.classList.add("sombra-light");
  if (activo === false) {
    btnLight.classList.add("boton-active");
    btnLight.classList.remove("boton-normal");
    activo = true;
  } else {
    btnLight.classList.add("boton-normal");
    btnLight.classList.remove("boton-active");
    activo = false;
  }
};

btnDark.onclick = () => {
  // if (seccion1.classList.contains("sombra-light")) {
  //   seccion1.classList.remove("sombra-light");
  // }
  seccion1.classList.add("sombra-dark");
};

btnToggle.onclick = () => {
  if (seccion1.classList.contains("sombra-dark")) {
    seccion1.classList.remove("sombra-dark");
    seccion1.classList.add("sombra-light");
  } else if (seccion1.classList.contains("sombra-light")) {
    seccion1.classList.add("sombra-dark");
    seccion1.classList.remove("sombra-light");
  } else {
    seccion1.classList.add("sombra-light");
  }
};
