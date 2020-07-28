const fibonacci = function(n) {
    if (n<0) return 'OOPS';
    let fib = [1, 1];
    for (let i = fib.length; i<n; i++) {
        fib.push(fib[fib.length-1]+fib[fib.length-2]);
    };
    return fib[fib.length-1];
    }

module.exports = fibonacci
