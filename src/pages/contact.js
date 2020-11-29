import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { ContactForm } from "../components/ContactForm/ContactForm";
import { NextSeo } from "next-seo";

import { Heading, Box, Text, useColorMode } from "@chakra-ui/core";

const url = "https://jordanholt.dev/contact";
const title = "Contact Me - Jordan Holt";
const description = "Get in touch with me by completing this contact form.";

const Contact = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.700" };
  const borderColor = { light: "gray.400", dark: "blue.100" };
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
          <Box
            mt={12}
            border="1px solid"
            borderColor={borderColor[colorMode]}
            bg={bgColor[colorMode]}
            borderRadius={4}
            padding={6}
            my={4}
            w="100%"
          >
            <Box>
              <Heading as="h1" size="2xl" mb={4}>
                Contact
              </Heading>
              <Text fontSize="lg" py={4}>
                You can contact me by filling out the form below:
              </Text>
              <ContactForm />
            </Box>
          </Box>
        </Main>
        <Footer />
      </Container>
    </>
  );
};

export default Contact;
