(function(exports) {

  function Transaction(date, account) {
    this._date = date;
    this._type = null;
    this._amount = null;
  }

  Transaction.prototype.debit = function(amount) {
    this._type = "debit";
    this._amount = amount;
  }

  Transaction.prototype.credit= function(amount) {
    this._type = "credit";
    this._amount = amount;
  }

  exports.Transaction = Transaction;
})(this);
