// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null
//     }
// }

// class SingleLinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.length = 0
//     }

//     push(val){
//         let newnode = new Node(val)
//         if(!this.head){
//             this.head = newnode
//             this.tail = this.head
//         }else{
//             this.tail.next = newnode
//             this.tail = newnode
//         }
//         this.length++
//         return console.log('this',this)
//     }
//     pop(){
//         if(!this.head) return console.log('pop head undefined')
//         let current = this.head
//         let newTail = current
        
//         while (current.next) {
//             newTail = current
//             current = current.next 
//         }
//         this.tail = newTail
//         this.tail.next = null
//         this.length--
//         if(this.length === 0){
//             this.head = undefined
//             this.tail = undefined
//             // newTail = undefined
//             // return console.log('pop length 0')
//         }
//         return console.log('pop', current)
//     }
// }

// var list = new SingleLinkedList()
// list.push('hello')
// list.push('hello1')
// list.push('hello2')
// list.push('hello3')
// list.pop()
// list.pop()
// list.pop()
// list.pop()
// console.log('list',list)



class Node {
    constructor(val){
    this.val = val
    this.next = null
    }
}

class SingleLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    list(){
        let current = this.head
        if(!this.head) return undefined
        while (current) {
            console.log('all list',current.val)
            current = current.next
        }
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
             this.head = newNode
            this.tail = this.head
            }else{
                this.tail.next = newNode // logic bcz new node next is always null we defined in class so next come and than we assign tail value to newnode bcz here in newnode next is null
                this.tail = newNode
            }
            this.length++
            return this
    }

    pop(){//remove from ending
        if(!this.head) return undefined
        let current = this.head
        let newtail = current
        while (current.next) {
            newtail = current
            current = current.next
        }
        this.tail = newtail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = undefined
            this.tail = undefined
        }
        // return console.log('current',this)
        return console.log('current',current)
    }
    shift(){ //remove from starting
        if(!this.head) return console.log('undefined in shift',undefined)
        let current = this.head
        // console.log('current in shift',current)
        let newhead = current.next
        
        this.head = newhead
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return console.log('shift',this.head)
    }

    unshift(val){ // add in begning
        let newNode = new Node(val)
        let currenthead = this.head
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        }else{
            // newNode.next = this.head
            // this.head = newNode
            // this is another way to do that
        this.head = newNode
        this.head.next = currenthead
    }
        this.length++
        // newhead.next = currenthead
        return console.log('new head',newNode,'currenthead',currenthead)

    }
    get(val){//get value by index
        if(val < 0 || val >= this.length) return console.log('plz enter valid no',null)
        let count = 0
        let current = this.head
        while (count !== val) {
            // if(val === count) console.log('found at',count, current)
            current = current.next
            count++
        }
        // console.log('after while loop >>>>>>>')
         console.log('get node by index>>>',current)
        return current
    }
    set(val,point){ // set value at any instance
       let foundnode = this.get(point)
       console.log('found here',foundnode)
        if(foundnode){ foundnode.val = val
        return true
        } 
        return false
    }
    insert(val,point){
        let newnode = new Node(val)
        //check if correct pont requested or not
        if(point < 0 || point > this.length) return undefined
        //at begning
        if(point === 0){
            console.log('in zeroo')
        if(!this.head){
            this.head = newnode
            this.tail = this.head
        }else{
            let currenthead = this.head
             this.head = newnode
            this.head.next = currenthead
        }
        this.length++
        return this
        }

        //at end we can also used push method from above
        if(this.length === point){
            console.log('in last length')
            // let newnode = new Node(point)
            if(!this.head){
                this.head = newnode
                this.tail = this.head
            }else{
                this.tail.next = newnode
                this.tail = newnode
            }
            this.length++
            return this
        }
        //in between begning and end
        let count = 1
        let count0 = 0
        let currenttail = this.head
        let currenthead = this.head
        while (count != point) {
            currenttail = currenttail.next
            count++
        }
        while (count0 != point) {
            currenthead = currenthead.next
            count0++
        }
        currenttail.next = newnode
        currenttail.next.next = currenthead

        // this.tail = newnode
        console.log('in get one',count0,currenttail)
        this.length++
        return this
    }
    remove(point){
        if(point < 0 || point>this.length-1) return undefined
        //at begning
        if(point === 0) return this.shift()
        //at last
        if(point === this.length-1) return this.pop()
        //in between
        let current = this.head
        let count = 1 //when count is 1 give me prevoius node when count 0 give me current node
        while (count !== point) {
            current = current.next
            count++
        }
        let previousNode = current
        let removenode = previousNode.next
        previousNode.next = removenode.next
        this.length--
        return console.log('remove node here>>',removenode)

    }
    reverse(){
        let previousNode = null
        let current = this.head
        // let next = current.next
        this.head = this.tail
        this.tail = current
        while (current !== null) {
            let temp = current.next
            current.next = previousNode
            previousNode = current
            current = temp
        }
        // for (let i = 0; i < this.length; i++) {
        //     let temp = current.next
        //     current.next = previousNode
        //     previousNode = current
        //     current = temp
            
        // }
        return console.log('this',this)
    }
}
let list = new SingleLinkedList()
list.push(100)
list.push(200)
list.push(300)
list.push(400)
// list.pop()
// list.pop()
// list.pop()
// list.shift()
// list.shift()
// list.shift()
// list.unshift('I\'m new head')
// list.unshift(10)
// console.log('list',list)
// list.get(2)
// list.set('im updated one',13)
// list.insert(250,2)
// list.insert(1250,0)
// list.remove(2)
list.reverse()
list.list()