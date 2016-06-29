/* eslint-env amd */

define([
	'intern!object',
	'intern/chai!assert',
	'require'
], function (registerSuite, assert, require) {
	var url = './Column.html';

	registerSuite({
		name: 'functional/grid/Column',

		'it should be able to add the alpha class': function () {
			return this.remote.get(require.toUrl(url))
				.findById('column')
					.findByClassName('alpha')
						.findByClassName('orch-column')
							.getAttribute('class')
			.then(function (classNames) {
				assert.include(classNames, 'alpha', 'class name should include alpha');
			});
		}
	});
});