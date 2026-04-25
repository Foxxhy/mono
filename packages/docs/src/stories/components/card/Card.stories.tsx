import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Card',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(12rem, 1fr))' }}>
      <article className="card card-border"><h3 className="heading-md">Border</h3><p className="body-sm u-mt-md">Carte encadrée.</p></article>
      <article className="card card-shadow"><h3 className="heading-md">Shadow</h3><p className="body-sm u-mt-md">Carte avec élévation.</p></article>
      <article className="card card-border card-shadow"><h3 className="heading-md">Mixte</h3><p className="body-sm u-mt-md">Bordure et ombre.</p></article>
    </div>
  ),
};
