/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Generic.html';

	registerSuite({
		name: 'functional/form/Generic',

		'it shouldn\'t be able to open a disabled generic'() {
			return this.remote.get(require.toUrl(url))
				.findById('disabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('selector')
							.click()
						.end()
					.findByClassName('orch-menu')
					.catch(function (value) {
						assert.typeOf(value, 'error', 'error should be thrown');
					});
		},

		'it should be able to change an enabled generic'() {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('selector')
							.click()
						.end()
						.findByClassName('orch-menu')
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

		'it should be able to close a generic by clicking away from it.'() {
			return this.remote.get(require.toUrl(url))
				.findById('enabled-dropdown')
					.findByClassName('orch-dropdown')
						.findByClassName('orch-menu')
							.click()
							.end(3)
				.findByTagName('body')
					.click()
					.end()
				.findByClassName('enabled-dropdown')
					.findByClassName('orch-menu')
					.catch(function (value) {
						assert.typeOf(value, 'error', 'error should be thrown');
					});
		}
	});
});