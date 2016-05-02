/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryButton.html';

	registerSuite({
		name: 'functional/base/TertiaryButton',

		'should have the tertiary class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'tertiary', 'class names should be equal');
			});
		}
	});
});