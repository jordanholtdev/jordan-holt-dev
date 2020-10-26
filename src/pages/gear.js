import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { NextSeo } from "next-seo";

import { Heading, Box, Text, List, ListItem } from "@chakra-ui/core";

const url = "https://jordanholt.dev/gear";
const title = "Gear - Jordan Holt";
const description =
  "Hardware and software and other various things that I currently use to code and make videos";

const Gear = () => {
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
          <Box mt={12}>
            <Heading as="h1" size="2xl" my={4}>
              Gear
            </Heading>
            <Text fontSize="lg" py={4}>
              Here is a list of the gear I use when I'm coding, making videos
              and music:
            </Text>
            <Heading as="h4" size="md" mb={4}>
              Computer
            </Heading>
            <List spacing={4} fontSize="lg" styleType="disc">
              <ListItem>
                Desktop: Windows 10 Pro / WSL2, i7-7700K CPU @ 4.20GHz, 32 GB
                RAM
              </ListItem>
              <ListItem>Laptop:</ListItem>
            </List>
            <Heading as="h4" size="md" my={4}>
              Audio
            </Heading>
            <List spacing={4} fontSize="lg" styleType="disc">
              <ListItem>MOTU 896mk3 Interface</ListItem>
              <ListItem>VoiceMeeter Potato</ListItem>
              <ListItem>Sennheiser MKH50 Mic</ListItem>
              <ListItem>Yamaha HS8 Monitors</ListItem>
            </List>
            <Heading as="h4" size="md" my={4}>
              Video
            </Heading>
            <List spacing={4} fontSize="lg" styleType="disc">
              <ListItem>Sony A7SI Camera</ListItem>
              <ListItem>Sony 35mm</ListItem>
            </List>
            <Heading as="h4" size="md" my={4}>
              Software
            </Heading>
            <List spacing={4} fontSize="lg" styleType="disc">
              <ListItem>Avid Pro Tools</ListItem>
              <ListItem>VoiceMeeter Potato</ListItem>
              <ListItem>VS Code - with these extensions</ListItem>
            </List>
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Gear;
