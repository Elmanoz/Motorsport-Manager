// Core application file

const GAME_DATA = {
    teams: [
        { id: "redbull", name: "Red Bull Racing", color: "#3671C6", budget: 140000000, drivers: ["Max Verstappen", "Sergio Perez"], engine: 95, chassis: 95, wings: 93, underfloor: 96, suspension: 94 },
        { id: "mercedes", name: "Mercedes", color: "#27F4D2", budget: 140000000, drivers: ["George Russell", "Andrea Kimi Antonelli"], engine: 92, chassis: 90, wings: 90, underfloor: 88, suspension: 91 },
        { id: "ferrari", name: "Ferrari", color: "#E80020", budget: 140000000, drivers: ["Charles Leclerc", "Lewis Hamilton"], engine: 94, chassis: 92, wings: 91, underfloor: 93, suspension: 90 },
        { id: "mclaren", name: "McLaren", color: "#FF8000", budget: 135000000, drivers: ["Lando Norris", "Oscar Piastri"], engine: 92, chassis: 94, wings: 95, underfloor: 94, suspension: 92 },
        { id: "astonmartin", name: "Aston Martin", color: "#229971", budget: 130000000, drivers: ["Fernando Alonso", "Lance Stroll"], engine: 90, chassis: 85, wings: 86, underfloor: 84, suspension: 87 },
        { id: "alpine", name: "Alpine", color: "#0093CC", budget: 120000000, drivers: ["Pierre Gasly", "Jack Doohan"], engine: 85, chassis: 82, wings: 83, underfloor: 80, suspension: 81 },
        { id: "williams", name: "Williams", color: "#005AFF", budget: 110000000, drivers: ["Alexander Albon", "Carlos Sainz"], engine: 90, chassis: 80, wings: 81, underfloor: 78, suspension: 79 },
        { id: "rb", name: "Visa Cash App RB", color: "#6692FF", budget: 110000000, drivers: ["Yuki Tsunoda", "Liam Lawson"], engine: 93, chassis: 81, wings: 80, underfloor: 82, suspension: 80 },
        { id: "sauber", name: "Kick Sauber", color: "#52E252", budget: 115000000, drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"], engine: 88, chassis: 75, wings: 76, underfloor: 74, suspension: 75 },
        { id: "haas", name: "Haas F1 Team", color: "#B6BABD", budget: 100000000, drivers: ["Esteban Ocon", "Oliver Bearman"], engine: 92, chassis: 78, wings: 79, underfloor: 76, suspension: 77 }
    ],
    drivers: {
        "Max Verstappen": { skill: 98, consistency: 97, pace: 99, defense: 95 },
        "Sergio Perez": { skill: 85, consistency: 80, pace: 84, defense: 88 },
        "George Russell": { skill: 90, consistency: 88, pace: 90, defense: 86 },
        "Andrea Kimi Antonelli": { skill: 84, consistency: 80, pace: 86, defense: 80 },
        "Charles Leclerc": { skill: 95, consistency: 89, pace: 96, defense: 88 },
        "Lewis Hamilton": { skill: 96, consistency: 94, pace: 95, defense: 92 },
        "Lando Norris": { skill: 94, consistency: 92, pace: 94, defense: 89 },
        "Oscar Piastri": { skill: 91, consistency: 89, pace: 92, defense: 88 },
        "Fernando Alonso": { skill: 93, consistency: 95, pace: 91, defense: 97 },
        "Lance Stroll": { skill: 78, consistency: 75, pace: 79, defense: 76 },
        "Pierre Gasly": { skill: 86, consistency: 84, pace: 85, defense: 83 },
        "Jack Doohan": { skill: 79, consistency: 78, pace: 80, defense: 76 },
        "Alexander Albon": { skill: 87, consistency: 86, pace: 88, defense: 85 },
        "Carlos Sainz": { skill: 91, consistency: 93, pace: 90, defense: 92 },
        "Yuki Tsunoda": { skill: 83, consistency: 78, pace: 85, defense: 80 },
        "Liam Lawson": { skill: 81, consistency: 82, pace: 82, defense: 80 },
        "Nico Hulkenberg": { skill: 85, consistency: 86, pace: 84, defense: 83 },
        "Gabriel Bortoleto": { skill: 77, consistency: 75, pace: 78, defense: 74 },
        "Esteban Ocon": { skill: 84, consistency: 82, pace: 84, defense: 86 },
        "Oliver Bearman": { skill: 80, consistency: 78, pace: 81, defense: 77 }
    },
    calendar: [
        { round: 1, name: "Bahrain Grand Prix", laps: 57, length: 5.412 },
        { round: 2, name: "Saudi Arabian Grand Prix", laps: 50, length: 6.174 },
        { round: 3, name: "Australian Grand Prix", laps: 58, length: 5.278 },
        { round: 4, name: "Japanese Grand Prix", laps: 53, length: 5.807 },
        { round: 5, name: "Chinese Grand Prix", laps: 56, length: 5.451 },
        { round: 6, name: "Miami Grand Prix", laps: 57, length: 5.412 },
        { round: 7, name: "Emilia Romagna Grand Prix", laps: 63, length: 4.909 },
        { round: 8, name: "Monaco Grand Prix", laps: 78, length: 3.337 },
        { round: 9, name: "Canadian Grand Prix", laps: 70, length: 4.361 },
        { round: 10, name: "Spanish Grand Prix", laps: 66, length: 4.657 },
        { round: 11, name: "Austrian Grand Prix", laps: 71, length: 4.318 },
        { round: 12, name: "British Grand Prix", laps: 52, length: 5.891 },
        { round: 13, name: "Hungarian Grand Prix", laps: 70, length: 4.381 },
        { round: 14, name: "Belgian Grand Prix", laps: 44, length: 7.004 },
        { round: 15, name: "Dutch Grand Prix", laps: 72, length: 4.259 },
        { round: 16, name: "Italian Grand Prix", laps: 53, length: 5.793 },
        { round: 17, name: "Azerbaijan Grand Prix", laps: 51, length: 6.003 },
        { round: 18, name: "Singapore Grand Prix", laps: 62, length: 4.940 },
        { round: 19, name: "United States Grand Prix", laps: 56, length: 5.513 },
        { round: 20, name: "Mexico City Grand Prix", laps: 71, length: 4.304 },
        { round: 21, name: "São Paulo Grand Prix", laps: 71, length: 4.309 },
        { round: 22, name: "Las Vegas Grand Prix", laps: 50, length: 6.201 },
        { round: 23, name: "Qatar Grand Prix", laps: 57, length: 5.419 },
        { round: 24, name: "Abu Dhabi Grand Prix", laps: 58, length: 5.281 }
    ]
};

let gameState = {
    teamId: null,
    budget: 0,
    currentRoundIndex: 0,
    championship: { drivers: {}, constructors: {} },
    playerCar: { engine: 0, chassis: 0, wings: 0, underfloor: 0, suspension: 0 },
    practiceData: {
        driver1: { ideal: [50, 50, 50], current: [50, 50, 50], satisfaction: 0 },
        driver2: { ideal: [50, 50, 50], current: [50, 50, 50], satisfaction: 0 }
    },
    raceGrid: [],
    raceData: null
};

let raceLoopInterval = null;
let raceSpeed = 1000; // ms per tick
let isRacePaused = false;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function saveGame() {
    localStorage.setItem('f1manager2026_save', JSON.stringify(gameState));
    alert("Game Saved!");
}

function loadGame() {
    const saved = localStorage.getItem('f1manager2026_save');
    if (saved) {
        gameState = JSON.parse(saved);
        updateDashboard();
        showScreen('dashboard');
    } else {
        alert("No saved game found!");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("F1 Manager 2026 initialized.");

    document.getElementById('btn-new-game').addEventListener('click', () => {
        showScreen('team-selection');
        renderTeamSelection();
    });

    document.getElementById('btn-load-game').addEventListener('click', () => {
        loadGame();
    });

    document.getElementById('btn-save-game')?.addEventListener('click', () => {
        saveGame();
    });

    document.getElementById('btn-goto-upgrades')?.addEventListener('click', () => {
        updateUpgradesMenu();
        showScreen('upgrades-menu');
    });

    document.getElementById('btn-goto-weekend')?.addEventListener('click', () => {
        startRaceWeekend();
    });

    document.getElementById('btn-back-dashboard')?.addEventListener('click', () => {
        updateDashboard();
        showScreen('dashboard');
    });

    document.getElementById('btn-test-setup')?.addEventListener('click', () => {
        testSetup();
    });

    document.getElementById('btn-goto-qualifying')?.addEventListener('click', () => {
        simulateQualifying();
    });

    document.getElementById('btn-goto-prerace')?.addEventListener('click', () => {
        setupPreRace();
        showScreen('pre-race');
    });

    document.getElementById('btn-start-race')?.addEventListener('click', () => {
        startRace();
    });

    // Race Speed Controls
    document.getElementById('btn-speed-pause')?.addEventListener('click', () => { isRacePaused = !isRacePaused; document.getElementById('btn-speed-pause').innerText = isRacePaused ? "Resume" : "Pause"; });
    document.getElementById('btn-speed-1x')?.addEventListener('click', () => setRaceSpeed(1000));
    document.getElementById('btn-speed-2x')?.addEventListener('click', () => setRaceSpeed(500));
    document.getElementById('btn-speed-5x')?.addEventListener('click', () => setRaceSpeed(200));

    // Player Pit Controls
    document.getElementById('btn-d1-pit')?.addEventListener('click', () => schedulePitStop(1));
    document.getElementById('btn-d2-pit')?.addEventListener('click', () => schedulePitStop(2));

    document.getElementById('btn-end-weekend')?.addEventListener('click', () => endWeekend());
});

function setRaceSpeed(ms) {
    raceSpeed = ms;
    if (raceLoopInterval) {
        clearInterval(raceLoopInterval);
        raceLoopInterval = setInterval(raceTick, raceSpeed);
    }
}

function renderTeamSelection() {
    const list = document.getElementById('team-list');
    list.innerHTML = '';
    GAME_DATA.teams.forEach(team => {
        const div = document.createElement('div');
        div.style.border = `2px solid ${team.color}`;
        div.style.padding = '15px';
        div.style.borderRadius = '8px';
        div.style.width = '250px';
        div.style.textAlign = 'center';
        div.style.cursor = 'pointer';
        div.style.backgroundColor = '#333';
        div.innerHTML = `
            <h3 style="color: ${team.color};">${team.name}</h3>
            <p>Drivers: ${team.drivers.join(', ')}</p>
            <p>Budget: $${team.budget.toLocaleString()}</p>
        `;
        div.addEventListener('click', () => selectTeam(team));
        list.appendChild(div);
    });
}

function selectTeam(team) {
    gameState.teamId = team.id;
    gameState.budget = team.budget;
    gameState.currentRoundIndex = 0;
    gameState.playerCar = {
        engine: team.engine,
        chassis: team.chassis,
        wings: team.wings,
        underfloor: team.underfloor,
        suspension: team.suspension
    };

    // Initialize standings
    GAME_DATA.drivers.forEach ? null : Object.keys(GAME_DATA.drivers).forEach(d => gameState.championship.drivers[d] = 0);
    GAME_DATA.teams.forEach(t => gameState.championship.constructors[t.id] = 0);

    updateDashboard();
    showScreen('dashboard');
}

function updateDashboard() {
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);
    if (!team) return;

    document.getElementById('dash-team-name').innerText = team.name;
    document.getElementById('dash-team-name').style.color = team.color;
    document.getElementById('dash-budget').innerText = gameState.budget.toLocaleString();

    const nextRace = GAME_DATA.calendar[gameState.currentRoundIndex];
    document.getElementById('dash-next-race').innerText = nextRace ? `Round ${nextRace.round} - ${nextRace.name}` : "Season Finished";

    const driversList = document.getElementById('dash-drivers');
    driversList.innerHTML = '';
    team.drivers.forEach(d => {
        const stats = GAME_DATA.drivers[d];
        const li = document.createElement('li');
        li.innerText = `${d} (OVR: ${Math.round((stats.skill + stats.consistency + stats.pace + stats.defense)/4)})`;
        li.style.marginBottom = '5px';
        driversList.appendChild(li);
    });

    document.getElementById('dash-car-engine').innerText = gameState.playerCar.engine;
    document.getElementById('dash-car-chassis').innerText = gameState.playerCar.chassis;
    document.getElementById('dash-car-wings').innerText = gameState.playerCar.wings;
    document.getElementById('dash-car-underfloor').innerText = gameState.playerCar.underfloor;
    document.getElementById('dash-car-suspension').innerText = gameState.playerCar.suspension;
}

