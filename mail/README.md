Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

//richiesta della mail dell'utente tramite prompt o imput
const userMail = prompt("inserisci la tua mail");

----inserire "mario.rossi82@gmail.com" per testare demo----

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

        --definiamo una variabile esterna e poniamola in false

        let mailFound = flase;

        if( userMail === mailArray[i]){
            //se la mail viene trovata mailfound diventa true
            mailFound=true;
            //e interrompiamo il ciclo
            break;
        }

        //condizionali per comunicare l'esito
        if(mailFound = true){
            console.log("la tua mail è autoriazzata puoi accedere);
        }else{
            console.log("la tua mail non è aiutorizzata, non puoi accedere);
        }


