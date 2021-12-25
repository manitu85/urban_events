import { Flex, Text } from '@chakra-ui/react';

export default function Footer() {
	return (
		<Flex as='footer' justify='center' w='full' textAlign='center' py={16}>
			<Text
				as='span'
				bgGradient='linear(to-r, #495057, #D00000, #495057)'
				bgClip='text'
				fontSize={14}
				fontWeight='bold'
			>
				{' '}
				Copyright &copy; Urbanants {new Date().getFullYear()}{' '}
			</Text>
		</Flex>
	);
}
