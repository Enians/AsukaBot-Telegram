const Telegraf = require('telegraf');
const Extra = require('telegraf/extra');
const functions = require('./functions/commons');
const bot = new Telegraf('1224381977:AAFISryKbIcmc6hJIiDzxm2ZTVe648nyCEc');

bot.start((context) => {
	console.log('Service Started...');
})
bot.command('jueves', message=> {
	try{
		console.log(functions.esJueves());
	}
	catch(error){
		console.log('Error: ' + error);
	}
	if(functions.esJueves()){
		message.replyWithAnimation(functions.getRandomGif(), Extra.caption('❤️❤️ Feliz Jueves ! ❤️❤️').markdown())
	}
	else{		
		message.replyWithAnimation(functions.getBakaGif(), Extra.caption('Aún no es Jueves 😡😡 ~Baka~').markdown())
	}
})

bot.launch();