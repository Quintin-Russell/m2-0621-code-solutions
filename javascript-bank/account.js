/* exported Account */
function Account(number, holder){
  this.number = number;
  this.holder = holder;
  this.deposit = function(amt) {
    if (amt){
      number += amt
    }
  };
  this.withdraw = function(amt) {
    if (amt) {
      number -= amt;
    }
  };
}
