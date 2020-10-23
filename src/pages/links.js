import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";

import {
  Link as ChakraLink,
  Heading,
  Box,
  Text,
  List,
  ListItem,
} from "@chakra-ui/core";

const Links = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <Box mt={12} fontSize="lg">
          <Heading as="h1" size="2xl" mb={4}>
            Links
          </Heading>
          <Text fontSize="lg" py={4}>
            Links to things about me including some of my work...
          </Text>
          <List spacing={4} styleType="disc">
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.imdb.com/name/nm9000943/?ref_=fn_al_nm_1"
              >
                IMDB
              </ChakraLink>{" "}
              - A link to my profile on IMDB that features a bit of my work in
              film & television.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=JynxmIMLIJA"
              >
                Real Sports with Bryant Gumbel: Giant of Africa ft. Masai Ujiri
                (Full Segment) | HBO
              </ChakraLink>{" "}
              - I travelled with HBO and Masai Ujiri as a sound mixer for this
              series that followed the NBA trophy as it travelled to Africa for
              the first time.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.cbc.ca/cbcdocspov/episodes/disruptor-conductor"
              >
                Disruptor Conductor
              </ChakraLink>{" "}
              - I was the associate producer for this CBC documentary that
              followed Daniel Bartholomew-Poyser & Thorgy Thor as they worked to
              put on the first orchestral drag queen show in Canada.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=_b_rzSEWzH0&feature=youtu.be"
              >
                Player Zero
              </ChakraLink>{" "}
              - This was a CBC documentary that followed NBA hopeful Richard
              Armadi through tryouts. I served as the production manager as well
              as post audio mixer.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="http://www.shortroundup.com/"
              >
                Short Round Up
              </ChakraLink>{" "}
              - I was the online editor for this short documentary. It features
              Nobu Adilman as he searches for the Asian men who, as boys,
              answered the open-call audition to be cast as Indiana Jones’
              sidekick.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=dJRsWJqDjFE"
              >
                Rick Astley with Choir! Choir! Choir! - Never Gonna Give You
                Up!!!
              </ChakraLink>{" "}
              - I shot this live music video featuring Rick Astley and Choir!
              Choir! Choir! performing Never Gonna Give You Up. It was a lot of
              fun and has over 2.5 million views.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=R8QXqxcHLko"
              >
                Tattoo Artist Reacts to WWE Tattoos | Attitude Era
              </ChakraLink>{" "}
              - I was the location sound mixer for this segment featured on
              Bloody Elbow. I learned a lot about wrestling 👊
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=jV4vuAwOGtA&list=LL&index=10"
              >
                Purple Rain performed by Sabrina Wan - Regent Park School of
                Music
              </ChakraLink>{" "}
              - This was a live performance of Purple Rain that I mixed the
              final audio for.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=lZs9Q85bUN8&list=LL&index=11"
              >
                Royal Wood - Long Way Out
              </ChakraLink>{" "}
              - This is a music video I worked on as the audio playback tech and
              projectionist.
            </ListItem>
            <ListItem>
              <ChakraLink
                isExternal
                color="teal.500"
                href="https://www.youtube.com/watch?v=1cc_neVdjb4&list=LL&index=9"
              >
                MILCK - I Can’t Keep Quiet!
              </ChakraLink>{" "}
              - This was a live performance with MILCK and 1300 choir members. I
              was a camera operator and coordinator for this video.
            </ListItem>
          </List>
        </Box>
      </Main>
      <Footer />
    </Container>
  );
};

export default Links;
