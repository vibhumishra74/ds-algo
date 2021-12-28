const binary = (array,num)=>{
// let array = arr.sort()
let left = 0
let right = array.length-1
let middle = Math.floor((left + right)/2)
console.log(left,middle,right,array[middle])
while(array[middle] !== num){
    if(num < array[middle]){
        right = middle -1
        console.log('num<middle',array[left],array[middle],array[right],num)
    }else if(array[middle] < num){
        left = middle + 1
        console.log('num>middle',array[left],array[middle],array[right],num)
    }
    console.log('middle',array[left],array[middle],array[right],num)
    middle = Math.floor((left + right)/2)
}
console.log('middle num',array[middle],middle)
}

// binary([11,12,13,14,15,16,17,18,19,20],17)



function binary1(array,num){
let left = 0
let right = array.length
let mid = Math.floor((left + right)/2)
while (array[mid] !== num ) {
    if(array[mid] > num){
        right = mid - 1
    } else if(array[mid] < num){
        left = mid + 1
    }
    mid = Math.floor((left + right)/2)
}
return console.log('mid no is',array[mid],mid)
}

binary1([10,12,13,14,15,16,17,18,19,20,22,33,44,55],12)
