(function(exports) {

  function Transaction(date, account) {
    this._date = date;
    this._account = account;
    this._type = null;
  }

  Transaction.prototype.debit = function(amount) {
    this._account._balance += amount;
    this._type = "debit";
  }

  Transaction.prototype.credit= function(amount) {
    this._account._balance -= amount;
    this._type = "credit";
  }

  exports.Transaction = Transaction;
})(this);
