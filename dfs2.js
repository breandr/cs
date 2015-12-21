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

function dfs(node, value) {
    console.log(node.value);
    if (node.value === value) return node;

    if (node.children) {
        for (let i = 0; i < node.children.length; ++i) {
            if (dfs(node.children[i], value)) return node;
        };
    }

    return null;
}

console.log(dfs(tree, 12));
