import Link from 'next/link';
import { BsShieldExclamation } from 'react-icons/bs';

import Layout from '@/components/Layout';
import styles from '@/styles/404.module.scss';

export default function NotFoundPage() {
	return (
		<Layout title='Not Found'>
			<div className={styles.error}>
				<div className={styles.wrapper}>
					<p>
						<BsShieldExclamation />{' '}
					</p>
					<h1>404</h1>
				</div>
				<h4>Sorry, there is nothing here</h4>
				<Link href='/'>
					<a>Go back Home</a>
				</Link>
			</div>
		</Layout>
	);
}
