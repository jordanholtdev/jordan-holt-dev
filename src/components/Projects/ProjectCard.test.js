import {
  getByLabelText,
  getByRole,
  render,
  screen,
} from "../../../testUtils/testUtils";
import { ProjectCard } from "./ProjectCard";

describe("ProjectCard", () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      name: "jordans project",
      imageUrl: "/about-page.jpg",
      description: "a little about this project",
      liveLink: "https://blog.jordanholt.dev/",
      gitLink: "https://github.com/jordanholtdev/jordan-holt-blog",
    };
  });

  test("renders name, description, image, liveLink and gitLink", () => {
    const { getByText, getByAltText } = render(
      <ProjectCard {...expectedProps} />
    );

    const name = getByText(expectedProps.name);
    const image = getByAltText(expectedProps.name);
    const description = getByText(expectedProps.description);
    const liveLink = screen.getByRole("link", { name: /view live/i });
    const gitLink = screen.getByRole("link", { name: /github/i });

    expect(image).toBeVisible();
    expect(name).toBeVisible();
    expect(description).toBeVisible();
    expect(liveLink).toHaveAttribute("href", expectedProps.liveLink);
    expect(gitLink).toHaveAttribute("href", expectedProps.gitLink);
  });
});
