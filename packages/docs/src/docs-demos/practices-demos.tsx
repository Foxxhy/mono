import type { ReactNode } from 'react';

import './practices-demos.css';

type CardTone = 'neutral' | 'primary' | 'info';

export function PracticeCard({
  tone = 'neutral',
  title,
  children,
}: {
  tone?: CardTone;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={`practice-demo-card practice-demo-card--${tone}`}>
      <p className="overline">{tone}</p>
      <h3 className="heading-sm">{title}</h3>
      <div className="body-sm u-mt-md">{children}</div>
    </article>
  );
}

export function BackgroundUseCases() {
  return (
    <div className="practice-demo-grid">
      <PracticeCard tone="neutral" title="Bloc neutre">
        Liste, filtre, résumé secondaire ou zone dense. Le fond reste discret et ne vole pas la hiérarchie au titre.
      </PracticeCard>
      <PracticeCard tone="primary" title="Bloc mis en avant">
        Appel à l’action, onboarding ou information stratégique. La teinte oriente le regard sans saturer le texte.
      </PracticeCard>
      <PracticeCard tone="info" title="Bloc informatif">
        Message d’aide, contexte ou état explicatif. À privilégier quand l’information complète l’action principale.
      </PracticeCard>
    </div>
  );
}

export function TextHierarchyDemo() {
  return (
    <article className="practice-copy-example">
      <p className="overline">Statut</p>
      <h3 className="heading-lg">Titre principal du contenu</h3>
      <p className="body-md">
        Le corps de texte porte l’information courante. Il doit rester lisible, stable et peu coloré.
      </p>
      <p className="caption">
        Une légende ou un détail complémentaire garde une présence visuelle plus faible.
      </p>
      <p className="body-sm-warning">Message d’attention : gardez les couleurs d’état pour les vrais états.</p>
    </article>
  );
}

export function ResponsiveRowToColumnDemo() {
  return (
    <div className="practice-demo-stack">
      <PracticeCard tone="neutral" title="Contenu principal">
        Sur mobile, cette carte passe au-dessus des informations de côté.
      </PracticeCard>
      <PracticeCard tone="info" title="Complément">
        À partir de 992px, les blocs peuvent repasser en ligne.
      </PracticeCard>
    </div>
  );
}
