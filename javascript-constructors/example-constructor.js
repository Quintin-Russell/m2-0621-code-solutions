function ExampleConstructor() {
  console.log("ExampleConstructor.prototype", ExampleConstructor.prototype);
  console.log("typeof(ExampleConstructor.prototype)", typeof(ExampleConstructor.prototype));
}

const ex = new ExampleConstructor()
console.log("ex", ex)
const exInstanceof = ex instanceof ExampleConstructor
console.log("is ex an instance of ExampleConstructor", exInstanceof)
