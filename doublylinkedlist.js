class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class Doublylinkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){ // add at end
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head // or newNode both work
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        // return console.log('push list',this)
        return this
    }
    pop(){//removing from end

        if(!this.head) return console.log(undefined)
        if(this.length ==1){
            this.head = null
            this.tail = this.head
        }else{

            let currentTail = this.tail
            this.tail = currentTail.prev
            currentTail.prev = null
            this.tail.next = null
            console.log('this pop',this)
             console.log('deleted node from last is',currentTail)
        }
        this.length--
        console.log('????',this)
    }
}

let list = new Doublylinkedlist()
list.push(10)
list.push(11)
list.push(12)
// list.pop()