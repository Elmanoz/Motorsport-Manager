const { test, describe, beforeEach, afterEach } = require('node:test');
const assert = require('node:assert');
const { calculateSatisfaction, endWeekend, gameState, GAME_DATA } = require('./app.js');

describe('endWeekend', () => {
    let originalAlert;
    let originalDocument;
    let alertMessage = null;

    beforeEach(() => {
        originalAlert = global.alert;
        originalDocument = global.document;

        alertMessage = null;
        global.alert = (msg) => { alertMessage = msg; };

        // Mock document
        const mockElement = {
            classList: {
                remove: () => {},
                add: () => {}
            },
            style: {},
            set innerText(val) {},
            set innerHTML(val) {},
            appendChild: () => {}
        };

        global.document = {
            querySelectorAll: () => [mockElement],
            getElementById: () => mockElement,
            createElement: () => mockElement
        };

        // Reset gameState for testing endWeekend
        gameState.teamId = GAME_DATA.teams[0].id;
        gameState.currentRoundIndex = 0;
    });

    afterEach(() => {
        global.alert = originalAlert;
        global.document = originalDocument;
    });

    test('should increment currentRoundIndex and not alert if season is ongoing', () => {
        const initialRound = 0;
        gameState.currentRoundIndex = initialRound;

        endWeekend();

        assert.strictEqual(gameState.currentRoundIndex, initialRound + 1);
        assert.strictEqual(alertMessage, null);
    });

    test('should alert "Season Finished!" when the last round is reached', () => {
        gameState.currentRoundIndex = GAME_DATA.calendar.length - 1;

        endWeekend();

        assert.strictEqual(gameState.currentRoundIndex, GAME_DATA.calendar.length);
        assert.strictEqual(alertMessage, "Season Finished!");
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
