function bubble(array){
    for (let i = array.length; i > 0; i--) {
        let noswap = true
        for (let j = 0; j < i - 1; j++) {
            console.log(array,array[j],array[j+1])
            // if(array[i]>array[j]){
            if(array[j]>array[j+1]){
                let temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
                noswap = false
            }
            if(noswap) break
        }
    }
        console.log('shorted array',array)
}

bubble([42,2,10,20])