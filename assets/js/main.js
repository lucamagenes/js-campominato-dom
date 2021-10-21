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

    containerEl.innerHTML = ''

    cellGenerator(userLevel)

})

/* function generateBombs(params) {
    const bombs = [];
    //ciclo 16
    while (bombs.length < 16) {
        //genera un numero casuale tra un min e un max
        const randomNumber = getRandomNumber(1, x)
        //verifica se il numero è gia incluso se non lo è aggiungilo
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
        }

    }
    return
}

const bombs = generateBombs() */

//math random
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}





//funzione per generare le celle
function cellGenerator(number) {

    var number
    var x, y;

    //condizione per la selezione del livello
    if (number == 1) {
        x = 100;
        y = 10;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_due')
        containerEl.classList.remove('cont_tre')
        containerEl.classList.add('cont_uno')
        console.log(containerEl.classList);
    } else if (number == 2) {
        x = 81;
        y = 9;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_uno')
        containerEl.classList.remove('cont_tre')
        containerEl.classList.add('cont_due')
        console.log(containerEl.classList);

    } else if (number == 3) {
        x = 49;
        y = 7;
        //aggiungere classe in base agli elementi generati
        containerEl.classList.remove('cont_uno')
        containerEl.classList.remove('cont_due')
        containerEl.classList.add('cont_tre')
        console.log(containerEl.classList);

    }


    //generare gli elementi con un loop
    for (let i = 1; i <= x; i++) {

        //creare gli elementi da generare
        let cellEl = document.createElement('div');
        //attribuire una classe all'elemto creato
        cellEl.classList.add('grid_cell');
        cellEl.style.cssText = `width: calc(100% / ${y}; height: calc(100% / ${y})`
        //assegnare il valore ${i} ad ogni elemento
        cellEl.insertAdjacentHTML('beforeend', `<p class="numeri"> ${i} </p>`)
        //appendere gli elementi generati all'elemento selezionato dalla DOM 
        containerEl.append(cellEl);



        //aggiungere un eventListener agli elementi
        cellEl.addEventListener('click', function () {
            this.style.backgroundColor = '#03a9f4'
        })
    }
}

