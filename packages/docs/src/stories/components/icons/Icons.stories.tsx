import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  title: 'Components/Icons',
  parameters: {
    layout: 'padded',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const iconNames = [
  'activity',
  'triangle-alert',
  'arrow-right',
  'bell',
  'calendar',
  'check',
  'circle-check',
  'circle-alert',
  'info',
  'menu',
  'search',
  'settings',
  'trash',
  'x',
];

export const Gallery: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1.5rem' }}>
      <div className="card card-border">
        <h2 className="heading-sm">Tailles</h2>
        <div className="u-flex u-flex-wrap u-gap-lg u-mt-md" aria-label="Exemples de tailles d'icônes">
          {['xs', 'sm', 'base', 'lg', 'xl', '2xl'].map((size) => (
            <span key={size} className="u-flex u-items-center u-gap-sm">
              <svg className={`icon icon-${size}`} aria-hidden="true" role="presentation">
                <use href="/icons.svg#activity" />
              </svg>
              <span className="body-sm">{size}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="card card-border">
        <h2 className="heading-sm">Couleurs sémantiques</h2>
        <div className="u-flex u-flex-wrap u-gap-lg u-mt-md" aria-label="Exemples de couleurs d'icônes">
          {['neutral', 'heading', 'primary', 'success', 'warning', 'danger', 'info'].map((color) => (
            <span key={color} className="u-flex u-items-center u-gap-sm">
              <svg className={`icon icon-lg icon-color-${color}`} aria-hidden="true" role="presentation">
                <use href="/icons.svg#circle-check" />
              </svg>
              <span className="body-sm">{color}</span>
            </span>
          ))}
        </div>
      </div>

      <div className="card card-border">
        <h2 className="heading-sm">Extrait du sprite</h2>
        <ul className="u-flex u-flex-wrap u-gap-lg u-mt-md" aria-label="Exemples d'icônes disponibles">
          {iconNames.map((name) => (
            <li key={name} className="u-flex u-items-center u-gap-sm">
              <svg className="icon icon-lg" role="img" aria-label={name}>
                <use href={`/icons.svg#${name}`} />
              </svg>
              <span className="body-sm">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ),
};