function updateUpgradesMenu() {
    document.getElementById('upgrades-budget').innerText = gameState.budget.toLocaleString();
    const list = document.getElementById('upgrades-list');
    list.innerHTML = '';

    const parts = [
        { key: 'engine', name: 'Engine' },
        { key: 'chassis', name: 'Chassis' },
        { key: 'wings', name: 'Wings' },
        { key: 'underfloor', name: 'Underfloor' },
        { key: 'suspension', name: 'Suspension' }
    ];

    parts.forEach(part => {
        const currentLevel = gameState.playerCar[part.key];
        const cost = Math.floor(5000000 * Math.pow(1.1, currentLevel - 70)); // Cost scales with level

        const div = document.createElement('div');
        div.style.background = '#444';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';

        const canAfford = gameState.budget >= cost;
        const isMaxed = currentLevel >= 100;

        div.innerHTML = `
            <div>
                <h4>${part.name} (Level: ${currentLevel})</h4>
                <p>Cost to Upgrade: $${cost.toLocaleString()}</p>
            </div>
            <button class="btn" ${(!canAfford || isMaxed) ? 'disabled' : ''}>
                ${isMaxed ? 'Max Level' : 'Upgrade'}
            </button>
        `;

        if (canAfford && !isMaxed) {
            div.querySelector('button').addEventListener('click', () => {
                gameState.budget -= cost;
                gameState.playerCar[part.key] += 1;
                updateUpgradesMenu();
            });
        }

        list.appendChild(div);
    });
}

