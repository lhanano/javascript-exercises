const removeFromArray = function(arr, ...args) {
    let newArray = [];
    arr.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item)
        }
    })
    return newArray
    }

module.exports = removeFromArray


