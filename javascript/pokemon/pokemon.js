function sendToFunction(event) {
    event.preventDefault();
    document.getElementById("output").innerHTML = "";
    const name = document.getElementById("name").value;
    const abilities = document.getElementById("ability").value;
    getPokemon(name, abilities)
}

async function getPokemon(name, abilities) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();

    let outputname = document.createElement('h1');
    outputname.innerText = data.forms[0].name;
    document.getElementById("output").appendChild(outputname);

    if (abilities === "yes") {
        let abilityoutput = document.createElement("ul");
        for (let i = 0; i < data.abilities.length; i++) {
            let ability = data.abilities[i].ability.name;
            abilityoutput.innerHTML += `<li>${ability}</li>`;
        }
        document.getElementById("output").appendChild(abilityoutput);
    }
    else {
        console.log("no!")
    }

}

document.getElementById("form").addEventListener('submit', sendToFunction);
