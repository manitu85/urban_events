/* eslint-disable prefer-spread */
import { Box, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { routeToTop } from '@/helpers/index';

export default function Footer() {
	const router = useRouter();

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