function startRaceWeekend() {
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);
    if (!team) return;

    // Reset practice data
    gameState.practiceData.driver1.ideal = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    gameState.practiceData.driver2.ideal = [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

    gameState.practiceData.driver1.current = [50, 50, 50];
    gameState.practiceData.driver2.current = [50, 50, 50];

    gameState.practiceData.driver1.satisfaction = calculateSatisfaction(gameState.practiceData.driver1.ideal, gameState.practiceData.driver1.current);
    gameState.practiceData.driver2.satisfaction = calculateSatisfaction(gameState.practiceData.driver2.ideal, gameState.practiceData.driver2.current);

    document.getElementById('driver1-name').innerText = team.drivers[0];
    document.getElementById('driver2-name').innerText = team.drivers[1];

    updatePracticeUI();
    showScreen('practice-session');
}

function calculateSatisfaction(ideal, current) {
    let diff = 0;
    for (let i = 0; i < 3; i++) {
        diff += Math.abs(ideal[i] - current[i]);
    }
    // Max diff is 300, min is 0.
    const satisfaction = Math.max(0, Math.floor(100 - (diff / 300) * 100));
    return satisfaction;
}

function updatePracticeUI() {
    document.getElementById('driver1-satisfaction').innerText = gameState.practiceData.driver1.satisfaction;
    document.getElementById('driver2-satisfaction').innerText = gameState.practiceData.driver2.satisfaction;

    document.getElementById('d1-wings').value = gameState.practiceData.driver1.current[0];
    document.getElementById('d1-suspension').value = gameState.practiceData.driver1.current[1];
    document.getElementById('d1-rideheight').value = gameState.practiceData.driver1.current[2];

    document.getElementById('d2-wings').value = gameState.practiceData.driver2.current[0];
    document.getElementById('d2-suspension').value = gameState.practiceData.driver2.current[1];
    document.getElementById('d2-rideheight').value = gameState.practiceData.driver2.current[2];
}

