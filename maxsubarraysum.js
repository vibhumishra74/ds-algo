const maxsubarraysum = (array,num)=>{
if(array.length < num) return null
let max = 0
let temp = 0
for (let i = 0; i < num; i++) {
    temp += array[i];
}
max = temp
for (let j = num; j < array.length; j++) {
    temp = temp -  array[j - num] + array[j];
    if(temp > max){
        max = temp
    }else{
        max
    }
}
return console.log({max})
}

// maxsubarraysum([1,4,5,7,8,3,4,5,2,6,7],3)

// function maxsubarraysum(array,num){
//     if(array.length < num) return null
//     let maxsum = 0;
//     let tempsum = 0;
//     for (let i = 0; i < num; i++) {
//         tempsum += array[i];
//     }
//     maxsum = tempsum
//     for (let j = num; j < array.length; j++) {
//         tempsum = tempsum -array[j-num] + array[j]
//         if(tempsum > maxsum) {
//             maxsum = tempsum
//         }else{
//             maxsum
//         }
//     }
//     return console.log(maxsum)
//     }
    
    maxsubarraysum([2,6,9,2,1,8,5,6,3],4)


function maxsubarray(array,num){
if(array.length < num) return null
let max = -Infinity
for (let i = 0; i < array.length - num + 1; i++) {
    let temp = 0 
    for (let j = 0; j < num; j++) {
        temp += array[ i + j];
        if(temp>max){
            max = temp
        }
    }
}
return console.log({max})

}

maxsubarray([2,6,9,2,1,8,5,6,3],4)