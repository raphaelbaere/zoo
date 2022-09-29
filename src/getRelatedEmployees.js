const data = require('../data/zoo_data');

function isManager(id) {
  let isItManager = false;
  data.employees.forEach((element) => {
    if ((element.managers.some((element2) => element2 === id))) {
      isItManager = true;
    }
  });
  return isItManager;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const relatedEmployees = data.employees.filter((element) =>
      element.managers.some((element2) => element2 === managerId));
    return relatedEmployees.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
