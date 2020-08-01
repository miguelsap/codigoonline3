/**
 * Retorna un OBJETO PELICULA en caso encuentra la pelicula
 * que el usuario busca según el nombre
 * En caso contrario se retorna null
 * @param {string} nombre
 */
const getPeliculasByName = (nombre) => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].title === nombre) {
      return data.peliculas[i];
    }
  }
  return null;
};
let pelicula = getPeliculasByName("¡Scooby!");
console.log(pelicula);

//2
/**
 * Funcion que retorna una lista de peliculas que tienen menos
 * de 200 votos (en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retorna un arreglo vacio
 */
const getMenosVotadas = () => {
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].vote_count < 200) {
      console.log(data.peliculas[i]);
    }
  }
};
getMenosVotadas();
// 3
/**
 * Funcion que retorna el numeor de peliculas cuyos lenguajes originales
 * no sean en ingles
 */
const getPeliculasExtranjeras = () => {
  let cont = 0;
  for (let i = 0; i < data.peliculas.length; i++) {
    if (data.peliculas[i].original_language !== "en") {
      cont++;
    }
  }
  return cont;
};
console.log(getPeliculasExtranjeras());

// 4
