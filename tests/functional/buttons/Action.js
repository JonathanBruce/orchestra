/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Action.html';

	registerSuite({
		name: 'functional/buttons/Action',

		'should have the action class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('action-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'action', 'class names should be equal');
			});
		},

		'should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findById('action-button')
					.findByTagName('button')
					.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'ACTION', 'text content should be equal');
			});
		}
	});
});