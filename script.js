

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

let risultatoRandom = randomNumber(1,100);

console.log(risultatoRandom);