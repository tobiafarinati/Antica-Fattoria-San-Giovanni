// Imposta il tuo Sheet ID e la chiave API
const sheetID = '1ykQ5NBqD2L8e7FMbsYgcUnaefLhFzIpCsVfyDKJ74Tk';
const apiKey = 'AIzaSyCjH1qTmgmJiHjLl7cFooLY1PkU0lYtPpE';
const range = 'feed!A1:A7'; // Cambia il range a seconda del tuo foglio

// URL per accedere ai dati
const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/${range}?key=${apiKey}`;

// Funzione per caricare i dati da Google Sheets
async function loadGoogleSheetData() {
    try {
        const response = await fetch(apiUrl, { mode: 'cors' });
        const data = await response.json();
        const rows = data.values;

        // Seleziona il container della griglia
        const gridContainer = document.querySelector('.grid-container'); // Assicurati che la tua griglia abbia questa classe

        // Loop per aggiungere ogni item della griglia
        rows.forEach(row => {
            const [imageUrl] = row; // Estrai dati dalla riga

            // const [imageUrl, description] = row; // Estrai dati dalla riga

            // Crea un elemento della griglia
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            // Verifica se imageUrl e description sono definiti e non vuoti
            if (imageUrl) {
                // if (imageUrl && description) {
                // Inserisci immagine e testo
                gridItem.innerHTML =
                    `<img src="${imageUrl}">`;

                    // `<img src="${imageUrl}">
                    // <h1>${description}</h1>`;
            } else {
                // Se la riga è vuota, lascia il gridItem vuoto
                gridItem.innerHTML = ''; // Questo è opzionale, poiché è già vuoto per default
            }

            // Aggiungi l'elemento al container della griglia
            gridContainer.appendChild(gridItem);
        });
    } catch (error) {
        console.error('Errore nel caricamento dei dati di Google Sheets', error);
    }
}


// Carica i dati quando la pagina viene caricata
document.addEventListener('DOMContentLoaded', loadGoogleSheetData);



// https://docs.google.com/spreadsheets/d/1ykQ5NBqD2L8e7FMbsYgcUnaefLhFzIpCsVfyDKJ74Tk/edit?gid=0#gid=0
