import React from "react";
import { act, render } from "../../../testUtils/testUtils";
import { Subscribe } from "./Subscribe";

describe("Subscribe component", () => {
  let expectedEmail;

  beforeEach(() => {
    expectedEmail = "jordan.su@protonmail.com";
  });
  test("subscribe renders email and button", () => {
    const { getByLabelText, getByText } = render(<Subscribe />);

    expect(getByText(/subscribe/i)).toBeVisible();
    expect(getByLabelText(/your email/i)).toBeVisible();
  });
});
