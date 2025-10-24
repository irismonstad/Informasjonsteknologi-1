document.getElementById("utskrift").innerText = "Du har ikke sjekket en differanse enda.";

// Henter verdiene til input-feltene
function getNavn1(){
    return document.getElementById("navn1").value;
}

function getNavn2(){
    return document.getElementById("navn2").value;
}

function capitalise(word) {
    // Trekker ut første bokstav og gjør den stor, gjør resten av ordet til små bokstaver
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
}

// Lar brukeren beregne differansen ved å trykke på "beregn"-knappen
const beregnknapp = document.getElementById("beregnknapp");
beregnknapp.addEventListener("click", beregn);

// Lar bruker sjekke differanse ved å bruke enter-tasten
window.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        // "Trykker" på knappen når brukeren taster enter på tastaturet
        document.getElementById("beregnknapp").click();
    }
});


function beregn() {
    // Henter nåværende verdier fra input-felt
    let navn1 = getNavn1()
    let navn2 = getNavn2()

    // Regner ut differanse 
    let differanse = Math.abs(navn1.length - navn2.length)

    // Lager setningen som skal skrives ut, samtidig som man justerer formattering på navn med capitalise()
    output = `Ett sted heter ${capitalise(navn1)} og et annet heter ${capitalise(navn2)}. Den første plassen består av ${navn1.length} tegn og den andre består av ${navn2.length} tegn. Differansen mellom disse to er ${differanse}`

    // Hvis både felt 1 og 2 har innhold, beregn differansen. Gi ellers en feilmelding. 
    if (navn1.length > 0 && navn2.length > 0){
        document.getElementById("utskrift").innerText = output;
    } else{
        document.getElementById("utskrift").innerText = "Du har ingenting i ett eller flere av feltene.";
    }
}
