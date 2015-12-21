const tree = {
    value: 1,
    children: [{
        value: 2,
        children: [{
            value: 5,
            children: [{
                value: 9,
                children: [{
                    value: 10
                }]
            }]
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

function bfs(node, value, queue = []){
    console.log(node.value, value);
    console.log(JSON.stringify(queue));
    if(node.value === value) return node;

    if(node.children && node.children.length){
        queue.push(...node.children);
    }

    while(queue.length){
        if(bfs(queue.shift(), value, queue)){
            return node;
        }
    }

    return null;
}

bfs(tree, 5);
