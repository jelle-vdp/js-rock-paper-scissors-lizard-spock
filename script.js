const options = [
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock"
];

const yourChoiseEl = document.querySelector(".your-choise__output");
const choiseButtons = document.querySelectorAll(".your-choise__button-wrapper button");
const playGameButton = document.querySelector(".play-game");
const outputYourChoiseEl = document.querySelector(".game-result__you .game-result__choise");
const outputOpponentChoiseEl = document.querySelector(".game-result__opponent .game-result__choise");
const choisesEl = document.querySelector(".game-result")
const gameWinnerEl = document.querySelector(".game-winner");

let yourChoise = false;

const generateOpponentMove = () => options[Math.floor(Math.random() * options.length)];

const generateResult = (you, opponent) => {
    switch (you) {
        case "Rock":
            switch (opponent) {
                case "Rock":
                    gameWinnerEl.innerText = "It's a draw!"
                break;
                case "Paper":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Scissors":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Lizard":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Spock":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
            }
        break;
        case "Paper":
            switch (opponent) {
                case "Rock":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Paper":
                    gameWinnerEl.innerText = "It's a draw!"
                break;
                case "Scissors":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Lizard":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Spock":
                    gameWinnerEl.innerText = "You win!"
                break;
            }
        break;
        case "Scissors":
            switch (opponent) {
                case "Rock":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Paper":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Scissors":
                    gameWinnerEl.innerText = "It's a draw!"
                break;
                case "Lizard":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Spock":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
            }
        break;
        case "Lizard":
            switch (opponent) {
                case "Rock":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Paper":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Scissors":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Lizard":
                    gameWinnerEl.innerText = "It's a draw!"
                break;
                case "Spock":
                    gameWinnerEl.innerText = "You win!"
                break;
            }
        break;
        case "Spock":
            switch (opponent) {
                case "Rock":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Paper":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Scissors":
                    gameWinnerEl.innerText = "You win!"
                break;
                case "Lizard":
                    gameWinnerEl.innerText = "Your opponent wins!"
                break;
                case "Spock":
                    gameWinnerEl.innerText = "It's a draw!"
                break;
            }
        break;
    }
};

choiseButtons.forEach(button => {
    button.addEventListener("click", () => {
        yourChoiseEl.innerText = button.innerText;
        yourChoise = button.innerText;
    });
});

playGameButton.addEventListener("click", () => {
    if (!yourChoise) {
        window.alert("Make a choise");
    } else {
        choisesEl.style.display = "flex";
        outputYourChoiseEl.innerText = yourChoise;
        let opponentsChoise = generateOpponentMove();
        outputOpponentChoiseEl.innerText = opponentsChoise;
        generateResult(yourChoise, opponentsChoise);
    }
});