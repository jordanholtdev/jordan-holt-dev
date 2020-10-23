import Link from "next/link";
import { Link as CharkaLink, Flex, Box, Stack, Divider } from "@chakra-ui/core";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Footer = (props) => (
  <Flex as="footer" pt="4rem" pb="2rem" {...props}>
    <Stack>
      <Divider borderColor="gray.200" />
      <SocialLinks />
      <Box pt={4} fontSize="sm" color="gray.400" textAlign="center">
        <Link href="/gear" passHref>
          <CharkaLink mr={2}>/gear</CharkaLink>
        </Link>
        <Link href="/newsletter" passHref>
          <CharkaLink mr={2}>/newsletter</CharkaLink>
        </Link>
      </Box>
      <Box fontSize="sm" color="gray.400" textAlign="center">
        jordan holt
      </Box>
    </Stack>
  </Flex>
);
