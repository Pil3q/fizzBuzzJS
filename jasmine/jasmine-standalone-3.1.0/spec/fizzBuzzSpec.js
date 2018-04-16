describe("fizzBuzz", function() {

  it('prints fizz for three', function() {
    expect(fizzBuzz(1,3)).toEqual("12Fizz");
  })
  it('prints buzz for five', function() {
    expect(fizzBuzz(4,5)).toEqual("4Buzz");
  })
  it('prints fizzbuzz for fifteen', function() {
    expect(fizzBuzz(14,15)).toEqual("14FizzBuzz");
  })
});
