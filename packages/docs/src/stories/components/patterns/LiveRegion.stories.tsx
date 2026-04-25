import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Patterns/LiveRegion',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: 720 }}>
      <div className="toast toast-success" role="status" aria-live="polite">
        <span className="toast-icon" aria-hidden="true">✓</span>
        <div className="toast-content">
          <p className="toast-title">Statut non urgent</p>
          <p className="toast-message">Vos changements sont sauvegardés.</p>
        </div>
      </div>

      <div className="alert alert-critical" role="alert">
        <div className="alert-content">
          <p className="alert-title">Erreur urgente</p>
          <p className="alert-description">Impossible de continuer sans corriger le formulaire.</p>
        </div>
      </div>
    </div>
  ),
};
