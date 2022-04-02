const express = require('express')
const app = express()
const port = 3000
const db = require('./database/connect.users')
// Configs
    app.use(express.json())
    app.set('view engine', 'ejs')
    app.use(express.static(__dirname + '/public'))





app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/add', async(req, res) => {
    try {
        const email = req.body.email
        const senha = req.body.senha
        const user = await db.UserModel.create({
            email,
            senha
        })
        console.log(user._id)
        res.status(200).send({id: user._id})
        
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})


app.get('/cadastro/primeira-etapa', (req, res) => {
    res.render('primeira-etapa')
})


app.get('/cadastro/segunda-etapa/:id', (req, res) => {
    const id = req.params.id
    res.render('segunda-etapa', {id})
})



app.post('/update', async(req, res) => {
    try {
        const id = req.body.id
        console.log(id)
        const user = await db.UserModel.findByIdAndUpdate(id, req.body, {new: true})
        
        res.status(200).send('Ok')
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get('/home', (req, res) => {
    res.render('home')
})


app.listen(port, () => console.log('Conectado...'))