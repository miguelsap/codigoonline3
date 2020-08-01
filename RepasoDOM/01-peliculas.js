let tbody = document.getElementById("tbody");

const crear = (obj) => {
  return document.createElement(obj);
};

const fillTable = () => {
  peliculas.forEach((objPelicula, i) => {
    let fila = crear("tr");
    let tdNro = crear("td");
    tdNro.innerText = `${i + 1}`;
    let tdTitulo = crear("td");
    tdTitulo.innerText = `${objPelicula.title}`;
    let tdFecha = crear("td");
    tdFecha.innerText = `${objPelicula.release_date}`;
    let tdSinopsis = crear("td");
    tdSinopsis.innerText = `${objPelicula.overview}`;
    let tdImagen = crear("td");
    let img = crear("img");
    img.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${objPelicula.backdrop_path}`
    );
    img.setAttribute("width", "120px");
    img.setAttribute("alt", `Imagen de la pelicula ${objPelicula.title}`);
    tdImagen.appendChild(img);

    fila.appendChild(tdNro);
    fila.appendChild(tdTitulo);
    fila.appendChild(tdFecha);
    fila.appendChild(tdSinopsis);
    fila.appendChild(tdImagen);

    tbody.appendChild(fila);
  });
};

fillTable();
