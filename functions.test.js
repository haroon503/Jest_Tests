const functions = require("./functions")

// Test For Addition Of Values
test('Adds to 2 + 2 to 4',()=>{
    
    expect(functions.add(2,2)).not.toBe(5);
});

//Test For Values Being Null
test('Should Be Null',()=>{
    
    expect(functions.isNull()).toBeNull();
});
//Test For Multiplication
test('Gives 4 after 2*2',()=>{
    
    expect(functions.multiply(2,2)).toBe(4);
});
//Test For Falsy Elements Falsy = Elements Not 
test('Should Be Falsy ',()=>{
    
    expect(functions.checkValues()).toBeFalsy();
});

