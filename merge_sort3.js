// time complexity O(nlogn) space complexity O(1)
function mergeSort(arr){
    if(arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)
}

// mergeSort([3,5,1,0,6,3,99,100])
console.log(mergeSort([3,5,1,0,6,-3,99,100,'b','a']))

function merge(arr1,arr2){
    let i = 0;
    let j = 0;
    let result = []
    // console.log('11',arr1,'22',arr2);
    while(i < arr1.length && j < arr2.length){
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
    return  result
}