import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import Layout from '@/components/Layout';
import { getStrapiURL } from '@/config/index';
import styles from '@/styles/Event.module.scss';

export default function EventPage({ evt }) {
	const router = useRouter();

	const deleteEvent = e => {
		console.log(e);
	};

	// console.log(`slug`, evt);

	return (
		<Layout>
			<div className={styles.event}>
				<div className={styles.controls}>
					<Link href={`/events/edit/${evt.id}`}>
						<a>
							<FaPencilAlt /> Edit Event
						</a>
					</Link>
					<a href='"' onClick={deleteEvent} className={styles.delete}>
						<FaTimes /> Delete
					</a>
				</div>
				<span>
					{evt.date} at {evt.time}
				</span>
				<h3>{evt.name}</h3>
				{evt.image && (
					<div className={styles.image}>
						<Image src={evt.image.formats.large.url} width={960} height={600} />
					</div>
				)}
				<h3>Performers:</h3>
				<p>{evt.performers}</p>
				<h3>Description:</h3>
				<p>{evt.description}</p>
				<h3>Venue: {evt.venue}</h3>
				<p>{evt.address}</p>

				{/* <EventMap evt={evt} /> */}

				<Link href='/events'>
					<a className={styles.back}>{'<'} Go Back</a>
				</Link>
			</div>
		</Layout>
	);
}

// * REVIEW: SCG
export async function getStaticPaths() {
	const res = await fetch(getStrapiURL(`/events`));
	const events = await res.json();

	const paths = events.map(evt => ({ params: { slug: evt.slug } }));

	return {
		paths,
		fallback: true,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const res = await fetch(getStrapiURL(`/events?slug=${slug}`)); // slug strapi way
	const events = await res.json();

	return {
		props: { evt: events[0] }, // [0] strapi way
		revalidate: 1,
	};
}

// * REVIEW: SSR
// export async function getServerSideProps({ query: { slug } }) {
// 	const res = const res = await fetch(getStrapiURL(`/events?slug=${slug}`));
// 	const events = await res.json();

// 	return {
// 		props: { evt: events[0] },
// 	};
// }
