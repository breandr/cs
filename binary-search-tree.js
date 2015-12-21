class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new BinarySearchTreeNode({
                value
            });

            return this;
        }

        let current = this.root;
        let previous;

        while (true) {
            previous = current;

            if (value === current.value) return this;

            if (value > current.value) {
                if (current.right === null) {
                    current.right = new BinarySearchTreeNode({
                        value,
                        parent: current
                    });

                    return this;
                }

                current = current.right;
            } else {
                if (current.left === null) {
                    current.left = new BinarySearchTreeNode({
                        value,
                        parent: current
                    });

                    return this;
                }

                current = current.left;
            }
        }
    }

    remove(value) {
        const node = this.find(value);
        const parent = node.parent;

        if (node.value > parent.value) {
            if (node.left === null && node.right === null) {
                parent.right = null;
            } else if(node.left === null){
                parent.right = node.right;
            } else if(node.right === null){
                parent.right = node.left;
            }else{
                // parent.right = ???
            }
        } else {
            if (node.left === null && node.right === null) {
                parent.left = null;
            } else if(node.left === null){
                parent.left = node.right;
            } else if(node.right === null){
                parent.left = node.left;
            }else{
                // parent.left = ???
            }
        }

        return this;
    }

    if (node.left === null) {

    }
}

find(value) {
    let current = this.root;

    while (current !== null) {
        console.log(current.value);
        if (current.value === value) return current;

        current = value > current.value ? current.right : current.left;
    }

    return null;
}
}

class BinarySearchTreeNode {
    constructor({
        value = null,
            parent = null
    }) {
        // this.parent = parent;
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let tree = new BinarySearchTree();
tree.insert(29)
    .insert(2)
    .insert(21)
    .insert(43)
    .insert(8)
    .insert(40)
    .insert(1)
    .insert(30);


console.log(tree.find(1));
