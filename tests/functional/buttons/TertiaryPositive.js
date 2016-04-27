/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryPositive.html';

	registerSuite({
		name: 'functional/buttons/TertiaryPositive',

		'should have the tertiary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'tertiary positive', 'class names should be equal');
			});
		}
	});
});