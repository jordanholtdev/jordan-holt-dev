import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import NextLink from "next/link";

import {
  Link as ChakraLink,
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";

import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaDev,
  FaHackerNewsSquare,
} from "react-icons/fa";

import { CgIndieHackers } from "react-icons/cg";

const About = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <Box mt={12}>
          <Heading as="h1" size="2xl" mb={4}>
            Hey! I'm Jordan 🙋‍♂️
          </Heading>
          <Text fontSize="lg" py={4}>
            I'm a developer, writer and digital creative. I'm a JavaScript
            enthusiast who is currently focusing on the Jamstack architecture.
          </Text>
          <Text fontSize="lg" py={4}>
            I studied audio engineering in college, graduating with Honors and
            spent a decade in music production and broadcast video before I
            transitioned into web development. I've travelled the world working
            on documentaries,{" "}
            <ChakraLink
              color="teal.500"
              isExternal
              href="https://www.imdb.com/name/nm9000943/?ref_=nv_sr_srsg_5"
            >
              feature films and broadcast television.
            </ChakraLink>
          </Text>
          <Text fontSize="lg" py={4}>
            I enjoy spending my free time making music, exploring the outdoors
            and spending time my loved ones.
          </Text>
          <Heading as="h3" size="lg" my={4}>
            Platforms I use
          </Heading>
          <Text fontSize="lg" py={4}>
            Here are some of the platforms I use. Feel free to connect with me.
          </Text>
          <List spacing={4} fontSize="lg">
            <ListItem>
              <ListIcon icon={FaTwitterSquare} color="blue.500" size="28px" />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                Twitter:{" "}
              </ChakraLink>
              You can find me here talking about tech and other things that
              interest me.
            </ListItem>
            <ListItem>
              <ListIcon icon={FaGithub} color="blue.500" size="28px" />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                GitHub:{" "}
              </ChakraLink>
              This is where I host a lot of my code. Including the{" "}
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                code for this site
              </ChakraLink>{" "}
              and{" "}
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                my blog
              </ChakraLink>
            </ListItem>
            <ListItem>
              <ListIcon icon={CgIndieHackers} color="blue.500" size="28px" />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                Indie Hackers:{" "}
              </ChakraLink>
              I just joined this community. It's a place where I connect and
              learn about indie software developement.
            </ListItem>
            <ListItem>
              <ListIcon icon={FaDev} color="blue.500" size="28px" />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                Dev.to:{" "}
              </ChakraLink>
              I repost all my articles on Dev.to and I connect with other
              developers here. This is a great platform that offers a lot of
              support for the dev community.
            </ListItem>
            <ListItem>
              <ListIcon icon={FaLinkedin} color="blue.500" size="28px" />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                LinkedIn:{" "}
              </ChakraLink>
              This is mainly where you'll find boring resume related stuff. I
              also post articles on here and have made some meaningful
              connnections in the indie maker world.
            </ListItem>
            <ListItem>
              <ListIcon
                icon={FaHackerNewsSquare}
                color="blue.500"
                size="28px"
              />
              <ChakraLink
                color="teal.500"
                isExternal
                href="https://github.com/vercel/next.js/blob/canary/examples/with-chakra-ui"
              >
                Hacker News:{" "}
              </ChakraLink>
              This is one where I explore new topics and see what's new in the
              world of tech.
            </ListItem>
          </List>
          <Box mt={5}>
            <Text as="i" fontSize="lg">
              If you're interested in learning more about me and some of my
              experience check out{" "}
              <NextLink href="/links" passHref>
                <ChakraLink color="teal.500" aria-label="links page">
                  these links
                </ChakraLink>
              </NextLink>{" "}
              that aren't found in the main navigation.
            </Text>
          </Box>
        </Box>
      </Main>
      <Footer />
    </Container>
  );
};

export default About;