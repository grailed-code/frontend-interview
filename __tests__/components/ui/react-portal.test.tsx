import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  act,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import ReactPortal from '@/components/ui/react-portal';

describe('ReactPortal Component', () => {
  it('renders children inside the portal', () => {
    render(
      <ReactPortal>
        <div data-testid="child">Test</div>
      </ReactPortal>
    );

    const portalRoot = document.getElementById(
      'react-portal-wrapper'
    );
    expect(portalRoot).toBeInTheDocument();
    expect(portalRoot).toContainElement(
      document.querySelector('[data-testid="child"]')
    );
  });

  it('cleans up the portal root on unmount if it was created by the component', async () => {
    const { unmount } = render(
      <ReactPortal>
        <div>Test</div>
      </ReactPortal>
    );

    unmount();

    expect(
      document.getElementById('react-portal-wrapper')
    ).not.toBeInTheDocument();
  });

  it('does not clean up the portal root on unmount if it was not created by the component', () => {
    const preExistingPortalRoot = document.createElement('div');
    preExistingPortalRoot.id = 'pre-existing-root';
    document.body.appendChild(preExistingPortalRoot);

    const { unmount } = render(
      <ReactPortal wrapperId="pre-existing-root">
        <div>Test</div>
      </ReactPortal>
    );

    unmount();

    expect(
      document.getElementById('pre-existing-root')
    ).toBeInTheDocument();

    // Clean up the pre-existing root manually
    document.body.removeChild(preExistingPortalRoot);
  });
});
