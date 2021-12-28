//time complexity O(nlogn) and space complexity O(n)
function mergeSort(array){
    if(array.length <= 1) return array
   let mid = Math.floor(array.length/2)
   let left = mergeSort(array.slice(0,mid))
   let right = mergeSort(array.slice(mid))
//    console.log('left',left,'right',right,'mid',mid)
 return mergesortresult(left,right)
}

// mergesort([3,1,6,88,100])
 console.log((mergeSort([3,1,6,4,-8,6,9,88,'x','u'])))

function mergesortresult(arr1,arr2){
    let i = 0
    let j = 0
    let result = []
    // console.log('arr1',arr1,'arr2',arr2)
    while (i < arr1.length && j < arr2.length) {
        if(arr1[i] > arr2[j]){
            result.push(arr2[j])
            j++
        }else{
            result.push(arr1[i])
            i++
        }
    }
    while (i < arr1.length) {
        result.push(arr1[i])
        i++
    }
    while (j < arr2.length) {
        result.push(arr2[j])
        j++
    }
   return result
}