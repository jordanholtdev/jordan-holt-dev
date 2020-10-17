import React from "react";
import { render } from "../../../testUtils/testUtils";
import { Hero } from "./Hero";

test("hero renders github, email, twitter, linkedin and email", () => {
  const { getByLabelText, debug } = render(<Hero />);
  expect(getByLabelText(/GitHub/i)).toBeTruthy();
  expect(getByLabelText(/Twitter/i)).toBeTruthy();
  expect(getByLabelText(/linkedin/i)).toBeTruthy();
  expect(getByLabelText(/email/i)).toBeTruthy();
});
