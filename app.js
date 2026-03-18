// Core application file

const GAME_DATA = {
    teams:[
        { id: "redbull", name: "Red Bull Racing", color: "#3671C6", budget: 140000000, drivers:["Max Verstappen", "Isack Hadjar"], engine: 95, chassis: 95, wings: 93, underfloor: 96, suspension: 94 },
        { id: "mercedes", name: "Mercedes", color: "#27F4D2", budget: 140000000, drivers: ["George Russell", "Andrea Kimi Antonelli"], engine: 92, chassis: 90, wings: 90, underfloor: 88, suspension: 91 },
        { id: "ferrari", name: "Ferrari", color: "#E80020", budget: 140000000, drivers: ["Charles Leclerc", "Lewis Hamilton"], engine: 94, chassis: 92, wings: 91, underfloor: 93, suspension: 90 },
        { id: "mclaren", name: "McLaren", color: "#FF8000", budget: 135000000, drivers:["Lando Norris", "Oscar Piastri"], engine: 92, chassis: 94, wings: 95, underfloor: 94, suspension: 92 },
        { id: "astonmartin", name: "Aston Martin", color: "#229971", budget: 130000000, drivers: ["Fernando Alonso", "Lance Stroll"], engine: 90, chassis: 85, wings: 86, underfloor: 84, suspension: 87 },
        { id: "alpine", name: "Alpine", color: "#0093CC", budget: 120000000, drivers: ["Pierre Gasly", "Franco Colapinto"], engine: 85, chassis: 82, wings: 83, underfloor: 80, suspension: 81 },
        { id: "williams", name: "Williams", color: "#005AFF", budget: 110000000, drivers:["Alexander Albon", "Carlos Sainz"], engine: 90, chassis: 80, wings: 81, underfloor: 78, suspension: 79 },
        { id: "rb", name: "Visa Cash App RB", color: "#6692FF", budget: 110000000, drivers: ["Arvid Linblad", "Liam Lawson"], engine: 93, chassis: 81, wings: 80, underfloor: 82, suspension: 80 },
        { id: "audi", name: "Audi", color: "#999999", budget: 115000000, drivers: ["Nico Hulkenberg", "Gabriel Bortoleto"], engine: 88, chassis: 75, wings: 76, underfloor: 74, suspension: 75 },
        { id: "haas", name: "Haas", color: "#B6BABD", budget: 100000000, drivers:["Esteban Ocon", "Oliver Bearman"], engine: 92, chassis: 78, wings: 79, underfloor: 76, suspension: 77 },
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
    calendar:[
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
        driver1: { ideal: [50, 50, 50], current:[50, 50, 50], satisfaction: 0 },
        driver2: { ideal:[50, 50, 50], current: [50, 50, 50], satisfaction: 0 },
        attemptsLeft: 3
    },
    raceGrid:[],
    raceData: null
};

let raceLoopInterval = null;
let raceSpeed = 8000;
let isRacePaused = false;

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function playSessionIntro(gpName, sessionName) {
    return new Promise(resolve => {
        const introModal = document.getElementById('session-intro');
        document.getElementById('intro-gp-name').innerText = `2026 ${gpName}`;
        document.getElementById('intro-session-name').innerText = sessionName;
        introModal.style.display = 'flex';

        setTimeout(() => {
            introModal.style.display = 'none';
            resolve();
        }, 2000);
    });
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

    document.getElementById('btn-goto-weekend')?.addEventListener('click', async () => {
        await startRaceWeekend();
    });

    document.getElementById('btn-back-dashboard')?.addEventListener('click', () => {
        updateDashboard();
        showScreen('dashboard');
    });

    document.getElementById('btn-test-setup')?.addEventListener('click', () => {
        testSetup();
    });

    document.getElementById('btn-goto-qualifying')?.addEventListener('click', async () => {
        await simulateQualifying();
    });

    document.getElementById('btn-goto-prerace')?.addEventListener('click', () => {
        setupPreRace();
        showScreen('pre-race');
    });

    document.getElementById('btn-start-race')?.addEventListener('click', async () => {
        await startRace();
    });

    document.getElementById('btn-speed-pause')?.addEventListener('click', () => {
        isRacePaused = !isRacePaused;
        document.getElementById('btn-speed-pause').innerText = isRacePaused ? "Resume" : "Pause";
        updateSpeedControlsUI();
    });
    document.getElementById('btn-speed-1x')?.addEventListener('click', () => setRaceSpeed(8000));
    document.getElementById('btn-speed-2x')?.addEventListener('click', () => setRaceSpeed(4000));
    document.getElementById('btn-speed-5x')?.addEventListener('click', () => setRaceSpeed(1000));

    document.getElementById('btn-d1-pit')?.addEventListener('click', () => schedulePitStop(1));
    document.getElementById('btn-d2-pit')?.addEventListener('click', () => schedulePitStop(2));

    document.getElementById('btn-end-weekend')?.addEventListener('click', () => { endWeekend(); });

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
        div.className = 'lap-row';

        const lapSpan = document.createElement('span');
        lapSpan.textContent = `Lap ${lapData.lap}`;
        lapSpan.style.width = '60px';

        const timeSpan = document.createElement('span');
        const minutes = Math.floor(lapData.time / 60);
        const seconds = (lapData.time % 60).toFixed(3).padStart(6, '0');
        timeSpan.textContent = `${minutes}:${seconds}`;
        timeSpan.style.flex = '1';
        timeSpan.style.textAlign = 'center';
        timeSpan.style.color = 'var(--accent-blue)';

        const tireSpan = document.createElement('span');
        tireSpan.textContent = lapData.tire.charAt(0).toUpperCase();
        tireSpan.className = `tire-${lapData.tire}`;
        tireSpan.style.width = '60px';
        tireSpan.style.textAlign = 'right';

        div.appendChild(lapSpan);
        div.appendChild(timeSpan);
        div.appendChild(tireSpan);
        historyContainer.appendChild(div);
    });
}

