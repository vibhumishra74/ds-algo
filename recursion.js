//recurson only

function printnum(num){
    if(num<=0){
        console.log('all done')
        return
    }
    console.log(num)
    num--
    printnum(num)
}

// printnum(3)
const numprint = (num)=>{
    for (let i = num; i > 0; i--) {
        console.log(i)
    } 
    console.log('all done')
}
// numprint(30)

//range of number

const sumrange = (num)=>{
    if(num === 1) return 1
    // console.log(num)
    return num + sumrange(num-1)
}

// console.log(sumrange(2))

//factorial

const fact = (num)=>{
    let total = 1
    for (let i = num; i >= 1; i--) {
        total=total*i   
    }
    return console.log(total)
}

// fact(5)

// factorila with recurtion

const factre = (num)=>{
    let total = 1
    if(num<=0){
        return total
    }
//    total = total*num
//    num--
//    factre(num)
return num * factre(num-1)
}
// console.log(factre(4))

//find out odd value

const oddnum = (num)=>{
let result = []
function helper(input){
    if(input.length == 0){
        return
    }
if(input[0]%2 !==0){
    result.push(input[0])
}
helper(input.slice(1))
}
helper(num)
return console.log(result)
}
oddnum([1,2,3,4,5,6,7,8,9])