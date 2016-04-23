/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Action.html';

	registerSuite({
		name: 'functional/buttons/Action',

		'should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findByClassName('action')
				.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'ACTION', 'text content should be equal');
			});
		}
	});
});