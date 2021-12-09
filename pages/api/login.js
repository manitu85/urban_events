import cookie from 'cookie';

import { getStrapiURL } from '@/config/index';

// This route is like middleware for Strapi
export default async (req, res) => {
	if (req.method === 'POST') {
		const { identifier, password } = req.body;

		// Get JWT token from Strapi
		const strapiRes = await fetch(getStrapiURL(`/auth/local`), {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				identifier,
				password,
			}),
		});

		const data = await strapiRes.json();
		// console.log(`JWT`, data.jwt);

		// set cookie on SSR
		if (strapiRes.ok) {
			res.setHeader(
				'Set-Cookie',
				cookie.serialize('token', data.jwt, {
					httpOnly: true,
					secure: process.env.NODE_ENV !== 'development',
					maxAge: 60 * 60 * 24 * 7, // 1 week
					sameSite: 'strict',
					path: '/',
				})
			);
			res.status(200).json({ user: data.user });
		} else {
			res
				.status(data.statusCode)
				.json({ message: data.message[0].messages[0].message });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).json({ message: `Method ${req.method} not allowed` });
	}
};

// ? NOTE: SSR Cookie
// Http-only-cookie is safer method, because prevent cross site-scripting attacks on frontend.
// All action is happening on server-side where JWT token is securer
// cookie.serialize(name, value, options);
// cookie.parse(str, options);
// https://github.com/jshttp/cookie
