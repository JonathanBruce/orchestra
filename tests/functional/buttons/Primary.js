/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Primary.html';

	registerSuite({
		name: 'functional/buttons/Primary',

		'should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findByClassName('primary')
				.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'PRIMARY', 'text content should be equal');
			});
		}
	});
});