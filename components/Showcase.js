import { Flex, Heading, Stack, Text } from '@chakra-ui/react';

// import styles from '@/styles/Showcase.module.scss';

export default function Showcase() {
	return (
		<Stack direction='column' w='full'>
			<Flex
				h='400px'
				w='100%'
				direction='column'
				align='center'
				justify='center'
				textAlign='center'
				pos='relative'
				backgroundImage="url('/images/showcase.png')"
				backgroundPosition='center'
				backgroundRepeat='no-repeat'
				_after={{
					content: '""',
					pos: 'absolute',
					top: 0,
					left: 0,
					w: '100%',
					h: '100%',
					bg: 'hsla(0, 0%, 0%, 0.5)',
				}}
			>
				<Heading
					as='h1'
					bgGradient='linear(to-r, #495057, #D00000, #495057)'
					bgClip='text'
					fontSize={[20, 28, 38]}
					textTransform='uppercase'
					fontWeight='extrabold'
					letterSpacing='2px'
					mb={2}
					zIndex='20'
				>
					Urbanants
				</Heading>
				<Text color='base.100' fontSize={18} fontWeight='bold' zIndex='20'>
					Guide through the alternative culture and dj parties
				</Text>
			</Flex>
		</Stack>
	);
}
