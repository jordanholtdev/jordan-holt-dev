import { Box, Flex, Heading, Text, Stack, Image } from "@chakra-ui/core";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Hero = ({ title }) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    w="100%"
    maxWidth="50rem"
    p={4}
  >
    <Stack spacing={1} align="left" w="100%" pt={12}>
      <Box display={["block", "flex"]}>
        <Box>
          <Box flexShrink="0" py={[4, 2, 2]}>
            <Image
              rounded="full"
              size="125px"
              src="/static/images/about-page.jpg"
              fallbackSrc="https://via.placeholder.com/150"
              alt="Jordan Holt"
            />
          </Box>
          <Heading as="h1" fontSize="6xl">
            {title}
          </Heading>
          <Text maxWidth="800px" letterSpacing="wide" fontSize="lg">
            I am a front-end web developer. I use JavaScript, React, HTML and
            CSS to build creative and user-friendly front-ends that deliver the
            best possible user experience across different browsers and flexible
            hybrid mobile applications.{" "}
          </Text>
        </Box>
      </Box>
      <SocialLinks />
    </Stack>
  </Flex>
);

Hero.defaultProps = {
  title: "Hey, I'm Jordan",
};
