import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Footer',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <footer className="footer"><div className="footer-content"><p className="footer-text">Design system</p><nav className="footer-links footer-links-row" aria-label="Liens de pied de page"><a className="footer-link" href="#">Aide</a><a className="footer-link" href="#">Accessibilité</a><a className="footer-link" href="#">Contact</a></nav></div><p className="footer-copyright">© 2026</p></footer>
  ),
};
