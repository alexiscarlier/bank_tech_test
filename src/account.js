(function(exports) {

  function Account(transactions) {
    this._balance = 0;
    this._transactions = transactions;
  }

  Account.prototype.statement = function() {
    // console.log("date || credit || debit || balance");
    // for (i = 0; i < this._transactions.length; i ++) {
    //   console.log(this._transactions[i]._date);
    // }
  }

  exports.Account = Account;
})(this);
