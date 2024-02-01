var crabBlock = document.getElementById("crabCount");
var moneyBlock = document.getElementById("moneyCount");
var spaceBlock = document.getElementById("spaceCount");
var crabCostBlock = document.getElementById("crabCost");
var spaceCostBlock = document.getElementById("spaceCost");
var consoleBlock = document.getElementById("consoleBlock");
var crabs = 0
var crabCost = 5;
var spaceCost = 25;
var space = 10;
var spacePurchases = 0;
var money = 0;
var incomeRate = 0;


setInterval(updatePage, 1000);

function updatePage() {
    addMoney(incomeRate);
}

function consoleLog(log) {
    let newText = "<p>" + log + "</p>";
    consoleBlock.innerHTML = newText + consoleBlock.innerHTML;
}

function addMoney(amt) {
    money += amt;
    moneyBlock.innerHTML = "money: $" + money + " (" + incomeRate + "/second)";
}

function makeMoney() {
    incomeRate++;
}

function feedCrabs() {
    if (money < crabs) {
        consoleLog("not enough money!");
    } else {
        money -= crabs;
    }
}

function makeCrab() {
    if(crabs < space) {
        if(money > crabCost - 1) {
            addMoney(-crabCost);
            crabs++;
            crabCost += Math.floor(Math.pow(1.0001, crabCost));
            crabBlock.innerHTML = "crabs: " + crabs + "/" + space;
            crabCostBlock.innerHTML = "($" + crabCost + ")";
        } else {
            consoleLog("not enough money!");
        }
    } else {
        consoleLog("not enough space!");
    }
}

function addSpace() {
    if (money > spaceCost - 1) {
        addMoney(-spaceCost);
        space++;
        spaceCost += Math.floor(Math.pow(1.0001, spaceCost));
        crabBlock.innerHTML = "crabs: " + crabs + "/" + space;
        spaceCostBlock.innerHTML = "($" + spaceCost + ")";
    } else {
        consoleLog("not enough money!");
    }
}
