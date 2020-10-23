import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer/Footer";
import { Nav } from "../components/Nav/Nav";
import { Subscribe } from "../components/Subscribe/Subscribe";

import { Box, Flex, Heading, Text } from "@chakra-ui/core";

const Newsletter = () => {
  return (
    <Container>
      <Nav />
      <Main>
        <Flex
          pt={12}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Heading as="h1" size="2xl">
            Newsletter
          </Heading>
          <Text py={4} fontSize="lg">
            Every Friday, I send out an email with tips, tricks, resources and
            other interesting things in the world of web development that I've
            come across.
          </Text>
        </Flex>
        <Box>
          <Subscribe />
        </Box>
      </Main>
      <Footer />
    </Container>
  );
};

export default Newsletter;
