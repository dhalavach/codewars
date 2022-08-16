function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode == correctCode) return false;
  let cd = new Date(currentDate);
  let ed = new Date(expirationDate);
  if (ed > cd) {
    return false;
  } else {
    return true;
  }
}
