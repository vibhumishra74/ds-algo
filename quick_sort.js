function sort(arr,start = 0,end=arr.length-1){
    let swapid = start
    for (let i = start+1; i <= end; i++) {
        if(arr[start] > arr[i]){
            swapid++
            let temp = arr[i]
            arr[i] = arr[swapid]
            arr[swapid] = temp
        }
        
    }
    let temp = arr[start]
    arr[start] = arr[swapid]
    arr[swapid] = temp
    return swapid
}

function quicksort(arr,left=0,right=arr.length-1){
    if(left<right){
    let index = sort(arr,left,right)
    // console.log('index',index)
    //left
    quicksort(arr,left,index-1)
    //right
    quicksort(arr,index+1,right)
}
return arr
}
console.log((quicksort([4,6,9,-7,1,2,99,5,3])))