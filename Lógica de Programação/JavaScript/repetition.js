var elements = []
let nome = prompt(`Escreva alguma coisa`)
let repetition = prompt(`Escreva um número`)

function repetir(name,repetition){
    for(let i = 0; i < repetition; i++){
        elements.push(name)
    }
    console.log(elements)
}

repetir(nome,repetition)