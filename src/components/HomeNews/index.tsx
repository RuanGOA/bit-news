import React from 'react';
import * as style from './styled';

import CardNews from '../CardNews/';

type Card = {
	title: string,
	image: string,
	link: string
}

type DataCard = {
	data: Card[],
}

export default function HomeNews({ ...props }: DataCard) {
	return (
		<style.NewsContainer>
			<style.Subtitle>Principais notícias</style.Subtitle>
			<style.CardsContainer>
				{props.data.map((obj: Card) => <CardNews {...obj} />)}
			</style.CardsContainer>
		</style.NewsContainer>
	);
}
