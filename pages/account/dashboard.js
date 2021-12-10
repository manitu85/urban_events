import { useRouter } from 'next/router';

import DashboardEvent from '@/components/DashboardEvent';
import Layout from '@/components/Layout';
import { getStrapiURL } from '@/config/index';
import { parseCookies } from '@/helpers/index';
import styles from '@/styles/Dashboard.module.scss';

export default function DashboardPage({ events }) {
	// console.log(`CURRENT_USER`, events);
	// const router = useRouter();

	const deleteEvent = id => {
		console.log(id);
	};

	return (
		<Layout title='User Dashboard'>
			<div className={styles.dash}>
				<h1>Dashboard</h1>
				<h3>My Events</h3>

				{events.map(evt => (
					<DashboardEvent key={evt.id} evt={evt} handleDelete={deleteEvent} />
				))}
			</div>
		</Layout>
	);
}

export async function getServerSideProps({ req }) {
	const { token } = parseCookies(req);
	// console.log(`token`, token);
	const res = await fetch(getStrapiURL(`/events/me`), {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	const events = await res.json();

	return {
		props: { events },
	};
}
