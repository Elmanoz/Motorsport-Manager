// Core application file

const GAME_DATA = {
    teams: [
        { id: "redbull", name: "Red Bull Racing", color: "#3671C6", budget: 140000000, drivers: ["Max Verstappen", "Isack Hadjar"], engine: 95, chassis: 95, wings: 93, underfloor: 96, suspension: 94 },
        { id: "mercedes", name: "Mercedes", color: "#27F4D2", budget: 140000000, drivers: ["George Russell", "Andrea Kimi Antonelli"], engine: 92, chassis: 90, wings: 90, underfloor: 88, suspension: 91 },
        { id: "ferrari", name: "Ferrari", color: "#E80020", budget: 140000000, drivers: ["Charles Leclerc", "Lewis Hamilton"], engine: 94, chassis: 92, wings: 91, underfloor: 93, suspension: 90 },
        { id: "mclaren", name: "McLaren", color: "#FF8000", budget: 135000000, drivers: ["Lando Norris", "Oscar Piastri"], engine: 92, chassis: 94, wings: 95, underfloor: 94, suspension: 92 },
        { id: "astonmartin", name: "Aston Martin", color: "#229971", budget: 130000000, drivers: ["Fernando Alonso", "Lance Stroll"], engine: 90, chassis: 85, wings: 86, underfloor: 84, suspension: 87 },
        { id: "alpine", name: "Alpine", color: "#0093CC", budget: 120000000, drivers: ["Pierre Gasly", "Franco Colapinto"], engine: 85, chassis: 82, wings: 83, underfloor: 80, suspension: 81 },
        { id: "williams", name: "Williams", color: "#005AFF", budget: 110000000, drivers: ["Alexander Albon", "Carlos Sainz"], engine: 90, chassis: 80, wings: 81, underfloor: 78, suspension: 79 },
        { id: "rb", name: "Visa Cash App RB", color: "#6692FF", budget: 110000000, drivers: ["Arvid Linblad", "Liam Lawson"], engine: 93, chassis: 81, wings: 80, underfloor: 82, suspension: 80 },
        { id: "audi", name: "Audi", color: "#999999", budget: 115000000, drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"], engine: 88, chassis: 75, wings: 76, underfloor: 74, suspension: 75 },
        { id: "haas", name: "Haas", color: "#B6BABD", budget: 100000000, drivers: ["Esteban Ocon", "Oliver Bearman"], engine: 92, chassis: 78, wings: 79, underfloor: 76, suspension: 77 },
         { id: "cadillac", name: "Cadillac", color: "#000000", budget: 100000000, drivers: ["Valtteri Bottas", "Sergio Perez"], engine: 82, chassis: 70, wings: 65, underfloor: 70, suspension: 68 }
    ],
    drivers: {
        "Max Verstappen": { skill: 98, consistency: 97, pace: 99, defense: 95 },
        "Isack Hadjar": { skill: 85, consistency: 80, pace: 84, defense: 88 },
        "George Russell": { skill: 90, consistency: 88, pace: 90, defense: 86 },
        "Andrea Kimi Antonelli": { skill: 84, consistency: 80, pace: 86, defense: 80 },
        "Charles Leclerc": { skill: 95, consistency: 89, pace: 96, defense: 88 },
        "Lewis Hamilton": { skill: 96, consistency: 94, pace: 95, defense: 92 },
        "Lando Norris": { skill: 94, consistency: 92, pace: 94, defense: 89 },
        "Oscar Piastri": { skill: 91, consistency: 89, pace: 92, defense: 88 },
        "Fernando Alonso": { skill: 93, consistency: 95, pace: 91, defense: 97 },
        "Lance Stroll": { skill: 78, consistency: 75, pace: 79, defense: 76 },
        "Pierre Gasly": { skill: 86, consistency: 84, pace: 85, defense: 83 },
        "Franco Colapinto": { skill: 79, consistency: 78, pace: 80, defense: 76 },
        "Alexander Albon": { skill: 87, consistency: 86, pace: 88, defense: 85 },
        "Carlos Sainz": { skill: 91, consistency: 93, pace: 90, defense: 92 },
        "Arvid Linblad": { skill: 83, consistency: 78, pace: 85, defense: 80 },
        "Liam Lawson": { skill: 81, consistency: 82, pace: 82, defense: 80 },
        "Nico Hulkenberg": { skill: 85, consistency: 86, pace: 84, defense: 83 },
        "Gabriel Bortoleto": { skill: 77, consistency: 75, pace: 78, defense: 74 },
        "Esteban Ocon": { skill: 84, consistency: 82, pace: 84, defense: 86 },
        "Oliver Bearman": { skill: 80, consistency: 78, pace: 81, defense: 77 },
        "Valtteri Bottas": { skill: 81, consistency: 80, pace: 79, defense: 75 },
        "Sergio Perez": {skill: 80, consistency: 79, pace: 79, defense: 79 }
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
        driver2: { ideal: [50, 50, 50], current: [50, 50, 50], satisfaction: 0 },
        attemptsLeft: 3
    },
    raceGrid: [],
    raceData: null
};

let raceLoopInterval = null;
let raceSpeed = 3000; // ms per tick
let isRacePaused = false;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function saveGame() {
    localStorage.setItem('f1manager2026_save', JSON.stringify(gameState));
    alert("Game Saved!");
}

function isValidGameState(state) {
    if (!state || typeof state !== 'object') return false;
    if (!('teamId' in state) || !('budget' in state) || !('currentRoundIndex' in state)) return false;
    return true;
}

function loadGame() {
    const saved = localStorage.getItem('f1manager2026_save');
    if (saved) {
        try {
            const parsedState = JSON.parse(saved);
            if (isValidGameState(parsedState)) {
                gameState = parsedState;
                updateDashboard();
                showScreen('dashboard');
            } else {
                alert("Invalid save file structure!");
            }
        } catch (e) {
            console.error("Failed to parse save game data:", e);
            alert("Error loading game!");
        }
    } else {
        alert("No saved game found!");
    }
}

if (typeof document !== 'undefined') {
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
    document.getElementById('btn-speed-1x')?.addEventListener('click', () => setRaceSpeed(3000));
    document.getElementById('btn-speed-2x')?.addEventListener('click', () => setRaceSpeed(1500));
    document.getElementById('btn-speed-5x')?.addEventListener('click', () => setRaceSpeed(600));

    // Player Pit Controls
    document.getElementById('btn-d1-pit')?.addEventListener('click', () => schedulePitStop(1));
    document.getElementById('btn-d2-pit')?.addEventListener('click', () => schedulePitStop(2));

    document.getElementById('btn-end-weekend')?.addEventListener('click', () => { endWeekend(); });

    // Laptimes Menu
    document.getElementById('btn-show-laptimes')?.addEventListener('click', () => {
        if (!isRacePaused) {
            alert("Pause the race first to view laptimes.");
            return;
        }
        showLaptimesModal();
    });

    document.getElementById('btn-close-laptimes')?.addEventListener('click', () => {
        document.getElementById('laptimes-modal').style.display = 'none';
    });

    document.getElementById('laptimes-driver-select')?.addEventListener('change', () => {
        updateLaptimesModal();
    });
});
}

