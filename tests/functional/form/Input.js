/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Input.html';

	registerSuite({
		name: 'functional/form/Input',

		'should be able to disable input': function () {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-input')
					.findByClassName('input')
						.findByTagName('input')
							.getProperty('disabled')
				.then(function (value) {
					assert.equal(value, true, 'values should be equal');
				});
		},

		'should allow default value': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-input')
					.findByClassName('input')
						.findByTagName('input')
							.getAttribute('value')
				.then(function (value) {
					assert.equal(value, 'Default Value', 'values should be equal');
				});
		},

		'should allow editing of value': function () {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-input')
					.findByClassName('input')
						.findByTagName('input')
							.click()
							.clearValue()
							.type('A New Default Value')
							.getProperty('value')
				.then(function (value) {
					assert.equal(value, 'A New Default Value', 'values should be equal');
				});
		},

		'should allow a placeholder': function () {
			return this.remote.get(require.toUrl(url))
				.findById('placeholder-input')
					.findByClassName('input')
						.findByTagName('input')
							.getProperty('placeholder')
				.then(function (value) {
					assert.equal(value, 'Username', 'placeholders should be equal');
				});
		}
	});
});