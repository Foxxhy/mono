import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Button',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
      <button className="button button-primary">Primary</button>
      <button className="button button-primary-outline">Primary outline</button>
      <button className="button button-secondary">Secondary</button>
      <button className="button button-critical">Critical</button>
      <button className="button button-icon-only" aria-label="Fermer">×</button>
      <button className="button button-primary" disabled>Disabled</button>
    </div>
  ),
};
