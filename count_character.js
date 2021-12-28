function character(str) {
  let result = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

let char = character("Hey how you doing");
console.log(char);

function countCharacter(str) {
  result = {};
  for (char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++;
      } else {
        result[char] = 1;
      }
    }
  }
  return result;
}

console.log(countCharacter("vIbhuti narayan mishra"));
