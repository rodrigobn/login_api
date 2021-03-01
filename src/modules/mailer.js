const path = require('path')
const nodemailer = require('nodemailer')
const hbs = require('nodemailer-express-handlebars')

const { host, port, user, pass } = require('../config/mail.json')

const trasnport = nodemailer.createTransport({
    host,
    port,
    auth: {
        user,
        pass
    }
})

trasnport.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html'
}))