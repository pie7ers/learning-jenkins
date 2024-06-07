const myMath = require('./functions')
const { describe, expect, test } = require('@jest/globals')

const numbers = [1, 2, 3]

describe('math functions', function () {
    test('addition test', function () {
        expect(myMath.add(numbers)).toBe(6)
    })
    test('substraction test', function () {
        expect(myMath.sub(numbers)).toBe(-4)
    })
    test('multiplication test', function () {
        expect(myMath.mul(numbers)).toBe(6)
    })
    test('division test', function () {
        expect(myMath.div(numbers)).toBeGreaterThanOrEqual(0,1666666667)
    })
})