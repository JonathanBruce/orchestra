/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PrimaryPositive.html';

	registerSuite({
		name: 'functional/buttons/PrimaryPositive',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-positive-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-primary positive button', 'values should be equal');
			});
		},

		'should have the orch-primary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-primary', 'class names should include orch-primary');
				assert.include(className, 'positive', 'class names should include positive');
			});
		}
	});
});