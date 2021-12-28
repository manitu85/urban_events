/* eslint-disable jsx-a11y/label-has-associated-control */
import 'react-toastify/dist/ReactToastify.css';

import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';

import AuthContext from '@/context/AuthContext';
import styles from '@/styles/AuthForm.module.scss';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const { login, error } = useContext(AuthContext);

	const handleSubmit = e => {
		e.preventDefault();
		login({ email, password });
	};

	useEffect(() => error && toast.error(error));

	return (
		<>
			<NextSeo title='User Login' />
			<div className={styles.auth}>
				<h1>
					<FaUser /> Log In
				</h1>
				<ToastContainer />
				<form onSubmit={handleSubmit}>
					<div>
						<label htmlFor='email'>Email Address</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div>
						<label htmlFor='password'>Password</label>
						<input
							type='password'
							id='password'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>

					<input type='submit' value='Login' className='btn' />
				</form>

				<p>
					Does not have an account?{' '}
					<Link href='/account/register'>Register</Link>
				</p>
			</div>
		</>
	);
}
