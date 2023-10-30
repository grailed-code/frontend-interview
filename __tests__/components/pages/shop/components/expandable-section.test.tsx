import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ExpandableSection from "@/components/pages/shop/components/expandable-section";

describe("ExpandableSection Component", () => {
  test("renders label and is initially closed", () => {
    render(
      <ExpandableSection label="Test Section">
        <p>Test Content</p>
      </ExpandableSection>,
    );

    // Check that the label is rendered
    expect(screen.getByText("Test Section")).toBeInTheDocument();

    // Check that the content is not rendered when the section is closed
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  test("opens and closes when the button is clicked", async () => {
    render(
      <ExpandableSection label="Test Section">
        <p>Test Content</p>
      </ExpandableSection>,
    );

    // Click the button to open the section
    await userEvent.click(screen.getByText("Test Section"));

    // Check that the content is rendered when the section is open
    expect(screen.getByText("Test Content")).toBeInTheDocument();

    // Click the button again to close the section
    await userEvent.click(screen.getByText("Test Section"));

    // Check that the content is not rendered when the section is closed
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument();
  });

  test("displays the correct icon when open and closed", async () => {
    render(
      <ExpandableSection label="Test Section">
        <p>Test Content</p>
      </ExpandableSection>,
    );

    // Check that the PlusIcon is displayed when the section is closed
    expect(screen.getByTestId("plus-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("minus-icon")).not.toBeInTheDocument();

    // Click the button to open the section
    await userEvent.click(screen.getByText("Test Section"));

    // Check that the MinusIcon is displayed when the section is open
    expect(screen.getByTestId("minus-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("plus-icon")).not.toBeInTheDocument();
  });

  // Add more tests as per your use-case
});
