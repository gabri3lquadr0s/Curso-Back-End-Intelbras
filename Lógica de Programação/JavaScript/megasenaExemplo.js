var megasena = []
for(var i = 1; i <=60; i++){
megasena.push(i)
}

function numsMegasena(){
    var num1 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
//Math.random() generates a random decimal number between 0 (inclusive) and 1 (exclusive).
//Math.floor() rounds down a number to the nearest integer.
//Math.floor(Math.random()*megasena.length) generates a random integer between 0 (inclusive) and megasena.length (exclusive).
//megasena.splice(index, count) removes count elements from the megasena array starting at the specified index, and returns the removed elements as a new array. In this case, count is 1 and index is the randomly generated integer from the previous step.
//[0] selects the first (and only) element of the array returned by splice(). This is necessary because splice() returns an array of removed elements, even though in this case there is only one element being removed.
    var num2 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
    var num3 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
    var num4 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
    var num5 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
    var num6 = megasena.splice(Math.floor(Math.random()*megasena.length), 1)[0]
    console.log(`Os números da MegaSena são ${num1} ${num2} ${num3} ${num4} ${num5} ${num6}`)
}

numsMegasena()