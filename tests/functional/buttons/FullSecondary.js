/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './FullSecondary.html';

	registerSuite({
		name: 'functional/buttons/FullSecondary',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-secondary-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-full secondary button', 'values should be equal');
			});
		},

		'it should have the orch-full and secondary class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-secondary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-full', 'class names should include orch-full');
				assert.include(className, 'secondary', 'class names should include secondary');
			});
		}
	});
});