import { Flex, HStack } from '@chakra-ui/react';
import NextLink from 'next/link';

import Logo from './Logo';
import MenuBox from './Menu';
import Search from './Search';
import ThemeToggle from './ThemeToggle';

export default function Header() {
	return (
		<Flex justify='space-between' align='center' w='100%' py={4}>
			<HStack spacing='12px'>
				<MenuBox />
				<ThemeToggle />
				<Search />
			</HStack>
			<Logo />
		</Flex>
	);
}

// PRE-PUSH hook
