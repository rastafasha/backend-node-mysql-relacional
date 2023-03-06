const express = require('express');
const app = express();

const modeloCategoria = require('./models').Categoria
const modeloProducto = require('./models').Producto

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola mundo!');
});

app.post('/api/categoria/create', (req, res) => {
    modeloCategoria.create(req.body)
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.post('/api/producto/create', (req, res) => {
    modeloProducto.create(req.body)
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.get('/api/producto/all', (req, res) => {
    modeloProducto.findAll({
            include: [{ model: modeloCategoria }]
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.delete('/api/producto/delete/:id', (req, res) => {
    modeloProducto.destroy({
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.put('/api/producto/editar/:id', (req, res) => {
    modeloProducto.update(req.body, {
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.get('/api/producto/:id', (req, res) => {
    modeloProducto.findOne({
            where: { id: req.params.id }
        })
        .then((data) => {
            res.json({ datos: data })
        })
        .catch((error) => {
            res.json({ error: error });
        })
})

app.listen(3000, () => {
    console.log('Server on por 3000');
});