function simboloMais(quantidade){
    return Array(quantidade).fill('+').join('')
}
console.log(simboloMais(4));

//.fill repete '+' quantas vezes o parametro quantidade ditar, no caso 4
//.join, neste caso, retira as aspas do resultado