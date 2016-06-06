/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryPositive.html';

	registerSuite({
		name: 'functional/buttons/TertiaryPositive',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-positive-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-tertiary positive button', 'values should be equal');
			});
		},

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-positive-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-tertiary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-tertiary positive', 'class name should include orch-tertiary');
				assert.include(className, 'positive', 'class name should include positive');
			});
		}
	});
});