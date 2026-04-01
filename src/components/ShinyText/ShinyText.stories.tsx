import type { Meta, StoryObj } from '@storybook/react';
import ShinyText from './ShinyText';
import { text } from 'stream/consumers';

const meta = {
  title: 'Components/ShinyText',
  component: ShinyText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ShinyText >;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Shiny Text',
  },
};


