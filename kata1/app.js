// 1.
// Write a generic function chainer that takes a starting value, and an array of functions to execute on it. The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

const add = function (n) {
  return n + 1;
};
const mult = function (n) {
  return n * 30;
};
// const division = function (n) {
//   return n / 2;
// };
let arrayFunc = [add, mult];
let chain = function (startingValue, arrayFunc) {
  for (let i = 0; i < arrayFunc.length; i++) {
    startingValue = arrayFunc[i](startingValue);
  }
  return startingValue;
};

//////////////////////////////////////////////////////////OR////////////////////////////////////////////////////////

let funcList = [parseInt(prompt("enter number")),add, mult];
let result=funcList.reduce(function(total,func){
    return func(total)})
console.log(result)