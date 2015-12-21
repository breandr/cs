const tree = {
    value: 1,
    children: [{
        value: 2,
        children: [{
            value: 3,
            children: [{
                value: 4,
                children: [{
                    value: 5
                }, {
                    value: 6
                }]
            }]
        }]
    }, {
        value: 7
    }, {
        value: 8,
        children: [{
            value: 9,
            children: [{
                value: 10,
                children: [{
                    value: 11
                }, {
                    value: 12
                }]
            }]
        }]
    }]
};

function dfs(node, value, queue = []){
    console.log(node.value);

    if(node.value === value) return true;
    if(!node.children || !node.children.length) return false;

    let found = false;

    for(let i = 0; i < node.children.length && !found; ++i){
        found = dfs(node.children[i], value);
    }

    return found;
}

console.log(dfs(tree, 12));
