import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Input',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem' }}>
      {['neutral', 'primary', 'success', 'warning', 'critical'].map((tone) => <div key={tone} className="input-group"><label className="input-label" htmlFor={`input-${tone}`}>{tone}</label><input id={`input-${tone}`} className={`input input-${tone}`} placeholder="Votre valeur" aria-describedby={`hint-${tone}`} /><p id={`hint-${tone}`} className="input-hint">Aide courte.</p></div>)}
    </div>
  ),
};
