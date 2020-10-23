import { SimpleGrid, Heading, Box } from "@chakra-ui/core";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <Box textAlign="left" id="projects" pt={32}>
      <Heading pb={10} as="h2" size="xl">
        Projects
      </Heading>
      <SimpleGrid columns={[1, 2]} spacing={10}>
        <ProjectCard
          imageUrl={"/static/images/blog-image.jpg"}
          name={"My Blog"}
          description={"Learning to code, technology and freelancing"}
          liveLink={"https://blog.jordanholt.dev/"}
          gitLink={"https://github.com/jordanholtdev/jordan-holt-blog"}
        />
        <ProjectCard
          imageUrl={"/static/images/crypto-image.jpg"}
          name={"Crypto Exchanges"}
          description={"Up-to-date crypto exchange information"}
          liveLink={"https://musing-aryabhata-7e5303.netlify.app/"}
          gitLink={"https://github.com/jordanholtdev/crypto-exchanges"}
        />
        <ProjectCard
          imageUrl={"/static/images/blog-image.jpg"}
          name={"Crypto Exchanges"}
          description={"Up-to-date crypto exchange information"}
          liveLink={"https://musing-aryabhata-7e5303.netlify.app/"}
          gitLink={"https://github.com/jordanholtdev/crypto-exchanges"}
        />
      </SimpleGrid>
    </Box>
  );
};
