const { Composer } = require('micro-bot')
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const moment = require('moment-timezone');
const msgs = require('./functions/mensajes')
const bot = new Composer

bot.command('jueves', message=> {
	if(commons.esJueves()) message.replyWithAnimation(commons.getJuevesGif(), Extra.caption(commons.getJuevesMsg()).markdown());
	else message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(commons.getNoJuevesMsg(commons.queDia())).markdown());
});
bot.command('praise', message =>{
	message.reply(commons.getToucan());
});

bot.command('tester', message =>{
});

module.exports = bot