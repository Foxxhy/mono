import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Alert',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {['neutral', 'info', 'success', 'warning', 'critical'].map((tone) => (
        <div key={tone} className={`alert alert-${tone}`} role={tone === 'critical' ? 'alert' : 'status'}>
          <span className="alert-icon" aria-hidden="true">!</span>
          <div className="alert-content">
            <p className="alert-title">Alerte {tone}</p>
            <p className="alert-description">Message court, explicite et actionnable.</p>
          </div>
        </div>
      ))}
    </div>
  ),
};
