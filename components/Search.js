import {
	Input,
	InputGroup,
	InputRightElement,
	useColorModeValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { FaSearchengin } from 'react-icons/fa';

export default function Search() {
	const [term, setTerm] = useState('');

	const router = useRouter();

	const placeholderColor = useColorModeValue(
		{ color: 'base.400' },
		{ color: 'base.100' }
	);

	const focusColor = useColorModeValue('brand.600', 'brand.500');

	const handleSubmit = e => {
		e.preventDefault();
		router.push(`/events/search?term=${term}`);
		setTerm('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<InputGroup>
				<InputRightElement
					pointerEvents='none'
					aria-label='Search database'
					// eslint-disable-next-line react/no-children-prop
					children={<FaSearchengin color='base.300' />}
				/>
				<Input
					type='text'
					value={term}
					onChange={e => setTerm(e.target.value)}
					variant='flushed'
					placeholder='Search Events'
					color={focusColor}
					focusBorderColor={focusColor}
					_placeholder={placeholderColor}
				/>
			</InputGroup>
		</form>
	);
}
