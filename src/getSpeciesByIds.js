const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesArray = [];
  if (ids.length < 1) {
    return [];
  }
  ids.forEach((element) =>
    speciesArray.push(data.species.find((element2) => element === element2.id)));
  return speciesArray;
}
module.exports = getSpeciesByIds;
