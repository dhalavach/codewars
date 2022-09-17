function handAngle(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let minAngle = minutes * (360 / 60);
  let hourAngle = hours * (360 / 12) + minutes / 2;
  let degreesAngle = Math.abs(hourAngle - minAngle);
  let smallerAngle = Math.min(360 - degreesAngle, degreesAngle);

  function degrees_to_radians(degrees) {
    const pi = Math.PI;
    return degrees * (pi / 180);
  }

  return degrees_to_radians(smallerAngle);
}
