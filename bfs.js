const tree = {
    value: 1,
    children: [{
        value: 2,
        children: [{
            value: 5
        }]
    }, {
        value: 3
    }, {
        value: 4,
        children: [{
            value: 6,
            children: [{
                value: 7,
                children: [{
                    value: 8
                }]
            }]
        }]
    }]
};

// function bfs(node, value, queue = []){
//     console.log(node.value);
//
//     if(node.value === value) return true;
//
//     if(node.children && node.children.length){
//         queue.push(...node.children);
//     }
//
//     let found;
//
//     while(queue.length && !found){
//         found = bfs(queue.shift(), value, queue);
//         console.log(queue);
//     }
//
//     return found;
// }



function bfs(node, value) {
    let queue = [];
    let nextNode = node;

    while(nextNode){
        if(nextNode.value === value) return true;
        if(nextNode.children && nextNode.children.length){
            queue.push(...nextNode.children);
        }

        nextNode = queue.shift();
    }

    return false;
}

console.log(bfs(tree, 7));
