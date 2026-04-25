import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Typo',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '0.75rem' }}><p className="overline">Overline</p><h1 className="heading-2xl">Heading 2xl</h1><h2 className="heading-xl">Heading xl</h2><h3 className="heading-lg">Heading lg</h3><p className="body-lg">Body large pour introduction.</p><p className="body-md">Body medium pour contenu courant.</p><p className="caption">Caption pour complément.</p></div>
  ),
};
