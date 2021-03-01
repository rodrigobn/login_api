const nodemailer = require('nodemailer')
const { host, port, user, pass } = require('../config/mail.json')

const trasnport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    }
})