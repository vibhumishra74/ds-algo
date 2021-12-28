function linerSearch(array,num){
// array.map(e=>{
//     if(e==num){
//         return console.log(array.indexOf(num))
//     }
// })

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if(element == num) {
      return  console.log('index is',i)
    }
}
return console.log('res',-1) 
}
linerSearch([1,23,4,5,6,7,8,9],4)