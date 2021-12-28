import {
	Button,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuList,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useContext } from 'react';
import { AiOutlineAppstoreAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';
import { CgMenuLeft } from 'react-icons/cg';
import { FaInfoCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import {
	MdOutlineEventAvailable,
	MdOutlineSpaceDashboard,
} from 'react-icons/md';

import AuthContext from '@/context/AuthContext';

export default function MenuBox() {
	const { user, logout } = useContext(AuthContext);

	return (
		<Menu>
			<MenuButton
				as={Button}
				aria-label='Options'
				leftIcon={<CgMenuLeft />}
				variant='outline'
				_hover={{ background: 'none' }}
			>
				Menu
			</MenuButton>
			<MenuList>
				{user ? (
					// If logged in
					<MenuGroup title='Profile'>
						<MenuLink
							href='/'
							icon={<AiOutlineUsergroupAdd />}
							title={user.email}
						/>
						<MenuLink
							href='/events'
							icon={<MdOutlineEventAvailable />}
							title='Events'
						/>
						<MenuLink
							href='/events/add'
							icon={<AiOutlineAppstoreAdd />}
							title='Add Event'
						/>
						<MenuLink
							href='/account/dashboard'
							icon={<MdOutlineSpaceDashboard />}
							title='Dashboard'
						/>
						<MenuItem icon={<FaSignOutAlt />} onClick={() => logout()}>
							Logout
						</MenuItem>
					</MenuGroup>
				) : (
					// If logged out
					<MenuGroup>
						<MenuLink
							href='/events'
							title='Events'
							icon={<MdOutlineEventAvailable />}
						/>
						<MenuLink
							href='/account/login'
							title='Login'
							icon={<FaSignInAlt />}
						/>
					</MenuGroup>
				)}
				<MenuDivider />
				<MenuGroup title='Help'>
					<MenuLink href='/docs' icon={<BsBookmarkStar />} title='Docs' />
					<MenuLink href='/about' icon={<FaInfoCircle />} title='About' />
				</MenuGroup>
			</MenuList>
		</Menu>
	);
}

function MenuLink({ href, icon, title }) {
	return (
		<NextLink href={href} passHref>
			<MenuItem as='a' icon={icon}>
				{title}
			</MenuItem>
		</NextLink>
	);
}
