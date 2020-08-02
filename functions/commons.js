
const moment = require('moment-timezone');
const {NoJuevesGif, SiJuevesGif} = require('./gifContainer');
const {NoEsJueves, SiEsJueves} = require('./mensajes');

module.exports = {
    esJueves: () => {
        return moment().tz("America/Santiago").locale('es-CL').format('dddd') == 'jueves';
    },

    queDia: () => {
        return moment().tz("America/Santiago").locale('es-CL').format('dddd');
    },

    getJuevesGif: () => {
        var gif = new SiJuevesGif();
        return gif.GetGif();
    },

    getNoJuevesGif: () => {
        var gif = new NoJuevesGif();
        return gif.GetGif();
    },

    getJuevesMsg: () => {
        var msg = new SiEsJueves();
        return msg.GetMessage();
    },

    getNoJuevesMsg: (p_dia) => {
        var msg = new NoEsJueves(p_dia);
        return msg.GetMessage();
    },

    getToucan: function(){
        return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
    }
};