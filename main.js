let gameData = {
    cookies: 0,

    cursorCost: 25,
    cursorOwned: 0,
    cursorEffect: 1,
   
    grandmaCost: 100,
    grandmaOwned: 0,
    grandmaEffect: 2,

    farmCost: 300,
    farmOwned: 0,
    farmEffect: 3,

    mineCost: 400,
    mineOwned: 0,
    mineEffect: 4,

    factoryCost: 500,
    factoryOwned: 0,
    factoryEffect: 5,

    lastTime : Date.now(),
};
    
function cookiePlus() {
    gameData.cookies++;
};

function buyCursor() {
    if (gameData.cookies >= gameData.cursorCost) {
        gameData.cookies -= gameData.cursorCost;
        gameData.cursorCost *= 1.3;
        gameData.cursorOwned += 1;
    }
};

function buyGrandma() {
    if (gameData.cookies >= gameData.grandmaCost) {
        gameData.cookies -= gameData.grandmaCost;
        gameData.grandmaCost *= 1.3;
        gameData.grandmaOwned += 1;
    }
};

function buyFarm() {
    if (gameData.cookies >= gameData.farmCost) {
        gameData.cookies -= gameData.farmCost;
        gameData.farmCost *= 1.3;
        gameData.farmOwned += 1;
    }
};

function buyMine() {
    if (gameData.cookies >= gameData.mineCost) {
        gameData.cookies -= gameData.mineCost;
        gameData.mineCost *= 1.3;
        gameData.mineOwned += 1;
    }
};

function buyFactory() {
    if (gameData.cookies >= gameData.factoryCost) {
        gameData.cookies -= gameData.factoryCost;
        gameData.factoryCost *= 1.3;
        gameData.factoryOwned += 1;
    }
};

// save
let saveGameLoop = window.setInterval(function() {
    localStorage.setItem("gameSave", JSON.stringify(gameData))
}, 1000);

// load
let saveGame = JSON.parse(localStorage.getItem("gameSave"))
if (saveGame !== null) {
  gameData = saveGame;
};

let gameLoop = window.setInterval(function() {
    //we'll use gameData.lastTime to see how long it's been since the last game refresh, and give you an appropriate amount of progress
    const timeToAdd = Date.now() - gameData.lastTime; //this is in ms, not seconds, so we need another variable to hold that <1000 number
    gameData.lastTime = Date.now();
    addCookieProduction(timeToAdd);
}, 100);

let uiLoop = window.setInterval(function() {
    //we'll run a separate loop to update all the functions of the UI - don't worry about optimizing it until it becomes a problem (it won't)
    document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
    document.getElementById("cps").innerHTML = "(+" + calculateCPS() + " cookies per second)";
    document.getElementById("cursor").innerHTML = "🖱️: " + Math.floor(gameData.cursorOwned);
    document.getElementById("buy-cursor").innerHTML = "Buy cursor: " + Math.floor(gameData.cursorCost) + " 🍪";
    document.getElementById("grandma").innerHTML = "👵: " + Math.floor(gameData.grandmaOwned);
    document.getElementById("buy-grandma").innerHTML = "Buy grandma: " + Math.floor(gameData.grandmaCost) + " 🍪";
    document.getElementById("farm").innerHTML = "🚜: " + Math.floor(gameData.farmOwned);
    document.getElementById("buy-farm").innerHTML = "Buy farm: " + Math.floor(gameData.farmCost) + " 🍪";
    document.getElementById("mine").innerHTML = "⛏️: " + Math.floor(gameData.mineOwned);
    document.getElementById("buy-mine").innerHTML = "Buy mine: " + Math.floor(gameData.mineCost) + " 🍪";
    document.getElementById("factory").innerHTML = "🏭: " + Math.floor(gameData.factoryOwned);
    document.getElementById("buy-factory").innerHTML = "Buy factory: " + Math.floor(gameData.factoryCost) + " 🍪";
}, 100);

function addCookieProduction(ms) {
    gameData.cookies += ms/1000 * gameData.cursorOwned * gameData.cursorEffect;
    gameData.cookies += ms/1000 * gameData.grandmaOwned * gameData.grandmaEffect;
    gameData.cookies += ms/1000 * gameData.farmOwned * gameData.farmEffect;
    gameData.cookies += ms/1000 * gameData.mineOwned * gameData.mineEffect;
    gameData.cookies += ms/1000 * gameData.factoryOwned * gameData.factoryEffect;
}

function calculateCPS() {
    let cps = gameData.cursorOwned * gameData.cursorEffect;
    cps += gameData.grandmaOwned * gameData.grandmaEffect
    cps += gameData.farmOwned * gameData.farmEffect
    cps += gameData.mineOwned * gameData.mineEffect
    cps += gameData.factoryOwned * gameData.factoryEffect;
    return cps.toFixed(1);
}

// delete
function clearProgress() {
    localStorage.removeItem("gameSave");
    location.reload();
}
