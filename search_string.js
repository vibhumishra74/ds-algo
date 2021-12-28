function searchstring(long,short){
    
    let count = 0
    for (let i = 0; i < long.length; i++) {
        const element = long[i];
        for (let j = 0; j < short.length; j++) {
            
            if(short[j] !== long[i+j]){
                console.log('BREAK')
                break;
            }
            if(j === short.length -1 ) count++
            
        }
        
    }
     console.log('count is',count)

}

searchstring('hi my name is vibhu is my name','name')