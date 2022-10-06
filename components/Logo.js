import {
	Image,
	LinkBox,
	LinkOverlay,
	useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Logo(props) {
	const headingColor = useColorModeValue(
		'linear(to-r, base.400, brand.700, base.500)',
		'linear(to-r, brand.500, brand.100, brand.500)'
	);

	return (
		<LinkBox
			display='flex'
			alignItems='center'
			textTransform='uppercase'
			cursor='pointer'
			{...props}
		>
			<NextLink href='/' passHref>
				<LinkOverlay
					bgGradient={headingColor}
					bgClip='text'
					fontSize={16}
					fontWeight='extrabold'
				>
					Urbanants{' '}
				</LinkOverlay>
			</NextLink>
			<Image src='images/ant_logo.png' alt='logo' w='42px' h='42px' ml={2} />
		</LinkBox>
	);
}
