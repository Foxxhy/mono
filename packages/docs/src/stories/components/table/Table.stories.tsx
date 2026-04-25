import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Table',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div className="table-wrapper"><table className="table table-striped table-bordered"><caption className="caption">Liste des composants</caption><thead><tr><th scope="col">Nom</th><th scope="col">État</th><th scope="col" className="table-cell-right">Actions</th></tr></thead><tbody><tr><td>Button</td><td>Stable</td><td className="table-actions table-cell-right"><button className="button button-primary-outline">Voir</button></td></tr><tr><td>Modal</td><td>À vérifier</td><td className="table-actions table-cell-right"><button className="button button-primary-outline">Voir</button></td></tr></tbody></table></div>
  ),
};
