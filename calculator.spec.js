const test = require('node:test');
const assert = require('node:assert/strict');

const { add } = require('./calculator');


test('no parameters should return 0', () => {
    assert.strictEqual(add(), 0)
})

test('returns sum for two numbers separated by comma', () => {
    assert.strictEqual(add('1, 5'), 6);
})

test('returns sum for multiple numbers numbers separated by comma', () => {
    assert.strictEqual(add('1,2,3,4,5'), 15)
})

test('returns sum for numbers separated by newline and comma', () => {
    assert.strictEqual(add('1\n2,3'), 6)
})

test('returns sum for custom delimiter', () => {
    assert.strictEqual(add('//;\n1;2'), 3)
})

test('negativee numbers throw an exception', () => {
    assert.throws(() => {
        add('-1,2')
    },
        new Error('negative numbers not allowed: -1')
    )
})

test('multiple negative numbers throws an exception with all negative numbers', () => {
    assert.throws(() => {
        add('2, -4, 3, -5')
    },
        new Error("negative numbers not allowed: -4,-5")
    )
})