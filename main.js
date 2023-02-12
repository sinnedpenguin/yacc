let gameData = {
    cookies: 0,
    cps: 0,

    cursorCost: 25,
    cursorOwned: 0,
    cursorEffect: 0.1,
   
    grandmaCost: 100,
    grandmaOwned: 0,
    grandmaEffect: 0.2,

    farmCost: 300,
    farmOwned: 0,
    farmEffect: 0.3,

    mineCost: 400,
    mineOwned: 0,
    mineEffect: 0.4,

    factoryCost: 500,
    factoryOwned: 0,
    factoryEffect: 0.5,
};
    
function cookiePlus() {
    gameData.cookies++;
    document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
};

function buyCursor() {
    if (gameData.cookies >= gameData.cursorCost) {
        gameData.cookies -= gameData.cursorCost;
        gameData.cursorCost *= 1.3;
        gameData.cursorOwned += 1;
        gameData.cps += 1;
        document.getElementById("cursor").innerHTML = "🖱️: " + Math.floor(gameData.cursorOwned);
        document.getElementById("buy-cursor").innerHTML = "Buy cursor: " + Math.floor(gameData.cursorCost) + " 🍪";
        document.getElementById("cps").innerHTML = "(+" + Math.floor(gameData.cps) + " cookies per second)";
        window.setInterval(function() {
            gameData.cookies += gameData.cursorEffect;
            document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
        }, 100);
    }
};

function buyGrandma() {
    if (gameData.cookies >= gameData.grandmaCost) {
        gameData.cookies -= gameData.grandmaCost;
        gameData.grandmaCost *= 1.3;
        gameData.grandmaOwned += 1;
        gameData.cps += 2;
        document.getElementById("grandma").innerHTML = "👵: " + Math.floor(gameData.grandmaOwned);
        document.getElementById("buy-grandma").innerHTML = "Buy grandma: " + Math.floor(gameData.grandmaCost) + " 🍪";
        document.getElementById("cps").innerHTML = "(+" + Math.floor(gameData.cps) + " cookies per second)";
        window.setInterval(function() {
            gameData.cookies += gameData.grandmaEffect;
            document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
        }, 100);
    }
};

function buyFarm() {
    if (gameData.cookies >= gameData.farmCost) {
        gameData.cookies -= gameData.farmCost;
        gameData.farmCost *= 1.3;
        gameData.farmOwned += 1;
        gameData.cps += 3;
        document.getElementById("farm").innerHTML = "🚜: " + Math.floor(gameData.farmOwned);
        document.getElementById("buy-farm").innerHTML = "Buy farm: " + Math.floor(gameData.farmCost) + " 🍪";
        document.getElementById("cps").innerHTML = "(+" + Math.floor(gameData.cps) + " cookies per second)";
        window.setInterval(function() {
            gameData.cookies += gameData.farmEffect;
            document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
        }, 100);
    }
};

function buyMine() {
    if (gameData.cookies >= gameData.mineCost) {
        gameData.cookies -= gameData.mineCost;
        gameData.mineCost *= 1.3;
        gameData.mineOwned += 1;
        gameData.cps += 4;
        document.getElementById("mine").innerHTML = "⛏️: " + Math.floor(gameData.mineOwned);
        document.getElementById("buy-mine").innerHTML = "Buy mine: " + Math.floor(gameData.mineCost) + " 🍪";
        document.getElementById("cps").innerHTML = "(+" + Math.floor(gameData.cps) + " cookies per second)";
        window.setInterval(function() {
            gameData.cookies += gameData.mineEffect;
            document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
        }, 100);
    }
};

function buyFactory() {
    if (gameData.cookies >= gameData.factoryCost) {
        gameData.cookies -= gameData.factoryCost;
        gameData.factoryCost *= 1.3;
        gameData.factoryOwned += 1;
        gameData.cps += 5;
        document.getElementById("factory").innerHTML = "🏭: " + Math.floor(gameData.factoryOwned);
        document.getElementById("buy-factory").innerHTML = "Buy factory: " + Math.floor(gameData.factoryCost) + " 🍪";
        document.getElementById("cps").innerHTML = "(+" + Math.floor(gameData.cps) + " cookies per second)";
        window.setInterval(function() {
            gameData.cookies += gameData.factoryEffect;
            document.getElementById("cookies").innerHTML = "Cookies: " +  Math.floor(gameData.cookies);
        }, 100);
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