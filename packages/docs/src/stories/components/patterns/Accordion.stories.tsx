import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Patterns/Accordion',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: 720 }}>
      <details className="card card-border" open>
        <summary className="heading-sm">Pattern natif avec details</summary>
        <p className="body-sm u-mt-md">
          À privilégier pour une ouverture simple : état, clavier et sémantique sont fournis par le navigateur.
        </p>
      </details>

      <section>
        <button type="button" className="button button-primary-outline" aria-expanded="false" aria-controls="accordion-panel-demo">
          Pattern ARIA contrôlé
        </button>
        <div id="accordion-panel-demo" className="card card-border u-mt-md" hidden>
          <p className="body-sm">Contenu masqué tant que le bouton n’est pas ouvert.</p>
        </div>
      </section>
    </div>
  ),
};
