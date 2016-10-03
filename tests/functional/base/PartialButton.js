/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PartialButton.html';

	registerSuite({
		name: 'functional/base/PartialButton',

		'it should have the orch-partial class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('partial-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-partial', 'class name should include orch-partial');
			});
		}
	});
});