/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amt) {
  if ((amt > 0) && ((amt % 1) === 0)) {
    let trans = new Transaction('deposit', amt);
    this.transactions.push(trans);
    return true
  } else {
    return false
  }
};

Account.prototype.withdraw = function (amt) {
  if ((amt > 0) && ((amt % 1) === 0)) {
    let trans = new Transaction('withdrawal', amt);
    this.transactions.push(trans);
    return true
  } else {
    return false
  }
};

Account.prototype.getBalance = function () {
  let balance = 0;
  for (let trans of this.transactions){
    if (trans.type === "deposit"){
      balance += trans.amount
    } else {
      balance -= trans.amount;
    }
    return balance
  }
};

/* const acc = new Account(1000, "john");
acc.deposit(100);
console.log(acc.number) */
