/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/SecondaryNeutral',

		'should have the secondary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'secondary neutral', 'class names should be equal');
			});
		}
	});
});