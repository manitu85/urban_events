import { useRouter } from 'next/router';

export default function EventPage() {
	const router = useRouter();
	console.log(router);
	return (
		<div>
			<h1 name='EventPage'>{router.query.slug}</h1>
		</div>
	);
}
