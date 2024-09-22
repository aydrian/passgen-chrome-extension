import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import PasswordGenerator from "./PasswordGenerator";
import { generatePassword } from "../utils/passwordLogic";

vi.mock("../utils/passwordLogic", () => ({
  generatePassword: vi.fn()
}));

describe("PasswordGenerator", () => {
  it("should generate a password with the default length of 16 characters", () => {
    vi.mocked(generatePassword).mockReturnValue("abcdefghijklmnop");

    render(<PasswordGenerator />);

    const passwordInput = screen.getByRole("textbox") as HTMLInputElement;
    expect(passwordInput.value).toHaveLength(16);
    expect(generatePassword).toHaveBeenCalledWith(16, true, true, true);
  });

  it("should update password length when the length input is changed", () => {
    render(<PasswordGenerator />);

    const lengthInput = screen.getByLabelText(
      "Password Length:"
    ) as HTMLInputElement;
    const passwordInput = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(lengthInput, { target: { value: "20" } });

    expect(lengthInput.value).toBe("20");
    expect(generatePassword).toHaveBeenCalledWith(20, true, true, true);
    expect(passwordInput.value).toHaveLength(20);
  });
});
