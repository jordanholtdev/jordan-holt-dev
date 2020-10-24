import { Box, Stack, IconButton } from "@chakra-ui/core";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaEnvelope,
} from "react-icons/fa";

export const SocialLinks = () => {
  return (
    <Box mt="1rem">
      <Stack isInline spacing={4}>
        <IconButton
          aria-label="GitHub"
          variant="link"
          icon={FaGithub}
          fontSize="32px"
          variantColor="teal"
          onClick={() => {
            window.location.href = "https://github.com/jordanholtdev";
          }}
        />
        <IconButton
          aria-label="LinkedIn"
          variant="link"
          icon={FaLinkedin}
          fontSize="32px"
          variantColor="teal"
          onClick={() => {
            window.location.href =
              "https://www.linkedin.com/in/jordan-holt-toronto/";
          }}
        />
        <IconButton
          aria-label="Twitter"
          icon={FaTwitterSquare}
          variant="link"
          fontSize="32px"
          variantColor="teal"
          onClick={() => {
            window.location.href = "https://twitter.com/jordanholtdev";
          }}
        />
        <IconButton
          aria-label="Email"
          onClick={() => {
            window.location.href = "mailto:jordan@jordanholt.dev";
          }}
          variant="link"
          icon={FaEnvelope}
          fontSize="32px"
          variantColor="teal"
        />
      </Stack>
    </Box>
  );
};
