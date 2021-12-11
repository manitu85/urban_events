import Link from 'next/link';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';

import styles from '@/styles/DashboardEvent.module.scss';

export default function DashboardEvent({ evt, handleDelete }) {
	const { slug, name, id } = evt;
	return (
		<div className={styles.event}>
			<h4>
				<Link href={`/events/${slug}`}>
					<a>{name}</a>
				</Link>
			</h4>
			<Link href={`/events/edit/${id}`}>
				<a className={styles.edit}>
					<FaPencilAlt /> <span>Edit Event</span>
				</a>
			</Link>
			{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
			<a href='#' className={styles.delete} onClick={() => handleDelete(id)}>
				<FaTimes /> <span>Delete</span>
			</a>
		</div>
	);
}
