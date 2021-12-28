import '@/styles/globals.scss';

import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';

import PageLayout from '@/components/Layout';
import { AuthProvider } from '@/context/AuthContext';
import GlobalStyle from '@/styles/GlobalStyles';
import customTheme from '@/styles/theme';

import SEO from '../next-seo.config';

const App = function ({ Component, pageProps }) {
	return (
		<ChakraProvider theme={customTheme}>
			<AuthProvider>
				<PageLayout>
					<DefaultSeo {...SEO} />
					<GlobalStyle />
					<Component {...pageProps} />;
				</PageLayout>
			</AuthProvider>
		</ChakraProvider>
	);
};

export default App;
