import Link from 'next/link';

import styles from '@/styles/Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>Copyright &copy; Urban Ants 2021</p>
			<p>
				<Link href='/about'>
					<a>About the project</a>
				</Link>
			</p>
		</footer>
	);
}
