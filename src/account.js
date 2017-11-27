(function(exports) {

  function Account(transaction) {
    this._balance = 0;
    this._transaction = transaction;
    this._transactions = [];
  }

  // Account.prototype.statement = function() {
  //   console.log("date || credit || debit || balance");
  //   for (i = 0; i < this._transactions.length; i ++) {
  //     console.log(this._transactions[i].getDate());
  //
  //   }
  // }
  Account.prototype.debit = function(amount) {
    this._transaction.setAsDebit();
    this._transaction.setAmount(amount);
    this._balance += amount;
    this._transactions.push(this._transaction);
  }

  Account.prototype.credit = function(amount) {
    this._transaction.setAsCredit();
    this._transaction.setAmount(amount);
    this._balance -= amount
    this._transactions.push(this._transaction);
  }

  exports.Account = Account;
})(this);
