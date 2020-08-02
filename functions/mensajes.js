const {randomNumbers} = require('./randomNumbers');
exports.noEsJueves = class {
        constructor(p_dia){
            this.msgs = new Array(5);
            this.InitiateMessages(capitalizeFirstLetter(p_dia));
        }
        InitiateMessages(p_dia){
            this.msgs[0] = `Recién es ${ p_dia } 😡😡 ~Baka~`;
            this.msgs[1] = `😡 Anta baka? Hoy es ${ p_dia } 😡`;
            this.msgs[2] = `Es ${ p_dia } ~Baka~ 😡 Aún no es Jueves`;
            this.msgs[3] = `Aún no es Jueves 😡😡 ~Baka~`;
            this.msgs[4] = `~Baka~ Es ${p_dia}`;
        }
        GetMessage(){
            var random = new randomNumbers(0, this.msgs.length - 1);
            return this.msgs[random.rng];
        }
}

exports.siEsJueves = class {
    constructor(){
        this.msgs = new Array(5);
        this.InitiateMessages();
    }
    InitiateMessages(){
        this.msgs[0] = `❤️❤️ ¡ Feliz Jueves ! ❤️❤️`;
        this.msgs[1] = `Quiero ser la primera persona en desearte un ❤️ ¡ Feliz Jueves ! ❤️`;
        this.msgs[2] = `¡ Ojalá pases un Feliz Jueves ! ❤️❤️❤️`;
        this.msgs[3] = `Te deseo un Feliz Jueves ❤️❤️`;
        this.msgs[4] = `Fröhlichen Donnerstag ❤️❤️❤️`;
    }
    GetMessage(){
        var random = new randomNumbers(0, this.msgs.length - 1);
        return this.msgs[random.rng];
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}