import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { NextSeo } from "next-seo";

import { Heading, Box, Text } from "@chakra-ui/core";

const url = "https://jordanholt.dev/contact";
const title = "Contact Me - Jordan Holt";
const description = "Get in touch with me by completing this contact form.";

const Contact = () => {
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
            <Heading as="h1" size="2xl" mb={4}>
              Contact
            </Heading>
            <Text fontSize="lg" py={4}>
              You can contact me by filling out the form below:
            </Text>
            <ContactForm />
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
