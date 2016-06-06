/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryPositive.html';

	registerSuite({
		name: 'functional/buttons/SecondaryPositive',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-positive-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-secondary positive button', 'values should be equal');
			});
		},

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-positive-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-secondary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-secondary', 'class names should include orch-secondary');
				assert.include(className, 'positive', 'class names should include positive');
			});
		}
	});
});