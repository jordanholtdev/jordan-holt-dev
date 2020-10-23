import React from "react";
import { render, screen } from "../../../testUtils/testUtils";
import { Hero } from "./Hero";

test("should have a heading", () => {
  render(<Hero />);

  expect(screen.getByRole("heading")).toBeInTheDocument();
});

test("hero renders github, email, twitter, linkedin and email labels", () => {
  const { getByLabelText } = render(<Hero />);
  expect(getByLabelText(/GitHub/i)).toBeInTheDocument();
  expect(getByLabelText(/Twitter/i)).toBeInTheDocument();
  expect(getByLabelText(/linkedin/i)).toBeInTheDocument();
  expect(getByLabelText(/email/i)).toBeInTheDocument();
});

test("image should have correct alt text", () => {
  const { getByAltText } = render(<Hero />);

  expect(getByAltText(/jordan holt/i)).toBeInTheDocument();
});
