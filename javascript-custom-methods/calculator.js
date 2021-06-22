/* exported calculator */
var calculator = {
  add: function(x,y) {
    return (x + y)
  },
  subtract: function(x,y) {
    return (x-y)
  },
  multiply: function(x,y) {
    return (x*y)
  },
  divide: function(x,y) {
    return (x/y)
  },
  square: function(x) {
    return (x**2)
  },
  sumAll: function(numbers) {
    let i = 0
    for (let num of numbers){
      i+=num
    }
    return i
  },
  getAverage: function(numbers) {
    const sum = calculator.sumAll(numbers)
    const len = numbers.length
    return (sum / len)
  }
}
