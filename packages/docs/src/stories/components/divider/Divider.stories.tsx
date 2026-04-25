import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Divider',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      <hr className="divider divider-sm" />
      <hr className="divider divider-md" />
      <hr className="divider divider-lg divider-bold" />
      <div style={{ height: '5rem', display: 'flex', gap: '1rem' }}><span>Avant</span><hr className="divider-vertical" /><span>Après</span></div>
    </div>
  ),
};
