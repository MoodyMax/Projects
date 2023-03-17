
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 20,
    rate: 8
  };
  expect(calculateMonthlyPayment(values)).toEqual('$83.64');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 4000,
    years: 2,
    rate: 4.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('$174.59');
});

/// etc
