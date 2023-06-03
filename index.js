
let firstCard = randomCard()
let secondCard = randomCard()
let cards = [firstCard,secondCard]
let sum = 0
let hasBlackJack = false
let isAlive = false
let message=""

let messageEl = document.getElementById("message-el")

let cardsEl = document.getElementById("card-el")

let sumEl = document.getElementById("sum-el")

let player = {
   name :"Owolabi ",
   chips: 0 
}




let playerEl = document.getElementById("playerName")


function randomCard(){
    let randomNumber = Math.floor(Math.random()* 12)
    switch(randomNumber){
        case 10:
            return 10;
            break;
        case 1:
            return 11;
            break;
        default:
            return randomNumber;
    }
    // if (randomNumber > 10){
    //     return 10
    // }else if (randomNumber === 1){
    //     return 11
    // }else {
    //     return randomNumber
    // }
}

function startGame(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard 
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards:" 
    for (let i =0; i < cards.length; i++){
        cardsEl.textContent += cards [i] + " "
    }
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20 ){
        message = "Do you want draw a new card?"
       // hasBlackJack =false
    }else if (sum ===21){
        message = "wohoo! you got blackjack!"
        alert("Congrat, You just won $100")
        hasBlackJack = true
    }else {
        message = "You are out of the game!"
        alert(" OooP, You lost -$100")
        isAlive = false
    }
    messageEl.textContent =  message
    if (sum < 21){
        player.chips = 200
       
    }else if (sum === 21) {
        player.chips = 300
       
    }else if (sum > 21) {
        player.chips = 100
    }
    playerEl.textContent = player.name + ": $" +player.chips 
}

function newGameBtn() {
    if (isAlive === true && hasBlackJack === false) {
        let card = randomCard()
        sum += card
        cards.push(card)
        renderGame()
    }  
    if (sum < 21){
        player.chips = 200
        
    }else if (sum === 21) {
        player.chips = 300
        player.chips +=100
        
    }else if (sum > 21) {
        player.chips = 100
    }
    playerEl.textContent = player.name + ": $" +player.chips
    player.chips = 0 
    
}
 