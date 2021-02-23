let randomNum = Math.round(Math.random());
let coinFlip = randomNum;
let choice = prompt(`Select heads or tails`);
let flip;

if (coinFlip === 1) {
    flip = 'heads';
    if (flip === choice) {
        alert(`The flip was heads and you chose heads...you win!`);
    } else {
        alert(`The flip was heads and you chose tails...you lose!`);
    }      
} else {
    flip = 'tails';
    if (flip === choice) {
        alert(`The flip was tails and you chose tails...you win!`);
    } else {
        alert(`The flip was tails and you chose heads...you lose!`);
    }
}

