import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "@/components/pages/shop/components/filters";

describe("Filters Component", () => {
  const mockFilterOptions = {
    color: ["red", "blue", "green"],
    size: ["small", "medium", "large"],
    category: [],
    designer: [],
    condition: [],
  };

  test("renders filter sections with correct labels and options", async () => {
    render(<Filters filterOptions={mockFilterOptions} />);

    // Check that the section labels are rendered
    expect(screen.getByText("Color")).toBeInTheDocument();
    expect(screen.getByText("Size")).toBeInTheDocument();

    await userEvent.click(screen.getByText("Color"));
    await userEvent.click(screen.getByText("Size"));

    // Check that the filter options are rendered
    expect(screen.getByLabelText("Red")).toBeInTheDocument();
    expect(screen.getByLabelText("Blue")).toBeInTheDocument();
    expect(screen.getByLabelText("Green")).toBeInTheDocument();
    expect(screen.getByLabelText("Small")).toBeInTheDocument();
    expect(screen.getByLabelText("Medium")).toBeInTheDocument();
    expect(screen.getByLabelText("Large")).toBeInTheDocument();
  });

  test("checkboxes are unchecked initially and can be checked", async () => {
    render(<Filters filterOptions={mockFilterOptions} />);

    await userEvent.click(screen.getByText("Color"));
    await userEvent.click(screen.getByText("Size"));

    // Check that the checkboxes are initially unchecked
    expect(screen.getByLabelText("Red")).not.toBeChecked();
    expect(screen.getByLabelText("Small")).not.toBeChecked();

    // Check the checkbox and verify it is checked
    await userEvent.click(screen.getByLabelText("Red"));
    expect(screen.getByLabelText("Red")).toBeChecked();

    await userEvent.click(screen.getByLabelText("Small"));
    expect(screen.getByLabelText("Small")).toBeChecked();
  });

  // Add more tests as per your use-case
});
