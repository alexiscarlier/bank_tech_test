describe("Account", function() {
  it("has a balance of 0 by default", function() {
    account = new Account();
    expect(account._balance).toEqual(0);
  });
});

afterEach(function() {
    // account.delete();
  });
