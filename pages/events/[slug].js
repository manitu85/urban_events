import 'react-toastify/dist/ReactToastify.css';

import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { ToastContainer } from 'react-toastify';

import EventMap from '@/components/EventMap';
import { getStrapiURL } from '@/config/index';
import styles from '@/styles/Event.module.scss';

export default function EventPage({ evt }) {
	return (
		<>
			<NextSeo title={evt.venue} description={evt.description} />
			<div className={styles.event}>
				<span>
					{new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
				</span>
				<h1>{evt.name}</h1>
				<ToastContainer />

				{evt.image && (
					<div className={styles.image}>
						<Image
							src={evt.image.formats.medium.url}
							alt='event'
							width={960}
							height={600}
						/>
					</div>
				)}
				<h3>Performers:</h3>
				<p>{evt.performers}</p>
				<h3>Description:</h3>
				<p>{evt.description}</p>
				<h3>Venue: {evt.venue}</h3>
				<p>{evt.address}</p>

				<EventMap evt={evt} />

				<Link href='/events'>
					<a className={styles.back}>{'<'} Go Back</a>
				</Link>
			</div>
		</>
	);
}

// * REVIEW: SSR
export async function getServerSideProps({ query: { slug } }) {
	const res = await fetch(getStrapiURL(`/events?slug=${slug}`));
	const events = await res.json();

	return {
		props: { evt: events[0] },
	};
}

// * REVIEW: SCG
// export async function getStaticPaths() {
// 	const res = await fetch(getStrapiURL(`/events`));
// 	const events = await res.json();

// 	const paths = events.map(evt => ({ params: { slug: evt.slug } }));

// 	return {
// 		paths,
// 		fallback: true,
// 	};
// }

// export async function getStaticProps({ params: { slug } }) {
// 	const res = await fetch(getStrapiURL(`/events?slug=${slug}`)); // slug strapi way
// 	const events = await res.json();

// 	return {
// 		props: { evt: events[0] }, // [0] strapi way
// 		revalidate: 1,
// 	};
// }
