import React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from '../styles/themes/MainTheme';

//Import global CSS
import '../styles/globals.css';
import '../styles/stars.css';
import { DarkTheme } from '../styles/themes/DarkTheme';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossOrigin="anonymous"/>
				<link rel="preconnect" href="https://fonts.gstatic.com"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap" rel="stylesheet"></link>
			</Head>
			<ThemeProvider theme={MainTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp;