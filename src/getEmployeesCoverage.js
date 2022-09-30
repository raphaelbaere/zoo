const data = require('../data/zoo_data');

function validaId(id) {
  if (!data.employees.some((element) => element.id === id)) {
    throw new Error('Informações inválidas');
  }
  return true;
}

function validaName(name) {
  if (!data.employees.some((element) => element.firstName === name || element.lastName === name)) {
    throw new Error('Nome inválido');
  }
  return true;
}

function criaObjeto({ id: objId, firstName: objFN,
  lastName: objLN, responsibleFor: objRPS }) {
  const newObject = {
    id: objId,
    fullName: `${objFN} ${objLN}`,
    species: objRPS.map((element) =>
      data.species.find((element2) => element2.id === element).name),
    locations: objRPS.map((element) =>
      data.species.find((element2) => element2.id === element).location),
  };
  return newObject;
}

function getEmployeesCoverage({ name: empName, id: empId } = 0) {
  if (!empName && !empId) {
    const newArray = [];
    data.employees.forEach((element) => newArray.push(criaObjeto(element)));
    return newArray;
  } if (empName && !empId) {
    validaName(empName);
    const employeeObject = data.employees.find((element) =>
      element.firstName === empName || element.lastName === empName);
    return criaObjeto(employeeObject);
  }
  validaId(empId);
  const employeeObject = data.employees.find((element) => element.id === empId);
  return criaObjeto(employeeObject);
}

module.exports = getEmployeesCoverage;
