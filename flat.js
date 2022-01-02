let array = [1,[2,3],4,[5,6,[7,8,[9]]]]


let flat = (arr)=>{
 let newarr = arr.reduce((acc,current)=>{
        if(Array.isArray(current)){
          acc = acc.concat(flat(current))
        }else{
           acc = [...acc,current]
        }
        return acc
    },[])

    return newarr
}

console.log(flat(array))


function name(str){
  let output={}
     for(let i = 0; i<str.length;i++){
  let ele = str[i]
  if(output[ele]){
  output[ele]++
  }else{
  output[ele] = 1
  }
  }
  return output
  }

//   console.log(name('acadbdbadc'))
  