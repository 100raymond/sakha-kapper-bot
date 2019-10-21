const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '979387663:AAE262FEUE_T500FGhStnQD9jC6MR7I-BaY'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from SAKHA KAPPER, bot says: '"Hi", ${msg.from.first_name}")
})
