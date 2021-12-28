const BASE_URL = 'https://urbanants.vercel.app/';
const title = 'Urban Ants | Find the hottest parties';
const titleTemplate = 'Urban Ants | %s';
const description = 'Find the latest DJ and other musical events';

const SEO = {
	titleTemplate,
	description,
	canonical: `${BASE_URL}`,
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: `${BASE_URL}`,
		title,
		description,
		site_name: 'Urban Ants',
		images: [
			{
				// url: `${BASE_URL}//og.png`,
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
};

export default SEO;
