import React from 'react';
import * as style from './styled';
import { ReactComponent as GithubLogo } from '../../assets/github.svg';
import { ReactComponent as LinkedinLogo } from '../../assets/linkedin.svg';

export default function Footer() {
	return (
		<style.ContainerFooter>
			<a href="http://www.github.com/ruangoa" target="_blank" rel="noreferrer" ><GithubLogo className="social-icon" /></a>
			<a href="https://www.linkedin.com/in/ruangoa/" target="_blank" rel="noreferrer" ><LinkedinLogo className="social-icon" /></a>
		</style.ContainerFooter>
	);
}

