const OUTERDIVS = 1000,
 	INNERDIVS = 1,
 	PARAS = 1,
 	SPANS = 1000,
 	OUTERDIVS_CLASS = "outer-div",
 	INNDERDIV_CLASS = "inner-div",
 	PARAS_CLASS = "para",
 	SPANS_CLASS = "span";

function template() {
	var content = '';

	for (let i = 0; i < OUTERDIVS; i++) {
		content  += '<div class="' + OUTERDIVS_CLASS + '">';

		for (let j = 0; j < INNERDIVS; j++) {
			content += '<div class="' + INNDERDIV_CLASS + '">';

			for (let k = 0; k < PARAS; k++) {
				content += '<p class="' + PARAS_CLASS + '"">';

				for (let l = 0; l < SPANS; l++) {
					content += '<span class="' + SPANS_CLASS + '">';
					content += '</span>';
				}
				content += '</p>';
			}

			content += '</div>'
		}

		content += '</div>'
	}

	return content;
}


var outputDiv = document.getElementsByClassName(".output")[0];
var styleTag = document.getElementsByTagName("style")[0];


function setup() {
	outputDiv.innerHTML = template();
	var widthHeight = document.body.offsetWidth + document.body.offsetHeight;
}

function destroy() {
	outputDiv.innerHTML = '';
}
/**
 * Test 1: No CSS
 */

function Test1() {
	styleTag.textContent = '';
}

var test1 = new Test({
	setup: setup,
	description: 'Test 1: No CSS'
	main: Test1
});

var results = test1.run();
console.log(results);
