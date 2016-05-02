/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryButton.html';

	registerSuite({
		name: 'functional/base/SecondaryButton',

		'should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-button')
					.findByTagName('button')
					.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'should have the secondary class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'secondary', 'class names should be equal');
			});
		}
	});
});