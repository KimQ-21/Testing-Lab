module.exports = {
    returnTwo: () => {
        let num = 2;
        return num;
    },
    greeting: (name) => {
        return `Hello, ${name}`;
    },

    sum: (num1, num2) => {
        return (num1 + num2)
    },
    
    multiply: (num1, num2) => {
        return (num1 * num2)
    },

    divide: (num1, num2) => {
        return (num1 / num2)
    },

    subtract: (num1, num2) => {
        return (num1 - num2)
    },
};