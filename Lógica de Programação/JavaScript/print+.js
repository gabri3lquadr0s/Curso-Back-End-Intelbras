let numero = prompt(`Escreva um número`)
var array = []


function plus(num){
    for(let i = 0; i < num; i++){
       array.push(`+`)
    }
    console.log(array)
}

plus(numero)