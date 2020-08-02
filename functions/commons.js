
const moment = require('moment-timezone');
const gifs = require('./gifContainer');
const msgs = require('./mensajes');
module.exports = {
    esJueves: function () {
        return moment().tz("America/Santiago").locale('es-CL').format('dddd') == 'jueves';
    },

    queDia: function(){
        return moment().tz("America/Santiago").locale('es-CL').format('dddd');
    },

    getJuevesGif: function() {
        var gif = new gifs.siJuevesgIF();
        return gif.GetGif();
    },

    getNoJuevesGif: function(){
        var gif = new gifs.noJuevesGif();
        return gif.GetGif();
    },

    getJuevesMsg: function(){
        var msg = new msgs.siEsJueves();
        return msg.GetMessage();
    },

    getNoJuevesMsg: function(p_dia){
        var msg = new msgs.noEsJueves(p_dia);
        return msg.GetMessage();
    },

    getToucan: function(){
        return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
    }
};