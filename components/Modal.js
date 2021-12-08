import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';

import styles from '@/styles/Modal.module.scss';

export default function Modal({ show, onClose, children, title }) {
	const [isBrowser, setIsBrowser] = useState(false);

	useEffect(() => setIsBrowser(true), []);

	const handleClose = e => {
		e.preventDefault();
		onClose();
	};

	const modalContent = show ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<div className={styles.header}>
					{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
					<a href='#' onClick={handleClose}>
						<FaTimes />
					</a>
				</div>
				{title && <div>{title}</div>}
				<div className={styles.body}>{children}</div>
			</div>
		</div>
	) : null;

	if (isBrowser) {
		return createPortal(modalContent, document.getElementById('modal-root'));
	}
	return null;
}

// ? NOTE: https://devrecipes.net/modal-component-with-next-js/
