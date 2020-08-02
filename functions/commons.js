const moment = require('moment-timezone');
const { NoJuevesGif, SiJuevesGif } = require('./gifContainer');
const { NoEsJueves, SiEsJueves } = require('./mensajes');

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
};