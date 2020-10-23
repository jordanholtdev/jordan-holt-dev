import { Hero } from "../components/Hero/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { CTA } from "../components/CTA";
import { TechSection } from "../components/TechSection";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { Projects } from "../components/Projects/Projects";
import { Subscribe } from "../components/Subscribe/Subscribe";

const Index = () => (
  <Container>
    <Nav />
    <Hero />
    <Main>
      <Projects />
      <TechSection />
      <Subscribe />
    </Main>
    <Footer>{/* <Text>Next ❤️ Chakra</Text> */}</Footer>
    {/* <CTA /> */}
  </Container>
);

export default Index;
