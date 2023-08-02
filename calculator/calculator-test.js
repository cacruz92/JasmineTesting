
it('should calculate the monthly rate correctly', function () {
  const testValues = {
    amount: 100000,
    years: 5,
    rate: 5
  };
  const expectedMonthlyPayment = '1887.12'
  const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
  expect(calculatedMonthlyPayment).toBe(expectedMonthlyPayment);
});


it("should return a result with 2 decimal places", function() {
  const testValues = {
    amount: 250000,
    years: 10,
    rate: 12
  }
  const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
  const twoDecimals = Math.floor(calculatedMonthlyPayment * 100) === calculatedMonthlyPayment * 100;

  expect(twoDecimals).toBe(true);
  
});

/// etc

  