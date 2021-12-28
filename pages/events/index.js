import EventItem from '@/components/EventItem';
import Pagination from '@/components/Pagination';
import { getStrapiURL, PER_PAGE } from '@/config/index';

export default function EventsPage({ events, page, total }) {
	return (
		<>
			<h1>Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}
			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
			<Pagination page={page} total={total} />
		</>
	);
}

export async function getServerSideProps({ query: { page = 1 } }) {
	// Calculate pages
	const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE;

	// Fetch total/count
	const totalRes = await fetch(getStrapiURL(`/events/count`));
	const total = await totalRes.json();

	// Fetch events
	const evtRes = await fetch(
		getStrapiURL(`/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
	);
	const events = await evtRes.json();

	return {
		props: { events, page: +page, total },
	};
}
