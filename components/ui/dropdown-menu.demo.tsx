import React, { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './dropdown-menu';

function DropdownMenuDemo() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown menu
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Dropdown Menu Component Demo</h1>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <button onClick={toggleDropdown}>Toggle Dropdown</button>
        </DropdownMenuTrigger>

        {isOpen && (
          <DropdownMenuContent>
            <DropdownMenuItem>
              <a href="#">Item 1</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Item 2</a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a href="#">Item 3</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        )}
      </DropdownMenu>
    </div>
  );
}

export default DropdownMenuDemo;
