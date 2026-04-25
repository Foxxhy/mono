import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Patterns/Dialog',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem', maxWidth: 720 }}>
      <section className="card card-border">
        <h2 className="heading-md">Dialog natif</h2>
        <p className="body-sm u-mt-md">Le bouton ouvre un élément dialog natif dans le snippet de documentation.</p>
        <button type="button" className="button button-primary u-mt-md">
          Ouvrir un dialog
        </button>
      </section>

      <section className="modal-overlay" data-open="true" style={{ position: 'relative', minHeight: 320 }}>
        <div className="modal-container modal-md" role="dialog" aria-modal="true" aria-labelledby="story-dialog-title">
          <header className="modal-header">
            <h2 id="story-dialog-title" className="modal-title">Structure custom stylée</h2>
            <button className="modal-close" type="button" aria-label="Fermer">×</button>
          </header>
          <div className="modal-body">
            <p className="body-md">Les classes modal stylent l’overlay, mais le comportement accessible reste à implémenter.</p>
          </div>
        </div>
      </section>
    </div>
  ),
};
