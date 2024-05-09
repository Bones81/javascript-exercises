const removeFromArray = function(array) {
    const args = [...arguments].slice(1)
    for (const arg of args) {
        while (array.includes(arg)) {
            array.splice(array.indexOf(arg), 1)
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
