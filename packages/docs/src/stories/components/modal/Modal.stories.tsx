import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Modal',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div className="modal-overlay" data-open="true" style={{ position: 'relative', minHeight: 360 }}>
      <section className="modal-container modal-md" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <header className="modal-header">
          <h2 id="modal-title" className="modal-title">Titre de modale</h2>
          <button className="modal-close" aria-label="Fermer">
            <svg className="icon icon-base" aria-hidden="true" role="presentation">
              <use href="/icons.svg#x" />
            </svg>
          </button>
        </header>
        <div className="modal-body">
          <p>Contenu de la modale.</p>
        </div>
        <footer className="modal-footer">
          <button className="button button-primary-outline">Annuler</button>
          <button className="button button-primary">Confirmer</button>
        </footer>
      </section>
    </div>
  ),
};
