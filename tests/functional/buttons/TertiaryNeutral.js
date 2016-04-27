/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/TertiaryNeutral',

		'should have the tertiary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'tertiary neutral', 'class names should be equal');
			});
		}
	});
});