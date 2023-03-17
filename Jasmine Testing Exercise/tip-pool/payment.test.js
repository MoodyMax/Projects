describe("Payment test (with setup and tear-down)", function() {
    beforeEach(function () {
      // initialization logic
    //   billAmtInput.value = '200';
    //   tipAmtInput.value = '100';
    });

    it('should add a curPayment object to allPayments, update html', function () {
        submitPaymentInfo();

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment' + serverId].serverName).toEqual('200');
      });

    it('should return undefined with negative or empty inputs, positive billAmt is required but tip can be 0', function () {
        createCurPayment();
    

      });

    it('should create table row element and pass to appendTd with input value', function () {
        appendPaymentTable();
    

      });

    it('should create table row element and pass to appendTd function with input value on updateServerTable()', function () {
        updateSummary();
    

      });

    afterEach(function() {
        // teardown logic
        billAmtInput.value = '';
        tipAmtInput.value = '';
      });
});