const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const moment = require('moment-timezone');
const msgs = require('./functions/mensajes')

// t.me/JuevesTestBot
const bot = new Telegraf('1361364503:AAEOCPGRGFk-xX0HYeNH--0X4D3kHBD_ga0');

bot.command('jueves', message=> {
	if(commons.esJueves()) message.replyWithAnimation(commons.getJuevesGif(), Extra.caption(commons.getJuevesMsg()).markdown());
	else message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(commons.getNoJuevesMsg(commons.queDia())).markdown());
});

bot.command('praise', message =>{
	message.reply(commons.getToucan());
});

bot.command('tester', message =>{
	console.log(commons.getJuevesGif());
});

bot.launch();