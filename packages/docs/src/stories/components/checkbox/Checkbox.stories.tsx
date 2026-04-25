import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Checkbox',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <fieldset className="checkbox-group"><legend className="label">Préférences</legend>
      <label className="checkbox-wrapper"><input className="checkbox" type="checkbox" defaultChecked /><span><span className="checkbox-label">Recevoir les emails</span><span className="checkbox-hint">Un résumé hebdomadaire.</span></span></label>
      <label className="checkbox-wrapper"><input className="checkbox" type="checkbox" disabled /><span className="checkbox-label">Option indisponible</span></label>
    </fieldset>
  ),
};
