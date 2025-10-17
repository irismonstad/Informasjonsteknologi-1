// Variabler

// let antallLiv = 9;

const PI = Math.PI;

let arrayBilder = ["bilde1.jpg", "bilde2.jpg", "bilde3.jpg"];


//Popup som spør om noe. Må deklarere variabel før den brukes. 
// let antallLiv = prompt("Hvor mange liv har en katt?");


// Skrive ut

// console.log("katter har " + antallLiv + " liv");
// console.log(`Katter har ${Math.round(antallLiv*PI)} liv!`);

console.table(arrayBilder);

console.warn(PI);

// alert("mjau");

//Endre h1 med JS
//Putter du plus før =-tegn vil den legge JS til opprinnelig tekst

// document.getElementById("utskrift").innerText = `Katter burde ha ${Math.round(antallLiv*PI)} liv!`;

let brukerAlder = prompt("hvor gammel er du?");
// document.getElementById("paragraf").innerText = `Du er ${brukerAlder} år gammel!`;

let årstall = new Date().getFullYear();
console.log(årstall);

document.getElementById("paragraf").innerText = `du var født i ${årstall-brukerAlder}!`