/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryButton.html';

	registerSuite({
		name: 'functional/base/TertiaryButton',

		'should have the orch-tertiary class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-tertiary', 'class name should include orch-tertiary');
			});
		}
	});
});