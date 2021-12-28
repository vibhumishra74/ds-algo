function sumzero(arr){
    let left = 0
    let right = arr.length -1
    let sum = []
    while(left < right){  // importance of while loop
if(arr[left] + arr[right] == 0){
    console.log('in if',[arr[left],arr[right]])
    sum.push([arr[left],arr[right]])
    left ++
    right --
}else if(arr[left] + arr[right] < 0){
    
    console.log('in else if',[arr[left],arr[right]])
    left ++
}else{
    console.log('in else')
    right --
}
}
return sum
}

let result = sumzero([-6,-3,-2,-1,0,1,2,3,4])
console.log('result',result)