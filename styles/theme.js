import { extendTheme } from '@chakra-ui/react';

import { colors, fonts } from './base';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
};

const customTheme = extendTheme({ config, fonts, colors });

export default customTheme;
