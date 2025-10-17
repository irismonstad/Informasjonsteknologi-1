let navn1 = document.getElementById("navn1").value;
let navn2 = document.getElementById("navn2").value;
let differanse = Math.abs(navn1.length - navn2.length)

const beregnknapp = document.getElementById("beregnknapp");
beregnknapp.addEventListener("click", beregn);

function beregn(navn1, navn2, differanse) {
    let output = `Ett sted heter ${navn1} og et annet heter ${navn2}. Den første plassen består av ${navn1.length} tegn og den andre består av ${navn2.length} tegn. Differansen mellom disse to er ${differanse}`
    document.getElementById("utskrift").innerText = output;
}

