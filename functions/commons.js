const moment = require('moment');
module.exports = {
    esJueves: function () {
        console.log(moment().locale('es-CL').format('dddd'));
        return moment().format('dddd') == 'jueves';
    },

    getRandomGif: function() {
        
        min = Math.ceil(1);
        max = Math.floor(5);
        var rng = Math.floor(Math.random() * (max - min + 1)) + min;

        const AnimationUrl1 = 'https://data.whicdn.com/images/149722992/original.gif';
        const AnimationUrl2 = 'https://lh3.googleusercontent.com/proxy/Dzeds73w5bznOXOqmJtztceJA9iV5M8esWlAafJ0jNrrjXyrgPYE3CbH54KU83AYs8z1SZu5xibpixPCbpmXllgV0UoIYO6zEiSDWuhbpMe6';
        const AnimationUrl3 = 'https://thumbs.gfycat.com/OddSecondaryArchaeopteryx-small.gif';
        const AnimationUrl4 = 'https://64.media.tumblr.com/tumblr_lgu7rlghZV1qfwdhao1_500.gif'
        const AnimationUrl5 = 'https://phoneky.co.uk/thumbs/screensavers/down/new/anime/asuka7575_Ql8RhPIV.gif';

        switch(rng){
            case 1:
                return AnimationUrl1;
            case 2:
                return AnimationUrl2;
            case 3:
                return AnimationUrl3;
            case 4:
                return AnimationUrl4;
            case 5:
                return AnimationUrl5;
        }
    },

    getBakaGif: function(){
        min = Math.ceil(1);
        max = Math.floor(5);
        var rng = Math.floor(Math.random() * (max - min + 1)) + min;

        const AnimationUrl1 = 'https://i.pinimg.com/originals/09/8e/d5/098ed5b62803063a74eb519ee415c7e6.gif';
        const AnimationUrl2 = 'https://i.imgur.com/trjJKuw.gif';
        const AnimationUrl3 = 'https://thumbs.gfycat.com/UnlawfulAmbitiousAlabamamapturtle-size_restricted.gif';
        const AnimationUrl4 = 'https://gifimage.net/wp-content/uploads/2017/07/asuka-gif-4.gif'
        const AnimationUrl5 = 'https://i.gifer.com/C1Jc.gif';

        switch(rng){
            case 1:
                return AnimationUrl1;
            case 2:
                return AnimationUrl2;
            case 3:
                return AnimationUrl3;
            case 4:
                return AnimationUrl4;
            case 5:
                return AnimationUrl5;
        }
    },

    getToucan: function(){
        return '░░░░░░░▄▄▄▀▀▀▄▄███▄░░░\n░░░░▄▀▀░░░░░░░▐░▀██▌░░\n░░▄▀░░░░▄▄███░▌▀▀░▀█░░\n░▄█░░▄▀▀▒▒▒▒▒▄▐░░░░█▌░\n▐█▀▄▀▄▄▄▄▀▀▀▀▌░░░░░▐█▄\n▌▄▄▀▀░░░░░░░░▌░░░░▄███\n░░░░░░░░░░░░▐░░░░▐████\n░░░░le░░░░░░░▐░░░░▐████\n░░░toucan░░░░░░▀▄░░░▐███\n░░░░░has░░░░░░░░▀▄▄████\n░░░░░arrived░░░░░░░░░░░░█';
    }
};