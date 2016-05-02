/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './TertiaryNeutral.html';

	registerSuite({
		name: 'functional/buttons/TertiaryNeutral',

		'should allow onClick events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('tertiary-neutral-button')
						.findByTagName('button')
						.click()
						.end()
						.findByClassName('text')
						.getVisibleText()
			.then(function (value) {
				assert.equal(value, 'tertiary neutral button', 'values should be equal');
			});
		},

		'should be able to take an icon property': function () {
			return this.remote.get(require.toUrl(url))
				.findById('test')
					.findById('tertiary-neutral-button')
						.findByTagName('button')
							.findByTagName('svg')
			.then(function (svg) {
				assert.isNotNull(svg, 'svg should not be null');
			});
		},

		'should have the tertiary and neutral class by default': function () {
			return this.remote.get(require.toUrl(url))
				.findById('tertiary-neutral-button')
					.findByTagName('button')
					.getAttribute('class')
			.then(function (className) {
				assert.equal(className, 'tertiary neutral', 'class names should be equal');
			});
		}
	});
});