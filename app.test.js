const { test, describe } = require('node:test');
const assert = require('node:assert');
const { calculateSatisfaction, generateRandomSetup } = require('./app.js');

describe('generateRandomSetup', () => {
    test('should return an array of length 3', () => {
        const setup = generateRandomSetup();
        assert.strictEqual(Array.isArray(setup), true);
        assert.strictEqual(setup.length, 3);
    });

    test('should return numbers between 0 and 99', () => {
        for (let i = 0; i < 100; i++) {
            const setup = generateRandomSetup();
            setup.forEach(val => {
                assert.strictEqual(Number.isInteger(val), true);
                assert.strictEqual(val >= 0 && val < 100, true);
            });
        }
    });
});

describe('calculateSatisfaction', () => {
    test('should return 100 when ideal and current setups match perfectly', () => {
        const ideal = [50, 50, 50];
        const current = [50, 50, 50];
        assert.strictEqual(calculateSatisfaction(ideal, current), 100);
    });

    test('should return 0 when setups are at maximum possible difference (300 total diff)', () => {
        const ideal = [0, 0, 0];
        const current = [100, 100, 100];
        assert.strictEqual(calculateSatisfaction(ideal, current), 0);
    });

    test('should calculate satisfaction correctly for partial match', () => {
        const ideal = [50, 50, 50];
        const current = [40, 60, 50];
        assert.strictEqual(calculateSatisfaction(ideal, current), 93);
    });

    test('should not return negative satisfaction for very large differences', () => {
        const ideal = [0, 0, 0];
        const current = [200, 200, 200];
        assert.strictEqual(calculateSatisfaction(ideal, current), 0);
    });
});
