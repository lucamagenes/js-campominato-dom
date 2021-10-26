/*
L'utente indica un livello di difficoltà
in base al quale viene generata una griglia di gioco quadrata,
in cui ogni cella contiene un numero tra quelli compresi in un range:

- con difficoltà 1 => tra 1 e 100
- con difficoltà 2 => tra 1 e 81
- con difficoltà 3 => tra 1 e 49


Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/


//selezionare l'elemento della DOM 
const containerEl = document.querySelector('.container');

const livelloSelect = document.getElementById('livello');
const buttonInput = document.getElementById('button');


let bombs = []


buttonInput.addEventListener('click', function () {

    const userLevel = parseInt(livelloSelect.value);

    /* let numeroCelle;

    if (userLevel == 1) {
        console.log('facile');
        numeroCelle = 100;
    } else if (userLevel == 2) {
        console.log('medio');
        numeroCelle = 81;
    } else if (userLevel == 3) {
        console.log('difficile');
        numeroCelle = 49;
    } */

    //pulire il container dopo ogni partita
    containerEl.innerHTML = '';

    //array legato alla funzione per generare le celle di gioco
    const [numberCell, numberLevel] = cellGenerator(userLevel);
    console.log(numberCell);

    //variabile legata alla funzione che genera le bombe
    bombs = generateBombs(numberCell);
    console.log(bombs);

    //selezione di tutte le caselle/celle di gioco
    const caselle = document.getElementsByClassName('grid_cell')


    //ciclo per la lunghezza totale delle celle
    for (let i = 0; i < caselle.length; i++) {
        const casella = caselle[i];

        casella.addEventListener('click', handleClick)
        /*  const casellaNumero = parseInt(this.innerText)
         console.log(casellaNumero);

         if (bombsFind(casellaNumero, bombs)) {
             //se è una bomba colorala di rosso
             this.style.backgroundColor = 'red'
             //GAME OVER
             console.log('GAME OVER');
             // mostra tuttte le bombe
         } else {
             //colora di azzurro
             this.style.backgroundColor = 'cornflowerblue'
             //continua a giocare
             console.log('continua a giocare');
         } */

    }



})

function handleClick() {
    const casellaNumero = parseInt(this.innerText)
    console.log(casellaNumero);

    if (bombsFind(casellaNumero, bombs)) {
        //se è una bomba colorala di rosso
        this.style.backgroundColor = 'red'
        //GAME OVER
        console.log('GAME OVER');
        // mostra tuttte le bombe
    } else {
        //colora di azzurro
        this.style.backgroundColor = 'cornflowerblue'
        //continua a giocare
        console.log('continua a giocare');
    }
}



//verificare se la cella è una bomba o no 
function bombsFind(numberCell, bombs) {
    if (bombs.includes(numberCell)) {
        return true
        console.log('game over');
    } return false
}



//generare un array di 16 bombe in modo casuale
function generateBombs(numberCell) {
    //array vuoto
    const bombs = [];
    //ciclo array bombs di 16 elementi
    while (bombs.length < 16) {
        //genera un numero casuale tra un min e un max
        const randomNumber = getRandomNumber(1, numberCell)
        //verifica se il numero è gia incluso se non lo è aggiungilo
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
        }
    }
    return bombs;
}

//const bombs = generateBombs()

//math random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





//funzione per generare le celle
function cellGenerator(numberLevel) {

    var numberLevel
    var numberCell;

    //condizione per la selezione del livello
    if (numberLevel == 1) {
        numberCell = 100;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_due')
        containerEl.classList.remove('cont_tre')
        containerEl.classList.add('cont_uno')
    } else if (numberLevel == 2) {
        numberCell = 81;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_uno')
        containerEl.classList.remove('cont_tre')
        containerEl.classList.add('cont_due')

    } else if (numberLevel == 3) {
        numberCell = 49;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_uno')
        containerEl.classList.remove('cont_due')
        containerEl.classList.add('cont_tre')

    }


    //generare gli elementi con un loop
    for (let i = 1; i <= numberCell; i++) {

        //creare gli elementi da generare
        var cellEl = document.createElement('div');
        //attribuire una classe all'elemto creato
        cellEl.classList.add('grid_cell');
        //assegnare il valore ${i} ad ogni elemento
        cellEl.insertAdjacentHTML('beforeend', `<p class="numeri"> ${i} </p>`)
        //appendere gli elementi generati all'elemento selezionato dalla DOM 
        containerEl.append(cellEl);



        /*  //aggiungere un eventListener agli elementi
         cellEl.addEventListener('click', function () {
             this.style.backgroundColor = '#03a9f4'
         }) */
    }


    return [numberCell, numberLevel];
}