import { Box, Container } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import Footer from './Footer';
import Header from './Header';
import Showcase from './Showcase';

export default function Layout({ children }) {
	const router = useRouter();
	return (
		<Container maxW={{ xl: '1100px' }} centerContent>
			<Header />
			{router.pathname === '/' && <Showcase />}
			<Box as='main' my={22}>
				{children}
			</Box>
			<Footer />
		</Container>
	);
}
