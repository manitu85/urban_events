import '@/styles/globals.scss';

import { AuthProvider } from '@/context/AuthContext';

const MyApp = function ({ Component, pageProps }) {
	return (
		<AuthProvider>
			<Component {...pageProps} />;
		</AuthProvider>
	);
};

export default MyApp;
