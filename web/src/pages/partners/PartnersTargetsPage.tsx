import { useNoIndex } from '../../lib/useNoIndex';
import { FUNDER_GROUPS, FUNDER_COUNT } from '../../lib/fundersData';

export function PartnersTargetsPage() {
  useNoIndex('Funder Target List (internal) | EECA Lung Health Sovereignty Hub');
  return (
    <div className="pp">
      <header className="pp-hero targets">
        <div className="pp-wrap">
          <div className="eyebrow">Internal — outreach &amp; follow-up</div>
          <h1>Funder target list — {FUNDER_COUNT} sources</h1>
          <p className="pp-lede">
            Researched June 2026 for Kazakhstan, Azerbaijan and international funders. Ordered by fit within each
            group. “Route” is the program or contact entry point. Flags note caveats to check before approaching.
          </p>
          <div className="pp-pills">
            <span className="pp-pill">Foundations · Corporates · Big Tech · Multilaterals</span>
            <span className="pp-pill">Confidential — internal use only</span>
          </div>
        </div>
      </header>

      <section className="pp-sec">
        <div className="pp-wrap">
          <div className="pp-note">
            <strong>Strongest near-term cash routes:</strong> The Global Fund (multicountry / GC8) · Stop TB
            Partnership CFCS · Google.org (AI for Government) · Patrick J. McGovern Foundation · Heydar Aliyev
            Foundation · Qazaqstan Halqyna. <strong>Legitimacy unlock:</strong> a WHO/Europe (TB-Free Central Asia)
            endorsement de-risks every other pitch.
          </div>

          {FUNDER_GROUPS.map((g) => (
            <div className="pp-cat" key={g.category}>
              <h2>{g.category} <span className="cnt">{g.funders.length}</span></h2>
              <p className="blurb">{g.blurb}</p>
              <table className="pp-table">
                <thead>
                  <tr>
                    <th>Funder</th>
                    <th>Geo</th>
                    <th>Type</th>
                    <th>Focus</th>
                    <th>Fit</th>
                    <th>Why / route</th>
                  </tr>
                </thead>
                <tbody>
                  {g.funders.map((f) => (
                    <tr key={f.name}>
                      <td>
                        <span className="pp-name">{f.name}</span>
                        {f.flag && <span className="pp-flag">⚠ {f.flag}</span>}
                      </td>
                      <td>{f.country}</td>
                      <td>{f.type}</td>
                      <td>{f.focus}</td>
                      <td><span className={`fit fit-${f.fit}`}>{f.fit}</span></td>
                      <td>{f.why}<br /><span className="pp-route">→ {f.route}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

          <div className="pp-note" style={{ marginTop: 32 }}>
            <strong>Confirmed ineligible / long-shots:</strong> Gavi (KZ/AZ above income threshold; vaccines-only) ·
            Pandemic Fund 4th Call (fragile states only) · Unitaid &amp; Bloomberg D4H (EECA footprint unconfirmed) ·
            AKDN (operates only KG/TJ; implementer, not grantmaker). <strong>Relationship-led (no open portal):</strong>{' '}
            McGovern, Gates, Open Society — budget cultivation time.
          </div>
        </div>
      </section>

      <footer className="pp-foot">EECA Lung Health Sovereignty Hub · Internal funder list — confidential</footer>
    </div>
  );
}
