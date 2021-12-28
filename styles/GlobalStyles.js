import { css, Global } from '@emotion/react';
import Head from 'next/head';
import React from 'react';

const GlobalStyle = ({ children }) => {
	return (
		<>
			<Head>
				<meta content='width=device-width, initial-scale=1' name='viewport' />
			</Head>
			<Global
				styles={css`
					html {
						scroll-behavior: smooth;
					}
					#__next {
						min-height: 100vh;
						border-top: 5px solid #e2113e;
					}
					body {
						font-family: 'Open Sans';
					}
					ul {
						list-style: none;
					}
				`}
			/>
			{children}
		</>
	);
};

export default GlobalStyle;