function showLaptimesModal() {
    if (!gameState.raceData) return;

    const select = document.getElementById('laptimes-driver-select');
    select.innerHTML = '';

    gameState.raceData.cars.forEach((car, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = car.driver;
        select.appendChild(option);
    });

    // Default to player's driver 1 if available
    const d1Index = gameState.raceData.cars.findIndex(c => c.isPlayer && c.driverIndex === 0);
    if (d1Index !== -1) select.value = d1Index;

    updateLaptimesModal();
    document.getElementById('laptimes-modal').style.display = 'flex';
}

function updateLaptimesModal() {
    const select = document.getElementById('laptimes-driver-select');
    const carIndex = parseInt(select.value);
    const car = gameState.raceData.cars[carIndex];
    if (!car) return;

    const historyContainer = document.getElementById('laptimes-history');
    historyContainer.innerHTML = '';

    car.lapHistory.forEach(lapData => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.padding = '5px';
        div.style.borderBottom = '1px solid #444';

        const lapSpan = document.createElement('span');
        lapSpan.textContent = `Lap ${lapData.lap}`;
        lapSpan.style.width = '60px';

        const timeSpan = document.createElement('span');
        const minutes = Math.floor(lapData.time / 60);
        const seconds = (lapData.time % 60).toFixed(3).padStart(6, '0');
        timeSpan.textContent = `${minutes}:${seconds}`;
        timeSpan.style.flex = '1';
        timeSpan.style.textAlign = 'center';

        const tireSpan = document.createElement('span');
        tireSpan.textContent = lapData.tire.charAt(0).toUpperCase();
        tireSpan.style.width = '60px';
        tireSpan.style.textAlign = 'right';
        if (lapData.tire === 'soft') tireSpan.style.color = '#ff3333';
        else if (lapData.tire === 'medium') tireSpan.style.color = '#ffff33';
        else tireSpan.style.color = '#ffffff';

        div.appendChild(lapSpan);
        div.appendChild(timeSpan);
        div.appendChild(tireSpan);

        historyContainer.appendChild(div);
    });
}

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
        div.style.borderRadius = '12px';
        div.style.width = '250px';
        div.style.textAlign = 'center';
        div.style.cursor = 'pointer';
        div.style.backgroundColor = '#333';
        const h3 = document.createElement('h3');
        h3.style.color = team.color;
        h3.textContent = team.name;
        div.appendChild(h3);

        const pDrivers = document.createElement('p');
        pDrivers.textContent = `Drivers: ${team.drivers.join(', ')}`;
        div.appendChild(pDrivers);

        const pBudget = document.createElement('p');
        pBudget.textContent = `Budget: $${team.budget.toLocaleString()}`;
        div.appendChild(pBudget);
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
        div.style.borderRadius = '12px';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.alignItems = 'center';

        const canAfford = gameState.budget >= cost;
        const isMaxed = currentLevel >= 100;

        const infoDiv = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = `${part.name} (Level: ${currentLevel})`;
        infoDiv.appendChild(h4);

        const pCost = document.createElement('p');
        pCost.textContent = `Cost to Upgrade: $${cost.toLocaleString()}`;
        infoDiv.appendChild(pCost);
        div.appendChild(infoDiv);

        const upgradeBtn = document.createElement('button');
        upgradeBtn.className = 'btn';
        upgradeBtn.disabled = !canAfford || isMaxed;
        upgradeBtn.textContent = isMaxed ? 'Max Level' : 'Upgrade';
        div.appendChild(upgradeBtn);

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
    gameState.practiceData.attemptsLeft = 3;
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
    const practiceTimeLeft = gameState.practiceData.attemptsLeft * 20;
    const timeDisplay = document.getElementById('practice-time-left');
    if (timeDisplay) timeDisplay.innerText = practiceTimeLeft;

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
    if (gameState.practiceData.attemptsLeft <= 0) return;

    gameState.practiceData.attemptsLeft--;

    if (gameState.practiceData.attemptsLeft <= 0) {
        document.getElementById('btn-test-setup').disabled = true;
    }

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
    fb.innerHTML = '';
    const p1 = document.createElement('p');
    p1.textContent = generateHint(team.drivers[0], gameState.practiceData.driver1.ideal, d1Current);
    fb.appendChild(p1);
    const p2 = document.createElement('p');
    p2.textContent = generateHint(team.drivers[1], gameState.practiceData.driver2.ideal, d2Current);
    fb.appendChild(p2);

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
        div.style.borderRadius = '12px';
        div.style.display = 'flex';
        div.style.justifyContent = 'space-between';
        div.style.borderLeft = `5px solid ${res.color}`;

        const minutes = Math.floor(res.time / 60);
        const seconds = (res.time % 60).toFixed(3).padStart(6, '0');

        const leftSpan = document.createElement('span');
        const strong = document.createElement('strong');
        strong.textContent = `${i + 1}.`;
        leftSpan.appendChild(strong);
        leftSpan.appendChild(document.createTextNode(` ${res.driver} (${res.team})`));
        div.appendChild(leftSpan);

        const rightSpan = document.createElement('span');
        rightSpan.textContent = `${minutes}:${seconds}`;
        div.appendChild(rightSpan);
        gridContainer.appendChild(div);
    });

    showScreen('qualifying-session');
}

