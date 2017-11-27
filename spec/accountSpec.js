describe("Account", function() {

  beforeEach(function() {
    transactions = []
    account = new Account(transactions);
  });


  it("has a balance of 0 by default", function() {
    expect(account._balance).toEqual(0);
  });

  it("is instantiated with transactions", function() {
    expect(account._transactions).toEqual(transactions);
  });
});
