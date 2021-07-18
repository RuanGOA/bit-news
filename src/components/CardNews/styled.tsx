import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardNewsContainer = styled.div`
	box-shadow: 2px 2px 2px 0 rgba(0,0,0,0.2);
	width: 20rem;
	height: 17.5rem;
	border-radius: 10px 10px;
	text-align: center;
	vertical-align: middle;
`;

export const NewsImg = styled.img`
	width: 20rem;
	height: 12rem;
	border-radius: 10px 10px 0px 0px;
	margin: 0px;
`;

export const NewsTitle = styled.p`
	margin: 0rem;
	font-size: 1.15rem;
	padding: 0.5rem;
`;

export const NewsLink = styled(Link)`
	text-decoration: none;

	&:hover, &:active, &:visited {
		color: #000;
	}
`;