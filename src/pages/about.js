import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

import {
  Link as ChakraLink,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  useColorMode,
} from '@chakra-ui/react';

import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaDev,
  FaHackerNewsSquare,
} from 'react-icons/fa';

import { CgIndieHackers } from 'react-icons/cg';

const url = 'https://jordanholt.dev/about';
const title = 'About Me – Jordan Holt';
const description = 'A little bit about myself and the things that I do.';

const About = () => {
  const { colorMode } = useColorMode();
  const linkColor = { light: 'blue.700', dark: 'green.200' };
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        description={description}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        <Nav />
        <Main>
          <Box mt={12}>
            <Heading as='h1' size='2xl' mb={4}>
              Hey! I'm Jordan 🙋‍♂️
            </Heading>
            <Text fontSize='lg' py={4}>
              I'm a developer, writer and digital creative. I write about
              development, technology and JavaScript in my{' '}
              <ChakraLink
                color={linkColor[colorMode]}
                isExternal
                href='https://blog.jordanholt.dev/'
              >
                blog{' '}
              </ChakraLink>{' '}
            </Text>
            <Text fontSize='lg' py={4}>
              I studied audio engineering in college, graduating with Honors and
              spent a decade in music production and broadcast video before I
              decided to transition again.
            </Text>
            <Text fontSize='lg' py={4}>
              I enjoy spending my free time making music, exploring the outdoors
              and spending time my friends and family.
            </Text>
            <Heading as='h3' size='lg' my={4}>
              Platforms I use
            </Heading>
            <Text fontSize='lg' py={4}>
              Here are some of the platforms I use. Feel free to connect with
              me.
            </Text>
            <List spacing={4} fontSize='lg'>
              <ListItem>
                <ListIcon
                  as={FaTwitterSquare}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  Twitter:{' '}
                </ChakraLink>
                You can find me here talking about tech and other things that
                interest me.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaGithub}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  GitHub:{' '}
                </ChakraLink>
                This is where I host a lot of my code. Including the{' '}
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  code for this site
                </ChakraLink>{' '}
                and{' '}
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/jordanholtdev/jordan-holt-blog'
                >
                  my blog
                </ChakraLink>
              </ListItem>
              <ListItem>
                <ListIcon
                  as={CgIndieHackers}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  Indie Hackers:{' '}
                </ChakraLink>
                I just joined this community. It's a place where I connect and
                read about indie software developement, interesting SaaS
                projects and meet other people.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaDev}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  Dev.to:{' '}
                </ChakraLink>
                I repost all my articles on Dev.to and I connect with other
                developers here. This is a great platform that offers a lot of
                support for the dev community.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaLinkedin}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  LinkedIn:{' '}
                </ChakraLink>
                This is mainly where you'll find boring resume related stuff. I
                also post articles on here and have made some meaningful
                connnections in the indie maker world.
              </ListItem>
              <ListItem>
                <ListIcon
                  as={FaHackerNewsSquare}
                  color={linkColor[colorMode]}
                  boxSize='28px'
                />
                <ChakraLink
                  color={linkColor[colorMode]}
                  isExternal
                  href='https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui'
                >
                  Hacker News:{' '}
                </ChakraLink>
                This is one where I explore new topics and see what's new in the
                world of tech.
              </ListItem>
            </List>
            <Box mt={5}>
              <Text as='i' fontSize='md'>
                If you're interested in learning more about me, check out{' '}
                <NextLink href='/links' passHref>
                  <ChakraLink
                    color={linkColor[colorMode]}
                    aria-label='links page'
                  >
                    these links
                  </ChakraLink>
                </NextLink>{' '}
                to some of the interesting things I've done.
              </Text>
            </Box>
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default About;
