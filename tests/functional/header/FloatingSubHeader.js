/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './FloatingSubHeader.html';

	registerSuite({
		name: 'functional/header/FloatingSubHeader',

		'it should be able to render initial class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('float-header')
					.findByClassName('orch-floating-sub-header')
						.getAttribute('class')
			.then(function (classNames) {
				assert.include(classNames, 'init', 'class name should include init');
			});
		},

		'it should be able to render a floating class on scroll down': function () {
			return this.remote.get(require.toUrl(url))
				.touchScroll(null, 0, 100)
					.findById('float-header')
						.findByClassName('orch-floating-sub-header')
							.getAttribute('class')
			.then(function (classNames) {
				assert.include(classNames, 'floating', 'class name should include floating on scroll down');
			});
		},

		'it should be able to render a non-floating class on scroll up': function () {
			return this.remote.get(require.toUrl(url))
				.setWindowPosition(null, 0, 100)
				.touchScroll(null, 0, 0)
					.findById('float-header')
						.findByClassName('orch-floating-sub-header')
							.getAttribute('class')
			.then(function (classNames) {
				assert.notInclude(classNames, ' floating', 'class name should not include floating on scroll up');
			});
		}
	});
});