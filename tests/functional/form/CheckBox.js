/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './CheckBox.html';

	registerSuite({
		name: 'functional/form/CheckBox',

		'it should be able to disable the checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByClassName('checkbox')
							.findByTagName('input')
							.getProperty('disabled')
				.then(function (value) {
					assert.equal(value, true, 'values should be equal');
				});
		},

		'it shouldn\'t be able to check a disabled checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByClassName('checkbox')
							.findByTagName('input')
							.click()
							.catch(function (value) {
								assert.typeOf(value, 'error', 'error should be thrown');
							});
		},

		'it should be able to uncheck a checked and enabled checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByClassName('checkbox')
							.findByTagName('input')
							.moveMouseTo(2, 2)
							.end()
							.click()
						.end()
					.end()
				.findByClassName('enabled-text')
				.getVisibleText()
				.then(function (value) {
					assert.equal(value, 'false', 'values should be equal');
				});
		},

		'it should be able to check an unchecked and enabled checkbox': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-checkbox')
					.findByClassName('orch-checkbox')
						.findByClassName('checkbox')
							.findByTagName('input')
							.moveMouseTo(2, 2)
							.end()
							.click()
							.click()
						.end()
					.end()
				.findByClassName('enabled-text')
				.getVisibleText()
				.then(function (value) {
					assert.equal(value, 'true', 'values should be equal');
				});
		}
	});
});