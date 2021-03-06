/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Input.html';

	registerSuite({
		name: 'functional/form/Input',

		'it should be able to disable input': function () {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-input')
					.findByClassName('orch-input')
						.findByTagName('input')
							.getProperty('disabled')
				.then(function (value) {
					assert.equal(value, true, 'values should be equal');
				});
		},

		'it should allow default value': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-input')
					.findByClassName('orch-input')
						.findByTagName('input')
							.getAttribute('value')
				.then(function (value) {
					assert.equal(value, 'Default Value', 'values should be equal');
				});
		},

		'it should allow editing of value': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-input')
					.findByClassName('orch-input')
						.findByTagName('input')
							.click()
							.clearValue()
							.type('Test')
							.getProperty('value')
				.then(function (value) {
					assert.equal(value, 'Test', 'values should be equal');
				});
		},

		'it should allow a placeholder': function () {
			return this.remote.get(require.toUrl(url))
				.findById('placeholder-input')
					.findByClassName('orch-input')
						.findByTagName('input')
							.getProperty('placeholder')
				.then(function (value) {
					assert.equal(value, 'Username', 'placeholders should be equal');
				});
		}
	});
});