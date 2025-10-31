import React from 'react';
import { render } from 'react-dom';
import { describe, it, expect } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { Button } from 'react-aria-components';

describe('in the browser', () => {
  it('test', async () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    render(<Button className={({isPressed}) => (isPressed ? 'pressed' : 'unpressed')}>Test</Button>, container);

    const btn = page.getByRole('button');

    await userEvent.tab();

    expect(btn).toHaveFocus();

    await userEvent.keyboard('{Space>}');
    expect(btn).toHaveClass('pressed');
    await userEvent.keyboard('{/Space}');

    expect(btn).toHaveClass('unpressed');

    await userEvent.keyboard('{Enter>}');
    expect(btn).toHaveClass('pressed');
    await userEvent.keyboard('{/Enter}');

    expect(btn).toHaveClass('unpressed');
  });
});
