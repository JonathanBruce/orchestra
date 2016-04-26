/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PrimaryPositive.html';

	registerSuite({
		name: 'functional/buttons/PrimaryPositive',

		'should have the primary and positive class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-positive-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary positive', 'class names should be equal');
			});
		}
	});
});