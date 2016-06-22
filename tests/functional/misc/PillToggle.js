/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PillToggle.html';

	registerSuite({
		name: 'functional/misc/PillToggle',

		'it should have the orch-pill-toggle': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByTagName('div')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-pill-toggle', 'class names should include orch-pill-toggle');
			});
		},

		'it should have the correct number of items': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByClassName('orch-pill-toggle')
						.findAllByClassName('item')
			.then(function (arr) {
				assert.equal(arr.length, 4, 'array length should match number of items');
			});
		},

		'it should not respond to click events on active items': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByClassName('orch-pill-toggle')
						.findByClassName('active')
						.click()
						.end()
					.end()
				.findByClassName('value')
				.getVisibleText()
			.then(function (value) {
				assert.equal(value, '', 'values should match');
			});
		},

		'it should respond to click events on non active items': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByClassName('orch-pill-toggle')
						.findByCssSelector('.item:not(.active)')
						.click()
						.end()
					.end()
				.findByClassName('value')
				.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'B', 'values should match');
			});
		},

		'it should render notification count on items': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByClassName('orch-pill-toggle')
						.findByCssSelector('.item:not(.active)')
							.findByClassName('notification')
							.getVisibleText()
			.then(function (count) {
				assert.equal(count, 1, 'count should match');
			});
		},

		'it should render notification color based on constant': function () {
			return this.remote.get(require.toUrl(url))
				.findById('pill-toggle')
					.findByClassName('orch-pill-toggle')
						.findByCssSelector('.item:not(.active)')
							.findByClassName('notification')
							.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'error', 'classes should match');
			});
		}
	});
});