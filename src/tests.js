'use strict';

const OUTERDIVS = 1,
 	INNERDIVS = 1,
 	PARAS = 1,
 	SPANS = 1000,
 	OUTERDIVS_CLASS = "outer-div",
 	INNDERDIV_CLASS = "inner-div",
 	CHILD_CLASS = "child-div",
 	SPANS_CLASS = "span";

function template() {
	var content = '';

	for (let i = 0; i < OUTERDIVS; i++) {
		content  += '<div class="' + OUTERDIVS_CLASS + '">';

		for (let j = 0; j < INNERDIVS; j++) {
			content += '<div class="' + INNDERDIV_CLASS + '" id="'
			+ INNDERDIV_CLASS + '">';

			for (let k = 0; k < PARAS; k++) {
				content += '<div class="' + CHILD_CLASS + '"">';

				for (let l = 0; l < SPANS; l++) {
					content += '<span class="' + SPANS_CLASS + '">';
					content += l;
					content += '</span>';
					content += '<br/>'
				}
				content += '</div>';
			}

			content += '</div>'
		}

		content += '</div>'
	}

	return content;
}

var templateText = template();
var outputDiv = document.getElementsByClassName("output")[0];
var styleTag = document.getElementsByTagName("style")[0];

// outputDiv.innerHTML = templateText;

function setup() {
	outputDiv.innerHTML = templateText;
	var widthHeight = document.body.offsetWidth + document.body.offsetHeight;
}

function destroy() {
	outputDiv.innerHTML = '';
	var widthHeight = document.body.offsetWidth + document.body.offsetHeight;
	styleTag.textContent = '';
}

var results = [];

/**
 * Test 1: No CSS
 */

function Test1() {
	styleTag.textContent = '';
}

var test1 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 1: No CSS',
	main: Test1
});

results.push(test1.run());

/**
 * Test 2: Selection using nested tag selector with first child selector (depth 4)
 */

function Test2() {
	styleTag.textContent =
	'div > div > div > span { color: red; }';
}

var test2 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 2: Selection using nested tag selector with first child selector (depth: 4)',
	main: Test2
});

results.push(test2.run());

/**
 * Test 3: Selection using nested tag selector with first child selector (depth 3)
 */

function Test3() {
	styleTag.textContent =
	'div > div > span { color: red; }';
}

var test3 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 3: Selection using nested tag selector with first child selector (depth: 3)',
	main: Test3
});

results.push(test3.run());

/**
 * Test 4: Selection using nested tag selector with first child selector (depth 2)
 */

function Test4() {
	styleTag.textContent =
	'div > span { color: red; }';
}

var test4 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 4: Selection using nested tag selector with first child selector (depth: 2)',
	main: Test4
});

results.push(test4.run());

/**
 * Test 5: Selection using nested tag selector with first child selector (depth 1)
 */

function Test5() {
	styleTag.textContent =
	'span { color: red; }';
}

var test5 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 5: Selection using nested tag selector (depth: 1)',
	main: Test5
});

results.push(test5.run());

/**
 * Test 6: Selection using nested class selector (depth 4)
 */

function Test6() {
	styleTag.textContent =
	'.outer-div .inner-div .child-div .span { color: red; }';
}

var test6 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 6: Selection using nested class selector (depth: 4)',
	main: Test6
});

results.push(test6.run());

/**
 * Test 7: Selection using nested class selector (depth 3)
 */

function Test7() {
	styleTag.textContent =
	'.inner-div .child-div .span { color: red; }';
}

var test7 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 7: Selection using nested class selector (depth: 3)',
	main: Test7
});

results.push(test7.run());

/**
 * Test 8: Selection using nested class selector (depth 2)
 */

function Test8() {
	styleTag.textContent =
	'.child-div .span { color: red; }';
}

var test8 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 8: Selection using nested class selector (depth: 2)',
	main: Test8
});

results.push(test8.run());

/**
 * Test 9: Selection using nested class selector (depth 1)
 */

function Test9() {
	styleTag.textContent =
	'.span { color: red; }';
}

var test9 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 9: Selection using nested class selector (depth: 1)',
	main: Test9
});

results.push(test9.run());

/**
 * Test 10: Selection using nested tag selector (depth 4)
 */

function Test10() {
	styleTag.textContent =
	'div div div span { color: red; }';
}

var test10 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 10: Selection using nested tag selector (depth: 4)',
	main: Test10
});

results.push(test10.run());

/**
 * Test 11: Selection using nested tag selector (depth 3)
 */

function Test11() {
	styleTag.textContent =
	'div div span { color: red; }';
}

var test11 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 11: Selection using nested tag selector (depth: 3)',
	main: Test11
});

results.push(test11.run());

/**
 * Test 12: Selection using nested tag selector (depth 2)
 */

function Test12() {
	styleTag.textContent =
	'div span { color: red; }';
}

var test12 = new Test({
	setup: setup,
	destroy: destroy,
	description: 'Test 12: Selection using nested tag selector (depth: 2)',
	main: Test12
});

results.push(test12.run());

console.log(results);
