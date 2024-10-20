import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { metadata, default as RootLayout } from './layout';

vi.mock('next/font/google', () => ({
  Inter: (): { className: string } => ({ className: 'inter' }),
}));

describe('RootLayout', () => {
  it('renders', () => {
    render(
      <RootLayout>
        <p>Test</p>
      </RootLayout>,
    );

    const html = document.documentElement;
    const body = document.body;

    expect(html).toBeDefined();
    expect(body).toBeDefined();
  });

  it('has metadata', () => {
    expect(metadata).toBeDefined();
    expect(metadata.title).toBeDefined();
    expect(metadata.description).toBeDefined();
  });
});
