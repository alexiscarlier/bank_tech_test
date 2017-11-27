(function(exports) {

  function Account(transactions) {
    this._balance = 0;
  }

  // Account.prototype.statement = function() {
  //   console.log("date || credit || debit || balance");
  // }

  exports.Account = Account;
})(this);
