const url = "https://reqres.in/api/users";
const tbody = document.getElementById("tbody");
const alertaCargando = document.getElementById("alertaCargando");
const miTabla = document.getElementById("miTabla");

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((myJson) => {
//     console.log(myJson);
//   });

const getUsuarios = async () => {
  const response = await fetch(url);
  const myJson = await response.json();
  return myJson;
};

getUsuarios().then((rpta) => {
  dibujarTabla(rpta.data);
  console.log(rpta.data);
});

const dibujarTabla = (usuarios) => {
  usuarios.forEach((objUsuario, i) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${i + 1}</td>
                      <td>${objUsuario.id}</td>
                      <td>${objUsuario.first_name}</td>
                      <td>${objUsuario.last_name}</td>
                      <td>${objUsuario.email}</td>
                      <td class='text-center'><img src='${
                        objUsuario.avatar
                      }' class='rounded-circle' width='50px'/></td>`;
    tbody.appendChild(fila);
  });
  //Muestre la tabla y ocultar el cargando
  miTabla.removeAttribute("hidden");
  alertaCargando.setAttribute("hidden", "hidden");
};
