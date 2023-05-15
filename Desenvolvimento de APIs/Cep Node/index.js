const express = require('express'); 
const bodyParser = require('body-parser');
const app = express(); 
app.use(bodyParser.json());

let endereco= [];

app.get('/endereco', (req, res) => { 
    res.json(endereco); 
});

app.get('/endereco/:cep', (req, res) => { 
    const { cep } = req.params; 
    const enderecoInfo = endereco.find(v => v.cep === cep); 
    if(enderecoInfo) { 
        res.json(enderecoInfo); 
    } 
    else{ 
        res.status(404).json({ message: 'Endereço não localizado.' }); 
    }   
});

app.post('/endereco', (req, res) => { 
    const { cep, rua, bairro, cidade, estado } = req.body; 
    const enderecoInfo = { cep, rua, bairro, cidade, estado }; 
    endereco.push(enderecoInfo); 
    res.status(201).json({ message: 'Endereço registrado com sucesso.' }); 
});

app.put('/endereco/:cep', (req, res) => { 
    const { cep } = req.params; 
    const { rua, bairro, cidade, estado } = req.body; 
    const enderecoInfo = endereco.find(v => v.cep === cep); 
    if(enderecoInfo) { 
        enderecoInfo.cep = cep || endereco.cep
        enderecoInfo.rua = rua || endereco.rua; 
        enderecoInfo.bairro = bairro || enderecoInfo.bairro; 
        enderecoInfo.cidade = cidade || enderecoInfo.cidade; 
        enderecoInfo.estado = estado || enderecoInfo.estado;
    res.json({ message: 'Seu endereço foi atualizado com sucesso.' });
    } 
    else {
        res.status(404).json({ message: 'Endereço não encontrado.' }); 
    } 
});

app.delete('/endereco/:cep', (req, res) => { 
    const { cep } = req.params; 
    const enderecoIndex = endereco.findIndex(v => v.cep === cep); 
    if (enderecoIndex !== -1) { 
        endereco.splice(enderecoIndex, 1); 
        res.json({ message: 'Endereço excluído com sucesso.' }); 
    } 
    else { 
        res.status(404).json({ message: 'Endereço não encontrado.' }); 
    } 
});

const port = 3000; 
    app.listen(port, () => { 
    console.log(`Servidor rodando em http://localhost:${port}`); 
});