import {
	Flex,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export default function Showcase() {
	const headingColor = useColorModeValue(
		'linear(to-r, #D00000, #F8F9FA, #D00000)',
		'linear(to-r, #ff4d05, #FFEA00, #ff4d05)'
	);

	return (
		<Stack direction='column' w='full'>
			<Flex
				h='350px'
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
					bg: 'hsla(0, 0%, 0%, 0.7)',
				}}
			>
				<Heading
					as='h1'
					bgGradient={headingColor}
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
					Guide through the alternative cultures and dj parties
				</Text>
			</Flex>
		</Stack>
	);
}
