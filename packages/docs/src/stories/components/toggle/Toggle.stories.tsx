import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Toggle',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div className="toggle-group"><label className="toggle-wrapper"><input className="toggle" type="checkbox" defaultChecked /><span><span className="toggle-label">Mode compact</span><span className="toggle-hint">Active une densité plus faible.</span></span></label><label className="toggle-wrapper"><input className="toggle" type="checkbox" disabled /><span className="toggle-label">Désactivé</span></label></div>
  ),
};
