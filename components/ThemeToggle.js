import { IconButton, useColorMode } from '@chakra-ui/react';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';

const ThemeToggle = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<IconButton
			onClick={toggleColorMode}
			icon={colorMode === 'light' ? <RiMoonFill /> : <RiSunLine />}
			aria-label='theme toggle'
			variant='outline'
			_hover={{ background: 'none' }}
		/>
	);
};

export default ThemeToggle;
