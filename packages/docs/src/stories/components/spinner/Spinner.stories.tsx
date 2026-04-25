import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Spinner',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}><span className="spinner spinner-sm" aria-label="Chargement" role="status" /><span className="spinner spinner-md spinner-secondary" aria-label="Chargement" role="status" /><span className="spinner spinner-lg spinner-critical" aria-label="Chargement" role="status" /></div>
  ),
};
