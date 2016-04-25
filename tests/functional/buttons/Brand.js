/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Brand.html';

	registerSuite({
		name: 'functional/buttons/Brand',

		'should have the brand class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('brand-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'brand', 'class names should be equal');
			});
		}
	});
});