function setupPreRace() {
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);
    if (!team) return;

    document.getElementById('prerace-d1-name').innerText = team.drivers[0];
    document.getElementById('prerace-d2-name').innerText = team.drivers[1];

    let d1Pos = 0;
    let d2Pos = 0;
    for (let i = 0; i < gameState.raceGrid.length; i++) {
        if (gameState.raceGrid[i].driver === team.drivers[0]) d1Pos = i + 1;
        else if (gameState.raceGrid[i].driver === team.drivers[1]) d2Pos = i + 1;
        if (d1Pos && d2Pos) break;
    }

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
                finishedRace: false,
                lapHistory: []
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

        car.lapHistory.push({ lap: gameState.raceData.lap, time: car.lastLapTime, tire: car.tire.type });

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

    const svgTrack = document.getElementById('race-track-svg');
    // Keep the base ellipses, remove existing dots
    Array.from(svgTrack.querySelectorAll('g.car-dot')).forEach(el => el.remove());

    const leaderTime = gameState.raceData.cars[0].totalTime;
    // Calculate expected total race time based on leader's average lap time so far
    let totalRaceTime = 0;
    if (gameState.raceData.lap > 1) {
        totalRaceTime = (leaderTime / (gameState.raceData.lap - 1)) * gameState.raceData.totalLaps;
    } else {
        totalRaceTime = gameState.raceData.baseLapTime * gameState.raceData.totalLaps;
    }

    gameState.raceData.cars.forEach(car => {
        // Track visualization logic
        const cx = 300, cy = 75, rx = 250, ry = 60; // matching HTML SVG parameters

        // Progress based on total race time.
        // It wraps around every lap length, we can map it to 0 to 2*PI.
        let progress = 0;
        if (totalRaceTime > 0) {
            progress = (car.totalTime / totalRaceTime) * gameState.raceData.totalLaps;
        }

        // The fractional part of progress is where the car is on the current lap
        let lapProgress = progress % 1;

        // Offset starting position slightly based on grid
        if (gameState.raceData.lap === 1) {
            lapProgress -= (car.pos * 0.01);
            if (lapProgress < 0) lapProgress = 0;
        }

        // Angle goes from -PI/2 to 3*PI/2 (starting top, going clockwise)
        const angle = -Math.PI/2 + (lapProgress * 2 * Math.PI);

        const dotX = cx + rx * Math.cos(angle);
        const dotY = cy + ry * Math.sin(angle);

        const dotGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        dotGroup.setAttribute('class', 'car-dot');

        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', dotX);
        circle.setAttribute('cy', dotY);
        circle.setAttribute('r', car.isPlayer ? 10 : 8);
        circle.setAttribute('fill', car.color);
        if (car.isPlayer) {
            circle.setAttribute('stroke', '#fff');
            circle.setAttribute('stroke-width', '2');
        } else {
            circle.setAttribute('stroke', '#000');
            circle.setAttribute('stroke-width', '1');
        }

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', dotX);
        text.setAttribute('y', dotY + 3); // slight vertical adjustment
        text.setAttribute('font-size', '8');
        text.setAttribute('fill', '#fff');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-weight', 'bold');

        // Extract initials
        const nameParts = car.driver.split(' ');
        let initials = nameParts[0][0];
        if (nameParts.length > 1) initials += nameParts[nameParts.length - 1][0];
        text.textContent = initials.toUpperCase();

        dotGroup.appendChild(circle);
        dotGroup.appendChild(text);
        svgTrack.appendChild(dotGroup);

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

        const posDiv = document.createElement('div');
        posDiv.style.width = '30px';
        posDiv.textContent = car.pos;
        div.appendChild(posDiv);

        const driverDiv = document.createElement('div');
        driverDiv.style.flex = '1';
        driverDiv.style.fontWeight = car.isPlayer ? 'bold' : 'normal';
        driverDiv.textContent = car.driver;
        div.appendChild(driverDiv);

        const intervalDiv = document.createElement('div');
        intervalDiv.style.width = '80px';
        intervalDiv.textContent = intervalStr;
        div.appendChild(intervalDiv);

        const lapTimeDiv = document.createElement('div');
        lapTimeDiv.style.width = '80px';
        lapTimeDiv.textContent = formatTime(car.lastLapTime);
        div.appendChild(lapTimeDiv);

        const tireDiv = document.createElement('div');
        tireDiv.style.width = '80px';
        tireDiv.style.color = tireColor;
        tireDiv.textContent = `${tireLetter} (${Math.round(car.tire.life)}%)`;
        div.appendChild(tireDiv);
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        calculateSatisfaction,
        GAME_DATA,
        gameState,
        getGameState: () => gameState,
        endWeekend,
        loadGame,
        isValidGameState
    };
}
