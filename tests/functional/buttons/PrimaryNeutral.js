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
				.findById('primary-neutral-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-primary neutral button', 'values should be equal');
			});
		},

		'should have the orch-primary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-primary', 'class names should include orch-primary');
				assert.include(className, 'neutral', 'class names should include neutral');
			});
		}
	});
});