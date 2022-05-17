
const cards = ["img/as_copas.png", "img/2copas.png", "img/3copas.png", "img/4copas.png",
    "img/5copas.png", "img/6copas.png", "img/7copas.png", "img/8copas.png",
    "img/9copas.png", "img/10copas.png", "img/valete_copas.png", "img/rainha_copas.png", "img/rei_copas.png",
    "img/as_espadas.png", "img/2espadas.png", "img/3espadas.png", "img/4espadas.png",
    "img/5espadas.png", "img/6espadas.png", "img/7espadas.png", "img/8espadas.png",
    "img/9espadas.png", "img/10espadas.png", "img/valete_espadas.png", "img/rainha_espadas.png", "img/rei_espadas.png",
    "img/as_ouro.png", "img/2ouro.png", "img/3ouro.png", "img/4ouro.png",
    "img/5ouro.png", "img/6ouro.png", "img/7ouro.png", "img/8ouro.png",
    "img/9ouro.png", "img/10ouro.png", "img/valete_ouro.png", "img/rainha_ouro.png", "img/rei_ouro.png",
    "img/as_paus.png", "img/2paus.png", "img/3paus.png", "img/4paus.png",
    "img/5paus.png", "img/6paus.png", "img/7paus.png", "img/8paus.png",
    "img/9paus.png", "img/10paus.png", "img/valete_paus.png", "img/rainha_paus.png", "img/rei_paus.png"];

var cardsCopy

/*makes a copy of all items in the array of the original 
cards into copy cards and returns a random card for each id*/
function showCards() {
    cardsCopy = new Array(52);
    for (i = 0; i < cardsCopy.length; i++) {
        cardsCopy[i] = cards[i];
    }

    document.getElementById("card1").src = returnRandomCard(0);
    document.getElementById("card2").src = returnRandomCard(1);
    document.getElementById("card3").src = returnRandomCard(2);
    document.getElementById("card4").src = returnRandomCard(3);
    document.getElementById("card5").src = returnRandomCard(4);


}


/*Return a random card from copy cards and delete the chosen card 
from the copy cards array*/
function returnRandomCard(n) {
    let chosenCard = cardsCopy[Math.floor(Math.random() * (51 - n))]

    console.log(cardsCopy.length)
    console.log(chosenCard)
    cardsCopy.splice(cardsCopy.indexOf(chosenCard), 1)


    return chosenCard;
}