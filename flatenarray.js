let array = [1,[2,3],4,[5,6,[7,8,[9]]]]

let flatten = (arr)=>{
    //if its array
    //not an array
  let newArray = arr.reduce((acc,cur)=>{

        if(Array.isArray(cur)){
           acc = acc.concat(flatten(cur))
        }else{
            acc.push(cur)
        }
        return acc
    },[])
    return newArray
}

console.log(flatten(array))