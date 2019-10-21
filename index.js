const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '709199310:AAF_aK-AqiJJyldMo0LH2x4ezGU0N5p6czE'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from SAKHA KAPPER, bot says: '"Hi", ${msg.from.first_name}")
})
