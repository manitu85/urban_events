import { extendTheme } from '@chakra-ui/react';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const fonts = {
	fonts: {
		body: '"Open Sans", sans-serif',
		heading: '"Inter", sans-serif',
	},
	fontWeights: {
		normal: 400,
		medium: 600,
		bold: 700,
		extrabold: 800,
	},
};

const colors = {
	brand: {
		100: '#FFEA00',
		200: '#FFD000',
		300: '#FFBA08',
		400: '#FAA307',
		500: '#E85D04',
		600: '#D00000',
		700: '#9D0208',
		800: '#6a040f',
		900: '#370617ff',
	},
	base: {
		100: '#F8F9FA',
		200: '#E9ECEF',
		300: '#CED4DA',
		400: '#495057',
		500: '#343A40',
		600: '#212529',
		700: '#03071eff ',
		800: '#202020',
		900: '#000',
	},
};

const customTheme = extendTheme({ config, fonts, colors });

export default customTheme;
