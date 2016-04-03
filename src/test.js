function noop() {};

function Test(config) {
	config = config || {};
	this.tries = config.tries || 2000;
	this.setup = config.setup || noop;
	this.main = config.main || noop;
	this.destroy = config.destroy || noop;
	this.description = config.description || '';
	this.currentTestIteration = 0;
	this.totalTime = 0;
	this.startTime = 0;
};

Test.prototype.run = function() {
	while (this.currentTestIteration < this.tries) {

		if (this.currentTestIteration === 0) {
			this.startTime = Date.now();
		}

		this.currentTestIteration++;
		this.setup();
		this.main();
		this.destroy();
	}

	this.totalTime = Date.now() - this.startTime;
	var result = {
		results: this.totalTime,
		average: this.totalTime / this.tries,
		description: this.description
	};
	return result;
};
