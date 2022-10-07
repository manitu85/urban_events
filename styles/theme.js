import { extendTheme } from '@chakra-ui/react';

import { breakpoints, colors, fonts } from './base';
import { Button, Card, Container, Heading } from './components';

const config = {
	initialColorMode: 'light',
	useSystemColorMode: true,
};

const customTheme = extendTheme({
	components: {
		Card,
		Container,
		Heading,
		Button,
	},
	fonts,
	colors,
	breakpoints,
	config,
});

export default customTheme;
