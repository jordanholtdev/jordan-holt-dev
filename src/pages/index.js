import {
  Link as ChakraLink,
  Text,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";

import { Hero } from "../components/Hero/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav/Nav";
import { Projects } from "../components/Projects/Projects";

const Index = () => (
  <Container>
    <Nav />
    <Hero />
    <Main>
      <Projects />
    </Main>
    <Footer>
      <Text>Next ❤️ Chakra</Text>
    </Footer>
    <CTA />
  </Container>
);

export default Index;
