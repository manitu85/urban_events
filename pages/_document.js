import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

import customTheme from '@/styles/theme';

class Document extends NextDocument {
	static async getInitialProps(ctx) {
		const initialProps = await NextDocument.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap'
						rel='stylesheet'
					/>
					<link
						href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<body>
					<ColorModeScript
						initialColorMode={customTheme.config.initialColorMode}
					/>
					<Main />
					<NextScript />
					{/* eslint-disable-next-line react/self-closing-comp */}
					<div id='modal-root'></div>
				</body>
			</Html>
		);
	}
}

export default Document;
