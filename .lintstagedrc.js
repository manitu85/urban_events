const path = require('path');

// Fix: eslint next js
const buildEslintCommand = filenames =>
	`yarn lint:fix ${filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' ')}`;

const prettierCheck = 'yarn prettier';

const buildFormatCommand = filenames =>
	filenames.map(filename => `yarn format '${filename}'`);

// Format: MarkDown, JSON, Js, Jsx
module.exports = {
	'**/*.{js,jsx}': buildEslintCommand,
	'**/*.{js,jsx,json,md,mdx}': [prettierCheck, buildFormatCommand],
};

// Bug: Next js recommended with --file params on Windows WSL2: Ubuntu doesn't work
// module.exports = {
// 	'**/*.js?(x)': filenames =>
// 		`yarn lint:fix --file ${filenames
// 			.map(file => file.split(process.cwd())[1])
// 			.join(' --file ')}`,
// };
