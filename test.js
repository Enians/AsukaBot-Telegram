const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');

// t.me/JuevesTestBot
const bot = new Telegraf(process.env.BOT_TEST);

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
	console.log(commons.getJuevesGif());
});

bot.launch();