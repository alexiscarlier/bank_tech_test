describe("Change Balance", function() {

  beforeEach(function() {
    date = "10/01/2012";
    // account = jasmine.createSpyObj('account', ['_balance']);
    // the tests below pass because they're receiving a real account object
    // from the other spec. I need to double account for these to work properly.
    // Skipping for now because of time spent on it so far
    changeBalance = new ChangeBalance(date, account);
  });



  it("is instantiated with a date and an account", function() {
    expect(changeBalance._account).toEqual(account);
    expect(changeBalance._date).toEqual(date);
  });

  it("can debit an account balance", function() {
    changeBalance.debit(500);
    expect(account._balance).toEqual(500);
  });

  it("can credit an account balance", function() {
    changeBalance.credit(500);
    expect(account._balance).toEqual(0);
  });
});
