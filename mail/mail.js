'use strict'

console.log("sono correttamente collegato");

//richiesta mail prompt
const userMail = prompt("inserisci la tua mail")

//creazione array-list con email

const mailArray = ['mario.rossi82@gmail.com','enzo.fergola99@gmail.com','enrico.rossi10@hotmail.it','giorgio.messina72@gmail.it']

//definiamo variabile esterna
let mailFound = false;

//iteriamo tra gli elementi dell'array
for (let i = 0; i < mailArray.length; i++){

    //condizioni
    if(userMail === mailArray[i]){
        //diventa true
        mailFound = true;
        //interrompiamo il ciclo
        break;
    }

}

//condizionali per comunicare l'esito
if(mailFound){
    console.log("la tua mail è autorizzata, puoi accedere")
    alert("la tua mail è autorizzata, puoi accedere")
}else{
    console.log("la tua email non è autorizzata, non puoi accedere")
    alert("la tua mail non è autorizzata, non puoi accedere")
}