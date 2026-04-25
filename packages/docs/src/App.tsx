import './App.css'

function App() {
  return (
    <main className="docs-home">
      <section className="docs-home-hero">
        <svg className="docs-home-icon" aria-hidden="true" role="presentation">
          <use href="/icons.svg#component" />
        </svg>
        <h1>Design system</h1>
        <p>Documentation des tokens, composants CSS et patterns accessibles.</p>
      </section>

      <section className="docs-home-links" aria-label="Accès rapides">
        <a href="/?path=/docs/fondations-tokens--docs">
          <svg className="docs-home-link-icon" aria-hidden="true" role="presentation">
            <use href="/icons.svg#swatch-book" />
          </svg>
          Tokens
        </a>
        <a href="/?path=/docs/components-button--docs">
          <svg className="docs-home-link-icon" aria-hidden="true" role="presentation">
            <use href="/icons.svg#box" />
          </svg>
          Composants
        </a>
        <a href="/?path=/docs/components-icons--docs">
          <svg className="docs-home-link-icon" aria-hidden="true" role="presentation">
            <use href="/icons.svg#sparkles" />
          </svg>
          Icons
        </a>
        <a href="/?path=/docs/patterns-dialog--docs">
          <svg className="docs-home-link-icon" aria-hidden="true" role="presentation">
            <use href="/icons.svg#layout-template" />
          </svg>
          Patterns
        </a>
      </section>
    </main>
  )
}

export default App
