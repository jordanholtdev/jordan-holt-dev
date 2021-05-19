import Link from 'next/link';
import { Flex, Box, Stack, Divider } from '@chakra-ui/react';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Footer = (props) => (
  <Flex as='footer' pt='4rem' pb='2rem' {...props}>
    <Stack>
      <Divider borderColor='gray.200' />
      <SocialLinks />
      <Box pt={4} fontSize='sm' color='gray.400' textAlign='center'></Box>
      <Box fontSize='sm' color='gray.400' textAlign='center'>
        Jordan Holt
      </Box>
    </Stack>
  </Flex>
);
