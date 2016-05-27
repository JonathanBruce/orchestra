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
				.findById('brand-button')
					.findByTagName('button')
					.click()
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'active orch-primary brand', 'class names should be equal');
			});
		},

		'should have the orch-primary and brand class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('brand-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'orch-primary brand', 'class names should be equal');
			});
		}
	});
});