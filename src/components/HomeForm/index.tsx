import React, { useState } from 'react';
import * as style from './styled';

export default function HomeForm() {
	const [email, setEmail] = useState('');
	const [confirmed, setConfirmed] = useState(false);

	const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => { setEmail(e.target.value); };

	function validateEmail(email: string) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	const handleEmail = () => {
		if (email !== '' && validateEmail(email)) {
			const emails: string[] = JSON.parse(localStorage.getItem('emails') || '[]');
			emails.push(email);
			localStorage.setItem('emails', JSON.stringify(emails));
		}
		setConfirmed(true);
	}

	return (
		<style.ContainerForm>
			{confirmed ?
				(
					<style.Confirmation>Email cadastrado! Obrigado por assinar nosso jornal digital, esperamos que tenha uma ótima experiência. </style.Confirmation>
				) : (
					<>
						<style.FormInput type="email" value={email} onChange={handleEmailChange} name="email" placeholder="e-mail" />
						<style.FormButton type="submit" onClick={handleEmail} value="Assinar">Assinar</style.FormButton>
					</>
				)
			}
		</style.ContainerForm>
	);
}

