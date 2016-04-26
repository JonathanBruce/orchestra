/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Female.html';

	registerSuite({
		name: 'functional/buttons/Female',

		'should have the primary and female class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('female-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary female', 'class names should be equal');
			});
		}
	});
});