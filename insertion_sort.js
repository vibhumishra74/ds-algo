function insertion_sort(array){
    for (let i = 1; i < array.length; i++) {
        const currentval = array[i];
        for (let j = i-1; j >= 0 && array[j]> currentval; j--) {
            array[j+1] = array[j];
            array[j] = currentval
        }
    }
    return console.log(array)
}

insertion_sort([2,1,76,9,4])