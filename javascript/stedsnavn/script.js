function getNavn1(){
    return document.getElementById("navn1").value;
}

function getNavn2(){
    return document.getElementById("navn2").value;
}

const beregnknapp = document.getElementById("beregnknapp");
beregnknapp.addEventListener("click", beregn);

document.getElementById("utskrift").innerText = "Du har ikke sjekket en differanse enda.";

function beregn() {
    let navn1 = getNavn1()
    let navn2 = getNavn2()
    let differanse = Math.abs(navn1.length - navn2.length)
    output = `Ett sted heter ${navn1} og et annet heter ${navn2}. Den første plassen består av ${navn1.length} tegn og den andre består av ${navn2.length} tegn. Differansen mellom disse to er ${differanse}`
    if (navn1.length > 0 && navn2.length > 0){
        document.getElementById("utskrift").innerText = output;
    } else{
        document.getElementById("utskrift").innerText = "Du har ingenting i ett eller flere av feltene.";
    }
}
