
const { performance } = require('perf_hooks');

// Mock data
const raceGrid = [];
for (let i = 0; i < 22; i++) {
    raceGrid.push({ driver: `Driver ${i}` });
}

const teamDrivers = ["Driver 15", "Driver 20"];

function original() {
    let d1Pos = raceGrid.findIndex(g => g.driver === teamDrivers[0]) + 1;
    let d2Pos = raceGrid.findIndex(g => g.driver === teamDrivers[1]) + 1;
    return [d1Pos, d2Pos];
}

function optimizedSingleLoopNoBreak() {
    let d1Pos, d2Pos;
    for (let i = 0; i < raceGrid.length; i++) {
        if (raceGrid[i].driver === teamDrivers[0]) d1Pos = i + 1;
        else if (raceGrid[i].driver === teamDrivers[1]) d2Pos = i + 1;
    }
    return [d1Pos, d2Pos];
}

function optimizedMap() {
    const driverPositions = new Map(raceGrid.map((g, i) => [g.driver, i + 1]));
    let d1Pos = driverPositions.get(teamDrivers[0]);
    let d2Pos = driverPositions.get(teamDrivers[1]);
    return [d1Pos, d2Pos];
}

function optimizedSingleLoop() {
    let d1Pos, d2Pos;
    for (let i = 0; i < raceGrid.length; i++) {
        if (raceGrid[i].driver === teamDrivers[0]) d1Pos = i + 1;
        else if (raceGrid[i].driver === teamDrivers[1]) d2Pos = i + 1;
        if (d1Pos !== undefined && d2Pos !== undefined) break;
    }
    return [d1Pos, d2Pos];
}

function optimizedObject() {
    const driverPositions = {};
    for (let i = 0; i < raceGrid.length; i++) {
        driverPositions[raceGrid[i].driver] = i + 1;
    }
    let d1Pos = driverPositions[teamDrivers[0]];
    let d2Pos = driverPositions[teamDrivers[1]];
    return [d1Pos, d2Pos];
}

function runBenchmark(fn, name, iterations = 1000000) {
    // Warm up
    for (let i = 0; i < 10000; i++) {
        fn();
    }
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    console.log(`${name}: ${end - start}ms`);
}

console.log("Starting benchmark...");
runBenchmark(original, "Original");
runBenchmark(optimizedMap, "Optimized (Map)");
runBenchmark(optimizedSingleLoop, "Optimized (Single Loop)");
runBenchmark(optimizedSingleLoopNoBreak, "Optimized (Single Loop No Break)");
runBenchmark(optimizedObject, "Optimized (Object)");
