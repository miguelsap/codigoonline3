let lista = document.getElementById("lista");
let btnGenerar = document.getElementById("btnGenerar");

btnGenerar.onclick = () => {
  /**
   * document.createElement("etiqueta del elemento")
   * Retorna un elemento HTML que aun no esta en el DOM
   * imaginemos que dicho elemento esta en el limbo
   */
  let liTemporal = document.createElement("li");
  let numeroAleatorio = parseInt(Math.random() * (45 - 1) + 1);
  liTemporal.innerText = numeroAleatorio;
  /**
   * elemento.setAttribute('nombre_atributo','valor_atributo')
   */
  liTemporal.setAttribute("class", "lista-item");
  liTemporal.onclick = () => {
    console.log(`Uy! alguien esta click en ${numeroAleatorio}`);
  };
  lista.appendChild(liTemporal);
};

/**
 * Reto:
 * - Permitir como máximo 7 numeros de loteria
 * - Validar que si un numero se repite, salga otro numero
 * HINT: Usar un arreglo para guardar
 */
