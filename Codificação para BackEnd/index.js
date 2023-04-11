const express = require(`express`);
const server = express();
server.use(express.json());

//query params = ?nome=Gabriel
//route params = curso/1
//request Body = {nome: 'NodeJs', tipo:'BackEnd'}

const cursos = [`NodeJs`, `PHP`, `Java`, `C`];

//listagem de todos os cursos
server.get(`/cursos`, (req,res) =>{
    return res.json(cursos);
});

//listagem de um curso
server.get(`/cursos/:index`, (req, res) => {
    //console.log("Teste bem sucedido");
    //const {id} = req.query;
    //const {id} = req.params;
    const {index} = req.params;
    //return res.json({curso: `${id}`});
    return res.json(cursos[index]);
})

//criar um curso
server.post(`/cursos`, (req,res) =>{
    const {name} = req.body;
    cursos.push(name);
    return res.json(cursos);
})

//editar um curso
server.put(`/cursos/:index`, (req,res) =>{
    const {name} = req.body;
    const {index} = req.params;
    cursos[index] = name;
    return res.json(cursos)
})

//deletar um curso
server.delete(`/cursos/:index`, (req,res) =>{
    const {index} = req.params;
    cursos.splice(index,1);
    return res.json(cursos)
})

server.listen(3000);