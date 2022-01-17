import cookie from 'cookie';

// Parser function
export function parseCookies(req) {
	return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}

export function routeToTop(router, ...args) {
	if (typeof window !== 'undefined') window.scrollTo(0, 0);
	// eslint-disable-next-line prefer-spread
	return router.push.apply(router, args);
}
