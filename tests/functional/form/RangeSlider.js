/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Range.html';

	registerSuite({
		name: 'functional/form/Range',
		'it should be able to increment/decrement the left slider by intervals': function () {
			return this.remote.get(require.toUrl(url))
				.findById('range')
					.findByClassName('left')
						.moveMouseTo(0, 0)
						.pressMouseButton()
						.moveMouseTo(20, 0)
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
					.findByClassName('right')
						.moveMouseTo(0, 0)
						.pressMouseButton()
						.moveMouseTo(20, 0)
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

		'it should be able to update the left slider value from the built-in input': function() {
			return this.remote.get(require.toUrl(url))
				.findByClassName('left')
					.findByTagName('input')
						.type('20')
					.end()
				.findByClassName('orch-slider')
					.findByClassName('knob')
					.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 150, 1, 'position should reflect the changed values');
				});
		},

		'it should be able to update the right slider value from the built-in input': function() {
			return this.remote.get(require.toUrl(url))
				.findByClassName('right')
					.findByTagName('input')
						.type('20')
						.end()
					.findByClassName('orch-slider')
						.findByClassName('knob')
						.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 150, 1, 'position should reflect the changed values');
				});
		}

	});
});