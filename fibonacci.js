function fibonacci(n) {
    return (function f(counter = 1, prevTotal = 0, total = 1) {
        const newTotal = prevTotal + total;
        console.log(`${prevTotal} + ${total} = ${newTotal}`)

        return counter === n ? newTotal : f(counter + 1, total, newTotal);
    })();
};

function memo(func){
    let cache = {};

    return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]) return cache[key];
        return cache[key] = func.apply(null, args);
    }
}

const memoFib = memo(fibonacci);

console.log(memoFib(7));
console.log(memoFib(8));
console.log(memoFib(7));
console.log(memoFib(8));
