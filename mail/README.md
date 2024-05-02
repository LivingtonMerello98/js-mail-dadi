Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

//richiesta della mail dell'utente tramite prompt o imput
const userMail = prompt("inserisci la tua mail");

//creazione di un array con lista mail:
const mailArray = []

//inseriamo le seguenti email.(senza metodi, creiamo una lsita fittizia di email già salvate)--//

mario.rossi82@gmail.com
enzo.fergola99@gmail.com
enrico.rossi10@hotmail.it
giorgio.messina72@gmail.it

    const mailArray = ['mario.rossi82@gmail.com','enzo.fergola99@gmail.com','enrico.rossi10@hotmail.it','giorgio.messina72@gmail.it']

//controlliamo se la mail inserita tramite input o prompt si trova già all interno della nostra lista

        ---iterare tra gli elementi con un cliclo for---
        for(let i = userMail; i < mailArray.lenght; i++){}

        ---se tra gli elementi dell array si trova la mail dell'utente la ricerca si interrompe e si restituisce true--
        if( userMail === mailArray[i]){
            console.log('La tua e-mail è stata trovata tra quelle autorizzate!');
        }else{
            console.log('la tua mail non risulta registrata')
        }


