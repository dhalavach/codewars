function makeDate(hours, minutes) {
  const date = new Date();
  date.setMinutes(minutes);
  date.setHours(hours);
  return date;
}

let dt = makeDate(0, 0);
console.log(dt);
