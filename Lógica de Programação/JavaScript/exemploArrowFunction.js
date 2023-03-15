var media = (num1,num2,num3,num4) => (num1 + num2 + num3 + num4)/4;

function passou(){
    if(media(10,5,5,4) < 7){
        console.log(`Reprovado`)
    }
    else if(media(10,5,5,4) >= 7){
        console.log(`Aprovado`)
    }
}

console.log(media(10,6,5,4))
passou()