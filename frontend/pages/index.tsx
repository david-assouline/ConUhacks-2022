import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Map from '../components/map/Map';


export default function Index() {
	return (
		<div>
			<Head>
				<title>MuckMuckGo!!!</title>
			</Head>	
			<div>	
				<Map/>
			</div>
			
		</div>
	)
}

const Temp = styled.div`
	color: red;
`
