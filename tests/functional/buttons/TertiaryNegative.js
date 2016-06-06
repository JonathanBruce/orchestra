/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryNegative.html';

	registerSuite({
		name: 'functional/buttons/TertiaryNegative',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-negative-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-tertiary negative button', 'values should be equal');
			});
		},

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-negative-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-tertiary and negative class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-negative-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-tertiary', 'class names should include orch-tertiary');
				assert.include(className, 'negative', 'class names should include negative');
			});
		}
	});
});