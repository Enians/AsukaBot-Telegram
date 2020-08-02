const moment = require('moment-timezone');
const { NoJuevesGif, SiJuevesGif } = require('./gifContainer');
const { NoEsJueves, SiEsJueves } = require('./mensajes');

exports = {
	esJueves: () => {
		return moment().tz('America/Santiago').locale('es-CL').format('dddd') == 'jueves';
	},

	queDia: () => {
		return moment().tz('America/Santiago').locale('es-CL').format('dddd');
	},

	getJuevesGif: () => {
		let gif = new SiJuevesGif();
		return gif.GetGif();
	},

	getNoJuevesGif: () => {
		let gif = new NoJuevesGif();
		return gif.GetGif();
	},

	getJuevesMsg: () => {
		let msg = new SiEsJueves();
		return msg.GetMessage();
	},

	getNoJuevesMsg: (p_dia) => {
		let msg = new NoEsJueves(p_dia);
		return msg.GetMessage();
	},

	getToucan: () => {
		return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
	},
};