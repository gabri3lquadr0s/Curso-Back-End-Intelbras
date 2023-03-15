var carro = new Object();
carro.ano = `2020`;
carro.marca = `Ford`;
carro.cor = `Amarelo`;
carro.modelo = `Brasília`
function removerPropriedade(meuObj, propriedade){
    if(meuObj.hasOwnProperty(propriedade)){
        delete meuObj[propriedade];
    }
    else{
        console.log(`o objeto não contém a propriedade`);
    }
    console.log(meuObj);
}
removerPropriedade(carro, `cor`);
