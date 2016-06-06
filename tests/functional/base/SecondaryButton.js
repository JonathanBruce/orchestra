/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryButton.html';

	registerSuite({
		name: 'functional/base/SecondaryButton',

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-button')
					.findByTagName('button')
					.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-secondary class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-secondary', 'class name should include orch-secondary');
			});
		}
	});
});