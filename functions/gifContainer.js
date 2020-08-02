const { RandomNumbers } = require('./randomNumbers');
exports.NoJuevesGif = class {
	constructor() {
		this.gifs = new Array(5);
		this.InitiateMessages();
	}
	InitiateMessages() {
		this.gifs[0] = 'https://i.pinimg.com/originals/09/8e/d5/098ed5b62803063a74eb519ee415c7e6.gif';
		this.gifs[1] = 'https://i.imgur.com/trjJKuw.gif';
		this.gifs[2] = 'https://thumbs.gfycat.com/UnlawfulAmbitiousAlabamamapturtle-size_restricted.gif';
		this.gifs[3] = 'https://gifimage.net/wp-content/uploads/2017/07/asuka-gif-4.gif'
		this.gifs[4] = 'https://i.gifer.com/C1Jc.gif';
	}
	GetGif() {
		const random = new RandomNumbers(0, this.gifs.length - 1);
		return this.gifs[random.rng];
	}
};

exports.SiJuevesGif = class {
	constructor() {
		this.gifs = new Array(5);
		this.InitiateMessages();
	}
	InitiateMessages() {
		this.gifs[0] = 'https://data.whicdn.com/images/149722992/original.gif';
		this.gifs[1] = 'https://lh3.googleusercontent.com/proxy/Dzeds73w5bznOXOqmJtztceJA9iV5M8esWlAafJ0jNrrjXyrgPYE3CbH54KU83AYs8z1SZu5xibpixPCbpmXllgV0UoIYO6zEiSDWuhbpMe6';
		this.gifs[2] = 'https://thumbs.gfycat.com/OddSecondaryArchaeopteryx-small.gif';
		this.gifs[3] = 'https://64.media.tumblr.com/tumblr_lgu7rlghZV1qfwdhao1_500.gif'
		this.gifs[4] = 'https://phoneky.co.uk/thumbs/screensavers/down/new/anime/asuka7575_Ql8RhPIV.gif';
	}
	GetGif() {
		const random = new RandomNumbers(0, this.gifs.length - 1);
		return this.gifs[random.rng];
	}
};