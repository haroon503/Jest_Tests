const rts = require('../Tests/rts');

test('rts is true',()=>{
    expect(rts).toBeDefined();
})

test('String Reverses',() => {
    expect(rts('Hello')).toEqual('olleh')
}); 