import { T } from '../i18n/I18nProvider';

type Slice = {
  key: 'engine' | 'bridge' | 'shield' | 'gov';
  pct: number;
  labelKey: string;
  gradFrom: string;
  gradTo: string;
};

const SLICES: Slice[] = [
  { key: 'engine', pct: 40, labelKey: 'funders-uof-a-lab', gradFrom: 'var(--color-navy)', gradTo: 'var(--color-primary)' },
  { key: 'bridge', pct: 25, labelKey: 'funders-uof-b-lab', gradFrom: 'var(--color-primary-dark)', gradTo: 'var(--color-primary-light)' },
  { key: 'shield', pct: 20, labelKey: 'funders-uof-c-lab', gradFrom: 'var(--color-primary)', gradTo: 'var(--teal-bright)' },
  { key: 'gov', pct: 15, labelKey: 'funders-uof-d-lab', gradFrom: 'var(--color-navy-light)', gradTo: 'var(--color-primary-light)' },
];

type Props = {
  compact?: boolean;
};

export function UseOfFundsChart({ compact = false }: Props) {
  return (
    <div className={`uof-chart${compact ? ' is-compact' : ''}`}>
      <div className="uof-chart-head">
        <p className="eyebrow"><T k="funders-uof-eyebrow" /></p>
        <h2 className="uof-chart-title"><T k="funders-uof-title" /></h2>
        <p className="uof-chart-lead"><T k="funders-uof-lead" /></p>
      </div>

      <div className="uof-chart-grid" role="list">
        {SLICES.map((s) => (
          <div className="uof-chart-row" role="listitem" key={s.key}>
            <div className="uof-chart-label">
              <strong><T k={s.labelKey} /></strong>
            </div>
            <div className="uof-chart-bar-wrap">
              <div
                className="uof-chart-bar"
                style={{
                  width: `${s.pct}%`,
                  background: `linear-gradient(90deg, ${s.gradFrom}, ${s.gradTo})`,
                }}
                aria-hidden="true"
              />
              <span className="uof-chart-pct">{s.pct}%</span>
            </div>
          </div>
        ))}
      </div>

      <p className="uof-chart-caveat"><T k="uof-chart-caveat" /></p>
    </div>
  );
}
