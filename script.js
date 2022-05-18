const options = [
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock"
];

const yourChoiceEl = document.querySelector(".your-choice__output");
const choiceButtons = document.querySelectorAll(".your-choice__button-wrapper button");
const playGameButton = document.querySelector(".play-game");
const outputYourChoiceEl = document.querySelector(".game-result__you .game-result__choice");
const outputOpponentChoiceEl = document.querySelector(".game-result__opponent .game-result__choice");
const choicesEl = document.querySelector(".game-result")
const gameWinnerEl = document.querySelector(".game-winner");

let yourChoice = false;

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

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        yourChoiceEl.innerText = button.innerText;
        yourChoice = button.innerText;
    });
});

playGameButton.addEventListener("click", () => {
    if (!yourChoice) {
        window.alert("Make a choice");
    } else {
        choicesEl.style.display = "flex";
        outputYourChoiceEl.innerText = yourChoice;
        let opponentsChoice = generateOpponentMove();
        outputOpponentChoiceEl.innerText = opponentsChoice;
        generateResult(yourChoice, opponentsChoice);
    }
});