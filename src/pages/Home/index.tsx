import React from 'react';

import Title from '../../components/HomeTitle';
import HomeNews from '../../components/HomeNews';
import HomeAbbout from '../../components/HomeAbbout';
import HomeForm from '../../components/HomeForm';
import Footer from '../../components/Footer';

import { mock } from '../../mock';


export default function Home() {
	return (
		<>
			<Title />
			<HomeNews data={mock} />
			<HomeAbbout />
			<HomeForm />
			<Footer />
		</>
	);
}