import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { ContactForm } from "../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <ContactForm />
      </Main>
      <Footer />
    </Container>
  );
};

export default Contact;
