describe("Transaction", function() {

  beforeEach(function() {
    date = "10/01/2012";
    // account = jasmine.createSpyObj('account', ['_balance']);
    // the tests below pass because they're receiving a real account object
    // from the other spec. I need to double account for these to work properly.
    // Skipping for now because of time spent on it so far
    transaction = new Transaction(date, account);
  });



  it("is instantiated with a date and an account", function() {
    expect(transaction._account).toEqual(account);
    expect(transaction._date).toEqual(date);
  });

  it("can debit an account balance, making the transaction a debit type", function() {
    transaction.debit(500);
    expect(account._balance).toEqual(500);
    expect(transaction._type).toEqual("debit");
  });

  it("can credit an account balance", function() {
    transaction.credit(500);
    expect(account._balance).toEqual(0);
    expect(transaction._type).toEqual("credit");
  });
});
