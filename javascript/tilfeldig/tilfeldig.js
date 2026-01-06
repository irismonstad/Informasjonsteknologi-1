// Oppgave: Skriv et enkelt program som velger 2 personer fra en array med 10 navn. Bygg dette gradvis opp, uten noe hjelp fra KI. Få en og en "ting" til å fungere før du går videre.

const NAVN = ["Dexter", "Debra", "Rita", "Maria", "James", "Harrison", "Frank", "Arthur", "Brian", "Laura"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
};

function getName(amount) {
    for (let i = 0; i < amount; i++) {
        let index = getRandomInt(NAVN.length);
        console.log(NAVN[index]);
        NAVN.splice(index, 1);
    }
}

getName(5);