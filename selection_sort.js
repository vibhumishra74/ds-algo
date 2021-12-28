// time complexcity is o(n square)

function selectionsort(array){
    if(array.length == 0) return console.log('please enter valid input')
    for (let i = 0; i < array.length; i++) {
        var smallest = i
        for (let j = i+1; j < array.length; j++) {
            let elm = array[j];
            // console.log('check',smallest)
            if(array[j] < array[smallest]){
                smallest = j
            }
        }
        let temp = array[i]
        array[i] = array[smallest]
        array[smallest] = temp
    }
    console.log('array is',array)
}

selectionsort([5,38,3,47,1,39])