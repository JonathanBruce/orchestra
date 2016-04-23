/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Button.html';

	registerSuite({
		name: 'functional/base/Button',

		'should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findByTagName('button')
				.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'BASE', 'text content should be equal');
			});
		}
	});
});