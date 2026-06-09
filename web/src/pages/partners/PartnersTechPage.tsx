import { useNoIndex } from '../../lib/useNoIndex';

export function PartnersTechPage() {
  useNoIndex('Partnership — Technology & AI | EECA Lung Health Sovereignty Hub');
  return (
    <div className="pp">
      <header className="pp-hero tech">
        <div className="pp-wrap">
          <div className="eyebrow">A reference case for responsible AI in government</div>
          <h1>The proof that governed AI can run a region’s health policy — and your platform powers it.</h1>
          <p className="pp-lede">
            The EECA Lung Health Sovereignty Hub is a real-world, government-facing deployment of AI used the
            right way: <strong>an enabling tool with human review at every step</strong>, on sovereign infrastructure,
            under ISO 27001-grade governance. It’s exactly the credible, high-trust public-sector case AI-for-good
            programmes are built to showcase.
          </p>
          <div className="pp-pills">
            <span className="pp-pill">9 national parliaments (Global TB Caucus)</span>
            <span className="pp-pill">Human-in-the-loop · full audit trail</span>
            <span className="pp-pill">Kazakhstan &amp; Azerbaijan pilots</span>
          </div>
        </div>
      </header>

      <section className="pp-sec">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>Why this is a fit</div>
          <h2>Not a chatbot demo — governed AI in production, where it matters</h2>
          <p style={{ maxWidth: 800 }}>
            Most “AI for good” pilots never touch real institutions. This one sits inside parliaments and health
            ministries across Eastern Europe & Central Asia, helping draft better health law and protect
            continuity of care for 300,000+ patients. AI assists; people decide. That combination — impact plus
            governance — is what makes it a flagship reference, not a risk.
          </p>
        </div>
      </section>

      <section className="pp-sec alt">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>What you get</div>
          <h2>The benefits — for your company</h2>
          <div style={{ maxWidth: 840, marginTop: 8 }}>
            <div className="pp-benefit"><div className="b-ico">🏆</div><div><b>A flagship public-sector reference case.</b><span>A documented, government-trusted deployment of your models/cloud — ideal for AI-for-good storytelling, case studies and policy engagement.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">🌍</div><div><b>Footprint in a strategic region.</b><span>Real adoption across nine EECA states — a market and policy environment where credible, sovereign AI partners are scarce.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">🛡️</div><div><b>Responsible-AI proof points.</b><span>Human-in-the-loop, confidence indicators, audit trails, no PII, sovereign hosting — the governance story your trust & safety and policy teams want to tell.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">⚙️</div><div><b>Efficient deployment of support.</b><span>We can absorb cash grants, cloud/compute credits, model access, or engineering time — each maps cleanly to a defined component.</span></div></div>
            <div className="pp-benefit"><div className="b-ico">📈</div><div><b>Measurable outcomes.</b><span>Legislative turnaround, budget decisions influenced, continuity-of-care alerts acted on — hard metrics for your impact reporting.</span></div></div>
          </div>
        </div>
      </section>

      <section className="pp-sec">
        <div className="pp-wrap">
          <div className="eyebrow" style={{ color: '#0a5252' }}>How you can help</div>
          <h2>Three ways to partner</h2>
          <div className="pp-grid">
            <div className="pp-card"><div className="pp-num">01 · FUND</div><h3>Grant</h3><p>A grant toward the $1.2M / 24-month programme or a named component. Best fit: Google.org (AI for Government), McGovern Foundation, AWS IMAGINE.</p></div>
            <div className="pp-card"><div className="pp-num">02 · POWER</div><h3>Credits &amp; models</h3><p>Cloud/compute credits and model access to run the platform sustainably. Best fit: Microsoft Azure, Anthropic, NVIDIA Inception, OpenAI.</p></div>
            <div className="pp-card"><div className="pp-num">03 · BUILD</div><h3>Technical partnership</h3><p>Engineering time, solution architecture, and responsible-AI review. Best fit: Google.org engineers, Microsoft AI for Good Lab, IBM.</p></div>
          </div>
        </div>
      </section>

      <section className="pp-sec alt">
        <div className="pp-wrap">
          <div className="pp-ask">
            <h3>The ask</h3>
            <p>
              A funding, credits, or technical-partnership commitment — and your logo on a governed-AI reference
              case we’ll build with you. We’ll scope it to your programme’s criteria and provide the impact
              reporting your team needs.
            </p>
            <a className="pp-cta" href="mailto:alesia.matusevych@globaltbcaucus.org?subject=Sovereignty%20Hub%20—%20Tech%20%26%20AI%20partnership">Start a partnership conversation →</a>
          </div>
        </div>
      </section>

      <footer className="pp-foot">EECA Lung Health Sovereignty Hub · Confidential partnership brief — not for public distribution</footer>
    </div>
  );
}
