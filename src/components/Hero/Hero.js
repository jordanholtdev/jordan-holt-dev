import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/core";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";

export const Hero = ({ title }) => (
  <Flex justifyContent="center" alignItems="center" height="100vh">
    <Stack spacing={1} align="left">
      <Text fontSize="lg" spacing={1}>
        Front-end developer
      </Text>
      <Heading fontSize="6vw">{title}</Heading>
      <Text maxWidth="800px" letterSpacing="wide">
        I am a front-end web developer. I use JavaScript, React, HTML and CSS to
        build creative and user-friendly front-ends that deliver the best
        possible user experience across different browsers and flexible hybrid
        mobile applications.{" "}
      </Text>
      <Box mt="1rem">
        <Stack isInline spacing={4}>
          <IconButton
            aria-label="Go to Jordans GitHub"
            variant="link"
            icon={FaGithub}
            fontSize="32px"
            color="green.400"
            onClick={() => {
              window.location.href = "https://github.com/jordanholtdev";
            }}
          />
          <IconButton
            aria-label="Connect to Jordan on LinkedIn"
            variant="link"
            icon={FaLinkedin}
            fontSize="32px"
            color="green.400"
            onClick={() => {
              window.location.href =
                "https://www.linkedin.com/in/jordan-holt-toronto/";
            }}
          />
          <IconButton
            aria-label="Follow Jordan on Twitter"
            icon={FaTwitterSquare}
            variant="link"
            fontSize="32px"
            color="green.400"
            onClick={() => {
              window.location.href = "https://twitter.com/jordanholtdev";
            }}
          />
          <IconButton
            aria-label="Email Jordan"
            onClick={() => {
              window.location.href = "mailto:jordan@jordanholt.dev";
            }}
            variant="link"
            icon={FaEnvelope}
            fontSize="32px"
            color="green.400"
          />
        </Stack>
      </Box>
    </Stack>
  </Flex>
);

Hero.defaultProps = {
  title: "Hey, I'm Jordan",
};
