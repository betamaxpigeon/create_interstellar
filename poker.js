const randomNumber = (min, max) => Math.floor(Math.random() * max) + min;
const card = (rank, suit) => {
    switch(suit) {
        case 1: suit = 'Spades'; break;
        case 2: suit = 'Clubs'; break;
        case 3: suit = 'Diamonds'; break;
        case 4: suit = 'Hearts'; break;
    }
    switch(rank) {
        case 11: rank = 'Jack'; break;
        case 12: rank = 'Queen'; break;
        case 13: rank = 'King'; break;
        case 14: rank = 'Ace'; break;
    }
    return `${rank} of ${suit}`;
};
const hand = (size) => {
    for (let i = size; i > 0; i--) {
        console.log(card(randomNumber(2, 13), randomNumber(1, 4)));
    }
};
hand(52);