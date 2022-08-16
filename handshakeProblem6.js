// does not pass the tests -  too slow

function getParticipants(handshakes) {
  if (handshakes == 0) {
    return 1;
  } else {
    if (handshakes == 1) {
      return 2;
    } else {
    }
    let persons = 2;

    function uniqueHandshakes(persons) {
      let personsIDs = [...Array(persons).keys()];
      let result = personsIDs.flatMap((v, i) =>
        personsIDs.slice(i + 1).map((w) => v + " " + w)
      ).length;
      return result;
    }

    while (uniqueHandshakes(persons) < handshakes) {
      persons++;
    }

    return persons;
  }
}

console.log(getParticipants(0));
console.log(getParticipants(1));
console.log(getParticipants(3));
console.log(getParticipants(6));
console.log(getParticipants(7));
console.log(getParticipants(10));
console.log(getParticipants(999));
