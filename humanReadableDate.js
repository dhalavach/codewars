function formatDuration(seconds) {
  let secondsNumber = {
    min: 60,
    hour: 3600,
    day: 86400,
    year: 86400 * 365,
  };

  function format(seconds) {
    if (seconds < 0 || Number.isNaN(seconds)) return "error";
    if (seconds === 0) return "now";

    let years = 0;
    let days = 0;
    let min = 0;

    let secRemaining = seconds;
    let dateElements = [];

    function findUnits(unit) {
      let i = 0;
      while (secRemaining >= secondsNumber[unit]) {
        secRemaining -= secondsNumber[unit];
        i++;
      }
      return i;
    }

    years = findUnits("years");
    days = findUnits("days");
    hours = findUnits("hours");
    min = findUnits("min");
    return { years, days, hours, min, seconds: secRemaining };
  }

  module.exports = format;
}
