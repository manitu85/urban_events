import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
					<Main />
					<NextScript />
					{/* eslint-disable-next-line react/self-closing-comp */}
					<div id='modal-root'></div>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
