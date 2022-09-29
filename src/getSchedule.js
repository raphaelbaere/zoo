const data = require('../data/zoo_data');

const hours = {
  Tuesday: {
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Tuesday')).map((element) => element.name),
  },
  Wednesday: {
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Wednesday')).map((element) => element.name),
  },
  Thursday: {
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Thursday')).map((element) => element.name),
  },
  Friday: {
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Friday')).map((element) => element.name),
  },
  Saturday: {
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Saturday')).map((element) => element.name),
  },
  Sunday: {
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
    exhibition: data.species.filter((element) =>
      element.availability.includes('Sunday')).map((element) => element.name),
  },
  Monday: {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  },
};

function getSchedule(scheduleTarget = 0) {
  if (scheduleTarget === 'Monday') {
    return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  if (data.species.find((element2) => element2.name === scheduleTarget)) {
    return data.species.find((element) => element.name === scheduleTarget).availability;
  }
  if (Object.keys(data.hours).includes(scheduleTarget)) {
    const newObject = {};
    newObject[scheduleTarget] = {
      officeHour: `Open from ${
        data.hours[scheduleTarget].open
      }am until ${data.hours[scheduleTarget].close}pm`,
      exhibition: data.species.filter((element) =>
        element.availability.includes(scheduleTarget)).map((element) => element.name),
    };
    return newObject;
  }
  return hours;
}

module.exports = getSchedule;
