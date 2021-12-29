/* eslint-disable prefer-spread */
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();
	// eslint-disable-next-line no-shadow
	const routeToTop = (router, ...args) => {
		if (typeof window !== 'undefined') window.scrollTo(0, 0);
		return router.push.apply(router, args);
	};

	const color = useColorModeValue('base.300', 'brand.500');

	return (
		<Box
			as='footer'
			w='full'
			color={useColorModeValue('base.600', 'base.100')}
			fontWeight='bold'
			py={10}
		>
			<Flex
				align='center'
				textAlign='center'
				_before={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: color,
					flexGrow: 1,
					mr: 8,
				}}
				_after={{
					content: '""',
					borderBottom: '1px solid',
					borderColor: color,
					flexGrow: 1,
					ml: 8,
				}}
			>
				<Image
					onClick={() => routeToTop(router, '/')}
					src='images/ant_logo.png'
					cursor='pointer'
					w={42}
					h={42}
				/>
			</Flex>
			<Text pt={6} fontSize='md' textAlign='center'>
				Copyright &copy; Urbanants {new Date().getFullYear()}{' '}
			</Text>
		</Box>
	);
}
