import React from "react";
import { render, screen } from "../../../testUtils/testUtils";
import { Projects } from "./Projects";

describe("Projects component", () => {
  test("renders Projects component", () => {
    render(<Projects />);
  });
});
