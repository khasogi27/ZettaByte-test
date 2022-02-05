// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  // Your Code Here
  let num1 = [];
  let num2 = [];
  let res = [];
  for (let i = 1; i <= number.length; i++) {
    if (i % 2 == 0) {
      num2.push(i);
    } else {
      num1.push(i);
    }
  }
  res.push(num1, num2);
  return res;
}

console.log(result(number));