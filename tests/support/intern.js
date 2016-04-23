/* eslint-env node */
/* eslint-disable no-undef, no-console */

var fs = require('fs');
var path = require('path');
var registry = require('../registry');
var sourceDir = process.argv[ 2 ];
var fileName = 'all.intern.js';
var files = registry.files;
var internTests = '';
var i;

function buildDefine(arr) {
	return '/* global define */\n\ndefine([\n' + arr + '\n]);';
}

for (i = 0; i < files.length; i += 1) {
	internTests += '	\'tests/' + files[ i ] + '\'';

	if (i !== files.length - 1) {
		internTests += ',\n';
	}
}

fs.writeFile(path.join(sourceDir, fileName), buildDefine(internTests), function (err) {
	if (err) {
		console.log(err);

		return;
	}

	console.log(fileName + ' was created successfully');
});
