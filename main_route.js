const route = require('express').Router()
const axios = require('axios')
const TelegramBot = require('node-telegram-bot-api');
const token = '5278047456:AAHHswqQpvxn2jq1-Q-N9Myu_gN_v_R-Tlk'
const chatId = 672373115
const bot = new TelegramBot(token, {polling: true});


route.post('/send', async (req, res) => {
  console.log(req.query)
  await bot.sendMessage(672373115, 'qwe')
  res.send()
})





module.exports = route