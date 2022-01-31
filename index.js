const { Composer } = require('micro-bot');
const Extra = require('telegraf/extra');
const commons = require('./functions/commons');
const axios = require('axios');
const {RandomNumbers} = require("./functions/randomNumbers");
const bot = new Composer;

bot.command('jueves', message => {
	if (commons.esJueves()) {
		const audio = commons.getAudioByChance();
		const msg = commons.getJuevesMsg();
		if (audio !== null) {
			message.replyWithAnimation(commons.getJuevesGif(), Extra.caption(msg).markdown());
			message.replyWithVoice({ url: ('https://drive.google.com/uc?' + audio) });
		}
		else {
			message.replyWithVideo({ url: ('https://drive.google.com/uc?id=1yylIjwQVTfbyp40I6p1nsuk6Pw3d6pES') }, Extra.caption(msg).markdown());
		}
	}
	else {
		const dia = commons.queDia();
		const msg = commons.getNoJuevesMsg(dia);
		// Get random number to determine if using special response
		const rng = new RandomNumbers(1, 100);
		if(rng.rng <= 5) {
			switch (dia) {
				case 'martes':
					message.replyWithVideo({ url: ('https://drive.google.com/uc?id=1eaHcMGJJAKaPVFlAk7JwKQh8o74eGlzi') });
					break;
				default:
					message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(msg).markdown());
					break;
			}
		}
		else {
			message.replyWithAnimation(commons.getNoJuevesGif(), Extra.caption(msg).markdown());
		}
	}
});

bot.command('praise', message => {
	message.reply(commons.getToucan());
});

bot.command('tester', ctx => {
	try {
		const audio = commons.getAudioByChance();
		if (audio != null) {
			ctx.replyWithVoice({ url: ('https://drive.google.com/uc?' + audio) });
		}
	}
	catch (error) {
		console.log(error);
	}
});

bot.command(['gato', 'cat', 'becker', 'michi'], async (message) => {
	axios.defaults.headers.common['x-api-key'] = process.env.CAT_KEY;
	const response = await axios.get('https://api.thecatapi.com/v1/images/search?mime_types=gif', { params: { limit: 1, size: 'full' } });
	this.image = response.data[0];
	message.replyWithAnimation(this.image.url);
});

bot.command(['perro', 'goodboi', 'dog'], async (message) => {
	const response = await axios.get('https://dog.ceo/api/breeds/image/random');
	this.image = response.data;
	message.replyWithPhoto(this.image.message);
});

bot.command('help', message => {
	message.reply('1) Para FELIZ JUEVES - /jueves \n' +
   '2) PRAISE THE TUCAN - /praise \n' +
   '3) Gifs de gatos - /gato | /cat | /michi \n' +
   '4) Para imagenes de perros - /perro | /dog | /goodboi \n');
});

module.exports = bot;