function testSetup() {
    const d1Current = [
        parseInt(document.getElementById('d1-wings').value),
        parseInt(document.getElementById('d1-suspension').value),
        parseInt(document.getElementById('d1-rideheight').value)
    ];
    const d2Current = [
        parseInt(document.getElementById('d2-wings').value),
        parseInt(document.getElementById('d2-suspension').value),
        parseInt(document.getElementById('d2-rideheight').value)
    ];

    gameState.practiceData.driver1.current = d1Current;
    gameState.practiceData.driver2.current = d2Current;

    gameState.practiceData.driver1.satisfaction = calculateSatisfaction(gameState.practiceData.driver1.ideal, d1Current);
    gameState.practiceData.driver2.satisfaction = calculateSatisfaction(gameState.practiceData.driver2.ideal, d2Current);

    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);

    // Provide hints
    const generateHint = (driverName, ideal, current) => {
        let hints = [];
        const labels = ['Wings', 'Suspension', 'Ride Height'];
        for (let i = 0; i < 3; i++) {
            if (current[i] < ideal[i] - 10) hints.push(`Increase ${labels[i]}`);
            else if (current[i] > ideal[i] + 10) hints.push(`Decrease ${labels[i]}`);
            else hints.push(`${labels[i]} feels good`);
        }
        return `${driverName}: ${hints.join(', ')}`;
    };

    const fb = document.getElementById('practice-feedback');
    fb.innerHTML = `
        <p>${generateHint(team.drivers[0], gameState.practiceData.driver1.ideal, d1Current)}</p>
        <p>${generateHint(team.drivers[1], gameState.practiceData.driver2.ideal, d2Current)}</p>
    `;

    updatePracticeUI();
}

