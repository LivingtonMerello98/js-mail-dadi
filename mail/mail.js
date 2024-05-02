'use strict'

console.log("sono correttamente collegato");

//richiesta mail prompt
const userMail = prompt("inserisci la tua mail")

//creazione array-list con email

const mailArray = ['mario.rossi82@gmail.com','enzo.fergola99@gmail.com','enrico.rossi10@hotmail.it','giorgio.messina72@gmail.it']

//iteriamo tra gli elementi dell'array
for (let i = 0; i < mailArray.length; i++){
    //condizioni per verificare se all'interno dell'array si trova la userMail inserita
    if( userMail === mailArray[i]){
        console.log("la tua mail è registrata, puoi accedere")
    }else{
        console.log("la tua mail non è registrata, non puoi accedere")
    }
}