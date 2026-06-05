import { Link } from 'react-router-dom';
import { StepWizard } from '../components/form/StepWizard';
import { SiteLayout } from '../components/Layout';
import { scrollToElement } from '../lib/scrollToTarget';

function ConsultHero() {
  return (
    <div className="consult-hero">
      <div className="consult-hero-inner">
        <div className="consult-eyebrow">
          Regional Stakeholder Consultation · Discovery v1.0
        </div>
        <h1>
          Your input will shape
          <br />
          <em>what gets built first.</em>
        </h1>
        <p className="consult-hero-sub">
          Across Eastern Europe and Central Asia, health systems are under pressure — from geopolitical
          disruption, funding transitions, displacement of populations, and strained supply chains. When
          treatment continuity breaks down, the consequences are clinical, political, and irreversible.
        </p>
        <p className="consult-hero-sub">
          The EECA Lung Health Sovereignty Hub is a proposed regional platform designed to help
          parliamentarians, community organizations, and partners coordinate faster, legislate smarter,
          and protect care continuity — especially for the most vulnerable populations.
        </p>
        <div className="consult-meta">
          <span className="consult-pill">7–10 minutes</span>
          <span className="consult-pill">No individual patient data collected</span>
          <span className="consult-pill">All responses inform product decisions</span>
        </div>
        <div className="consult-cta-row">
          <a
            href="#consultation-form"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToElement('consultation-form', true);
            }}
          >
            Begin the Consultation
          </a>
          <Link to="/" className="btn btn-secondary">Learn about the Hub</Link>
        </div>
        <div className="consult-privacy">
          <strong>Privacy and consent:</strong> Your responses are collected for internal strategic planning
          and product design purposes only. No individual patient data is requested or collected at any
          point. Aggregated, anonymized findings may be shared with core project partners. By completing
          this form, you consent to this use. Contact details, if provided, are used only for follow-up
          related to this initiative.
        </div>
      </div>
    </div>
  );
}

export function ConsultationPage() {
  return (
    <SiteLayout current="consultation">
      <StepWizard hero={<ConsultHero />} />
    </SiteLayout>
  );
}
