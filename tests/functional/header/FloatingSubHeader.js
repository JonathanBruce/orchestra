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
				.touchScroll(null, 0, 20)
					.findById('float-header')
						.findByClassName('orch-floating-sub-header')
							.getAttribute('class')
			.then(function (classNames) {
				assert.include(classNames, 'is-floating', 'class name should include is-floating on scroll down');
			});
		},

		'it should be able to render a non-floating class on scroll up': function () {
			return this.remote.get(require.toUrl(url))
				.findById('float-header')
					.touchScroll(null, 0, 100)
					.touchScroll(null, 0, -50)
						.findByClassName('orch-floating-sub-header')
							.getAttribute('class')
			.then(function (classNames) {
				assert.notInclude(classNames, 'is-floating', 'class name should not include is-floating on scroll up');
			});
		}
	});
});