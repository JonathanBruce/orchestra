/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './SecondaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/SecondaryNeutral',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-neutral-button')
					.findByTagName('button')
					.click()
					.end()
					.findByClassName('text')
					.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'orch-secondary neutral button', 'values should be equal');
			});
		},

		'should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-neutral-button')
					.findByTagName('button')
						.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'should have the orch-secondary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('secondary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-secondary', 'class names should include orch-secondary');
				assert.include(className, 'neutral', 'class names should include neutral');
			});
		}
	});
});