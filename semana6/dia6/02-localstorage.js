let formulario = document.getElementById("formulario");
let inputCodigo = document.getElementById("inputCodigo");
let inputNombre = document.getElementById("inputNombre");
let tbody = document.getElementById("tbody");
let inputColor = document.getElementById("inputColor");
let body = document.querySelector("body");
let menu = document.getElementById("menu");

inputColor.onchange = () => {
  body.style.backgroundColor = inputColor.value;
  localStorage.setItem("color", inputColor.value);
};

let productos = [];

const llenarTabla = () => {
  tbody.innerHTML = "";
  productos.forEach((objProducto, i) => {
    let tr = document.createElement("tr");
    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;
    let tdCodigo = document.createElement("td");
    tdCodigo.innerText = objProducto.codigo;
    let tdNombre = document.createElement("td");
    tdNombre.innerText = objProducto.nombre;
    tr.appendChild(tdNro);
    tr.appendChild(tdCodigo);
    tr.appendChild(tdNombre);
    tbody.appendChild(tr);
  });
};

formulario.onsubmit = (e) => {
  e.preventDefault();
  let objProducto = {
    codigo: inputCodigo.value,
    nombre: inputNombre.value,
  };
  productos.push(objProducto);

  /**
   * JSON es una clase estatica que tiene una clase de funciones
   * para trabajar con objetos JSON
   * ejm:
   * JSON.stringify(objeto|arreglo), retorna el parametro pasado
   * como argumento en STRING
   */
  let productosString = JSON.stringify(productos);
  /**
   * window.localStorage.setItem('identificador_del_item','valor')
   * En la memoria localStorage del navegador, se crea una variable
   * llamada 'identificador_del_item' con el valor 'valor'
   * OJO: solo se pueden guardar valores Strings
   */
  // console.log(productosString);
  window.localStorage.setItem("listaProductos", productosString);
  llenarTabla(productos);
};

/**
 * funcion que verifica si hay datos en el LOCALSTORAGE
 * y llena la tabla con dichos datos iniciales
 */
const verificarStorage = () => {
  let productosStorage = window.localStorage.getItem("listaProductos");
  /**
   * Si hay datos en esa clave
   */
  if (productosStorage) {
    let productosJSON = JSON.parse(productosStorage);
    productos = productosJSON;
    llenarTabla();
  }
  let colorStorage = localStorage.getItem("color");
  if (colorStorage) {
    body.style.backgroundColor = colorStorage;
    inputColor.value = colorStorage;
  }
};

verificarStorage();

document.querySelector("body").oncontextmenu = (e) => {
  e.preventDefault();
  menu.style.left = `${e.clientX}px`;
  menu.style.top = `${e.clientY}px`;
  menu.removeAttribute("hidden");
};
document.querySelector("body").onclick = () => {
  menu.setAttribute("hidden", "hidden");
};
