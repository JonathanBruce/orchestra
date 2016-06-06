/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/TertiaryNeutral',

		'it should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-neutral-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-tertiary neutral button', 'values should be equal');
			});
		},

		'it should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-neutral-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'it should have the orch-tertiary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-tertiary', 'class names should include orch-tertiary');
				assert.include(className, 'neutral', 'class names should include neutral');
			});
		}
	});
});