'use strict'


const numCpu = Math.floor(Math.random() * 6) + 1;
console.log(numCpu);

const numUser = Math.floor(Math.random() * 6) + 1;
console.log(numUser);


//condizionali
if(numCpu > numUser){
    console.log("CPU win");
}else if (numCpu === numUser){
    console.log("odd");
}else{
    console.log( "user win");
}
