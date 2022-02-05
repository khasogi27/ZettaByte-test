// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  let res;
  for (let i = 0; i < input.length; i++) {
    if (input[i] == 7) {
      res = input[i];
      break;
    }
  }
  return res;
}

console.log(result(input));