function add(a, b, c) {
  return a + b + c;
}

var add2 = function() {
  var outerArgs = Array.prototype.slice.call(arguments);
  console.log("outerArgs", outerArgs);

  if (outerArgs.length === 3) {
    var total = add.apply(null, outerArgs);
    return total;
  }

  var partialFunction = function() {
    var innerArgs = Array.prototype.slice.call(arguments);
    console.log("innerArgs", innerArgs);

    var totalArgs = outerArgs.concat(innerArgs);
    console.log("Total Args", totalArgs);
    return add2.apply(null, totalArgs);
  };

  return partialFunction;
};

var f1 = add2(1);
var f2 = f1(2);
var f3 = f2(3);

console.log("Result", f3);
