describe("Change Balance", function() {
  it("is instantiated with a date and an account", function() {
    date = "10/01/2012";
    account = jasmine.createSpyObj('account', ['_balance']);
    changeBalance = new ChangeBalance(date, account);
    expect(changeBalance._account).toEqual(account);
    expect(changeBalance._date).toEqual(date);
    // One quirk of this test is that it passes even if you don't create an account object
    // I think that's because it's reading it from the other spec file, because it doesnt pass
    // if you remove it from there. Keep in mind if changing it seems useful
  });
});

// useful for future tests
// account._balance.and.returnValue(0)
