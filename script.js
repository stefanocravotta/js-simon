

/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 5 secondi.
Dopo 5 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/


/* 
- generatore di numeri casuali
- stampare i 5 numeri in pagina
- generare il timer di scomprsa dei 5 numeri e i 5 prompt di richiesta numero
- confrontare quali e quanti sono stati indovinati
*/ 


const randomNumber = (min, max) =>  Math.floor(Math.random() * (max - min +1) + min );
const promptUtente = () => parseInt(prompt('Inserisci i numeri'));

const main = document.querySelector('.container');
const timeOut = 5;
const listaNumeriRandom = [];
const sceltaNumeriUtente = [];
const numeriIndovinati = [];
const playGame = document.querySelector('button');
/* const resetGame = document.getElementById('reset'); */
const titolo = document.querySelector('h1');
playGame.addEventListener('click',startGame);
/* resetGame.addEventListener('click',reset); */




function startGame(){
    
    playGame.classList.add('hide');
    titolo.classList.add('hide');
    stampaNumeri();
    timerScomparsa();
    console.log(listaNumeriRandom);
    console.log(sceltaNumeriUtente);

}

function stampaNumeri(){
    
    for(let i = 1; i <= 5; i++){

        const containerNumero = document.createElement('div');
        containerNumero.className = 'box';
        const numero = randomNumber(1,100);
        containerNumero.append(numero);
        main.append(containerNumero);
        listaNumeriRandom.push(numero);
    };
}

function timerScomparsa(){

    setTimeout(function(){
        main.classList.add('hide');
        sceltaUtente();
    },timeOut * 1000 )
}



function sceltaUtente(){

    const outputStr = document.getElementById('output');
    for( let i = 0; i < listaNumeriRandom.length; i++){
       const scelta = promptUtente();
       sceltaNumeriUtente.push(scelta);
       if(isNaN(scelta)){
           alert('Inserisci un numero')
       }
       if(sceltaNumeriUtente[i] === listaNumeriRandom[i]){;
        numeriIndovinati.push(sceltaNumeriUtente[i]);
        }
    }

    outputStr.append(`Hai indovinato ${numeriIndovinati.length} numeri, che sono "${numeriIndovinati}"`);
    /* const reset = document.getElementById('reset');
    reset.classList.remove('hide'); */
    console.log(sceltaNumeriUtente);
    console.log(numeriIndovinati);
}

/* function reset(){
    
    startGame();

} */