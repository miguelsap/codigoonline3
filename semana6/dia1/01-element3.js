let btnTitulo1 = document.querySelector("#btnTitulo1");
let btnTitulo2 = document.querySelector("#btnTitulo2");
let h1 = document.querySelector("h1");
let selectPeliculas = document.getElementById("selectPeliculas");
let btnSelect = document.getElementById("btnSelect");
btnTitulo1.onclick = () => {
  /**
   * elemento.innerText => setea el contenido de una etiqueta
   * OJO, se debe considerar solo el contenido a nivel
   * de texto y no HTML
   */
  h1.innerText = "Nuevo <i>título</i> 1";
};
/**
 * elemento.innerHTML => setea el contenido de una etiqueta
 * a nivel de texto y tambien reconoce etiquetas HTML
 */
btnTitulo2.onclick = () => {
  h1.innerHTML = "Nuevo <em>título</em> 1";
};

const llenarSelect = () => {
  let contenido = "";
  peliculas.forEach((objPelicula) => {
    contenido += `<option value=${objPelicula.id}>${objPelicula.title}</option>`;
  });
  selectPeliculas.innerHTML = contenido;
};

btnSelect.onclick = () => {
  llenarSelect();
};
