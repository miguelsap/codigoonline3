let btnLight = document.getElementById("btnLight");
let btnDark = document.getElementById("btnDark");
let btnToggle = document.getElementById("btnToggle");
let linkDark = document.getElementById("linkDark");
let cuadrado = document.getElementById("cuadrado");
let cuadrado2 = document.getElementById("cuadrado2");
let cuadrado3 = document.getElementById("cuadrado3");

btnLight.onclick = () => {
  // let href = linkDark.getAttribute("href");
  // if (href.lengt > 0) {
  linkDark.setAttribute("href", "");
  // }
};

btnDark.addEventListener("click", () => {
  linkDark.setAttribute("href", "./01-eventos-dark.css");
});

btnToggle.onclick = (e) => {
  console.log(e);
  let href = linkDark.getAttribute("href");
  if (href.length) {
    linkDark.setAttribute("href", "");
  } else {
    linkDark.setAttribute("href", "./01-eventos-dark.css");
  }
};

cuadrado.onclick = (e) => {
  console.log(e);
  console.log(`Tipo de evento ${e.type}`);
  console.log(`Elemento objetivo del evento`);
  console.log(e.target);
  console.log(`Valores de X e Y con respecto al VIEWPORT`);
  console.log(`X=>${e.clientX} - Y=>${e.clientY}`);
  console.log(`Valores de X e Y con respecto al MISMO ELEMENTO`);
  console.log(`X=>${e.offsetX} - Y=>${e.offsetY}`);
};

cuadrado2.onmousemove = (e) => {
  let x = e.layerX;
  let y = e.layerY;
  console.log(e);
  console.log(`${x}-${y}`);
  let circulo = document.createElement("div");
  circulo.setAttribute("class", "circulo");
  circulo.style.left = x + "px";
  circulo.style.top = y + "px";
  cuadrado2.appendChild(circulo);
};

/**
 * evento que se ejecutra cuando el mouse que pasa por encima del elemento
 * A diferencia del mousemove, el evento solo se dispara una vez, cuando el mouse
 * ingresa al elemento
 */
cuadrado3.onmouseover = (e) => {
  console.log(e);
  cuadrado3.classList.add("sombra");
};

cuadrado3.onmouseleave = (e) => {
  cuadrado3.classList.remove("sombra");
};
