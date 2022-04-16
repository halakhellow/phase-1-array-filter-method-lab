let findMatching = (driversNames, name) =>
  driversNames.filter((driver) => driver.toLowerCase() === name.toLowerCase());

let fuzzyMatch = (drivers, str) => {
  return drivers.filter(
    (driver) => driver.toLowerCase().indexOf(str.toLowerCase()) === 0
  );
};
