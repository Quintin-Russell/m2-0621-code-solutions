/* exported Bank */
function Bank() {
  this.accounts = [];
  this.nextAccountNumber = 1;
}

Bank.prototype.openAccount = function (holder, balance) {
  if ((balance > 0) && (balance % 1 === 0)) {
    let num = this.nextAccountNumber
    let acc = new Account(num, holder);
    acc.deposit(balance);
    this.accounts.push(acc);
    this.nextAccountNumber++
    return (acc.number)
  } else {
    return null
  }
};

Bank.prototype.getAccount = function (number) {
  let account = null;
  for (let acc of this.accounts) {
    if (acc.nextAccountNumber === number) {
      account = acc;
      break
    };
  };
  return account
};

Bank.prototype.getTotalAssets = function() {
  let total = 0;
  for (let acc of this.accounts) {
    total += acc.balance
  }
  return total;
}
