const mongoose = require('../../database')
const bcrypt = require('bcryptjs')

//Schema = campons no banco de dados
const UseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false, //Não mostra quando é feito a busca no banco
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

/**
 * Cryptografa a senha do usuario antes de ser salvo no banco de dados
 */
UseSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const User = mongoose.model('User', UseSchema)

module.exports = User