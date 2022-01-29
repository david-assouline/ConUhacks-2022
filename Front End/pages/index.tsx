import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

export default function Index() {
	return (
		<div>
			<Head>
				<title>COMP 352 TESTING</title>
			</Head>	
			<div>	
				<Temp>Test</Temp>
			</div>
		</div>
	)
}

const Temp = styled.div`
	color: red;
`
