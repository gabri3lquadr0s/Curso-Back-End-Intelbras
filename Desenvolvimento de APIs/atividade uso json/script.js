var placa, marca, modelo, ano

function pegarPlaca(){
    placa = document.getElementById("placa");
    if(placa.value == null || placa.value == ``){
        alert(`Por favor, digite uma placa válida.`);
    }
    else if(placa.value.length == 7){
        return true;
    }
    return false;
}

function buscarPlaca(){
    pegarPlaca()
    //var url = `https://my-json-server.typicode.com/gabri3lquadr0s/Carro-API/carro/?placa=${placa.value}`
    var url = `./db.json`
    fetch(url)
   .then(res => res.json())
    .then(data => {
        //marca = data[0].marca;
        //modelo = data[0].modelo;
        //ano = data[0].ano;
       for(let carros of data.carro){
        if(placa.value == carros.placa){
            alert(`O carro com a placa digitada é um ${carros.marca} ${carros.modelo} do ano de ${carros.ano}.`);
        }
       }
   })
}