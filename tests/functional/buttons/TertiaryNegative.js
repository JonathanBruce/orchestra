/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryNegative.html';

	registerSuite({
		name: 'functional/buttons/TertiaryNegative',

		'should have the tertiary and negative class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-negative-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'tertiary negative', 'class names should be equal');
			});
		}
	});
});