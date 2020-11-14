//Singly Linked Lists

class SLNode {
    constructor(){
        this.value = null
        this.next = null
    }
}

class SLL{
    constructor(){
        this.head = null  //current value NULL
    }


    isEmpty(){
        if(this.head=== null){
            return true
        }else{
            return false
        }
        
    }

    push(){

    }

}

var newList = new SLL();
console.log(newList.head)
console.log(newList.isEmpty());