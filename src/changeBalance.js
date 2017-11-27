(function(exports) {

  function ChangeBalance(date, account) {
    this._date = date;
    this._account = account;
  }

  // ChangeBalance.prototype.debit = function(amount) {
  //   this._account._balance += amount;
  // }
  //
  // ChangeBalance.prototype.credit= function(amount) {
  //   this._account._balance -= amount;
  // }

  exports.ChangeBalance = ChangeBalance;
})(this);
