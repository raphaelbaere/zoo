const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const oldestFromFirstSpeciesObject = data.species.find((element) =>
    element.id === data.employees.find((element2) =>
      element2.id === id).responsibleFor[0]).residents.reduce((acc, curr) => {
    if (acc.age < curr.age) {
      return curr;
    }
    return acc;
  });
  return Object.values(oldestFromFirstSpeciesObject);
}

module.exports = getOldestFromFirstSpecies;

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));
