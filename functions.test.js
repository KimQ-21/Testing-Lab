// const { test, expect } = require("@jest/globals");
// const { test, expect } = require('@jest/globals');
// const { test, expect } = require('@jest/globals')
// const { stateAge, addUser, addColor } = require('./functions')
const { test, expect } = require('@jest/globals');
const { returnTwo, greeting, sum, multiply, divide, subtract } = require('./functions')

// test("should return I am {age}", () => {
//     expect(stateAge(25)).toEqual("I am 25")
// });

// test("should return user created status", () => {
//     expect(addUser('Spencer', 21)).toEqual({name:'Spencer', age:21})
//     expect(addUser('Bruno, 15')).toEqual("User not old enough")
// });

// test("should add new color and return list of unique colors", () =>{
//     expect(addColor('Black')).toContain('Black')
// });

// describe ("user status", () => {
//     test("should return user created status for 21 and above", () => {
//         expect(addUser('Spencer', 21)).toEqual({name:'Spencer', age:21})
//     })

//     test("should return user created status", () => {
//         expect(addUser('Bruno, 15')).toEqual("User not old enough")
//     })
// });

test("should return the integer 2", () => {
    expect(returnTwo()).toEqual(2)
});

test("should return a greeting that includes {name}", () => {
    expect(greeting("Kim")).toEqual('Hello, Kim')
});

test("should return the sum of 2 numbers", () => {
    expect(sum(2,2)).toEqual(4)
});

describe ("math functions", () => {
    test("should return the product of 2 numbers", () => {
        expect(multiply(4,4)).toEqual(16)
    })

    test("should return the quotient of 2 numbers", () => {
        expect(divide(4,4)).toEqual(1)
    })
    test("should return the difference of 2 numbers", () => {
        expect(subtract(4,4)).toEqual(0)
    })
});