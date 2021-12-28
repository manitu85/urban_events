import Link from 'next/link';

import EventItem from '@/components/EventItem';
import { getStrapiURL } from '@/config/index';

export default function HomePage({ events }) {
	return (
		<>
			<h1>Upcoming Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
			{events.length > 0 && (
				<Link href='/events'>
					<a className='btn-secondary'>View All Events</a>
				</Link>
			)}
		</>
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
