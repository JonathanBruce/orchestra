/* eslint-disable no-console */
/* eslint-env node */

'use strict';

const fs = require('fs');
const path = require('path');
const spawn = require('child_process').spawn;
const mkdirp = require('mkdirp');
const removeIconsDir = spawn('rm', [ '-rf', './src/icons' ]);

function buildClassDefinition(className, body) {
	return `
/* eslint-disable */

class ${className} extends React.Component {
	render() {
		return (
			${body}
		);
	}
};

export default ${className};
`;
}

function capitalize(str) {
	return str[ 0 ].toUpperCase() + str.substring(1);
}

function capitalizeWithHyphens(str, index) {
	return str.substring(0, index) + str[ index + 1 ].toUpperCase() + str.substring(index + 2);
}

function buildIcons() {
	fs.readdir(path.join(`${__dirname}/../svg`), (readDirErr, files) => {
		if (readDirErr) {
			throw new Error(readDirErr);
		}

		for (const file of files) {
			if (file.startsWith('.')) {
				continue;
			}

			fs.readFile(path.join(`${__dirname}/../svg/${file}`), (readFileErr, data) => {
				if (readFileErr) {
					throw new Error(readFileErr);
				}

				let className;
				const hyphens = file.match(/-/g);

				if (hyphens && hyphens.length) {
					for (const hyphen of hyphens) {
						const index = className ? className.indexOf(hyphen) : file.indexOf(hyphen);

						className = capitalizeWithHyphens(className ? className : file, index);
					}
				}

				className = capitalize(className ? className : file).replace('.svg', '');

				const svg = data.toString().replace(/"/g, '\'');
				const classDefinition = buildClassDefinition(className, svg);

				fs.writeFile(`${__dirname}/../icons/${className}.jsx`, classDefinition, (writeFileErr) => {
					if (writeFileErr) {
						throw new Error(writeFileErr);
					}

					console.log(`${className}.jsx file created!`);
				});
			});
		}
	});
}

removeIconsDir.on('close', () => {
	mkdirp(`${__dirname}/../icons/`, (err) => {
		if (err) {
			throw new Error(err);
		}

		const svgMinify = spawn('./node_modules/svgo/bin/svgo', [ '-f', 'src/svg/' ]);

		svgMinify.on('close', () => {
			buildIcons();
		});
	});
});