function updateSpeedControlsUI() {
    ['pause', '1x', '2x', '5x'].forEach(id => {
        const btn = document.getElementById(`btn-speed-${id}`);
        if (btn) btn.classList.remove('btn-secondary');
    });

    if (isRacePaused) {
        document.getElementById('btn-speed-pause')?.classList.add('btn-secondary');
    } else {
        if (raceSpeed === 8000) document.getElementById('btn-speed-1x')?.classList.add('btn-secondary');
        else if (raceSpeed === 4000) document.getElementById('btn-speed-2x')?.classList.add('btn-secondary');
        else if (raceSpeed === 1000) document.getElementById('btn-speed-5x')?.classList.add('btn-secondary');
    }
}

function setRaceSpeed(ms) {
    raceSpeed = ms;
    isRacePaused = false;
    document.getElementById('btn-speed-pause').innerText = "Pause";
    updateSpeedControlsUI();
}

let lastRaceTickTime = 0;

function renderTeamSelection() {
    const list = document.getElementById('team-list');
    list.innerHTML = '';
    GAME_DATA.teams.forEach(team => {
        const div = document.createElement('div');
        div.className = 'team-card panel';
        div.style.borderTop = `4px solid ${team.color}`;
        
        const h3 = document.createElement('h3');
        h3.style.color = team.color;
        h3.textContent = team.name;
        div.appendChild(h3);

        const pDrivers = document.createElement('p');
        pDrivers.className = 'team-drivers';
        pDrivers.textContent = `Drivers: ${team.drivers.join(', ')}`;
        div.appendChild(pDrivers);

        const pBudget = document.createElement('p');
        pBudget.className = 'team-budget';
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
    document.getElementById('dash-next-race').innerText = nextRace ? `Rnd ${nextRace.round} - ${nextRace.name}` : "Season Finished";

    const topNextRace = document.getElementById('dashboard-top-next-race');
    if (topNextRace) {
        topNextRace.innerText = nextRace ? nextRace.name : "Season Finished";
    }

    const driversList = document.getElementById('dash-drivers');
    driversList.innerHTML = '';
    team.drivers.forEach(d => {
        const stats = GAME_DATA.drivers[d];
        const li = document.createElement('li');
        li.className = 'driver-list-item';
        li.innerHTML = `
            <span class="driver-name">${d}</span>
            <span class="driver-ovr">OVR ${Math.round((stats.skill + stats.consistency + stats.pace + stats.defense)/4)}</span>
        `;
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

    const parts =[
        { key: 'engine', name: 'Engine' },
        { key: 'chassis', name: 'Chassis' },
        { key: 'wings', name: 'Wings' },
        { key: 'underfloor', name: 'Underfloor' },
        { key: 'suspension', name: 'Suspension' }
    ];

    parts.forEach(part => {
        const currentLevel = gameState.playerCar[part.key];
        const cost = Math.floor(5000000 * Math.pow(1.1, currentLevel - 70));

        const div = document.createElement('div');
        div.className = 'upgrade-item panel';

        const canAfford = gameState.budget >= cost;
        const isMaxed = currentLevel >= 100;

        const infoDiv = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.style.margin = "0";
        h4.textContent = part.name;
        
        const lvlSpan = document.createElement('span');
        lvlSpan.className = 'upgrade-level';
        lvlSpan.textContent = ` Lvl ${currentLevel}`;
        h4.appendChild(lvlSpan);
        infoDiv.appendChild(h4);

        const pCost = document.createElement('p');
        pCost.className = 'upgrade-cost';
        pCost.textContent = `Cost to Upgrade: $${cost.toLocaleString()}`;
        infoDiv.appendChild(pCost);
        div.appendChild(infoDiv);

        const upgradeBtn = document.createElement('button');
        upgradeBtn.className = 'btn btn-sm';
        upgradeBtn.disabled = !canAfford || isMaxed;
        upgradeBtn.textContent = isMaxed ? 'Max Level' : 'Upgrade';
        div.appendChild(upgradeBtn);

        if (canAfford && !isMaxed) {
            upgradeBtn.addEventListener('click', () => {
                gameState.budget -= cost;
                gameState.playerCar[part.key] += 1;
                updateUpgradesMenu();
            });
        }

        list.appendChild(div);
    });
}

async function startRaceWeekend() {
    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);
    if (!team) return;

    const currentRace = GAME_DATA.calendar[gameState.currentRoundIndex];
    if (currentRace) {
        await playSessionIntro(currentRace.name, "Free Practice");
    }

    gameState.practiceData.attemptsLeft = 3;
    gameState.practiceData.driver1.ideal =[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];
    gameState.practiceData.driver2.ideal =[Math.floor(Math.random() * 100), Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)];

    gameState.practiceData.driver1.current = [50, 50, 50];
    gameState.practiceData.driver2.current = [50, 50, 50];

    gameState.practiceData.driver1.satisfaction = calculateSatisfaction(gameState.practiceData.driver1.ideal, gameState.practiceData.driver1.current);
    gameState.practiceData.driver2.satisfaction = calculateSatisfaction(gameState.practiceData.driver2.ideal, gameState.practiceData.driver2.current);

    document.getElementById('driver1-name').innerText = team.drivers[0];
    document.getElementById('driver2-name').innerText = team.drivers[1];
    document.getElementById('practice-feedback').innerHTML = '';

    updatePracticeUI();
    showScreen('practice-session');
}

function calculateSatisfaction(ideal, current) {
    let diff = 0;
    for (let i = 0; i < 3; i++) {
        diff += Math.abs(ideal[i] - current[i]);
    }
    const satisfaction = Math.max(0, Math.floor(100 - (diff / 300) * 100));
    return satisfaction;
}

function updatePracticeUI() {
    const practiceTimeLeft = gameState.practiceData.attemptsLeft * 20;
    const timeDisplay = document.getElementById('practice-time-left');
    if (timeDisplay) timeDisplay.innerText = practiceTimeLeft;

    document.getElementById('driver1-satisfaction').innerText = gameState.practiceData.driver1.satisfaction;
    document.getElementById('driver2-satisfaction').innerText = gameState.practiceData.driver2.satisfaction;
    
    document.getElementById('d1-sat-bar').style.width = gameState.practiceData.driver1.satisfaction + '%';
    document.getElementById('d2-sat-bar').style.width = gameState.practiceData.driver2.satisfaction + '%';

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

    const d1Current =[
        parseInt(document.getElementById('d1-wings').value),
        parseInt(document.getElementById('d1-suspension').value),
        parseInt(document.getElementById('d1-rideheight').value)
    ];
    const d2Current =[
        parseInt(document.getElementById('d2-wings').value),
        parseInt(document.getElementById('d2-suspension').value),
        parseInt(document.getElementById('d2-rideheight').value)
    ];

    gameState.practiceData.driver1.current = d1Current;
    gameState.practiceData.driver2.current = d2Current;

    gameState.practiceData.driver1.satisfaction = calculateSatisfaction(gameState.practiceData.driver1.ideal, d1Current);
    gameState.practiceData.driver2.satisfaction = calculateSatisfaction(gameState.practiceData.driver2.ideal, d2Current);

    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);

    const generateHint = (ideal, current) => {
        let hints = [];
        const labels = ['Wings', 'Susp.', 'Ride H'];
        for (let i = 0; i < 3; i++) {
            if (current[i] < ideal[i] - 10) hints.push(`Increase ${labels[i]}`);
            else if (current[i] > ideal[i] + 10) hints.push(`Decrease ${labels[i]}`);
            else hints.push(`Perfect ${labels[i]}`);
        }
        return hints.join(' | ');
    };

    const fb = document.getElementById('practice-feedback');
    fb.innerHTML = '';
    
    const p1 = document.createElement('div');
    p1.className = 'feedback-line';
    p1.innerHTML = `<span class="feedback-driver">${team.drivers[0]}</span> ${generateHint(gameState.practiceData.driver1.ideal, d1Current)}`;
    fb.appendChild(p1);
    
    const p2 = document.createElement('div');
    p2.className = 'feedback-line';
    p2.innerHTML = `<span class="feedback-driver">${team.drivers[1]}</span> ${generateHint(gameState.practiceData.driver2.ideal, d2Current)}`;
    fb.appendChild(p2);

    updatePracticeUI();
}

async function simulateQualifying() {
    const currentRace = GAME_DATA.calendar[gameState.currentRoundIndex];
    if (currentRace) {
        await playSessionIntro(currentRace.name, "Qualifying");
    }

    const results =[];
    const baseLapTime = 80;

    GAME_DATA.teams.forEach(team => {
        team.drivers.forEach((driverName, index) => {
            const driverStats = GAME_DATA.drivers[driverName];
            const isPlayer = team.id === gameState.teamId;
            let carRating = 0;
            let satisfaction = 80; 

            if (isPlayer) {
                carRating = (gameState.playerCar.engine + gameState.playerCar.chassis + gameState.playerCar.wings + gameState.playerCar.underfloor + gameState.playerCar.suspension) / 5;
                satisfaction = index === 0 ? gameState.practiceData.driver1.satisfaction : gameState.practiceData.driver2.satisfaction;
            } else {
                carRating = (team.engine + team.chassis + team.wings + team.underfloor + team.suspension) / 5;
            }

            const driverRating = (driverStats.skill + driverStats.pace) / 2;
            let lapTime = baseLapTime - ((carRating / 100) * 5) - ((driverRating / 100) * 3) - ((satisfaction / 100) * 1) + (Math.random() * 1);

            results.push({
                driver: driverName,
                team: team.name,
                color: team.color,
                time: lapTime,
                isPlayer: isPlayer,
                driverIndex: index
            });
        });
    });

    results.sort((a, b) => a.time - b.time);
    gameState.raceGrid = results;

    const gridContainer = document.getElementById('qualifying-grid');
    gridContainer.innerHTML = '';

    results.forEach((res, i) => {
        const div = document.createElement('div');
        div.className = 'qualifying-row';
        div.style.borderLeftColor = res.color;

        const minutes = Math.floor(res.time / 60);
        const seconds = (res.time % 60).toFixed(3).padStart(6, '0');

        const leftSpan = document.createElement('span');
        leftSpan.className = 'quali-driver';
        const strong = document.createElement('strong');
        strong.textContent = `${i + 1}.`;
        leftSpan.appendChild(strong);
        leftSpan.appendChild(document.createTextNode(` ${res.driver} `));
        
        const teamSpan = document.createElement('span');
        teamSpan.className = 'quali-team';
        teamSpan.textContent = `(${res.team})`;
        leftSpan.appendChild(teamSpan);

        div.appendChild(leftSpan);

        const rightSpan = document.createElement('span');
        rightSpan.className = 'quali-time';
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

async function startRace() {
    const currentRace = GAME_DATA.calendar[gameState.currentRoundIndex];
    if (currentRace) {
        await playSessionIntro(currentRace.name, "Race");
    }

    const team = GAME_DATA.teams.find(t => t.id === gameState.teamId);

    document.getElementById('race-track-name').innerText = currentRace.name;
    document.getElementById('race-total-laps').innerText = currentRace.laps;
    document.getElementById('race-current-lap').innerText = 1;
    document.getElementById('race-post-race').style.display = 'none';

    document.getElementById('race-d1-name').innerText = team.drivers[0];
    document.getElementById('race-d2-name').innerText = team.drivers[1];

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
                totalTime: index * 0.2,
                lastLapTime: 85,
                interval: 0,
                tire: { type: tireType, life: 100 },
                pace: paceStrategy,
                carRating: carRating,
                driverStats: driverStats,
                pittingNextLap: false,
                pitTimer: 0,
                pitStops: 0,
                finishedRace: false,
                totalDistance: 0 - (index * 0.002), // Start spread out
                lapHistory:[]
            };
        })
    };

    updateRaceUI();
    showScreen('race-session');

    isRacePaused = false;
    document.getElementById('btn-speed-pause').innerText = "Pause";
    updateSpeedControlsUI();

    lastRaceTickTime = performance.now();
    if (raceLoopInterval) cancelAnimationFrame(raceLoopInterval);
    raceLoopInterval = requestAnimationFrame(raceTick);
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

function raceTick(timestamp) {
    if (!lastRaceTickTime) lastRaceTickTime = timestamp;
    const deltaMs = timestamp - lastRaceTickTime;
    lastRaceTickTime = timestamp;

    if (isRacePaused || !gameState.raceData || gameState.raceData.finished) {
        raceLoopInterval = requestAnimationFrame(raceTick);
        return;
    }

    // How much of a lap passes per real-world millisecond
    // Base lap time for leader is roughly 85s
    const lapProgressPerMs = 1 / raceSpeed;
    const stepProgress = lapProgressPerMs * deltaMs;

    let anyCarFinished = false;

    gameState.raceData.cars.forEach(car => {
        if (car.finishedRace) return;

        if (car.isPlayer) {
            const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
            car.pace = document.getElementById(`race-${prefix}-pace`).value;
        }

        if (car.pitTimer > 0) {
            // Car is in the pits, don't progress totalDistance
            car.pitTimer -= deltaMs;
            car.totalTime += (deltaMs / raceSpeed) * 85; // Roughly scale real time back to sim time
            if (car.pitTimer <= 0) {
                car.tire.life = 100;
                car.pitStops++;
                car.pitTimer = 0;

                if (car.isPlayer) {
                    const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
                    car.tire.type = document.getElementById(`race-${prefix}-next-tire`).value;
                    car.pittingNextLap = false;
                    document.getElementById(`btn-d${car.driverIndex + 1}-pit`).innerText = "BOX THIS LAP";
                    document.getElementById(`btn-d${car.driverIndex + 1}-pit`).disabled = false;
                } else {
                    car.tire.type = ['medium', 'hard'][Math.floor(Math.random() * 2)];
                    car.pittingNextLap = false;
                }
            }
            return;
        }

        let tirePaceMod = 0;
        let tireDegRate = 0;

        switch (car.tire.type) {
            case 'soft': tirePaceMod = -1.5; tireDegRate = 2.0; break;
            case 'medium': tirePaceMod = 0; tireDegRate = 1.0; break;
            case 'hard': tirePaceMod = 1.0; tireDegRate = 0.5; break;
        }

        let stratPaceMod = 0;
        let stratDegMod = 1.0;
        switch (car.pace) {
            case 'aggressive': stratPaceMod = -0.8; stratDegMod = 1.5; break;
            case 'neutral': stratPaceMod = 0; stratDegMod = 1.0; break;
            case 'conserve': stratPaceMod = 0.5; stratDegMod = 0.5; break;
        }

        // Apply continuous tire degradation
        car.tire.life -= (tireDegRate * stratDegMod * stepProgress);
        if (car.tire.life < 0) car.tire.life = 0;

        let lifePenalty = 0;
        if (car.tire.life < 30) lifePenalty = (30 - car.tire.life) * 0.1;

        const driverSkillMod = ((100 - car.driverStats.pace) * 0.1);
        const carMod = ((100 - car.carRating) * 0.1);
        const rng = (Math.random() - 0.5) * 1.5;

        const currentLapPace = gameState.raceData.baseLapTime + tirePaceMod + stratPaceMod + lifePenalty + driverSkillMod + carMod + rng;
        car.lastLapTime = currentLapPace;

        // How much distance (in laps) this car covers in this step
        // A slower lap pace means less distance covered per ms
        const baseSpeedRatio = 85 / currentLapPace;
        const distanceDelta = stepProgress * baseSpeedRatio;

        const previousLapFloor = Math.floor(car.totalDistance);
        car.totalDistance += distanceDelta;
        car.totalTime += (distanceDelta * currentLapPace);

        // Log lap history when crossing the line
        if (Math.floor(car.totalDistance) > previousLapFloor && Math.floor(car.totalDistance) > 0) {
            car.lapHistory.push({ lap: Math.floor(car.totalDistance), time: car.lastLapTime, tire: car.tire.type });

            if (car.pittingNextLap) {
                // Approximate 22 seconds lost in pits. 22s / 85s * raceSpeed
                car.pitTimer = (22 / 85) * raceSpeed;
            } else if (!car.isPlayer && car.tire.life < 20 && car.totalDistance < gameState.raceData.totalLaps - 2) {
                car.pittingNextLap = true;
            }
        }

        if (car.totalDistance >= gameState.raceData.totalLaps) {
            car.finishedRace = true;
            anyCarFinished = true;
        }
    });

    // Sort cars by distance covered (descending)
    gameState.raceData.cars.sort((a, b) => {
        if (a.finishedRace && !b.finishedRace) return -1;
        if (!a.finishedRace && b.finishedRace) return 1;
        return b.totalDistance - a.totalDistance;
    });

    const leader = gameState.raceData.cars[0];
    gameState.raceData.lap = Math.floor(leader.totalDistance) + 1;

    gameState.raceData.cars.forEach((car, index) => {
        car.pos = index + 1;
        // Interval is roughly the distance gap * leader's expected lap time
        if (index === 0) {
            car.interval = 0;
        } else {
            const distanceGap = leader.totalDistance - car.totalDistance;
            car.interval = distanceGap * leader.lastLapTime;
        }
    });

    updateRaceUI();

    if (gameState.raceData.cars.every(c => c.finishedRace)) {
        gameState.raceData.finished = true;
        document.getElementById('race-post-race').style.display = 'flex';
        awardPoints();
    } else {
        raceLoopInterval = requestAnimationFrame(raceTick);
    }
}

function updateRaceUI() {
    if (!gameState.raceData) return;

    document.getElementById('race-current-lap').innerText = Math.min(gameState.raceData.lap, gameState.raceData.totalLaps);

    const board = document.getElementById('race-leaderboard');
    board.innerHTML = '';

    const svgTrack = document.getElementById('race-track-svg');
    Array.from(svgTrack.querySelectorAll('g.car-dot')).forEach(el => el.remove());

    gameState.raceData.cars.forEach(car => {
        const cx = 300, cy = 75, rx = 250, ry = 60;

        let lapProgress = car.totalDistance % 1;
        if (car.totalDistance < 0) {
            lapProgress = 1 + (car.totalDistance % 1);
        }

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
            circle.style.filter = 'drop-shadow(0 0 5px rgba(255,255,255,0.8))';
        } else {
            circle.setAttribute('stroke', '#000');
            circle.setAttribute('stroke-width', '1');
        }

        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', dotX);
        text.setAttribute('y', dotY + 3);
        text.setAttribute('font-size', '8');
        text.setAttribute('fill', '#fff');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-weight', 'bold');
        text.setAttribute('font-family', 'sans-serif');

        const nameParts = car.driver.split(' ');
        let initials = nameParts[0][0];
        if (nameParts.length > 1) initials += nameParts[nameParts.length - 1][0];
        text.textContent = initials.toUpperCase();

        dotGroup.appendChild(circle);
        dotGroup.appendChild(text);
        svgTrack.appendChild(dotGroup);

        const div = document.createElement('div');
        div.className = 'race-row' + (car.isPlayer ? ' is-player' : '');
        div.style.borderLeftColor = car.color;
        div.style.borderLeftWidth = '4px';
        div.style.borderLeftStyle = 'solid';

        const formatTime = (t) => {
            const m = Math.floor(t / 60);
            const s = (t % 60).toFixed(3).padStart(6, '0');
            return `${m}:${s}`;
        };

        const intervalStr = car.pos === 1 ? 'Leader' : `+${car.interval.toFixed(3)}`;
        const tireLetter = car.tire.type.charAt(0).toUpperCase();

        const posDiv = document.createElement('div');
        posDiv.className = 'cell-pos';
        posDiv.textContent = car.pos;
        div.appendChild(posDiv);

        const driverDiv = document.createElement('div');
        driverDiv.className = 'cell-driver';
        driverDiv.textContent = car.driver;
        div.appendChild(driverDiv);

        const intervalDiv = document.createElement('div');
        intervalDiv.className = 'cell-interval';
        intervalDiv.textContent = intervalStr;
        div.appendChild(intervalDiv);

        const lapTimeDiv = document.createElement('div');
        lapTimeDiv.className = 'cell-laptime';
        if (car.pitTimer > 0) {
            lapTimeDiv.textContent = "IN PIT";
            lapTimeDiv.style.color = "var(--f1-red)";
        } else {
            lapTimeDiv.textContent = formatTime(car.lastLapTime);
        }
        div.appendChild(lapTimeDiv);

        const tireDiv = document.createElement('div');
        tireDiv.className = `cell-tire tire-${car.tire.type}`;
        tireDiv.textContent = `${tireLetter} (${Math.round(car.tire.life)}%)`;
        div.appendChild(tireDiv);
        
        board.appendChild(div);

        if (car.isPlayer) {
            const prefix = car.driverIndex === 0 ? 'd1' : 'd2';
            document.getElementById(`race-${prefix}-pos`).innerText = car.pos;
            document.getElementById(`race-${prefix}-tire-life`).innerText = Math.round(car.tire.life);
            document.getElementById(`race-${prefix}-tire-type`).innerText = tireLetter;
            document.getElementById(`d${car.driverIndex + 1}-tire-icon`).className = `tire-icon tire-${car.tire.type}`;
            document.getElementById(`d${car.driverIndex + 1}-tire-bar`).className = `tire-bar bg-${car.tire.type}`;
            document.getElementById(`d${car.driverIndex + 1}-tire-bar`).style.width = Math.round(car.tire.life) + '%';
        }
    });
}

function awardPoints() {
    const pointsSys =[25, 18, 15, 12, 10, 8, 6, 4, 2, 1];

    gameState.raceData.cars.forEach(car => {
        if (car.pos <= 10) {
            const pts = pointsSys[car.pos - 1];
            gameState.championship.drivers[car.driver] += pts;

            const team = GAME_DATA.teams.find(t => t.name === car.team);
            if(team) {
                gameState.championship.constructors[team.id] += pts;
            }
        }

        if (car.isPlayer) {
            const prize = Math.max(0, (20 - car.pos) * 500000);
            gameState.budget += prize;
        }
    });
}

function endWeekend() {
    gameState.currentRoundIndex++;
    if (gameState.currentRoundIndex >= GAME_DATA.calendar.length) {
        alert("Season Finished!");
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