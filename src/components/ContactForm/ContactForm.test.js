import React from "react";
import { getByLabelText, render } from "../../../testUtils/testUtils";
import { ContactForm } from "./ContactForm";

describe("contact form component", () => {
  test("renders email, name, message", () => {
    const { getByLabelText, getByText, debug } = render(<ContactForm />);
    expect(getByLabelText(/your email/i)).toBeRequired();
    expect(getByLabelText(/your name/i)).toBeRequired();
    expect(getByLabelText(/your message/i)).toBeVisible();
    expect(getByText(/submit/i)).toBeVisible();
  });
});
