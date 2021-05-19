import { Box, Flex, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { SocialLinks } from '../SocialLinks/SocialLinks';

export const Hero = ({ title }) => (
  <Flex
    justifyContent='center'
    alignItems='center'
    w='100%'
    maxWidth='50rem'
    p={4}
  >
    <Stack spacing={1} align='left' w='100%' pt={[8, 8, 12]}>
      <Box display={['block', 'flex']}>
        <Box>
          <Box flexShrink='0' pb={[6, 8]}>
            <Image
              rounded='full'
              boxSize='125px'
              src='/static/images/about-page.jpg'
              fallbackSrc='https://via.placeholder.com/150'
              alt='Jordan Holt'
            />
          </Box>
          <Heading as='h1' fontSize={['4xl', '6xl']} pb={2}>
            {title}
          </Heading>
          <Text maxWidth='800px' letterSpacing='wide' fontSize='lg'>
            Thanks for visiting my site. I am a huge nerd. I love technology and
            getting my hands into the CLI to try something new. I have a passion
            for learning so I'm never bored.{' '}
          </Text>{' '}
          <Text
            paddingTop='2'
            maxWidth='800px'
            letterSpacing='wide'
            fontSize='lg'
          >
            I have a broad range of knowledge and experience in both technical
            and client facing roles. From web technologies like JavaScript,
            React, HTML and CSS to networking and infrasture. I am currently
            working with interactive & immersive technology in a supporting
            role.
          </Text>
        </Box>
      </Box>
      <SocialLinks />
    </Stack>
  </Flex>
);

Hero.defaultProps = {
  title: "Hey, I'm Jordan",
};
