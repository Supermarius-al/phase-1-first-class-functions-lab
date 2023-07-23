// Code your solution in this file!
const drivers = ["Antonia", "Nuru", "Amari", "Mo"];
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fareMultiplier) {
  if (fareMultiplier == 2) {
    return function fareDoubler(fare) {
      return fare * 2;
    };
  } else if (fareMultiplier == 3) {
    return function fareTripler(fare) {
      return fare * 3;
    };
  } else if (fareMultiplier == 4) {
    return function fareQuadruple(fare) {
      return fare * 4;
    };
  } else if (fareMultiplier == 5) {
    return function fareQuintupler(fare) {
      return fare * 5;
    };
  }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(drivers);
}
