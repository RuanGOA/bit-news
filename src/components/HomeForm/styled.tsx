import styled from 'styled-components';

export const ContainerForm = styled.div`
	width: 100vw;
	height: 4.5rem;
	gap: 1rem;
	background: #CCB164;
	margin-top: 1.5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	position: absolute;
	bottom: 3rem;
`;

export const FormInput = styled.input`
	height: 1.75rem;
	width: 23rem;

	margin: auto 0 auto 0.5rem;
	padding: 0.15rem;
	
	font-size: 1.1rem;
	
	border-radius: 4px;
	border-color: #1E5351;
	border: 0px;

	&:focus {
		outline: none;
	}
`;

export const FormButton = styled.button`
	height: 2.1rem;
	font-weight: 600;
	font-size: 1.1rem;

	border: 0;
	border-radius: 4px;

	color: white;
	background: #1E5351;
	
	&:active, &:hover {
		cursor: pointer;
	}
`;

export const Confirmation = styled.p`
	font-weight: 600;
	font-size: 1rem;
	color: #333;
`;
