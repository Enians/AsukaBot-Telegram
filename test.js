const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const axios = require('axios');

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

bot.command('gato', async (message) =>{
	axios.defaults.headers.common['x-api-key'] = process.env.CAT_KEY;
	let response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', { params: { limit:1, size:"full" } } )
	this.image = response.data[0]
	message.replyWithAnimation(this.image.url);
});

bot.launch();