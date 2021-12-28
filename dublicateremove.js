function dublicate(arr){
let unique = []

arr.forEach(e=>{
    if(!unique.includes(e)){
        unique.push(e)
    }
})
return unique
}

let result = dublicate([1,1,2,22,2,2,2,3,3,3,4,5,6,6])
console.log(result)

function rmdublicate(arr){
let array = arr
for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
        let e = array[j];
        if(array[i]==e){
            array.splice(j,1)
        }
        
    }
    // const element = arr[i];
    // if(unique[i]>element){
        //     unique.push(element)
        // }
        
    }
    return array
}

const result1 = rmdublicate([1,1,2,2,22,3,3,4,5,6,6])
console.log({result1})

var array3 = [1, 2,2,2,2,2, 4, 6, 1, 4, 9, 10, 2, 8];
function findUniqueElements_3(arr) {
let array = arr
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) {
                array.splice(j, 1)
                console.log('array',array[j])
            }

        }
    }
    console.log(`from third way : ${array}`);
}

findUniqueElements_3(array3)