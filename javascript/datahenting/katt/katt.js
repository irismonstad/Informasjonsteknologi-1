async function hentKatt() {
    const resultat = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await resultat.json();
    console.log(data);

    document.querySelector("#kattebilde").innerHTML = "";
    let kattebilde = document.createElement("img");
    kattebilde.src = data[0].url;
    document.querySelector("#kattebilde").appendChild(kattebilde);
}

document.addEventListener("keydown", hentKatt);
hentKatt();