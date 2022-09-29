const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const speciesObject = data.species.find((element) => element.name === animal).residents;
  return speciesObject.every((element) => element.age >= age);
}

module.exports = getAnimalsOlderThan;
