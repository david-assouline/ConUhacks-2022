import React, { useState } from 'react';
import Head from 'next/head';
import Map from "../components/map/Map"
import HomePage from '../components/HomePage';


export default function Index() {
	const [initialSearch, setIS] = useState<string>(null);
	return (
		<div>
			<Head>
				<title>MuckMuckGo</title>
			</Head>	
			<div>	
				{initialSearch ? 
					<Map
						initialSearch={initialSearch}
					/>  
					: 
					<HomePage
						setIS={setIS}//Covid-19 pandemic by country
					/>}
			</div>
			
		</div>
	)
}
