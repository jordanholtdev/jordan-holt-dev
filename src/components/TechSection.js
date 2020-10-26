import {
  Text,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  useColorMode,
  Heading,
  PseudoBox,
} from "@chakra-ui/core";

export const TechSection = () => {
  const { colorMode } = useColorMode();
  const dropShadow = {
    light: `-10px 10px 30px #dee1e3, 
    10px -10px 30px #ffffff;`,
    dark: `-16px 16px 32px #14151e, 
    16px -16px 32px #1a1d28`,
  };
  const dropShadowHover = {
    light: `  2px 2px 4px #cfcfcf, 
    -2px -2px 4px #ffffff`,
    dark: `3px 3px 10px #13141c, 
    -3px -3px 10px #1b1e2a`,
  };

  return (
    <SimpleGrid columns={[1, 2]} spacing={10} py={32}>
      <Stack justifyContent="center" height="100%" w="100%" alignItems="center">
        <PseudoBox
          _hover={{
            boxShadow: dropShadowHover[colorMode],
          }}
          rounded="full"
          p={2}
          boxShadow={dropShadow[colorMode]}
        >
          <Image
            rounded="full"
            objectFit="cover"
            src="/static/images/react-logo.png"
            size="100px"
            alt="Segun Adebayo"
            // boxShadow={dropShadow[colorMode]}
          />
        </PseudoBox>
        <PseudoBox
          _hover={{
            boxShadow: dropShadowHover[colorMode],
          }}
          position="relative"
          left="-75px"
          rounded="full"
          p={2}
          boxShadow={dropShadow[colorMode]}
        >
          <Image
            rounded="full"
            objectFit="contain"
            src="/static/images/node-logo.png"
            size="100px"
            alt="Segun Adebayo"
          />
        </PseudoBox>
        <PseudoBox
          _hover={{
            boxShadow: dropShadowHover[colorMode],
          }}
          rounded="full"
          p={2}
          boxShadow={dropShadow[colorMode]}
        >
          <Image
            rounded="full"
            objectFit="cover"
            src="/static/images/react-logo.png"
            size="100px"
            alt="Segun Adebayo"
          />
        </PseudoBox>
      </Stack>
      <Flex
        flexDirection="column"
        textAlign="left"
        justifyContent="center"
        alignItems="center"
        ml={[0, -4, -8, -16]}
      >
        <Heading as="h3" textAlign="left" w="100%" size="xl" mb={2}>
          Technology
        </Heading>
        <Text fontSize="lg">
          The past decade has seen my frontend development stack evolve from
          utilising basic HTML, CSS and sprinkles of Javascript to leveraging
          modern workflows. These are deep rooted with component based
          frameworks that align with build tools and transpilers such as
          Webpack, Rollup and Babel.
        </Text>
      </Flex>
    </SimpleGrid>
  );
};
