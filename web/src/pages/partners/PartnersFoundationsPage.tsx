import { useNoIndex } from '../../lib/useNoIndex';

export function PartnersFoundationsPage() {
  useNoIndex('Partnership — National Foundations | EECA Lung Health Sovereignty Hub');
  return (
    <div className="pp">
      <header className="pp-hero found">
        <div className="pp-wrap">
          <div className="eyebrow">A national legacy in health sovereignty</div>
          <h1>Protect a generation’s lung health — under your nation’s name, on your nation’s terms.</h1>
          <p className="pp-lede">
            The EECA Lung Health Sovereignty Hub turns political will into delivered care across Eastern Europe
            & Central Asia. For a foundation that carries a national legacy, it is a rare chance to put your
            name on a permanent, sovereign health institution — built in-country, governed in-region, and
            measured in lives.
          </p>
          <div className="pp-pills">
            <span className="pp-pill">Built on the Global TB Caucus (active in EECA since 2014)</span>
            <span className="pp-pill">Sovereign, in-region data hosting</span>
            <span className="pp-pill">300,000+ vulnerable patients</span>
          </div>
        </div>
      </header>

      <section className="pp-sec">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>The moment</div>
          <h2>As global donors withdraw, national institutions must step forward.</h2>
          <p style={{ maxWidth: 780 }}>
            From 2025, international funders are scaling back across the region. That leaves a gap — and an
            opening for a national foundation to lead the transition to <strong>domestic health sovereignty</strong>:
            a model where countries own their health data, their legislation, and their continuity of care.
            This is exactly the kind of enduring, prestige-bearing achievement a presidential or national
            foundation exists to deliver.
          </p>
        </div>
      </section>

      <section className="pp-sec alt">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>What your foundation gains</div>
          <h2>The benefits — for you</h2>
          <div style={{ maxWidth: 820, marginTop: 8 }}>
            <div className="pp-benefit"><div className="b-ico">🏛️</div><div><b>A named, lasting institution.</b><span>Not a one-off donation — a permanent regional health platform that can carry your foundation’s name and legacy for decades.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">🇰🇿🇦🇿</div><div><b>National prestige & health diplomacy.</b><span>Position your country as the regional leader in health sovereignty — convening parliaments across nine EECA states through the Global TB Caucus.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">🔐</div><div><b>Sovereignty by design.</b><span>Data is aggregated, non-identifiable, and hosted in-country/in-region under ISO 27001-grade security — control stays national, not with foreign vendors.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">📊</div><div><b>Measurable, reportable impact.</b><span>Clear deliverables and dashboards — legislative turnaround, budget decisions influenced, patients protected — for credible annual reporting.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">🤝</div><div><b>Co-funding leverage.</b><span>Your lead gift de-risks and unlocks matching support from multilaterals (WHO, ADB, World Bank, the Global Fund) — multiplying your impact.</span></div></div>
          </div>
        </div>
      </section>

      <section className="pp-sec">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>What it is</div>
          <h2>One governed platform, three components</h2>
          <div className="pp-grid">
            <div className="pp-card"><div className="pp-num">ENGINE</div><h3>Faster, better law</h3><p>A secure portal for parliamentarians with AI-<strong>assisted</strong> drafting and comparative-law intelligence — every output human-reviewed. No personal data.</p></div>
            <div className="pp-card"><div className="pp-num">BRIDGE</div><h3>Smart diplomacy</h3><p>Evidence-based regional cooperation and decision briefs that turn political engagement into concrete policy and financing.</p></div>
            <div className="pp-card"><div className="pp-num">SHIELD</div><h3>Continuity of care</h3><p>Early-warning and dashboards that protect patients during displacement, funding transitions and supply disruptions — before care is interrupted.</p></div>
          </div>
        </div>
      </section>

      <section className="pp-sec alt">
        <div className="pp-wrap">
          <div className="pp-ask">
            <h3>The ask</h3>
            <p>
              A lead philanthropic investment toward a <strong>$1.2M, 24-month</strong> programme — or a named
              component (the Engine, Bridge, or Shield). We will align scope, recognition, and reporting to
              your foundation’s priorities, and welcome a meeting with your trustees.
            </p>
            <a className="pp-cta" href="mailto:alesia.matusevych@globaltbcaucus.org?subject=Sovereignty%20Hub%20—%20Foundation%20partnership">Request the proposal &amp; a trustee briefing →</a>
          </div>
        </div>
      </section>

      <footer className="pp-foot">EECA Lung Health Sovereignty Hub · Confidential partnership brief — not for public distribution</footer>
    </div>
  );
}
