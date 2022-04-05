const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId


mongoose.connect('mongodb://localhost/linkedln')
    .then(() => console.log('conectado...'))
    .catch((err) => console.log(err))

const userSchema = new mongoose.Schema({
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
    perfil: {
        type: Object
    },
    conteudo: {
        type: String
    },
    
}, {
    timestamps: true
})

const posts_likes = new mongoose.Schema({
    idPost: {
        type: ObjectId
    },
    email: {
        type: String
    },
    likes: {
        quantidade_curtidas: {
            type: Number
        }
    }
})

const PostLikeModel = mongoose.model('like_post', posts_likes)
const UserModel = mongoose.model('users', userSchema)
const PostModel = mongoose.model('posts', PostSchema)


module.exports = {UserModel, PostModel, PostLikeModel}