import Link from 'next/link';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import qs from 'qs';

import EventItem from '@/components/EventItem';
import { getStrapiURL } from '@/config/index';

export default function SearchPage({ events }) {
	const router = useRouter();

	return (
		<>
			<NextSeo title='Search Results' />
			<Link href='/events'>Go Back</Link>
			<h1>Search Results for {router.query.term}</h1>
			{events.length === 0 && <h3>No events to show</h3>}

			{events.map(evt => (
				<EventItem key={evt.id} evt={evt} />
			))}
		</>
	);
}

export async function getServerSideProps({ query: { term } }) {
	const query = qs.stringify({
		_where: {
			_or: [
				{ name_contains: term },
				{ performers_contains: term },
				{ description_contains: term },
				{ venue_contains: term },
			],
		},
	});

	const res = await fetch(getStrapiURL(`/events?${query}`));
	const events = await res.json();

	return {
		props: { events },
	};
}
