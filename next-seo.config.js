const title = 'Urban Ants | DJ Events | Find the hottest parties';
const titleTemplate = 'Urban Ants | %s';
const description = 'Find the latest DJ and other musical events';

const SEO = {
	titleTemplate,
	description,
	canonical: 'https://urbanants.vercel.app/',
	openGraph: {
		type: 'website',
		locale: 'en_IE',
		url: 'https://urbanants.vercel.app/',
		title,
		description,
		site_name: 'Urban Ants',
		images: [
			{
				// url: 'https://urbanants.vercel.app//og.png',
				alt: title,
				width: 1280,
				height: 720,
			},
		],
	},
};

export default SEO;
