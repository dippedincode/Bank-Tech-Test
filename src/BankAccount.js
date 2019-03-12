function bankAccount() {
  this._balance = 0
}

bankAccount.prototype.deposit = function(amount) {
  this._balance = this._balance + amount
}

bankAccount.prototype.withdraw = function(amount) {
  this._balance = this._balance - amount
}
