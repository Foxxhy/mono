import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Radio',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <fieldset className="radio-group"><legend className="label">Plan</legend><label className="radio-wrapper"><input className="radio" type="radio" name="plan" defaultChecked /><span className="radio-label">Standard</span></label><label className="radio-wrapper"><input className="radio" type="radio" name="plan" /><span className="radio-label">Pro</span></label><label className="radio-wrapper"><input className="radio" type="radio" name="plan" disabled /><span className="radio-label">Enterprise</span></label></fieldset>
  ),
};
