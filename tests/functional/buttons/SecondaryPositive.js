/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryPositive.html';

	registerSuite({
		name: 'functional/buttons/SecondaryPositive',

		'should have the secondary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'secondary positive', 'class names should be equal');
			});
		}
	});
});