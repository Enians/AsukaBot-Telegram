const Telegraf = require('micro-bot');
const Extra = require('telegraf/extra');
const bot = new Telegraf('1235995780:AAEioe8xn4VOde4kyhng-tuEdCUD4MjRqWI');

const AnimationUrl1 = 'https://data.whicdn.com/images/149722992/original.gif';
const AnimationUrl0 = 'https://i.pinimg.com/originals/09/8e/d5/098ed5b62803063a74eb519ee415c7e6.gif';

bot.start((context) => {
	console.log('Service Started...');
	context.reply('Feliz Jueves !');
})
bot.command('jueves', message=> {
	try{
		console.log(esJueves());
	}
	catch(error){
		console.log('Error: ' + error);
	}
	if(esJueves()){
		// message.reply('Feliz Jueves !');
		message.replyWithAnimation(AnimationUrl1, Extra.caption('Feliz Jueves !').markdown())
	}
	else{		
		// message.reply('Aún no es Jueves ~Baka~');
		message.replyWithAnimation(AnimationUrl0, Extra.caption('Aún no es Jueves ~Baka~').markdown())
	}
})

//bot.launch();
module.exports = bot

function esJueves(){
	var d = new Date();
	var weekday = new Array(7);
	weekday[0] = "Domingo";
	weekday[1] = "Lunes";
	weekday[2] = "Martes";
	weekday[3] = "Miercoles";
	weekday[4] = "Jueves";
	weekday[5] = "Viernes";
	weekday[6] = "Sabado";

	return weekday[d.getDay()] == "Jueves";
};