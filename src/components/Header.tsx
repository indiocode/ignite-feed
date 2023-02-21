import type { ReactElement } from 'react';

import igniteLogo from '../assets/ignite-logo.svg';

import styles from './Header.module.css';

export function Header(): ReactElement {
	return (
		<header className={styles.header}>
			<img
				src={igniteLogo}
				alt="Logotipo do Ignite"
			/>
		</header>
	);
}
