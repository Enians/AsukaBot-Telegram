
const moment = require('moment-timezone');
const {noJuevesGif, siJuevesGif} = require('./gifContainer');
const {noEsJueves, siEsJueves} = require('./mensajes');

module.exports = {
    esJueves: () => {
        return moment().tz("America/Santiago").locale('es-CL').format('dddd') == 'jueves';
    },

    queDia: () => {
        return moment().tz("America/Santiago").locale('es-CL').format('dddd');
    },

    getJuevesGif: () => {
        var gif = new siJuevesGif();
        return gif.GetGif();
    },

    getNoJuevesGif: () => {
        var gif = new noJuevesGif();
        return gif.GetGif();
    },

    getJuevesMsg: () => {
        var msg = new siEsJueves();
        return msg.GetMessage();
    },

    getNoJuevesMsg: (p_dia) => {
        var msg = new noEsJueves(p_dia);
        return msg.GetMessage();
    },

    getToucan: function(){
        return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
    }
};