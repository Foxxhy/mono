import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Toast',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div className="toast-container" style={{ position: 'relative', transform: 'none', left: 'auto', top: 'auto' }}><div className="toast toast-success" role="status"><span className="toast-icon" aria-hidden="true">✓</span><div className="toast-content"><p className="toast-title">Succès</p><p className="toast-message">Action enregistrée.</p></div><button className="toast-close" aria-label="Fermer">×</button></div><div className="toast toast-error" role="alert"><span className="toast-icon" aria-hidden="true">!</span><div className="toast-content"><p className="toast-title">Erreur</p><p className="toast-message">Action impossible.</p></div><button className="toast-close" aria-label="Fermer">×</button></div></div>
  ),
};
