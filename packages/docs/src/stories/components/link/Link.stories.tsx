import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Link',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}><a className="link link-neutral" href="#">Lien neutre</a><a className="link link-primary" href="#">Lien primaire</a><a className="link link-primary" href="#">Lien avec icône <span aria-hidden="true">→</span></a></div>
  ),
};
