//1
const getTotalDeCasosEnElMundo = () => {
  let cont = 0;
  for (let i = 0; i < covid.length; i++) {
    cont += covid[i].cases;
  }
  return cont;
};
console.log(getTotalDeCasosEnElMundo());

//2
const getCifrasByNamePais = (pais) => {
  for (let i = 0; i < covid.length; i++) {
    if (covid[i].country === pais) {
      return covid[i];
    }
  }
  return null;
};
console.log(getCifrasByNamePais("USA"));

//3
const getporcentajeDeRecuperadosByNamePais = (pais) => {
  let country = getCifrasByNamePais(pais);
  return ((country.recovered * 100) / country.cases).toFixed(2);
};
console.log(getporcentajeDeRecuperadosByNamePais("Peru"));

//4
const generarArrayPorcentajeDePruebasPositivas = () => {
  let country = [];
  for (let i = 0; i < covid.length; i++) {
    country.push({
      pais: covid[i].country,
      pruebasRealizadas: covid[i].totalTests,
      pruebasPositivas: covid[i].cases,
      PorcentajePruebas: ((covid[i].cases * 100) / covid[i].totalTests).toFixed(
        2
      ),
    });
  }
  return country;
};
console.log(generarArrayPorcentajeDePruebasPositivas());
