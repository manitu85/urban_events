const path = require('path');

// Fix: Next js eslint
const buildEslintCommand = filenames =>
	`yarn lint:fix ${filenames
		.map(f => path.relative(process.cwd(), f))
		.join(' ')}`;

// Format
const buildFormatCommand = filenames =>
	filenames.map(filename => `yarn format '${filename}'`);

const prettierCheck = 'yarn prettier';

module.exports = {
	'**/*.{js,jsx}': buildEslintCommand,
	'**/*.{js,jsx,json,md,mdx}': [prettierCheck, buildFormatCommand],
};

// Bug: Next js recommended lint-staged with --file param on Windows WSL2: Ubuntu doesn't work, probably the path is wrong
// module.exports = {
// 	'**/*.js?(x)': filenames =>
// 		`next lint --cache --fix --file ${filenames
// 			.map(file => file.split(process.cwd())[1])
// 			.join(' --file ')}`,
// };

// https://nextjs.org/docs/basic-features/eslint#lint-staged
