function mergesort(array1,array2){
    let result = []
    for (let i = 0; i < array1.length; i++) {
        // let first = array1[i];
        for (let j = 0; j < array2.length; j++) {
            // let second = array2[j];
            if(array1[i] < array2[j]){
                result.push(array1[i])
                //  i++
                // first = array1[i+1]
                console.log('first',array1[i],i)
            }
            if(array1[i] > array2[j]){
                result.push(array2[j])
                // j++
                // second = array2[j+1]
                console.log('second',array2[j],j)
            }
            
        }   
    }

    // let i = 0
    // let j = 0
    // while (i < array1.length && j < array2.length) {
    //     if(array1[i] < array2[j]){
    //         result.push(array1[i])
    //         i++
    //     }else{
    //         result.push(array2[j])
    //         j++
    //     }
    // }
    // while (i < array1.length) {
    //     result.push(array1[i])
    //     i++
    // }
    // while (j < array2.length) {
    //     result.push(array2[j])
    //     j++
    // }
    return console.log(result)
}

mergesort([1,10,50],[2,14,99,100])