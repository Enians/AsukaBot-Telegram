const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const axios = require('axios');

// t.me/JuevesTestBot
const bot = new Telegraf(process.env.BOT_TEST);

bot.command('jueves', message=> {
	const audio = commons.getAudioByChance();
	if (commons.esJueves()) {
		const msg = commons.getJuevesMsg();
		message.replyWithAnimation(commons.getJuevesGif(), Extra.caption(msg).markdown());
		if (audio != null) {
			message.replyWithVoice({ url: ('https://drive.google.com/uc?' + audio) });
		}
	}
	else {
		const dia = commons.queDia();
		const msg = commons.getNoJuevesMsg(dia);
		message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(msg).markdown());
	}
});

bot.command('tester', ctx =>{
	const audio = commons.getAudioByChance();
	if (audio != null) {
		ctx.replyWithVoice({ url: ('https://drive.google.com/uc?' + audio) });
	}
});

bot.command('praise', message =>{
	message.reply(commons.getToucan());
});

bot.command(['gato', 'cat', 'becker', 'michi'], async (message) =>{
	axios.defaults.headers.common['x-api-key'] = process.env.CAT_KEY;
	const response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', { params: { limit:1, size:'full' } });
	this.image = response.data[0];
	message.replyWithAnimation(this.image.url);
});

bot.command(['perro', 'goodboi', 'dog'], async (message) => {
	const response = await axios.get('https://dog.ceo/api/breeds/image/random');
	this.image = response.data;
	message.replyWithPhoto(this.image.message);
});

bot.launch();