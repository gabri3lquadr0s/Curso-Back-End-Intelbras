var hora1
var minuto1
var hora2
var minuto2

function valores(){
    hora1 = prompt(`Digite a hora`)
    minuto1 = prompt(`Digite o minuto`)
    if(hora1 > 12 || hora1 < 1 || minuto1 > 59 || minuto1 < 0){
        alert(`Valor invalido`)
        valor1()
    }
    hora2 = prompt(`Digite a hora`)
    minuto2 = prompt(`Digite o minuto`)
    if(hora2 > 12 || hora2 < 1 || minuto2 > 59 || minuto2 < 0){
        alert(`Valor invalido`)
        valor2()
    }
}

function conta(){
    var opcao = prompt(`1-Soma\n2-Subtração`)
    switch(opcao){
        case `1`:
            var resultadoHora = Number(hora1) + Number(hora2)
            var resultadoMinuto = Number(minuto1) + Number(minuto2)
            while(resultadoMinuto > 59){
                resultadoMinuto-=60
                resultadoHora+=1
            }
            alert(`O horário é ${resultadoHora} horas e ${resultadoMinuto} minutos.`)
            break;
        case `2`:
            var resultadoHora = hora1 - hora2
            var resultadoMinuto = minuto1 - minuto2
            if(resultadoMinuto < 0){
                resultadoMinuto = resultadoMinuto * -1
            }
            alert(`O horário é ${resultadoHora} horas e ${resultadoMinuto} minutos.`) 
            break;
    }
}

valores()
conta()
