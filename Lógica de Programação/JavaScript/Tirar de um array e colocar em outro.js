var array1 = [`1`,`2`,`3`,`4`,`5`]
function mudar(array){
    var array2 = [array.shift()] //array.shift() tira o primeiro elemento do array
    array2.push(array.pop()) //array.pop() tira o último elemento do array
    console.log(array2)
}
mudar(array1)