/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PrimaryButton.html';

	registerSuite({
		name: 'functional/base/PrimaryButton',

		'should be able to add other attributes': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-button-data-foo')
					.findByTagName('button')
					.getAttribute('data-foo')
			.then(function (foo) {
				assert.equal(foo, 'foo', 'data-foo states should be equal');
			});
		},

		'should have the primary class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('primary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'primary', 'class names should be equal');
			});
		},

		'should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findByTagName('button')
				.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'PRIMARY', 'text content should be equal');
			});
		}
	});
});