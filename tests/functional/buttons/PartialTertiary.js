/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './PartialTertiary.html';

	registerSuite({
		name: 'functional/buttons/PartialTertiary',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('partial-tertiary-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-partial tertiary button', 'values should be equal');
			});
		},

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('partial-tertiary-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-partial and tertiary class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('partial-tertiary-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-partial', 'class names should include orch-partial');
				assert.include(className, 'tertiary', 'class names should include tertiary');
			});
		}
	});
});