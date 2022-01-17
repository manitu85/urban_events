import {
	Button,
	Flex,
	Heading,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { MdOutlineArrowForwardIos } from 'react-icons/md';

export default function EventItem({ evt }) {
	const color = useColorModeValue('brand.700', 'brand.500');
	return (
		<Flex
			justify='space-between'
			align='center'
			w='800px'
			my='20px'
			p='12px'
			boxShadow='2px 3px 5px rgba(0, 0, 0, 0.1)'
		>
			<Flex flex='1' m='12px' w='full'>
				<NextImage
					src={
						evt.image
							? evt?.image?.formats?.thumbnail?.url
							: '/images/event-default.png'
					}
					width={150}
					height={100}
				/>
			</Flex>

			<Flex direction='column' flex='2'>
				<Text as='span'>
					{new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
				</Text>
				<Heading as='h3' fontSize='xl'>
					{evt.name}
				</Heading>
			</Flex>

			<Flex alignSelf='flex-end'>
				<NextLink href={`/events/${evt.slug}`}>
					<Button
						as='a'
						variant='outline'
						border='2px'
						borderColor={color}
						color={color}
						rightIcon={<MdOutlineArrowForwardIos />}
						size='md'
						cursor='pointer'
						_hover={{ bg: 'transparent' }}
					>
						Details
					</Button>
				</NextLink>
			</Flex>
		</Flex>
	);
}
