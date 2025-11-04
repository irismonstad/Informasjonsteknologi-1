// alle bildene er hentet fra pixabay.com
let bilder = ["bilder/chinese-lanterns-7591296_1280.jpg", "bilder/lantern-1600769_1280.jpg", "bilder/lantern-6894507_1280.jpg"]

let framknapp = document.getElementById("fram")
let bakknapp = document.getElementById("tilbake")

// representer hvilket bilde i arrayet (bilder) man er på
let index = 0

// bytter bilde når man trykker på frem/bak knapp
// bruker arrow-funksjon for å kunne kalle funksjonen byttBilde med parametre (retning)
framknapp.addEventListener("click", () => byttBilde("fram"));
bakknapp.addEventListener("click", () => byttBilde("bak"));

// setter bilde før brukeren har trykket på en knapp
document.getElementById("bilde").src = bilder[index]

function byttBilde(retning){
    // retning frem: 
    // hvis indeks er siste bildet (lengde - 1), gjør indeks til 0
    // ellers: legg til 1 på indeks
    if (retning === "fram"){
        if (index === bilder.length - 1){
            index = 0
        }
        else {
            index += 1
        }
    }
    // retning bak:
    // hvis indeks er første bildet (0), gjør indeks til siste bildet (lengde - 1)
    // ellers: trekk fra 1 på indeks
    else {
        if (index === 0){
            index = bilder.length - 1
        }
        else {
            index -= 1
        }
    }
    // oppdater bilde med ny indeks
    document.getElementById("bilde").src = bilder[index]
}