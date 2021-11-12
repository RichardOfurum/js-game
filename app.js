const cards = document.querySelectorAll(".card");
// console.log(cards);

var isFlipped = false;
var firstCard;
var secondCard;

cards.forEach((card) => card.addEventListener("click", flip));

function flip(){
    console.log(this);
    this.classList.add("flip");
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
    }else{
        secondCard = this;
        console.log(firstCard);
        console.log(secondCard);
        checkIt();
    }
}

function checkIt(){
    // console.log("checking...");
    if (firstCard.dataset.image === secondCard.dataset.image) {
        // console.log("you won");
        sucees();
    }else{
        // fail();
        setTimeout(fail, 1000)
    }
}

function sucees(){
    // console.log("you won");
    // firstCard.removeEvenListener("click", flip);
    firstCard.removeEventListener("click", flip);
    secondCard.removeEventListener("click", flip);
    reset();
}

function fail(){
    // console.log("You failed");
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    reset();
}

function reset(){
     isFlipped = false;
     firstCard = null;
     secondCard = null;
}

//TODO: shuffle

(function shuffle(){
    cards.forEach((card) =>{
        var index = Math.floor(Math.random() * 16);
        card.style.order = index;
    })
})();

