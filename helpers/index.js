import cookie from 'cookie';

// Parser function
export function parseCookies(req) {
	return cookie.parse(req ? req.headers.cookie || '' : document.cookie);
}
