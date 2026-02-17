async function getBooks(book) {
    const resultat = await fetch(`https://anapioficeandfire.com/api/books/${book}`);
    const data = await resultat.json();

    // Lager element (boken) og bruker innerHTML for å lage en liste for hver bok
    let bookToDisplay = document.createElement('p');
    bookToDisplay.innerHTML=`<h3>${data.name}</h1><ul><li>Release date :${data.released}</li> <li>Page count: ${data.numberOfPages}</li> </ul>`;
    // Legger boken til i books-diven i DOM
    document.querySelector("#books").appendChild(bookToDisplay);

    // return data
};

// function displayBooks() {
//     for (let i = 0; i <12; i++) {
//         const data = getBooks(i);
//         let bookToDisplay = document.createElement('p');
//         bookToDisplay.innerHTML=`<h3>${data.name}</h1><ul><li>Release date :${data.released}</li> <li>Page count: ${data.numberOfPages}</li> </ul>`;
//         document.querySelector("#books").appendChild(bookToDisplay);
//     }
// }
// displayBooks();

// Jeg kom fram med testing til at det er 12 bøker å hente, dermed bruker jeg en for-løkke til å itererere gjennom alle bøkene. 
for (let i = 0; i < 12; i++) {
    getBooks(i);
}


