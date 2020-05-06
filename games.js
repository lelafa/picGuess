document.addEventListener("DOMContentLoaded", () => {
    
    const cardArray = [
        {
            name:"1",
            img: "img/_RXkHxdp4xQ.jpg"
        },
        {
            name:"1",
            img: "img/_RXkHxdp4xQ.jpg"
        },
        {
            name:"3",
            img: "img/1nFh4ipqlD0.jpg"
        },
        {
            name:"3",
            img: "img/1nFh4ipqlD0.jpg"
        },
        {
            name:"5",
            img: "img/2JHtOXJMc9M.jpg"
        },
        {   
            name:"5",
            img: "img/2JHtOXJMc9M.jpg"
        },
        {
            name:"7",
            img: "img/3C4AmvRTp4s.jpg"
        },
        {
            name:"7",
            img: "img/3C4AmvRTp4s.jpg"
        },
        {
            name:"9",
            img: "img/Ys8I3MJGwIc.jpg"
        },
        {
            name:"9",
            img: "img/Ys8I3MJGwIc.jpg"
        },
        {
            name:"11",
            img: "img/DqWboThSYXo.jpg"
        },
        {
            name:"11",
            img: "img/DqWboThSYXo.jpg"
        }
        
    ]

cardArray.sort(() => 0.5 - Math.random());

const grid = document.querySelector(".grid")
const resultDisplay = document.querySelector("#result")
var cardsChosen = [];
var cardsChosenId = [];
var cardsWon = [];

function createBoard() {
    for(let i = 0; i < cardArray.length; i++){
        var card = document.createElement("img")
        card.setAttribute("src", "img/colorspace.jpg")
        card.setAttribute("data-id", i)
        card.addEventListener("click", flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    var cards = document.querySelectorAll("img")
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "img/whitespace.jpg")
        cards[optionTwoId].setAttribute("src", "img/whitespace.jpg")
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute("src", "img/colorspace.jpg")
        cards[optionTwoId].setAttribute("src", "img/colorspace.jpg")
        alert("Sorry, try again!")
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if (cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congradulations! You found them all!"
    }
}

function flipCard() {
    var cardId = this.getAttribute("data-id")
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute("src", cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
    }
}
createBoard();
})