const data = require('../data/zoo_data');

const createObject = () => {
  const newObject = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((element) => {
    newObject[element] = data.species.filter((element2) =>
      element2.location === element).map((element3) => element3.name);
  });
  return newObject;
};

const createObjectWithNames = () => {
  const newObject = {};
  ['NE', 'NW', 'SE', 'SW'].forEach((element) => {
    newObject[element] = data.species.filter((element2) =>
      element2.location === element).map((element3) => element3.name).reduce((acc, curr) => {
      const animalObject = {};
      animalObject[curr] = data.species.filter((element2) =>
        element2.name === curr)[0].residents.map((element5) => element5.name);
      acc.push(animalObject);
      return acc;
    }, []);
  });
  return newObject;
};

const createObjectWithNamesSorted = () => {
  const newObject = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((element) => {
    newObject[element] = data.species.filter((element2) =>
      element2.location === element).map((element3) => element3.name).reduce((acc, curr) => {
      const animalObject = {};
      animalObject[curr] = data.species.filter((element2) =>
        element2.name === curr)[0].residents.map((element5) => element5.name).sort();
      acc.push(animalObject);
      return acc;
    }, []);
  });
  return newObject;
};

const createObjectWithNamesSortedAndSex = (objSex, sorted) => {
  const newObject = {};
  const locations = ['NE', 'NW', 'SE', 'SW'];
  locations.forEach((element) => {
    newObject[element] = data.species.filter((element2) =>
      element2.location === element).map((element3) => element3.name).reduce((acc, curr) => {
      const animalObject = {};
      animalObject[curr] = data.species.filter((element2) =>
        element2.name === curr)[0].residents.filter((element10) =>
        element10.sex === objSex).map((element5) => element5.name);
      if (sorted) {
        animalObject[curr].sort();
      }
      acc.push(animalObject);
      return acc;
    }, []);
  });
  return newObject;
};

const createObjectWithNamesSex2 = (objSex, sorted) => {
  if (objSex) {
    return createObjectWithNamesSortedAndSex(objSex, sorted);
  }
  if (!objSex && sorted) {
    return createObjectWithNamesSorted();
  }
  return createObjectWithNames();
};

const getAnimalMap = (obj) => {
  if (!obj) {
    return createObject();
  }
  const { includeNames, sex, sorted } = obj;
  if (!includeNames) {
    return createObject();
  }
  return createObjectWithNamesSex2(sex, sorted);
};

module.exports = getAnimalMap;
