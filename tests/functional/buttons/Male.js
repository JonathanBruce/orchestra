/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Male.html';

	registerSuite({
		name: 'functional/buttons/Male',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('male-button')
					.findByTagName('button')
					.click()
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'active orch-primary male', 'class names should be equal');
			});
		},

		'it should have the orch-primary and male class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('male-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'orch-primary male', 'class names should be equal');
			});
		}
	});
});