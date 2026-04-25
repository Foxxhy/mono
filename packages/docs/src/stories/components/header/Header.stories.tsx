import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Header',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => (
    <header className="header"><div className="header-content"><div className="header-top"><a className="header-brand" href="#"><span className="header-brand-text">Brand</span></a><button className="header-menu-toggle" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="main-nav"><span className="header-menu-toggle-icon" aria-hidden="true"><span className="header-menu-toggle-line" /><span className="header-menu-toggle-line" /><span className="header-menu-toggle-line" /></span></button></div><nav id="main-nav" className="header-nav header-nav-desktop" aria-label="Navigation principale"><ul className="header-nav-list"><li><a className="header-nav-link" aria-current="page" href="#">Accueil</a></li><li><a className="header-nav-link" href="#">Docs</a></li></ul></nav></div></header>
  ),
};
