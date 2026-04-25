import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Breadcrumb',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <nav className="breadcrumb" aria-label="Fil d’Ariane">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item"><a className="breadcrumb-link" href="#">Accueil</a><span className="breadcrumb-separator">/</span></li>
        <li className="breadcrumb-item"><a className="breadcrumb-link" href="#">Docs</a><span className="breadcrumb-separator">/</span></li>
        <li className="breadcrumb-item"><a className="breadcrumb-link breadcrumb-link-current" href="#" aria-current="page">Composants</a></li>
      </ol>
    </nav>
  ),
};
