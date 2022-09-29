const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const newObject = {
    child: entrants.filter((element) => element.age < 18).reduce((acc) => acc + 1, 0),
    adult: entrants.filter((element) =>
      element.age >= 18 && element.age < 50).reduce((acc) => acc + 1, 0),
    senior: entrants.filter((element) => element.age >= 50).reduce((acc) => acc + 1, 0),
  };
  return newObject;
};

function calculateEntry(entrants = 0) {
  if (entrants === 0 || entrants.length < 1 || Object.keys(entrants).length === 0) {
    return 0;
  }
  const entriesByAge = countEntrants(entrants);
  return (entriesByAge.child * data.prices.child)
  + (entriesByAge.adult * data.prices.adult)
  + (entriesByAge.senior * data.prices.senior);
}

module.exports = { calculateEntry, countEntrants };
