function Validanagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lookup = {};
  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    if (lookup[letter] > 0) {
      lookup[letter]++;
    } else {
      lookup[letter] = 1;
    }
  }
  console.log({ lookup });
  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    // if (lookup[letter] > 0) {
    if (!lookup[letter]) {
      //   --lookup[letter];
      return false;
    } else {
      --lookup[letter];
      //   return false;
    }
  }
  console.log("after", { lookup });
  return true;
}
console.log(Validanagram("hello", "hello"));
