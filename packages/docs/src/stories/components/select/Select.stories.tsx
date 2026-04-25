import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Select',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}><div className="select-group"><label className="select-label" htmlFor="status">Statut</label><span className="select-wrapper"><select id="status" className="select select-neutral"><option>Actif</option><option>Archivé</option></select></span><p className="select-hint">Choisissez une valeur.</p></div><div className="select-group"><label className="select-label" htmlFor="status-error">Erreur</label><span className="select-wrapper"><select id="status-error" className="select select-critical" aria-invalid="true" aria-describedby="status-error-msg"><option>Sélectionner</option></select></span><p id="status-error-msg" className="select-error">Sélection obligatoire.</p></div></div>
  ),
};
