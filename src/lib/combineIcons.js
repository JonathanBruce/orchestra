/* eslint-disable no-console */
/* eslint-env node */

'use strict';

const fs = require('fs');
const path = require('path');

function buildAll(importsStr, exportsStr) {
	return `${importsStr}
const Icons = {\n${exportsStr}};

export default Icons;
`;
}

function buildImportStatement(component, fileName) {
	return `import ${component} from 'icons/${fileName}';`;
}

function combineIcons() {
	fs.readdir(path.join(`${__dirname}/../icons`), (readDirErr, files) => {
		let importsStr = '';
		let exportsStr = '';

		for (const file of files) {
			if (file !== '_all.js') {
				const component = file.replace('.jsx', '');
				const importStatement = buildImportStatement(component, file);

				importsStr += `${importStatement}\n`;
				exportsStr += `	${component},\n`;
			}
		}

		const lastComma = exportsStr.lastIndexOf(',');

		exportsStr = `${exportsStr.substr(0, lastComma)}\n`;

		fs.writeFile(`${__dirname}/../icons/_all.js`, buildAll(importsStr, exportsStr), () => {
			console.log('_all.js built!');
		});
	});
}

combineIcons();