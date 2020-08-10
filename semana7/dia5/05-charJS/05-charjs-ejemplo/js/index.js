let graficoClima = document.getElementById("graficoClima").getContext("2d");

const climas = clima.list.map((objClima) => {
  let fecha = new Date(objClima.dt * 1000);
  let fechaStr = `${fecha.getDate()}-${
    fecha.getMonth() + 1
  }-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
  return {
    fecha: fechaStr,
    temp: objClima.main.temp,
  };
});

const fechas = climas.map((objClima) => objClima.fecha);

const temperaturas = climas.map((objClima) => objClima.temp);

let miGrafico = new Chart(graficoClima, {
  type: "line",
  data: {
    labels: fechas,
    datasets: [
      {
        label: "Pronostico de temperaturas Arequipa",
        data: temperaturas,
        backgroundColor: ["rgba(54,162 , 235, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});
