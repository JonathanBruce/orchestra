/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Checkbox.html';

	registerSuite({
		name: 'functional/form/Checkbox',

		'it should be able to disable checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByTagName('input')
							.getProperty('disabled')
				.then(function (value) {
					assert.equal(value, true, 'values should be equal');
				});
		},

		'it should be able to uncheck an checked and enabled checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByTagName('input')
						.moveMouseTo(2, 2)
						.end()
						.click()
					.end()
				.findByClassName('text')
				.getVisibleText()
				.then(function (value) {
					assert.equal(value, 'false', 'values should be equal');
				});
		},

		'it should be able to check an unchecked and enabled checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByTagName('input')
						.moveMouseTo(2, 2)
						.end()
						.click()
						.click()
					.end()
				.findByClassName('text')
				.getVisibleText()
				.then(function (value) {
					assert.equal(value, 'true', 'values should be equal');
				});
		}
	});
});