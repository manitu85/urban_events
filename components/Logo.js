import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function Logo(props) {
	return (
		<Flex align='center' {...props}>
			<Image src='images/event-default.png' w='40px' h='40px' mr={4} />
			<Text fontSize='xl' fontWeight='bold'>
				Urban Ants{' '}
			</Text>
		</Flex>
	);
}
