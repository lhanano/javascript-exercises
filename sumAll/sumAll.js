const sumAll = function(i, j) {
    let result = 0;
    if (!Number.isInteger(i) || !Number.isInteger(j)) {result = 'ERROR';}
    else if (i<0 || j<0) {result = 'ERROR';}
    else if (i <= j) {
        for (; i<=j; i++) {result += i;}
    } else if (i >= j) {
        for (; i>=j; i--) {result += i;}
    }
    return result;
}

module.exports = sumAll

