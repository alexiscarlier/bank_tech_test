describe("Account", function() {
  it("has a balance of 0 by default", function() {
    transactions = []
    account = new Account(transactions);
    expect(account._balance).toEqual(0);
  });
});

afterEach(function() {
    // account.delete();
  });
