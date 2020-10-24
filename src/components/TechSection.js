import {
  Box,
  Text,
  Image,
  SimpleGrid,
  Stack,
  Flex,
  useColorMode,
  Heading,
} from "@chakra-ui/core";

export const TechSection = () => {
  const { colorMode } = useColorMode();
  const dropShadow = {
    light: `-10px 10px 30px #dee1e3, 
    10px -10px 30px #ffffff;`,
    dark: `-16px 16px 32px #14151e, 
    16px -16px 32px #1a1d28`,
  };

  return (
    <SimpleGrid columns={[1, 2]} spacing={10} py={32}>
      <Stack justifyContent="center" height="100%" w="100%" alignItems="center">
        <Image
          rounded="full"
          objectFit="cover"
          src="/static/images/react-logo.png"
          size="100px"
          alt="Segun Adebayo"
          boxShadow={dropShadow[colorMode]}
        />
        <Image
          position="relative"
          left="-75px"
          rounded="full"
          objectFit="contain"
          src="/static/images/node-logo.png"
          size="100px"
          alt="Segun Adebayo"
          boxShadow={dropShadow[colorMode]}
        />
        <Image
          rounded="full"
          objectFit="cover"
          src="/static/images/react-logo.png"
          size="100px"
          alt="Segun Adebayo"
          boxShadow={dropShadow[colorMode]}
        />
      </Stack>
      <Flex
        flexDirection="column"
        textAlign="left"
        justifyContent="center"
        alignItems="center"
        ml={[0, -4, -8, -16]}
      >
        <Heading as="h4" textAlign="left" w="100%" size="xl" mb={2}>
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
