import { Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Search() {
	const [term, setTerm] = useState('');

	const router = useRouter();

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/events/search?term=${term}`);
		setTerm('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<Input
				value={term}
				onChange={e => setTerm(e.target.value)}
				variant='flushed'
				focusBorderColor='brand.600'
				type='text'
				placeholder='Search Events'
			/>
		</form>
	);
}
