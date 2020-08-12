class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //add

    push(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {

            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        
        this.length++;
        return this;
    }

    unshift(value){

        let newNode = new Node(value);
        
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    }


    //remove

    pop() {
        if (this.length === 0 ) return undefined;

        let deletedItem = this.tail;
        
        if (this.length === 1 ) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = deletedItem.prev;
            this.tail.next = null;
            deletedItem.prev = null;
        }
        this.length--;
        return deletedItem;
    }
   
    shift() {
        if (this.length === 0 ) return undefined;

        let deletedItem = this.head;
        
        if (this.length === 1 ) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = deletedItem.next;
            this.head.prev = null;
            deletedItem.next = null;
        }
        this.length--;
        return deletedItem;
    }

   


    //read
}