/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './DropDown.html';

	registerSuite({
		name: 'functional/form/DropDown',

		'it shouldn\'t be able to open a disabled dropdown'() {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('selector')
							.click()
						.end()
					.findByClassName('list')
					.catch(function (value) {
						assert.typeOf(value, 'error', 'error should be thrown');
					});
		},

		'it should be able to change an enabled dropdown'() {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('selector')
							.click()
						.end()
						.findByClassName('list')
							.findByClassName('options')
								.findByCssSelector('div:last-child')
									.click()
								.end()
							.end()
						.end()
						.findByClassName('selector')
							.findByClassName('text')
							.getVisibleText()
							.then(function (value) {
								assert.equal(value, 'three', 'value should match one');
							});
		},

		'it should be able to close a dropdown by clicking away from it.'() {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('list')
							.click()
							.end(3)
				.findByTagName('body')
					.click()
					.end()
				.findByClassName('enabled-dropdown')
					.findByClassName('list')
					.catch(function (value) {
						assert.typeOf(value, 'error', 'error should be thrown');
					});
		}
	});
});