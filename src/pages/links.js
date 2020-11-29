import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { Footer } from '../components/Footer/Footer';
import { Nav } from '../components/Nav/Nav';
import { NextSeo } from 'next-seo';
import { VideoLinkCard } from '../components/VideoLinkCard';
import { Subscribe } from '../components/Subscribe/Subscribe';

import {
  Link as ChakraLink,
  Heading,
  Box,
  Text,
  List,
  ListItem,
} from '@chakra-ui/react';

const url = 'https://jordanholt.dev/links';
const title = 'Links - Jordan Holt';
const description = "Some links to things about me and work that I've done.";

const Links = () => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
        }}
      />
      <Container>
        <Nav />
        <Main>
          <Box mt={12} fontSize='lg'>
            <Heading as='h1' size='2xl' mb={4}>
              Links
            </Heading>
            <Text fontSize='lg' py={4}>
              Here are a few links to some of the projects I've been involved.
            </Text>
            <List spacing={16}>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/JynxmIMLIJA'}
                  title={
                    'Real Sports with Bryant Gumbel: Giant of Africa ft. Masai Ujiri | HBO'
                  }
                  linkURL={'https://www.youtube.com/watch?v=JynxmIMLIJA'}
                  description={`I travelled with HBO and Masai Ujiri as a sound mixer for
                  this series that followed the NBA trophy as it travelled
                  to Africa for the first time`}
                  tags={['Location Sound Mixer']}
                />
              </ListItem>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/2-fxRKhgvvM'}
                  title={'Disruptor Conductor'}
                  linkURL={
                    'https://www.cbc.ca/cbcdocspov/episodes/disruptor-conductor'
                  }
                  description={`I was the associate producer for this CBC documentary that
                  followed Daniel Bartholomew-Poyser & Thorgy Thor as they
                  worked to put on the first orchestral drag queen show in
                  Canada.`}
                  tags={['Associate Producer']}
                />
              </ListItem>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/_b_rzSEWzH0'}
                  title={'Player Zero'}
                  linkURL={
                    'https://www.youtube.com/watch?v=_b_rzSEWzH0&feature=youtu.be'
                  }
                  description={`This was a CBC documentary that followed NBA hopeful Richard
                  Armadi through tryouts. I served as the production manager as
                  well as post audio mixer.`}
                  tags={['Production Manager']}
                />
              </ListItem>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/9h6oRT9EsoI'}
                  title={`Choir! Choir! Choir! sings Portishead's "Sour Times"`}
                  linkURL={'https://www.youtube.com/watch?v=9h6oRT9EsoI'}
                  description={`A choir singing "Sour Times" by Portishead. I was one of the audio engineers that mixed the final track.`}
                  tags={['Sound Mixer']}
                />
              </ListItem>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/lZs9Q85bUN8'}
                  title={`Royal Wood - Long Way Out`}
                  linkURL={
                    'https://www.youtube.com/watch?v=lZs9Q85bUN8&list=LL&index=11'
                  }
                  description={`This is a music video I worked on as the audio playback tech
                  and projectionist.`}
                  tags={['Playback', 'Projectionist']}
                />
              </ListItem>
              <ListItem>
                <VideoLinkCard
                  videoURL={'https://www.youtube.com/embed/vy3zphEApJs'}
                  title={`Kill Order`}
                  linkURL={'https://www.imdb.com/title/tt3847642/'}
                  description={`This is an indie sci-fi action movie where I served as a production manager. I also mixed the final audio for theatres. `}
                  tags={['Production Manager', 'Sound Mixer']}
                />
              </ListItem>
            </List>
            <Subscribe />
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Links;
