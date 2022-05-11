
// WELCOME TO THE BLACKJACK GAME!
// The base of this game was made in Scrimba as apart of the Front End Developer Course
// I added many features such as the dynamic buttons and scoring system, as well as the dealer score and betting 

// Player Object
let player = {
    name: "Player",
    chips: 200,
    bet: 10
}

// Variables
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

// Elements
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let betEl = document.getElementById("bet-el")

// Buttons
let initializeButton = document.getElementById("initialize-btn")
let hitButton = document.getElementById("hit-btn")


// Functions
function renderPlayer () {
playerEl.textContent = player.name + ": $" + player.chips
betEl.textContent = player.bet
}

function increaseBet(){
    player.bet += 10
    renderPlayer ()
}

function decreaseBet(){
    player.bet -= 10
    renderPlayer ()
}

// Want to render player info on the screen before the game starts 
renderPlayer()

// Random Card Generator
function getRandomCard() {
    let randomNumber = Math.floor( Math.random()*13 ) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}



function startGame() {
    initializeButton.innerHTML =  `Goodluck! &rarr; `
    hitButton.innerHTML = `HIT ME`
    initializeButton.disabled = true;

    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BLACKJACK!"
        hasBlackJack = true
        endOfGame()

    } else {
        message = "BUST! You're out of the game"
        isAlive = false
        endOfGame() 
       
    }
    messageEl.textContent = message

    
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()     
    }
}

function score () {

    if (hasBlackJack===true) {
        // cardsEl.textContent = "CLICKED!"; used for testing if score button works
        player['chips'] += player.bet

    } else if (isAlive===false) {
        player['chips'] -= player.bet
    }

        renderPlayer()
    }


function endOfGame () {
    hitButton.innerHTML = `&larr;`
    initializeButton.innerHTML =  `RESET GAME`
    initializeButton.disabled = false;
    score()
}

// Once end of game is called and you hit reset, the game SHOULD not immediately start
// Instead there should be a start button which is disabled, until you place your bet using the bet button 














// NOTES SECTION FOR HELP WRITING THIS CODE


//     document.getElementById("Button").disabled = true;
// Enabling a html button

// document.getElementById("Button").disabled = false;

// Left Arrow:  &larr;
// Right Arrow: &rarr;



function placeBet() {
    cardsEl.textContent = "CLICKED!";
}