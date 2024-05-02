Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.


//generiamo un num random da 1 a 6 per cpu e per l'user

const numCpu = Math.floor(Math.random() * 6) + 1;
const numUser = Math.floor(Math.random() * 6) + 1;


//condizionali 

if(numCpu > numUser)
    console log("vince cpu")

else if( numCpu === numUser)
console log ("pari")

else
console.log("user win")