/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PrimaryNegative.html';

	registerSuite({
		name: 'functional/buttons/PrimaryNegative',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-negative-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'primary negative button', 'values should be equal');
			});
		},

		'should have the primary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-negative-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'primary', 'class names should include primary');
				assert.include(className, 'negative', 'class names should include negative');
			});
		}
	});
});