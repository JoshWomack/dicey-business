class Die {
    constructor() {
        let that = this;
        this.dieDiv = document.createElement('div');
        this.dieDiv.className = 'die';
        this.value = 0;
        this.roll();
        diceContainer.appendChild(this.dieDiv);
        this.dieDiv.addEventListener('click', () => {
            this.roll();
            upDateDiceSum();
        }); 
        this.indexNum = allDice.length;
        this.dieDiv.addEventListener('dblclick', () => {
            this.selfDestruct();
            upDateDiceSum();
        })        
    }

    roll() {
        this.value = Math.floor(Math.random() * 6 + 1);
        this.dieDiv.textContent = this.value;
    }

    selfDestruct () {
        this.dieDiv.outerHTML = '';
        allDice = allDice.filter(die => die.indexNum != this.indexNum);
    }
}

function upDateDiceSum() {
    let diceSum = 0;
    allDice.forEach(die => diceSum += die.value);
    diceSumP.textContent = diceSum;
}

let addDieButton = document.getElementById('mk-die-button');
let diceContainer = document.getElementById('dice-container');
let rollDiceButton = document.getElementById('roll-dice');
let diceSumP = document.getElementById("dice-sum");
let allDice = [];

addDieButton.addEventListener('click', function() {
    let dice = new Die();
    allDice.push(dice);
    upDateDiceSum();
})

rollDiceButton.addEventListener('click', function() {
    allDice.forEach(die =>  die.roll());
    upDateDiceSum();
});


