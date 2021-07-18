import React from 'react';
import * as style from './styled';

type Info = {
	title: string,
	image: string,
	link: string
}

export default function NewsCard({ ...props }: Info) {
	return (
		<style.NewsLink to={props.link}>
			<style.CardNewsContainer>
				<style.NewsImg src={props.image}></style.NewsImg>
				<style.NewsTitle>{props.title}</style.NewsTitle>
			</style.CardNewsContainer>
		</style.NewsLink>
	);
}