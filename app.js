require('dotenv').config({
    path: `${__dirname}/.env`
})

const Telegraf = require('telegraf')
const express = require('express')

const bot = new Telegraf(process.env.BOT_TOKEN)
// Set the bot response
bot.on('text', ({
    replyWithHTML
}) => replyWithHTML('<b>Прривествую,!</b>'))

// Set telegram webhook
// npm install -g localtunnel && lt --port 3000
bot.telegram.setWebhook('https://t.fenek.fun')

const app = express()
app.get('/', (req, res) => res.send('Hello World!'))
// Set the bot API endpoint
app.use(bot.webhookCallback('/'))
app.listen(3050, () => {
    console.log('Fenek bot listening on port 3050!')
});