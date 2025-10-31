import React from 'react';
import { Button } from 'react-aria-components';
import { expect, fn } from 'storybook/test';

export default {
  title: 'Button',
  component: Button,
  render: ({ label }) => (
    <>
      <Button className={({ isPressed }) => console.log({ isPressed }) || (isPressed ? 'pressed' : 'unpressed')}>{label}</Button>
    </>
  ),
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
  play: async ({ canvas, userEvent, args }) => {
    const btn = await canvas.getByRole('button', { name: args.label });

    await userEvent.tab();

    expect(btn).toHaveFocus();

    await userEvent.keyboard('{Enter>}');
    expect(btn).toHaveClass('pressed');
    await userEvent.keyboard('{/Enter}');

    expect(btn).toHaveClass('unpressed');

    expect(btn).toHaveFocus();

    await userEvent.keyboard('{Space}');
    expect(btn).toHaveClass('pressed');
    await userEvent.keyboard('{/Space}');

    expect(btn).toHaveClass('unpressed');
  }
};
