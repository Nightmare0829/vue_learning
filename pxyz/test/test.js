const assert = require('chai').assert;
const index = require('../js/index');

// const sayHello = require('../js/index').sayHello;
// const addNumbers = require('../js/index').addNumbers;

// describe('index', function() {
//     it('app should return hello pxyz', function() {
//         assert.equal(index(), 'hello pxyz');
//     });
// });

// results 
sayHelloResult = index.sayHello();
addNumbersResult = index.addNumbers(3, 5);

describe('index', function() {
    describe('sayHello()', function() {
        it('app should return "Hello" ', function() {
            // let result = sayHello();
            let result = index.sayHello();
            assert.equal(result, 'Hello');
        });
    
        it('sayHello should return type string', function() {
            // let result = sayHello();
            // assert.typeOf(sayHello(), 'string');
            assert.typeOf(index.sayHello(), 'string');
        });
    
    
        it('app should return "Hello" ', function() {
            assert.equal(sayHelloResult, 'Hello');
        });
    
        it('sayHello should return type string', function() {
            assert.typeOf(sayHelloResult, 'string');
        });
    });

    describe('addNumbers()', function() {
        it('3 + 5 = 8 !!!', function() {
            // assert.equal(addNumbers(3, 5), 8);
            assert.equal(index.addNumbers(3, 5), 8);
        });
    
        it('addNumbers should be above 5' , function() {
            // assert.isAbove(addNumbers(5, 5), 5);
            assert.isAbove(index.addNumbers(5, 5), 5);
        });
    
        it('3 + 5 = 8 !!!', function() {
            assert.equal(addNumbersResult, 8);
        });
    
        it('addNumbers should be above 5' , function() {
            // assert.isAbove(addNumbers(5, 5), 5);
            assert.isAbove(addNumbersResult, 5);
        });
    });
});

