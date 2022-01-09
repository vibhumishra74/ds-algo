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
    list(){
        let current = this.head
        while (current != null) {
            console.log('all list value',current.val)
            current = current.next
        }
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

        let currentTail = this.tail
        if(!this.head) return console.log(undefined)
        if(this.head.next == null){
        // if(this.length ==1){
            this.head = null
            this.tail = this.head
        }else{

            this.tail = currentTail.prev
            currentTail.prev = null
            this.tail.next = null
            console.log('this pop',this)
             console.log('deleted node from last is',currentTail)
        }
        this.length--
        console.log('????',currentTail)
    }
    shift(){ // removing list from head
        let oldhead = this.head
        if(!this.head) return undefined
        if(this.head.next == null){
            this.head = null
            this.tail = null
            console.log('current head in if',this.head)
        }else{
            this.head = oldhead.next
            this.head.prev = null
            oldhead.next = null
            // console.log('current head in else',this.head)
        }
        console.log('remove head',oldhead)
        this.length--
    }
    unshift(val){//add at begning of list
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            let currenthead = this.head
            currenthead.prev = newNode
            this.head = newNode
            this.head.next = currenthead

        }
        this.length++
        return console.log('added at begning',this)
    }
    get(index){// get the node by index
        if(index < 0 || index >= this.length) return console.log('plese enter valid index')
        let counter = 0
        let len = this.length/2
        let currentNode = this.head
        if(index <= len){
            while (index != counter) {
                counter++
                currentNode = currentNode.next
            }
            console.log('current node index start', currentNode)
            // return currentNode
        }else{
            counter = this.length-1
             currentNode = this.tail
            while (index !== counter) {
                counter--
                currentNode = currentNode.prev
            }
            console.log('current node index end', currentNode)
        }
        return currentNode
    }
    set(index,val){//update the value at givin point
        if(index < 0 || index >= this.length) return null
       let node = this.get(index)
       node.val = val
       console.log('set node',this)
       return this
    }
    insert(index,val){// insert node at any given point
        if(index < 0 || index > this.length) return null
        let len = this.length/2
        let foundnode = this.head
        let newNode = new Node(val)
        let count = 0
        if(index === 0){// we can aslo call unshift function here
            if(!this.head){
                this.head = newNode
                this.tail = this.head
            }else{
                let currenthead = this.head
                currenthead.prev = newNode
                this.head = newNode
                this.head.next = currenthead
            }
            this.length++
            return this
        }
        if(index === this.length){// we can call here push method
            if(!this.head){
                this.head = newNode
                this.tail = newNode
            }else{
                let current_tail = this.tail
                current_tail.next = newNode
                this.tail = newNode
                this.tail.prev = current_tail
            }
            this.length++
            return this
        }
        // if inserted in between
           //get the node we can used get function also
        if(index <= len){
            while (count != index-1) {
                foundnode = foundnode.next
                count++
            }
        }else{
            count = this.length-1
            while (count !=index-1) {
                foundnode = this.tail.prev
                count--
            }
        }
        let afterNode = foundnode.next
        foundnode.next = newNode
        // console.log('foundnode',foundnode,'foundnode.next',foundnode.next,'secondnode',secondnode)
        newNode.prev = foundnode
        newNode.next = afterNode
        afterNode.prev = newNode
        this.length++
        return this
    }
    remove(index){
        //remove from begning of list
        if(index < 0 || index >= this.length) return null
        if(index === 0) {
            let currenthead = this.head
            if(!this.head) return null
            if(this.head.next == null){
                this.head= null
                this.tail = null
            }else{
                this.head = currenthead.next
                this.head.prev = null
                currenthead.next = null
            }
            this.length--
            console.log('remove head',currenthead)
            return currenthead
        }
        if(index === this.length-1){
            let current_tail = this.tail
            this.tail = current_tail.prev
            this.tail.next = null
            current_tail.prev = null
            current_tail.next = null
            this.length--
            console.log('remove tail',current_tail)
            return current_tail
        }
        // remove node in between
        let count = 0 
        let foundnode = this.head
        if(index <= this.length/2){
            while (index != count) {
                foundnode = foundnode.next
                count++
            }
        }else{
            count = this.length-1
            while (count != index) {
                foundnode = this.tail.prev
                count--
            }
        }
        let afterNode = foundnode.next
        let prevnode = foundnode.prev
        prevnode.next = afterNode
        afterNode.prev = prevnode
        foundnode.next = null
        foundnode.prev = null
        this.length--
        console.log('remove node in between',foundnode)
        return foundnode

    }
}

let list = new Doublylinkedlist()
list.push(10)
list.push(11)
list.push(12)
list.push(13)
list.push(14)
// list.pop()
// list.shift()
// list.shift()
// list.shift()
// list.unshift(9)
// list.unshift(8)
// list.get(3)
// list.set(4,300)
// list.insert(0,'first')
// list.insert(4,'second last')
// list.insert(6,'last')
list.remove(0)
list.remove(1)
// list.remove(2)
list.list()