import express from "express";

const app = express();

app.use(express.json())

const segmentos =[
    { 
        id: 1,
        name: 'Administração'
    },
    { 
        id: 2,
        name: 'Salão de Beleza'
    },
    { 
        id: 3,
        name: 'Restaurantes'
    }
];

app.get('/', (req, res)=>{
    res.status(200).send('api-segmentos')
})

app.get('/segmentos', (req,res)=>{
    res.status(200).json(segmentos)
})

app.get('/segmentos/:id', (req, res)=>{
    let index = searchActivity(req.params.id);
    res.json(segmentos[index])
})

app.post('/segmentos', (req,res)=>{
    segmentos.push(req.body);
    res.status(201).send('Segmento cadastrado com sucesso')
})

app.put('/segmentos/:id', (req, res)=>{
   
    let index = searchActivity(req.params.id);
    segmentos[index].name = req.body.name;
    res.json(segmentos)
})

app.delete('/segmentos/:id', (req, res)=>{
    let {id} = req.params;
    let index = searchActivity(id);
    segmentos.splice(index, 1)
    res.send(`Segmento ${id} removido com sucesso`)
})

function searchActivity(id){
    return segmentos.findIndex(livro => livro.id == id)

}

export default app


