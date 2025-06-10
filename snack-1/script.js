/*
Snack 1
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.
*/

// Creare un array di oggetti:

const bikes = [
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    {
        brandName: 'Bianchi',
        weight: 30
    },
    {
        brandName: 'Colnago',
        weight: 45
    },
    {
        brandName: 'Pinarello',
        weight: 52
    },
    {
        brandName: 'Trek',
        weight: 27
    },
    {
        brandName: 'Specialized',
        weight: 35
    }
];

console.log(bikes);

// Stampare a schermo la bici con peso minore.

const printBikeEl = document.getElementById('bike-print');

bikes.sort(function(a, b) {
    return a.weight - b.weight;
});

printBikeEl.innerText = `La bici più leggera è la ${bikes[0]['brandName']} con un peso di ${bikes[0]['weight']} kg!`;