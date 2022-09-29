const data = require('../data/zoo_data');

function getEmployeeByName(employeeName = 'vazio') {
  if (employeeName === 'vazio') return {};
  return data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
}

module.exports = getEmployeeByName;
