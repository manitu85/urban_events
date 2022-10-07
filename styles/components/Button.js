export const Button = {
	baseStyle: {
		borderRadius: 'none',
	},
	sizes: {
		sm: {
			px: 5,
			h: '50px',
			fontSize: '20px',
		},
		md: {
			px: 7,
			h: '60px',
			fontSize: '25px',
		},
		lg: {
			px: 8,
			h: '70px',
			fontSize: '30px',
			borderRadius: '10px',
		},
	},
	variants: {
		primary: {
			bg: 'primary',
			color: '#fff',
		},
		secondary: {
			bg: 'secondary',
			color: '#fff',
		},
		ghost: {
			bg: 'transparent',
			border: '1px solid red',
		},
	},
	defaultProps: {
		size: 'medium',
		variant: 'primary',
	},
};
