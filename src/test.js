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
};

Test.prototype.run = function() {
	if (this.currentTestIteration < this.tries) {
		this.currentTestIteration++;
		this.setup();
		var startTime = Date.now();
		this.main();
		this.results.push(Date.now() - startTime);
		this.destroy();
		this.run();
	} else {
		return {
			results: this.results,
			average: this.results / this.tries,
			description: this.description
		};
	}
};
