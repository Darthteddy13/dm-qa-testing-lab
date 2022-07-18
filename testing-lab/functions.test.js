 const functions = require(`./functions.js`);

 const {returnTwo, greeting, add, subtract, multiply, divide} = functions;

 test(`test returnTwo if returns 2`, () =>
 {
    expect(returnTwo()).toBe(2);
 })

 test(`Test greeting should return Hello, James`, () =>
 {
    expect(greeting(`James`)).toBe(`Hello, James`);
 })

 describe(`Test calculation functions`, () => 
    {
        test('test add, should return 3 and 14', () => {
            expect(add(1, 2)).toBe(3);
            expect(add(5, 9)).toBe(14);
        }),
        test('test subract, should return 3 and 14', () => {
            expect(subtract(5, 2)).toBe(3);
            expect(subtract(23, 9)).toBe(14);
        }),
        test('test multiply, should return 6 and 14', () => {
            expect(multiply(2, 3)).toBe(6);
            expect(multiply(7, 2)).toBe(14);
        }),
        test('test divide, should return 3 and 7', () => {
            expect(divide(6, 2)).toBe(3);
            expect(divide(21, 3)).toBe(7);
        })
    })

