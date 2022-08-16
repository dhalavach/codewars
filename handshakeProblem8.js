// 1st working solution - still too verbose

function getParticipants(handshakes) {
  if (handshakes == 0) {
    return 1;
  } else {
    if (handshakes == 1) {
      return 2;
    } else {
    }
    let persons = 0;
    function uniqueHandshakes(persons) {
      return (persons * (persons - 1)) / 2;
    }

    while (uniqueHandshakes(persons) < handshakes) {
      persons++;
    }
    return persons;
  }
}
