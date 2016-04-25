/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Male.html';

	registerSuite({
		name: 'functional/buttons/Male',

		'should have the male class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('male-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'male', 'class names should be equal');
			});
		}
	});
});