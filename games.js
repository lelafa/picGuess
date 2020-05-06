document.addEventListener("DOMContentLoaded", () => {
    
    const cardArray = [
        {
            name:"1",
            img: "img/yg9SbWHHGNU.jpg",
            in: "1"
        },
        {
            name:"1",
            img: "img/yg9SbWHHGNU.jpg",
            in: "2"
        },
        {
            name:"3",
            img: "img/1nFh4ipqlD0.jpg",
            in: "3"
        },
        {
            name:"3",
            img: "img/1nFh4ipqlD0.jpg",
            in: "4"
        },
        {
            name:"5",
            img: "img/2JHtOXJMc9M.jpg",
            in: "5"
        },
        {   
            name:"5",
            img: "img/2JHtOXJMc9M.jpg",
            in: "6"
        },
        {
            name:"7",
            img: "img/3C4AmvRTp4s.jpg",
            in: "7"
        },
        {
            name:"7",
            img: "img/3C4AmvRTp4s.jpg",
            in: "8"
        },
        {
            name:"9",
            img: "img/Ys8I3MJGwIc.jpg",
            in: "9"
        },
        {
            name:"9",
            img: "img/Ys8I3MJGwIc.jpg",
            in: "10"
        },
        {
            name:"11",
            img: "img/DqWboThSYXo.jpg",
            in: "11"
        },
        {
            name:"11",
            img: "img/DqWboThSYXo.jpg",
            in: "12"
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
    if (cardsChosen[0] === cardsChosen[1]){
        alert("You found a match!")
        cards[optionOneId].setAttribute("src", "img/whitespace.jpg")
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].setAttribute("src", "img/whitespace.jpg")
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
        cards[optionOneId].removeEventListener('click', flipCard)
    } else if (cardsChosen[0] != cardsChosen[1]){
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
        setTimeout(checkForMatch, 10)
    }
}
createBoard();
})