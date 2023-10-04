import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../../../components/ui/dropdown-menu';

describe('DropdownMenu component', () => {
  test('renders DropdownMenuTrigger and opens DropdownMenuContent on click', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    // Check if trigger is rendered
    expect(screen.getByText('Trigger')).toBeInTheDocument();

    // Click the trigger and check if menu item is rendered
    fireEvent.click(screen.getByText('Trigger'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });

  test('DropdownMenuItem should be focusable', () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Trigger</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Item 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    // Click the trigger to open the dropdown
    fireEvent.click(screen.getByText('Trigger'));

    // Focus the item and check if it is focused
    fireEvent.focus(screen.getByText('Item 1'));
    expect(screen.getByText('Item 1')).toHaveFocus();
  });

  // Add more tests as per your use-cases
});
