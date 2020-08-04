const moment = require('moment-timezone');
const { NoJuevesGif, SiJuevesGif } = require('./gif');
const { NoEsJueves, SiEsJueves } = require('./mensajes');
const { RandomNumbers } = require('./randomNumbers');

module.exports = {
	esJueves: () => {
		return moment().tz('America/Santiago').locale('es-CL').format('dddd') == 'jueves';
	},

	queDia: () => {
		return moment().tz('America/Santiago').locale('es-CL').format('dddd');
	},

	getJuevesGif: () => {
		const gif = new SiJuevesGif();
		return gif.GetGif();
	},

	getNoJuevesGif: () => {
		const gif = new NoJuevesGif();
		return gif.GetGif();
	},

	getJuevesMsg: () => {
		const msg = new SiEsJueves();
		return msg.GetMessage();
	},

	getNoJuevesMsg: (p_dia) => {
		const msg = new NoEsJueves(p_dia);
		return msg.GetMessage();
	},

	getToucan: () => {
		return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
	},

	getAudioByChance: () => {
		const rng = new RandomNumbers(1, 100);
		console.log(rng.rng);
		const audio1 = '/resources/FelizJueves1.ogg';
		const audio2 = '/resources/FelizJueves2.ogg';
		const audio3 = '/resources/FelizJueves3.ogg';
		if(rng.rng <= 30) { return audio2; }
		else if(rng.rng <= 50) { return audio3; }
		else { return audio1; }
	},
};