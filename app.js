let player1 = "ex";
let player2 = "square";

let individualElements = document.querySelectorAll('[data-111]');
let wholeElement = document.getElementsByClassName('HowTo11');
let buttonElement = document.getElementsByClassName('HowTo1Button');



function start(){
    let player1Turn = false;
    individualElements.forEach(individual => {
        individual.classList.remove(player1)
        individual.classList.remove(player2)
        individual.removeEventListener('click')
    })
}


/*let Winning = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [1, 4, 8]
    [2, 4, 6]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
]*/