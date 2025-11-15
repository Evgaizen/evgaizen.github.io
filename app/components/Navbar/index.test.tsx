import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Navbar } from "./index";

const LINKS = [
  {
    text: "Test1",
    url: "https://ya.ru/",
  },
  {
    text: "Test2",
    url: "https://google.com/",
  },
];

describe("Navbar", () => {
  it("Should have links with given links array", () => {
    render(<Navbar links={LINKS} avatar={<></>} />);

    LINKS.forEach((el) => {
      const link = screen.getByText<HTMLAnchorElement>(new RegExp(el.text));

      expect(link).toBeDefined();
      expect(link.href).toBe(el.url);
    });
  });

  it("Should render given avatar component", () => {
    const testId = "avatar";
    render(<Navbar links={LINKS} avatar={<div data-testid={testId}></div>} />);

    expect(screen.getByTestId(testId)).toBeDefined();
  });
});
