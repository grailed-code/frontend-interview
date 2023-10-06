import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"; // Update with your actual file path
import userEvent from "@testing-library/user-event";

describe("DropdownMenu Component", () => {
  test("renders DropdownMenuTrigger and opens DropdownMenuContent on click", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    // Check that the trigger is rendered
    expect(screen.getByText("Trigger")).toBeInTheDocument();

    // Click the trigger and check that the content is displayed
    await userEvent.click(screen.getByText("Trigger"));
    expect(await screen.findByText("Item 1")).toBeInTheDocument();
  });

  test("DropdownMenuItem should be clickable", async () => {
    const onItemClick = jest.fn();

    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={onItemClick}>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>,
    );

    // Click the trigger to open the dropdown
    await userEvent.click(screen.getByText("Trigger"));

    // Click the item and check if the onClick handler is called
    await userEvent.click(await screen.findByText("Item 1"));
    expect(onItemClick).toHaveBeenCalled();
  });
});
