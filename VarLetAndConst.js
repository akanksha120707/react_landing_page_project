console.log("let var and const");
//  var i global scope...value is always same
var a; /* variable initialize*/
var a = "alphabet"; /* variable initialize + declare[=*/
var city = "raebareli";
// const value never change and we cannot redeclare

// let block scope
{
  let city = "Rampur";
  city = "kolkata";
  console.log(city);
}
console.log(city);

const arr1 = [12, 23, 12, 25, 45];
arr1.push(50);
console.log(arr1);
