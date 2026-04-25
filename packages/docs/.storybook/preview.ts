import type { Preview } from '@storybook/react-vite'
// Artefact public du design system (champ "style" du package) : même bundle qu’un consommateur.
import '../../design-system/dist/design-system.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;