import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('forwards refs correctly', () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it('applies variant styles correctly', () => {
    const { getByRole } = render(<Button variant="destructive" />);
    expect(getByRole('button')).toHaveClass('destructiveVariant'); // Adjust class name if needed
  });

  it('applies size styles correctly', () => {
    const { getByRole } = render(<Button size="lg" />);
    expect(getByRole('button')).toHaveClass('sizeLg'); // Adjust class name if needed
  });

  it('forwards other props correctly', () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick} />);
    fireEvent.click(getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('renders as a button when asChild prop is false', () => {
    const { container } = render(<Button asChild={false} />);
    expect(container.firstChild?.nodeName).toBe('BUTTON');
  });
});
