class DoublyLinkedList {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(value) {
        ++this.size;
        if (!this.root) {
            this.root = new DoublyLinkedListNode({
                value
            });

            return this;
        }

        let current = this.root;
        let prev = current;

        while (current.next) {
            prev = current;
            current = current.next;
        }

        current.next = new DoublyLinkedListNode({
            value, prev
        });

        return this;
    }

    remove(value) {
        --this.size;
        let node = this.find(value);
        node.prev.next = node.next;
        node.next.prev = node.prev;

        return this;
    }

    find(value) {
        let current = this.root;

        while (current) {
            if (current.value === value) return current;
            current = current.next;
        }

        return null;
    }

    sort() {
        let root = new DoublyLinkedListNode({
            value: this.root.value
        });

        for (let node = this.root.next; node; node = node.next) {
            for (let newNode = root; newNode; newNode = newNode.next) {
                console.log(node.value, newNode.value);
                if (node.value < newNode.value) {
                    console.log('inserted before ', newNode.value);
                    const insertNode = new DoublyLinkedListNode({
                        value: node.value,
                        prev: newNode.prev,
                        next: newNode
                    });

                    newNode.prev = insertNode;

                    if(insertNode.prev){
                        insertNode.prev.next = insertNode;
                    }

                    if(newNode === root){
                        insertNode.prev = null;
                        root = insertNode;
                    }
                    break;
                }

                if (!newNode.next) {
                    console.log(node.value, 'inserted at end');
                    newNode.next = new DoublyLinkedListNode({
                        value: node.value,
                        prev: newNode
                    });
                    break;
                }
            }
        }

        this.root = root;
    }
}

class DoublyLinkedListNode {
    constructor({
        value = null, prev = null, next = null
    }) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

let list = new DoublyLinkedList();
list.insert(1)
    .insert(2)
    .insert(3)
    .insert(4)
    .insert(5)
    .insert(6)
    .insert(7)
    .insert(8)
    .insert(9)
    .insert(10);

list.sort();
let node = list.root;
while (node) {
    console.log(node.value, node.prev, node.next);
    node = node.next;
}
