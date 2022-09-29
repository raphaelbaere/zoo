const data = require('../data/zoo_data');

function countAnimals({ specie: empSpecie, sex: empSex } = 0) {
  const objetoRetornado = {};
  if (!empSpecie && !empSex) {
    data.species.forEach((element) => {
      objetoRetornado[element.name] = element.residents.reduce((acc) => acc + 1, 0);
    });
  } else if (empSpecie && !empSex) {
    return data.species.filter((element) =>
      element.name === empSpecie)[0].residents.reduce((acc) => acc + 1, 0);
  } else {
    return data.species.filter((element) =>
      element.name === empSpecie)[0].residents.filter((element) =>
      element.sex === empSex).reduce((acc) => acc + 1, 0);
  }
  return objetoRetornado;
}

module.exports = countAnimals;
