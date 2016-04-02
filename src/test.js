function noop() {};

function Test(config) {
	config = config || {};
	this.tries = config.tries || 5;
	this.setup = config.setup || noop;
	this.main = config.main || noop;
	this.destroy = config.destroy || noop;
	this.description = config.description || '';
	this.currentTestIteration = 0;
	this.totalTime = 0;
	this.startTime = 0;
};

Test.prototype.run = function() {
	if (this.currentTestIteration < this.tries) {

		if (this.currentTestIteration === 0) {
			this.startTime = Date.now();
		}

		this.currentTestIteration++;
		this.setup();
		this.main();
		this.destroy();
		return this.run();
	} else {
		this.totalTime = Date.now() - this.startTime;
		var result = {
			results: this.totalTime,
			average: this.totalTime / this.tries,
			description: this.description
		};
		return result;
	}
};
