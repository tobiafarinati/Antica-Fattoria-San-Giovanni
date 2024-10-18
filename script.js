// Imposta il tuo Sheet ID e la chiave API
const sheetID = '1ykQ5NBqD2L8e7FMbsYgcUnaefLhFzIpCsVfyDKJ74Tk';
const apiKey = 'AIzaSyCjH1qTmgmJiHjLl7cFooLY1PkU0lYtPpE';
const range = 'feed!A1:B9'; // Cambia il range a seconda del tuo foglio

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
            const [imageUrl, description] = row; // Estrai dati dalla riga

            // Crea un elemento della griglia
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            // Verifica se imageUrl e description sono definiti e non vuoti
            if (imageUrl && description) {
                // Inserisci immagine e testo
                gridItem.innerHTML =
                    `<img src="${imageUrl}">
                    <h1>${description}</h1>`;
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



//HEADER HEIGHT and drop down
// Function to set the top margin, height of .container-divide, and position of dropdown content dynamically
function setContainerHeight() {
    const header = document.querySelector('.fixed-header');
    const headerHeight = header.offsetHeight;
    const additionalMargin = 1; // Adjust this based on what you find
    const containerDivide = document.querySelector('.main-content');
    const dropdownContent = document.querySelector('.dropdown-content, .dropdown-content-index');

    // Set the margin-top to start after the header
    containerDivide.style.marginTop = `${headerHeight}px`;

    dropdownContent.style.marginTop = `${headerHeight - additionalMargin}px`;

        // Log values to check in console
        console.log('Header Height:', headerHeight);
        console.log('Dropdown Margin Top:', dropdownContent.style.marginTop);
        console.log('Dropdown computed margin:', getComputedStyle(dropdownContent).marginTop);


    // Set the height to fill the remaining viewport
    containerDivide.style.height = `calc(100vh - ${headerHeight}px - 8px)`; // Subtract 8px for any extra padding/margin
}

// Set height and dropdown alignment when the page loads
window.addEventListener('load', setContainerHeight);

// Recalculate height and dropdown alignment when the window is resized
window.addEventListener('resize', setContainerHeight);




// DROPDOWN FOR ALL DEVICES
document.addEventListener("DOMContentLoaded", function() {
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content, .dropdown-content-index');

    dropdown.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevents click event from bubbling up to the document
        // Toggle the dropdown visibility
        dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
    });

    // Close the dropdown if clicking outside
    document.addEventListener('click', function() {
        dropdownContent.style.display = 'none'; // Hide the dropdown
    });
});

  


// https://docs.google.com/spreadsheets/d/1ykQ5NBqD2L8e7FMbsYgcUnaefLhFzIpCsVfyDKJ74Tk/edit?gid=0#gid=0