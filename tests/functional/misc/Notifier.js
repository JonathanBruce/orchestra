/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Notifier.html';

	registerSuite({
		name: 'functional/misc/Notifier',

		'it should be able to display its disabled state': function () {
			return this.remote.get(require.toUrl(url))
				.findById('notifier')
				.findByClassName('inactive')
				.findByClassName('orch-notifier')
				.getAttribute('class')
				.then(function (classNames) {
					assert.include(classNames, 'orch-notifier clearfix disabled', 'class name should include disabled and orch-notifier');
				});
		},

		'it should be able to prevent click events when disabled': function () {
			return this.remote.get(require.toUrl(url))
				.findById('notifier')
				.findByClassName('inactive')
				.findByClassName('orch-notifier')
					.click()
					.catch(function() {
						assert.isOk(true, 'should reach this catch block');
					})
					.end()
				.end()
				.findById('clicked')
				.getVisibleText()
				.then(function (value) {
					assert.include(value, 'Not Clicked', 'values should match');
				})
		},

		'it should be able to enable on click events': function () {
			return this.remote.get(require.toUrl(url))
				.findById('notifier')
				.findByClassName('active')
				.findByClassName('orch-notifier')
					.click()
					.end()
				.end()
				.findById('clicked')
				.getVisibleText()
				.then(function (value) {
					assert.include(value, 'Clicked!', 'values should match');
				});
		},

		'it should render correct notifier value': function () {
			return this.remote.get(require.toUrl(url))
				.findById('notifier')
				.findByClassName('active')
				.findByClassName('orch-notifier')
				.findByClassName('value')
				.getVisibleText()
				.then(function (text) {
					assert.equal(text, '3', 'text content should be equal');
				});
		}
	});
});