countuniquevalue = (arr)=>{
let unique = []
arr.map(ele=>{
    if(!unique.includes(ele)){
        unique.push(ele)
    }
})
// unique.push([...new Set(arr)])
return console.log('unique',unique)
}
// countuniquevalue([1,2,2,3,4,5,6,6,6,4,3,8,9,0,0,2])

count_unique = (array)=>{
    let arr = array.sort()
    console.log('arr',arr)
    let i = 0
    let unique = []
    for (let j = 1; j < arr.length; j++) {
        if(arr[i] != arr[j]){
            // unique[arr[j]]
            i++
            arr[i] = arr[j]
            unique.push(arr[j])
        }
        
        console.log('count_unique',i,j)
    }
    console.log('unique',unique)
}

count_unique([1,2,2,3,4,5,6,6,6,8,9])