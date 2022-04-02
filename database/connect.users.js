const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/linkedln')
    .then(() => console.log('conectado...'))
    .catch((err) => console.log(err))

const Schema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    senha: {
        type: String,
        minlength: 6
    },
    nome: {
        type: String
    },
    sobrenome:{
         type: String
    }
})

const PostSchema = new mongoose.Schema({
    conteudo: {
        
    }
})

const UserModel = mongoose.model('users', Schema)
const PostModel = mongoose.model('posts', PostSchema)

module.exports = {UserModel, PostModel}