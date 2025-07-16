const { number } = require("yargs");

const add = (a, b) => {
    if (!a || !b) return -1;

    if (typeof a!== 'number' || typeof b!== "number") return -1;

    return a + b;
};

module.exports = {add};