function simulateQualifying() {
    const results = [];
    const baseLapTime = 80; // 80 seconds base

    GAME_DATA.teams.forEach(team => {
        team.drivers.forEach((driverName, index) => {
            const driverStats = GAME_DATA.drivers[driverName];
            const isPlayer = team.id === gameState.teamId;
            let carRating = 0;
            let satisfaction = 80; // AI default satisfaction

            if (isPlayer) {
                carRating = (gameState.playerCar.engine + gameState.playerCar.chassis + gameState.playerCar.wings + gameState.playerCar.underfloor + gameState.playerCar.suspension) / 5;
                satisfaction = index === 0 ? gameState.practiceData.driver1.satisfaction : gameState.practiceData.driver2.satisfaction;
            } else {
                carRating = (team.engine + team.chassis + team.wings + team.underfloor + team.suspension) / 5;
            }

            const driverRating = (driverStats.skill + driverStats.pace) / 2;

            // Calculate time: lower is better.
            // Perfect rating (100) reduces time by 5s. Satisfaction reduces up to 1s.
            // Add some RNG (up to 1s)
            let lapTime = baseLapTime - ((carRating / 100) * 5) - ((driverRating / 100) * 3) - ((satisfaction / 100) * 1) + (Math.random() * 1);

            results.push({
                driver: driverName,
                team: team.name,
                color: team.color,
                time: lapTime,
                isPlayer: isPlayer,
                driverIndex: index // 0 or 1
            });
        });
    });

    // Sort by time (fastest first)
    results.sort((a, b) => a.time - b.time);

    gameState.raceGrid = results;

    const gridContainer = document.getElementById('qualifying-grid');
    gridContainer.innerHTML = '';

    results.forEach((res, i) => {
        const div = document.createElement('div');
        div.style.background = '#444';
        div.style.padding = '10px';
        div.style.borderRadius = '5px';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.borderLeft = `5px solid ${res.color}`;

        const minutes = Math.floor(res.time / 60);
        const seconds = (res.time % 60).toFixed(3).padStart(6, '0');

        div.innerHTML = `
            <span><strong>${i + 1}.</strong> ${res.driver} (${res.team})</span>
            <span>${minutes}:${seconds}</span>
        `;
        gridContainer.appendChild(div);
    });

    showScreen('qualifying-session');
}

function setupPreRace() {
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);
    if (!team) return;

    document.getElementById('prerace-d1-name').innerText = team.drivers[0];
    document.getElementById('prerace-d2-name').innerText = team.drivers[1];

    let d1Pos = gameState.raceGrid.findIndex(g => g.driver === team.drivers[0]) + 1;
    let d2Pos = gameState.raceGrid.findIndex(g => g.driver === team.drivers[1]) + 1;

    document.getElementById('prerace-d1-pos').innerText = d1Pos;
    document.getElementById('prerace-d2-pos').innerText = d2Pos;
}

