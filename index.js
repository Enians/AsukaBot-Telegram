const { Composer } = require('micro-bot')
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const moment = require('moment-timezone');
const bot = new Composer

bot.command('jueves', message=> {
	if(commons.esJueves()){ 
		msg = commons.getJuevesMsg();
		message.replyWithAnimation(commons.getJuevesGif(), Extra.caption(msg).markdown());
	}
	else{ 
		dia = commons.queDia();
		msg = commons.getNoJuevesMsg(dia);
		message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(msg).markdown());
	}
});
bot.command('praise', message =>{
	message.reply(commons.getToucan());
});

bot.command('tester', message =>{
});

module.exports = bot