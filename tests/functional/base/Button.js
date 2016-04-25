/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Button.html';

	registerSuite({
		name: 'functional/base/Button',

		'should have no default class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('base-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, null, 'class names should be equal');
			});
		},

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