/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './FullPrimary.html';

	registerSuite({
		name: 'functional/buttons/FullPrimary',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-primary-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-full primary button', 'values should be equal');
			});
		},

		'it should have the orch-full and primary class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-primary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-full', 'class names should include orch-full');
				assert.include(className, 'primary', 'class names should include primary');
			});
		}
	});
});