function checkValidSquare(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let lookSquare = {};
  let match;
  for (let i = 0; i < arr1.length; i++) {
    const number = arr1[i] * arr1[i];
    if (lookSquare[number] > 0) {
      lookSquare[number]++;
    } else {
      lookSquare[number] = 1;
    }
  }
  console.log("before", { lookSquare });
  for (let i = 0; i < arr2.length; i++) {
    const number = arr2[i];
    console.log("number", number);
    if (lookSquare[i] == arr2[number]) {
      match = true;
    } else {
      console.log("after", { lookSquare });
      match = false;
    }
  }
  return match;
}
let num1 = [4, 5, 3];
let num2 = [9, 25, 16];
let result = checkValidSquare(num1, num2);
console.log({ result });


 function count_character(input){
if(input.length ==0){
  return
}

let count ={}
for (let i = 0; i < input.length; i++) {
  const element = input[i];
  if(count[element]>0){
count[element]++
  }else{
    count[element] = 1
  }
}
return console.log({count})
 }

//  count_character(num2)