/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Slider.html';

	registerSuite({
		name: 'functional/form/Slider',

		'it should be able to update slider\'s position when anywhere in the track is clicked': function () {
			return this.remote.get(require.toUrl(url))
				.findById('slider')
					.findByClassName('slider')
						.moveMouseTo(75, 0)
						.click()
						.end()
					.end()
				.end()
				.findById('display-value')
				.getVisibleText()
				.then(function(value) {
					assert.equal(value, '10', 'value should match corresponding to the position of the slider');
				});
		},
		'it should be able to have the slider draggable and update values': function() {
			return this.remote.get(require.toUrl(url))
				.findById('slider')
					.findByClassName('slider')
						.moveMouseTo(75, 0)
						.click()
						.end()
					.end()
				.end()
				.findById('display-value')
				.getVisibleText()
				.then(function(value) {
					assert.equal(value, '10', 'value should match corresponding to the position of the slider');
				});
		},
		'it should be able to increment/decrement the slider by intervals': function () {
			return this.remote.get(require.toUrl(url))
				.findById('slider')
					.findByClassName('slider')
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
		'it should be able to override existing slider values by changing the prop': function () {
			return this.remote.get(require.toUrl(url))
				.findById('slider')
					.findById('adjusting-value-input')
					.type('20')
					.end()
				.findByClassName('orch-slider')
					.findByClassName('knob')
					.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 150, 1, 'position should reflect the changed values');
				});
		},
		'it should be able to update the slider value from the built-in input': function() {
			return this.remote.get(require.toUrl(url))
				.findByClassName('orch-input')
					.findByTagName('input')
						.type('20')
					.end()
				.end()
				.findByClassName('orch-slider')
					.findByClassName('knob')
					.getPosition()
				.then(function(position) {
					assert.closeTo(position.x, 150, 1, 'position should reflect the changed values');
				});
		},
		'it should be able to switch event listeners on and off when disabled state is changed': function() {
			return this.remote.get(require.toUrl(url))
				.findById('toggle-disabled')
					.click()
				.end()
				.findById('slider')
					.findByClassName('slider')
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
						assert.equal(value, '', 'value should not have been set at all');
					})
				.end()
				.findById('toggle-disabled')
					.click()
				.end()
				.findById('slider')
					.findByClassName('slider')
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
		}
	});
});