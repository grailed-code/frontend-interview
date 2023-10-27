import React, { useState } from 'react';
import { Button, buttonVariants } from './button';

function ButtonDemo() {
  const [count, setCount] = useState(0);

  // Define a click handler for the button
  const handleButtonClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Button Component Demo</h1>
      <p>Click count: {count}</p>

      <h2>Button Variants</h2>
      <div>
        <Button variant="default" onClick={handleButtonClick}>
          Default Button
        </Button>
        <Button variant="destructive" onClick={handleButtonClick}>
          Destructive Button
        </Button>
        <Button variant="outline" onClick={handleButtonClick}>
          Outline Button
        </Button>
        <Button variant="secondary" onClick={handleButtonClick}>
          Secondary Button
        </Button>
        <Button variant="ghost" onClick={handleButtonClick}>
          Ghost Button
        </Button>
        <Button variant="link" onClick={handleButtonClick}>
          Link Button
        </Button>
      </div>

      <h2>Button Sizes</h2>
      <div>
        <Button size="sm" onClick={handleButtonClick}>
          Small Button
        </Button>
        <Button size="default" onClick={handleButtonClick}>
          Default Button
        </Button>
        <Button size="lg" onClick={handleButtonClick}>
          Large Button
        </Button>
      </div>
    </div>
  );
}

export default ButtonDemo;
