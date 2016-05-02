/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PrimaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/PrimaryNeutral',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('primary-neutral-button')
						.findByTagName('button')
						.click()
						.end()
						.findByClassName('text')
						.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'primary neutral button', 'values should be equal');
			});
		},

		'should have the primary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary neutral', 'class names should be equal');
			});
		}
	});
});