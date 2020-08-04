exports.RandomNumbers = class {

	constructor(p_min, p_max) {
		this.min = Math.ceil(p_min);
		this.max = Math.floor(p_max);
		this.Roll();
	}

	Roll() {
		this.rng = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
	}
};