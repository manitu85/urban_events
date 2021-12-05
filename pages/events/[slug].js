import { useRouter } from 'next/router';

const EventPage = function () {
	const router = useRouter();
	console.log(router);
	return (
		<div>
			<h4 name='EventPage'>{router.query.slug}</h4>
		</div>
	);
};
