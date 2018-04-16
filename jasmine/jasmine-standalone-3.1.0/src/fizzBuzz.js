function fizzBuzz(start, end) {
  var message = "";
  for (var i = start; i <= end; i++) {
    if (i % 15 === 0)
       message += "FizzBuzz"
    else if (i % 3 === 0)
       message += "Fizz"
    else if (i % 5 === 0)
       message += "Buzz"
    else
       message += i
  }
  return message;
};
