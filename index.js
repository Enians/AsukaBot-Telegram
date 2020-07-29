const { Composer } = require('micro-bot')
const Extra = require('telegraf/extra');
const functions = require('./functions/commons');
const bot = new Composer

bot.start((context) => {
	var date_ob = new Date();
	var date_ab = new Date();
	date_ab.setMilliseconds(1 * 60 * 60 * 1000);
	date_ab.setMilliseconds(-1 * (date_ob.getMinutes() * 60 * 1000));
	date_ab.setMilliseconds(-1 * (date_ob.getSeconds() * 1000));
	setTimeout(esJueves, (0 + (date_ab.getTime() - date_ob.getTime())), context);
});
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
	message.reply(functions.getToucan());
});

bot.command('testTimeZone', message =>{
	process.env.TZ = 'America/Santiago'
	var d = new Date();
	message.reply(d.toString());
	message.reply(d.toLocaleTimeString());
});

function esJueves(ctx){
	const timer = setInterval(() => {
		if(functions.esJueves()){
			ctx.replyWithAnimation(functions.getRandomGif(), Extra.caption('❤️❤️ ¡ Feliz Jueves ! ❤️❤️').markdown())
			break;
		}
	}, 3600000); // 3600000 una hora
}

module.exports = bot