function startRace() {
    const currentRace = GAME_DATA.calendar[gameState.currentRoundIndex];
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);

    document.getElementById('race-track-name').innerText = currentRace.name;
    document.getElementById('race-total-laps').innerText = currentRace.laps;
    document.getElementById('race-current-lap').innerText = 1;
    document.getElementById('race-post-race').style.display = 'none';

    document.getElementById('race-d1-name').innerText = team.drivers[0];
    document.getElementById('race-d2-name').innerText = team.drivers[1];

    // Initialize race data
    gameState.raceData = {
        lap: 1,
        totalLaps: currentRace.laps,
        baseLapTime: 85,
        finished: false,
        cars: gameState.raceGrid.map((gridPos, index) => {
            let tireType, paceStrategy;
            const isPlayer = gridPos.isPlayer;

            if (isPlayer) {
                const prefix = gridPos.driverIndex === 0 ? 'd1' : 'd2';
                tireType = document.getElementById(`prerace-${prefix}-tires`).value;
                paceStrategy = document.getElementById(`prerace-${prefix}-pace`).value;
            } else {
                // AI picks tires based on some simple logic (random for now)
                const types = ['soft', 'medium', 'hard'];
                tireType = types[Math.floor(Math.random() * types.length)];
                paceStrategy = 'neutral';
            }

            const driverStats = GAME_DATA.drivers[gridPos.driver];
            let carRating = 0;
            if (isPlayer) {
                carRating = (gameState.playerCar.engine + gameState.playerCar.chassis + gameState.playerCar.wings + gameState.playerCar.underfloor + gameState.playerCar.suspension) / 5;
            } else {
                const t = GAME_DATA.teams.find(t => t.name === gridPos.team);
                carRating = (t.engine + t.chassis + t.wings + t.underfloor + t.suspension) / 5;
            }

            return {
                driver: gridPos.driver,
                team: gridPos.team,
                color: gridPos.color,
                isPlayer: isPlayer,
                driverIndex: gridPos.driverIndex,
                pos: index + 1,
                totalTime: index * 0.2, // Stagger starting times
                lastLapTime: 0,
                interval: 0,
                tire: { type: tireType, life: 100 },
                pace: paceStrategy,
                carRating: carRating,
                driverStats: driverStats,
                pittingNextLap: false,
                pitStops: 0,
                finishedRace: false
            };
        })
    };

    updateRaceUI();
    showScreen('race-session');

    isRacePaused = false;
    document.getElementById('btn-speed-pause').innerText = "Pause";
    if (raceLoopInterval) clearInterval(raceLoopInterval);
    raceLoopInterval = setInterval(raceTick, raceSpeed);
}

function schedulePitStop(driverNum) {
    const driverIndex = driverNum - 1;
    const car = gameState.raceData.cars.find(c => c.isPlayer && c.driverIndex === driverIndex);
    if (car && !car.pittingNextLap) {
        car.pittingNextLap = true;
        document.getElementById(`btn-d${driverNum}-pit`).innerText = "Pitting...";
        document.getElementById(`btn-d${driverNum}-pit`).disabled = true;
    }
}

function raceTick() {
    if (isRacePaused || !gameState.raceData || gameState.raceData.finished) return;

    let raceFinishedThisTick = false;

    gameState.raceData.cars.forEach(car => {
        if (car.finishedRace) return;

        // Player updates pace from UI
        if (car.isPlayer) {
            const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
            car.pace = document.getElementById(`race-${prefix}-pace`).value;
        }

        // Tire logic
        let tirePaceMod = 0;
        let tireDegRate = 0;

        switch (car.tire.type) {
            case 'soft': tirePaceMod = -1.5; tireDegRate = 2.0; break;
            case 'medium': tirePaceMod = 0; tireDegRate = 1.0; break;
            case 'hard': tirePaceMod = 1.0; tireDegRate = 0.5; break;
        }

        // Pace logic
        let stratPaceMod = 0;
        let stratDegMod = 1.0;
        switch (car.pace) {
            case 'aggressive': stratPaceMod = -0.8; stratDegMod = 1.5; break;
            case 'neutral': stratPaceMod = 0; stratDegMod = 1.0; break;
            case 'conserve': stratPaceMod = 0.5; stratDegMod = 0.5; break;
        }

        // Apply degradation
        car.tire.life -= (tireDegRate * stratDegMod);
        if (car.tire.life < 0) car.tire.life = 0;

        // Life penalty
        let lifePenalty = 0;
        if (car.tire.life < 30) lifePenalty = (30 - car.tire.life) * 0.1;

        // Calculate Lap Time
        const driverSkillMod = ((100 - car.driverStats.pace) * 0.1);
        const carMod = ((100 - car.carRating) * 0.1);
        const rng = (Math.random() - 0.5) * 1.5;

        car.lastLapTime = gameState.raceData.baseLapTime + tirePaceMod + stratPaceMod + lifePenalty + driverSkillMod + carMod + rng;

        // Pit stop
        if (car.pittingNextLap) {
            car.lastLapTime += 22 + (Math.random() * 2); // 22 seconds avg pit loss
            car.tire.life = 100;
            car.pitStops++;

            if (car.isPlayer) {
                const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
                car.tire.type = document.getElementById(`race-${prefix}-next-tire`).value;
                car.pittingNextLap = false;
                document.getElementById(`btn-${prefix}-pit`).innerText = "Pit Next Lap";
                document.getElementById(`btn-${prefix}-pit`).disabled = false;
            } else {
                // AI Picks next tire (simple logic)
                car.tire.type = ['medium', 'hard'][Math.floor(Math.random() * 2)];
                car.pittingNextLap = false;
            }
        } else if (!car.isPlayer && car.tire.life < 20 && gameState.raceData.lap < gameState.raceData.totalLaps - 2) {
            // AI Pitting logic
            car.pittingNextLap = true;
        }

        car.totalTime += car.lastLapTime;
    });

    // Update Positions
    gameState.raceData.cars.sort((a, b) => a.totalTime - b.totalTime);

    let leaderTime = gameState.raceData.cars[0].totalTime;
    gameState.raceData.cars.forEach((car, index) => {
        car.pos = index + 1;
        car.interval = index === 0 ? 0 : car.totalTime - gameState.raceData.cars[index - 1].totalTime;
    });

    gameState.raceData.lap++;

    if (gameState.raceData.lap > gameState.raceData.totalLaps) {
        gameState.raceData.finished = true;
        clearInterval(raceLoopInterval);
        document.getElementById('race-post-race').style.display = 'flex';
        awardPoints();
    }

    updateRaceUI();
}

