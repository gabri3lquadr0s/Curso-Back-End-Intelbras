let estoqueCamisas = 20
let estoqueCalcas = 20
var opcao
var tipoCamiseta
var tipoCalca
var quantidade

do{
opcao = prompt("Bom dia, qual parte de nosso catálogo você deseja olhar?\n\nCamisetas\nCalças\nSair")
switch(opcao){
    case "Camisetas":
        alert("Ok, nosso catálogo inclui:\n\nCamiseta Listrada\nCamiseta com Estampa")
        tipoCamiseta = prompt("Qual tipo você deseja comprar?")
        if(tipoCamiseta == "Camiseta Listrada" || tipoCamiseta == "camiseta listrada" || tipoCamiseta == "listrada" || tipoCamiseta == "Listrada" || tipoCamiseta == "Estampa" || tipoCamiseta == "estampa" || tipoCamiseta == "Camiseta com Estampa" || tipoCamiseta == "camiseta com estampa"){
            quantidade = prompt("Qual a quantidade?")
            if(quantidade < 1 || quantidade > estoqueCamisas){
                alert("Por favor, digite um valor válido!")
                break;
            }
            prompt("Ok, digite o código de segurança de seu cartão.")
            alert("Compra finalizada")
            estoqueCamisas = estoqueCamisas - quantidade
            alert(`Estoque de camisetas: ${estoqueCamisas}`)
            break;
        }
        else{
            alert("Por favor, digite uma opção do catálogo")
            break;
        }
    
    case "Calças":
        alert("Ok, nosso catálogo inclui:\n\nCalça Jeans\nCalça Moletom")
        tipoCalca = prompt("Qual tipo você deseja comprar?")
        if(tipoCalca == "Calça Jeans" || tipoCalca == "calça jeans" || tipoCalca == "jeans" || tipoCalca == "Jeans" || tipoCalca == "Calça Moletom" || tipoCalca == "calça moletom" || tipoCalca == "Moletom" || tipoCalca == "moletom" || tipoCalca == "Calca Moletom" || tipoCalca == "calca moletom"){
            quantidade = prompt("Qual a quantidade?")
            if(quantidade < 1 || quantidade > estoqueCalcas){
                alert("Por favor, digite um valor válido!")
                break;
            }
            prompt("Ok, digite o código de segurança de seu cartão.")
            alert("Compra finalizada")
            estoqueCalcas = estoqueCalcas - quantidade
            alert(`Estoque de calças: ${estoqueCalcas}`)
            break;
        
        }
        else{
            alert("Por favor, digite uma opção do catálogo")
            break;
        }
}
if(estoqueCamisas + estoqueCalcas == 0){
    alert("O estoque está esgotado")
}
if(opcao == "Sair"){
    alert("Obrigado por visitar nossa loja!")
}
}while(opcao != "Sair")