(function(exports) {

  function Transaction(date) {
    this._date = date;
    this._type = null;
    this._amount = null;
  }

  Transaction.prototype.getDate = function() {
    return this._date;
  }

  Transaction.prototype.getType = function() {
    return this._type;
  }

  Transaction.prototype.getAmount = function(amount) {
    return this._amount;
  }

  Transaction.prototype.setAmount = function(amount) {
    this._amount = amount;
  }

  Transaction.prototype.setAsDebit = function() {
    this._type = "debit";
  }

  Transaction.prototype.setAsCredit = function() {
    this._type = "debit";
  }

  // Transaction.prototype.debit = function(amount) {
  //   this._type = "debit";
  //   this._amount = amount;
  // }
  //
  // Transaction.prototype.credit= function(amount) {
  //   this._type = "credit";
  //   this._amount = amount;
  // }

  exports.Transaction = Transaction;
})(this);
