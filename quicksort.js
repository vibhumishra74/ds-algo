function sort (arr,start=0,end=arr.length-1){
    let swapindex = start
    const swap = (arr,idx1,idx2)=>{
        [arr[idx1],arr[idx2]] = [arr[idx2],arr[idx1]]
    }
    for (let i = start+1; i <= end; i++) {
        if(arr[start] > arr[i]){
            swapindex++
            let temp = arr[i]
            arr[i] = arr[swapindex]
            arr[swapindex] = temp
            // swap(arr,swapindex,i)
        }
        
    }
    let temp = arr[start]
    arr[start] = arr[swapindex]
    arr[swapindex] = temp
    // swap(arr,start,swapindex)
    return swapindex
}
// sort([4,8,2,1,5,7,6,3])
// quicksort([4,8,2,1,15,7,6,3])
// console.log((quicksort([4,6,9,1,2,5,3])))
console.log((quicksort([100,-3,2,4,6,9,1,2,5,3,23])))

function quicksort(arr,left = 0,right = arr.length-1){
  
  if(left < right){
      let index = sort(arr,left,right)
      //left
      quicksort(arr, left ,index-1)
      //right
      quicksort(arr,index+1,right)
    }
    return arr
}


