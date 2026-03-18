const { test, describe } = require('node:test');
const assert = require('node:assert');
const { isValidGameState } = require('./app.js');

describe('isValidGameState', () => {
    const validState = {
        teamId: 'ferrari',
        budget: 140000000,
        currentRoundIndex: 0,
        championship: { drivers: {}, constructors: {} },
        playerCar: { engine: 94, chassis: 92, wings: 91, underfloor: 93, suspension: 90 }
    };

    test('should return true for a valid state', () => {
        assert.strictEqual(isValidGameState(validState), true);
    });

    test('should return true when teamId is null (new game)', () => {
        const newState = { ...validState, teamId: null };
        assert.strictEqual(isValidGameState(newState), true);
    });

    test('should return false if state is null or undefined', () => {
        assert.strictEqual(isValidGameState(null), false);
        assert.strictEqual(isValidGameState(undefined), false);
    });

    test('should return false if state is not an object', () => {
        assert.strictEqual(isValidGameState("string"), false);
        assert.strictEqual(isValidGameState(123), false);
    });

    test('should return false if required fields are missing', () => {
        const { budget, ...missingBudget } = validState;
        assert.strictEqual(isValidGameState(missingBudget), false);

        const { teamId, ...missingTeamId } = validState;
        assert.strictEqual(isValidGameState(missingTeamId), false);
    });

    test('should return false if fields have incorrect types', () => {
        assert.strictEqual(isValidGameState({ ...validState, teamId: 123 }), false);
        assert.strictEqual(isValidGameState({ ...validState, budget: "lots" }), false);
        assert.strictEqual(isValidGameState({ ...validState, currentRoundIndex: "0" }), false);
        assert.strictEqual(isValidGameState({ ...validState, championship: null }), false);
        assert.strictEqual(isValidGameState({ ...validState, playerCar: "not-an-object" }), false);
    });
});
