(function(exports) {

  function Transaction(date, account) {
    this._date = date;
    this._account = account;
  }

  Transaction.prototype.debit = function(amount) {
    this._account._balance += amount;
  }

  Transaction.prototype.credit= function(amount) {
    this._account._balance -= amount;
  }

  exports.Transaction = Transaction;
})(this);
