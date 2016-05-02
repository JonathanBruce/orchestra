/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Brand.html';

	registerSuite({
		name: 'functional/buttons/Brand',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('brand-button')
						.findByTagName('button')
						.click()
						.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'active primary brand', 'class names should be equal');
			});
		},

		'should have the primary and brand class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('brand-button')
						.findByTagName('button')
						.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary brand', 'class names should be equal');
			});
		}
	});
});