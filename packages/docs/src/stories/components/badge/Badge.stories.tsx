import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Badge',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      {['neutral', 'info', 'success', 'warning', 'critical'].map((tone) => <span key={tone} className={`badge badge-${tone}`}>{tone}</span>)}
    </div>
  ),
};
