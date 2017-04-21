/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './KeywordTag.html';

	registerSuite({
		name: 'functional/search/KeywordTag',

		'it should not enter edit state if uneditable': function () {
			return this.remote.get(require.toUrl(url))
				.findById('uneditable')
					.findByClassName('orch-keyword-tag')
						.findByClassName('keyword')
							.click()
							.end()
						.getAttribute('class')
			.then(function (className) {
				assert.notInclude(className, 'edit', 'class names should not include edit once clicked if not editable');
			});
		},

		'it should not have network and requirement if thumbnail present': function () {
			return this.remote.get(require.toUrl(url))
				.findById('thumbnail-trump')
					.findByClassName('orch-keyword-tag')
					.getAttribute('class')
			.then(function (className) {
				assert.notInclude(className, 'network-and-requirement', 'class names should not include network-and-requirement');
			});
		},

		'it should allow onPreviewClick if property is defined': function () {
			return this.remote.get(require.toUrl(url))
				.findById('preview-click-exists')
					.findByClassName('orch-keyword-tag')
						.findByClassName('keyword')
							.click()
							.end()
						.end()
					.end()
				.findById('preview-clicked')
				.getVisibleText()
			.then(function (value) {
				assert.include(value, 'Clicked!', 'values should match');
			});
		},

		'it should do nothing if uneditable and onPreviewClick property is undefined': function () {
			return this.remote.get(require.toUrl(url))
				.findById('preview-click-doesnt-exist')
					.findByClassName('orch-keyword-tag')
						.findByClassName('keyword')
							.click()
						.end()
					.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'disabled', 'class names should include disabled regardless');
			});
		},

		'it should not have a delete X if onDelete does not exist': function () {
			return this.remote.get(require.toUrl(url))
				.findById('delete-doesnt-exist')
					.findByClassName('orch-keyword-tag')
			.catch(function (error) {
				assert.isEqual(error.name, 'NoSuchElement');
			});
		},

		'it should have a delete X if onDelete exists': function () {
			return this.remote.get(require.toUrl(url))
				.findById('delete-exists')
					.findByClassName('orch-keyword-tag')
						.findByClassName('delete')
			.then(function (node) {
				assert.isDefined(node, 'node should exist');
			});
		},

		'it should have selected class if selected': function () {
			return this.remote.get(require.toUrl(url))
				.findById('selected')
					.findByClassName('orch-keyword-tag')
						.getAttribute('class')
			.then(function (className) {
				assert.include(className, 'selected', 'class name should have selected if boolean is present');
			});
		}
	});
});