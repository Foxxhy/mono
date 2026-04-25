import type { CSSProperties, ReactNode } from 'react';

const rampSteps = [0, 100, 200, 300, 400, 500, 600, 700, 800] as const;
type ColorRampFamily =
  | 'neutral'
  | 'primary'
  | 'accent'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info';

const wrap: CSSProperties = { display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 8 };
const label: CSSProperties = { fontSize: 11, fontFamily: 'var(--font-family-primary)', color: 'var(--color-text-label)' };
const box = (varName: string, fg?: string): CSSProperties => ({
  width: 72,
  minHeight: 64,
  borderRadius: 6,
  background: `var(${varName})`,
  color: fg ?? 'var(--color-neutral-800)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: 8,
  boxSizing: 'border-box',
  border: '1px solid var(--color-neutral-200)',
  fontSize: 10,
  fontFamily: 'var(--font-family-primary)',
  wordBreak: 'break-all',
});

export function ColorRamp({ family, labelPrefix }: { family: ColorRampFamily; labelPrefix: string }) {
  return (
    <div style={wrap} role="list">
      {rampSteps.map((step) => {
        const v = `--color-${family}-${step}`;
        const isLight = step < 500;
        return (
          <div key={step} style={box(v, isLight ? 'var(--color-neutral-800)' : '#fff')} role="listitem" title={v}>
            <span style={{ fontWeight: 600 }}>{labelPrefix}{step}</span>
            <code style={{ color: isLight ? 'var(--color-neutral-600)' : 'rgb(255 255 255 / 75%)' }}>{`var(${v})`}</code>
          </div>
        );
      })}
    </div>
  );
}

const table: CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 14, fontFamily: 'var(--font-family-primary)' };
const th: CSSProperties = { textAlign: 'left' as const, borderBottom: '1px solid var(--color-neutral-200)', padding: '8px 10px' };
const td: CSSProperties = { borderBottom: '1px solid var(--color-neutral-100)', padding: '8px 10px', verticalAlign: 'middle' as const };
const code: CSSProperties = { fontSize: 12, fontFamily: 'ui-monospace, monospace' };

type TokenRow = { name: string; preview: ReactNode; description?: string };

export function TokenTable({ headers, rows }: { headers: [string, string, string?]; rows: TokenRow[] }) {
  const d = headers[2];
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>{headers[0]}</th>
            <th style={th}>{headers[1]}</th>
            {d ? <th style={th}>{d}</th> : null}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td style={td}><code style={code}>{r.name}</code></td>
              <td style={td}>{r.preview}</td>
              {d ? <td style={td}>{r.description}</td> : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ColorTextSample({ varName, children = 'Démonstration' as ReactNode }: { varName: string; children?: ReactNode }) {
  return (
    <span style={{ color: `var(${varName})`, fontSize: 18, fontWeight: 500 }}>{children}</span>
  );
}

export function SpacingBar({ varName, label: text }: { varName: string; label: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontFamily: 'var(--font-family-primary)', marginBottom: 6 }}>
      <code style={{ ...code, minWidth: 200 }}>{`var(${varName})`}</code>
      <div
        style={{
          height: 20,
          width: `var(${varName})`,
          minWidth: 2,
          background: 'var(--color-primary-500)',
        }}
        title={text}
        aria-label={text}
      />
    </div>
  );
}

export function ShadowBox({ varName, label: text }: { varName: string; label: string }) {
  return (
    <div
      style={{
        boxShadow: `var(${varName})`,
        background: 'var(--color-neutral-0)',
        border: '1px solid var(--color-neutral-200)',
        borderRadius: 6,
        padding: '1rem 1.25rem',
        fontSize: 14,
        minWidth: 120,
        fontFamily: 'var(--font-family-primary)',
      }}
    >
      {text}
      <div style={{ marginTop: 6 }}><code style={code}>{`var(${varName})`}</code></div>
    </div>
  );
}

const flexBox: CSSProperties = {
  display: 'flex',
  gap: 6,
  padding: 12,
  minHeight: 60,
  border: '1px dashed var(--color-neutral-300)',
  borderRadius: 6,
  background: 'var(--color-neutral-100)',
  maxWidth: 400,
  fontSize: 12,
  fontFamily: 'var(--font-family-primary)',
};

export function FlexDemo({ className, caption }: { className: string; caption: string }) {
  return (
    <figure style={{ margin: '0.75rem 0' }}>
      <div className={className} style={flexBox}>
        <div style={{ padding: 8, background: 'var(--color-primary-200)', borderRadius: 4 }}>A</div>
        <div style={{ padding: 8, background: 'var(--color-primary-200)', borderRadius: 4 }}>B</div>
        <div style={{ padding: 8, background: 'var(--color-primary-200)', borderRadius: 4 }}>C</div>
      </div>
      <figcaption style={label}><code style={code}>{className}</code> — {caption}</figcaption>
    </figure>
  );
}

const utilGrid: CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(12rem, 1fr))', gap: 8, marginTop: 8 };

export function UtilityClassCard({ className, children }: { className: string; children: ReactNode }) {
  return (
    <div className={className} style={{ border: '1px solid var(--color-neutral-200)', borderRadius: 6, padding: 10, background: 'var(--color-bg)' }}>
      <code style={code}>{className}</code>
      {children}
    </div>
  );
}

export function UtilityGrid({ items }: { items: { className: string; children?: ReactNode }[] }) {
  return (
    <div style={utilGrid} role="list">
      {items.map(({ className, children }) => (
        <UtilityClassCard key={className} className={className}>
          {children}
        </UtilityClassCard>
      ))}
    </div>
  );
}
