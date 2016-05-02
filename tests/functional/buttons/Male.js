/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Male.html';

	registerSuite({
		name: 'functional/buttons/Male',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('male-button')
						.findByTagName('button')
						.click()
						.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'active primary male', 'class names should be equal');
			});
		},

		'should have the primary and male class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('male-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary male', 'class names should be equal');
			});
		}
	});
});