async function hentVits() {
    const resultat = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await resultat.json();
    console.log(data);

    document.querySelector("#vits").innerHTML = "";
    let vits = document.createElement("p");
    vits.innerText = data.value;
    document.querySelector("#vits").appendChild(vits);
}

hentVits();

document.addEventListener("keypress", hentVits);