describe("Account", function() {

  beforeEach(function() {
    transaction = new Transaction("21/11/1995");
    account = new Account(transaction);
  });

  it("has a balance of 0 by default", function() {
    expect(account._balance).toEqual(0);
  });

  it("is instantiated with transactions", function() {
    expect(account._transaction).toEqual(transaction);
  });

  it("has a debit method which updates transaction properties", function() {
    account.debit(500);
    expect(account._transaction.getType()).toEqual("debit");
    expect(account._transaction.getAmount()).toEqual(500);
    expect(account._balance).toEqual(500);
    expect(account._transactions[0]).toEqual(account._transaction);
  });

  it("has a credit method which updates transaction properties", function() {
    account.credit(500);
    expect(account._transaction.getType()).toEqual("credit");
    expect(account._transaction.getAmount()).toEqual(500);
    expect(account._balance).toEqual(-500);
    expect(account._transactions[0]).toEqual(account._transaction);
  });
});
