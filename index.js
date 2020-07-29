const { Composer } = require('micro-bot')
const Extra = require('telegraf/extra');
const functions = require('./functions/commons');
const bot = new Composer

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
		message.replyWithAnimation(functions.getRandomGif(), Extra.caption('❤️❤️ ¡ Feliz Jueves ! ❤️❤️').markdown())
	}
	else{
		message.replyWithAnimation(functions.getBakaGif(), Extra.caption('Aún no es Jueves 😡😡 ~Baka~').markdown())
	}
});
bot.command('praise', message =>{
	message.reply('░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█');
});

module.exports = bot