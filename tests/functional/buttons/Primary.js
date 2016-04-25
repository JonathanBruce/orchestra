/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Primary.html';

	registerSuite({
		name: 'functional/buttons/Primary',

		'should have the primary class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary', 'class names should be equal');
			});
		}
	});
});