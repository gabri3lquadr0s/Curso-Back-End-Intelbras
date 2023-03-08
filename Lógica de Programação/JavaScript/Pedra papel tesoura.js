var escolhasPossiveis = [`pedra`,`papel`,`tesoura`]
let ia
let jogador
let opcao

do{
    escolhas()
    game()
    repetir()
}while(opcao != `n`)

function escolhas(){
    ia = escolhasPossiveis[Math.floor(Math.random()*escolhasPossiveis.length)]
    jogador = prompt(`Pedra, papel, ou tesoura?`)
    while(jogador != `pedra` && jogador != `papel` && jogador != `tesoura`){
        alert(`Invalido`)
        escolhaJogador()
    }
}

function game(){
    switch(ia){
        case jogador:
            alert(`A IA escolheu ${ia}`)
            alert(`Empate`)
            break;
        case `pedra`:
            if(jogador == `tesoura`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você perdeu`)
                break;
            }
            else if(jogador == `papel`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você ganhou`)
                break;
            }
        case `papel`:
            if(jogador == `pedra`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você perdeu`)
                break;
            }
            else if(jogador == `tesoura`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você ganhou`)
                break;
            }
        case `tesoura`:
            if(jogador == `papel`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você perdeu`)
                break;
            }
            else if(jogador == `pedra`){
                alert(`A IA escolheu ${ia}`)
                alert(`Você ganhou`)
            }
    }
}

function repetir(){
    opcao = prompt(`Deseja jogar denovo?\n\ns/n`)
    switch(opcao){
        case `n`:
            alert(`Obrigado por jogar`)
    }
}