function isValidLoan(daysLate) {
  return daysLate >= 0;
}

function calculateLateFee(daysLate, ratePerDay) {
<<<<<<< HEAD
  return Math.round(daysLate * ratePerDay);
=======
 if (daysLate <= 1) {
  return 0;
}
  return Math.round(daysLate * ratePerDay);
>>>>>>> origin/feature/late-fee-policy
}

module.exports = { isValidLoan, calculateLateFee };