function updateRaceUI() {
    if (!gameState.raceData) return;

    document.getElementById('race-current-lap').innerText = Math.min(gameState.raceData.lap, gameState.raceData.totalLaps);

    const board = document.getElementById('race-leaderboard');
    board.innerHTML = '';

    gameState.raceData.cars.forEach(car => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.padding = '8px 10px';
        div.style.borderBottom = '1px solid #444';
        div.style.borderLeft = `4px solid ${car.color}`;
        if (car.isPlayer) div.style.background = '#333';

        const formatTime = (t) => {
            const m = Math.floor(t / 60);
            const s = (t % 60).toFixed(3).padStart(6, '0');
            return `${m}:${s}`;
        };

        const intervalStr = car.pos === 1 ? 'Leader' : `+${car.interval.toFixed(3)}`;
        const tireLetter = car.tire.type.charAt(0).toUpperCase();
        let tireColor = '#fff';
        if (tireLetter === 'S') tireColor = '#ff3333';
        if (tireLetter === 'M') tireColor = '#ffff33';

        div.innerHTML = `
            <div style="width: 30px;">${car.pos}</div>
            <div style="flex: 1; font-weight: ${car.isPlayer ? 'bold' : 'normal'};">${car.driver}</div>
            <div style="width: 80px;">${intervalStr}</div>
            <div style="width: 80px;">${formatTime(car.lastLapTime)}</div>
            <div style="width: 80px; color: ${tireColor};">${tireLetter} (${Math.round(car.tire.life)}%)</div>
        `;
        board.appendChild(div);

        // Update player side controls
        if (car.isPlayer) {
            const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
            document.getElementById(`race-${prefix}-pos`).innerText = car.pos;
            document.getElementById(`race-${prefix}-tire-life`).innerText = Math.round(car.tire.life);
            document.getElementById(`race-${prefix}-tire-type`).innerText = tireLetter;
            document.getElementById(`race-${prefix}-tire-type`).style.color = tireColor;
        }
    });
}

function awardPoints() {
    const pointsSys = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

    gameState.raceData.cars.forEach(car => {
        if (car.pos <= 10) {
            const pts = pointsSys[car.pos - 1];
            gameState.championship.drivers[car.driver] += pts;

            const team = GAME_DATA.teams.find(t => t.name === car.team);
            if(team) {
                gameState.championship.constructors[team.id] += pts;
            }
        }

        // Award prize money for player
        if (car.isPlayer) {
            const prize = Math.max(0, (20 - car.pos) * 500000); // Max 10M for win
            gameState.budget += prize;
        }
    });
}

function endWeekend() {
    gameState.currentRoundIndex++;
    if (gameState.currentRoundIndex >= GAME_DATA.calendar.length) {
        alert("Season Finished!");
        // End of game logic could go here
    }
    updateDashboard();
    showScreen('dashboard');
}
