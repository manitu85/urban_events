import EventItem from '@/components/EventItem';
import Layout from '@/components/Layout';
import { getStrapiURL } from '@/config/index';

export default function EventsPage({ events }) {
	return (
		<Layout>
			<h1>Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(getStrapiURL(`/events?_sort=date:ASC&_limit=3`));
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
