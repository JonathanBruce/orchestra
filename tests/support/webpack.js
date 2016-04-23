/* eslint-env node */

var path = require('path');
var registry = require('../registry');

module.exports = function (directory) {
	var files = registry.files;
	var entries = {};
	var i;

	for (i = 0; i < files.length; i += 1) {
		var file = files[ i ];

		entries[ file ] = path.join(directory, file + '.jsx');
	}

	return entries;
};