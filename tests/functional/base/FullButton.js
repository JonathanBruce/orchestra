/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './FullButton.html';

	registerSuite({
		name: 'functional/base/FullButton',

		'it should be able to add the active attribute': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-button')
					.findByClassName('active')
						.findByTagName('button')
						.getAttribute('class')
			.then(function (classNames) {
				assert.include(classNames, 'active orch-full', 'class name should include active and orch-full');
			});
		},

		'it should be able to add other attributes': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-button')
					.findByClassName('data-foo')
						.findByTagName('button')
						.getAttribute('data-foo')
			.then(function (foo) {
				assert.equal(foo, 'foo', 'data-foo states should be equal');
			});
		},

		'it should have the orch-full class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-button')
					.findByClassName('inactive')
						.findByTagName('button')
						.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'orch-full', 'class name should include orch-full');
			});
		},

		'it should render correct text': function () {
			return this.remote.get(require.toUrl(url))
				.findById('full-button')
					.findByClassName('inactive')
						.findByTagName('button')
						.getVisibleText()
			.then(function (text) {
				assert.equal(text, 'FULL', 'text content should be equal');
			});
		}
	});
});