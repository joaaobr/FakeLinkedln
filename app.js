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


app.post('/authenticate', async(req, res) => {
    const email = req.body.email
    const senha = req.body.senha
    const auth = await db.UserModel.find({email, senha})
    console.log(auth)

    if(auth[0]){
        const perfil = {
            logado: true,
            nome: auth[0].nome,
            sobrenome: auth[0].sobrenome,
            email: auth[0].email
        }
        res.status(200).json(perfil)
    }else{
        res.status(401).json({msg: 'Erro'})
    }
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

app.get('/feed', async(req, res) => {
    const post = await db.PostModel.find().sort({createdAt: -1})

    res.render('feed', { post })
})

app.get('/home', (req, res) => {
    res.render('home')
})


app.post('/addPost', async(req, res) => {
    try {

        if(!req.body){
            return res.status(200).json({status: false, mensagem: 'Nenhum parametro recebido!'});
        }
        if(req.body.conteudo == ""){
            return res.status(200).json({status: false, mensagem: 'Nenhum conteudo recebido!'});
        }
        
        const email = req.body.id4
        const nome = req.body.id2
        const sobrenome = req.body.id3
        const user = await db.UserModel.find({
            email,
            nome,
            sobrenome
        })
        console.log(user)
        //if(user[0]) {
            const post = await db.PostModel.create(req.body)
            res.status(201).json({status: true, msg:'Post criado com sucesso!'})  
        //}
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
})

app.post('/deletePost/:id', async(req, res) => {
    try {
        const post = await db.PostModel.findByIdAndRemove(req.params.id)
        res.status(201).send('Post deletado com sucesso!')
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    } 
})


app.post('/verificarConta', async(req, res) => {
    try {
        const user = await db.UserModel.find(req.body)
        console.log(user[0])
        
        if(user[0]) {
            res.status(200).json(user)
        }

        
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error})
    }
})

app.post('likePost/:id', async(req, res) => {
    try {
        const id = req.params.id
        const post = await db.PostModel.findByIdAndUpdate(id, req.body, {new: true})

        res.status(200).json({post})
    } catch (error) {
        res.status(500).json({error})
    }
})



app.listen(port, () => console.log('Conectado...'))