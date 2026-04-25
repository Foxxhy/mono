import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Patterns/Navigation',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <nav aria-label="Navigation principale">
        <ul className="header-nav-list header-nav-list-row">
          <li><a className="header-nav-link" aria-current="page" href="#accueil">Accueil</a></li>
          <li><a className="header-nav-link" href="#docs">Documentation</a></li>
          <li><a className="header-nav-link" href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="card card-border">
        <h2 className="heading-md">Déclencheur mobile</h2>
        <button type="button" className="header-menu-toggle u-mt-md" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="mobile-nav-story">
          <span className="header-menu-toggle-icon" aria-hidden="true">
            <span className="header-menu-toggle-line" />
            <span className="header-menu-toggle-line" />
            <span className="header-menu-toggle-line" />
          </span>
        </button>
      </section>
    </div>
  ),
};
