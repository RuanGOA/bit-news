import styled from 'styled-components';

export const ContainerFooter = styled.div`
	width: 100vw;
	height: 3rem;
	gap: 1rem;
	background: #1E5351;
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	position: absolute;
	bottom: 0;

	.social-icon {
		fill: #FFF;
		transition: fill 0.8s;
		height: 1.7rem;
		width: auto;
		margin: 0.15rem 0 0 0;
	}

	.social-icon:hover {
		fill: #CCB164;
	}
`;
