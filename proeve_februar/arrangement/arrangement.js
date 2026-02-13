const skjema = document.getElementById('skjema');
const godkjenteKoder = ["BILLIG", "RABATT"];

skjema.addEventListener('submit', function(event){
    event.preventDefault();

    document.querySelector("#output").innerHTML = "";
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const email = document.getElementById('email').value;
    // const passord = document.getElementById('passord').value;
    const rabattkode = document.getElementById('rabattkode').value;
    if (godkjenteKoder.includes(rabattkode)) {
        let tekst = document.createElement("p");
        tekst.innerText = `Takk for din registrering, ${fornavn}! Du har oppgitt en rabattkode og får en rabattert pris`;
        document.querySelector("#output").appendChild(tekst);
        // console.log(`Takk for din registrering, ${fornavn}! Du har oppgitt en rabattkode og får en rabattert pris`);
    }
    else {
        let tekst = document.createElement("p");
        tekst.innerText = `Takk for din registrering, ${fornavn}!`;
        document.querySelector("#output").appendChild(tekst);
        // console.log(`Takk for din registrering, ${fornavn}!`);
    }
   
});

