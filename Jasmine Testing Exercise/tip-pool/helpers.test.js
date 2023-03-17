describe("Helper test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic

    });
  
    it("accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects", function () {
        sumPaymentTotal();

    });
  
    it('converts the bill and tip amount into a tip percent', function () {
        calculateTipPercent();

    });
    
    it('expects a table row element, appends a newly created td element from the value on appendTD()', function () {
        appendTd();

    });
  
    afterEach(function() {
      // teardown logic

    });
  });
  