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
        while (current) {
            if(val === count) console.log('found at',count, current)
            count++
            current = current.next
        }
        return console.log('get node by undex',current)
    }
    set(val,point){ // set value at any instance
       let foundnode = this.get(point)
       console.log('found node',foundnode)
        if(foundnode){ foundnode.val = val
        return true
        } 
        return false
    }
}
let list = new SingleLinkedList()
list.push(100)
list.push(200)
list.push(300)
// list.pop()
// list.pop()
// list.pop()
// list.shift()
// list.shift()
// list.shift()
list.unshift('I\'m new head')
list.unshift(10)
// console.log('list',list)
list.get(1)
// list.set('im updated one',1)
list.list()