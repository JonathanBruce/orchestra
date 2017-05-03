/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './RangeSlider.html';

	registerSuite({
		name: 'functional/form/RangeSlider',
		'it should be able to increment/decrement the left slider by intervals': function () {
			return this.remote.get(require.toUrl(url))
				.findById('range')
					.findByClassName('range')
						.moveMouseTo(0, 0)
						.pressMouseButton()
						.moveMouseTo(30, 0)
						.releaseMouseButton()
						.end()
					.end()
				.end()
				.findById('display-text')
					.getVisibleText()
					.then(function(value) {
						assert.equal(value, 'Released at 5', 'value should match corresponding to the position of the slider');
					});
		},

		'it should be able to increment/decrement the right slider by intervals': function () {
			return this.remote.get(require.toUrl(url))
				.findById('range')
					.findByClassName('range')
						.moveMouseTo(170, 0)
						.pressMouseButton()
						.moveMouseTo(160, 0)
						.releaseMouseButton()
						.end()
					.end()
				.end()
				.findById('display-text')
					.getVisibleText()
					.then(function(value) {
						assert.equal(value, 'Released at 20', 'value should match corresponding to the position of the slider');
					});
		},

		'it should be able to update the left slider value from the built-in input': function() {
			return this.remote.get(require.toUrl(url))
				.findById('range')
					.findByClassName('range-min')
						.findByTagName('input')
							.clearValue()
							.type('20')
						.end()
					.findByClassName('knob')
					.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 24, 1, 'position should reflect the changed values');
				});
		},

		'it should be able to update the right slider value from the built-in input': function() {
			return this.remote.get(require.toUrl(url))
				.findById('range')
					.findByClassName('range-max')
						.findByTagName('input')
							.clearValue()
							.type('20')
						.end()
					.findByClassName('knob')
					.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 205, 1, 'position should reflect the changed values');
				});
		}

	});
});