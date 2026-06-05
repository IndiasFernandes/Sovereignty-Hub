import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  buildStepSequence,
  resolveBranch,
  STEP_LABELS,
  validateStep,
  type FormAnswers,
} from '../../lib/formSchema';
import { submitConsultation } from '../../lib/submitConsultation';
import { scrollToElement } from '../../lib/scrollToTarget';
import { FieldRenderer } from './FieldRenderer';

type Props = {
  hero?: React.ReactNode;
};

export function StepWizard({ hero }: Props) {
  const [answers, setAnswers] = useState<FormAnswers>({});
  const [stepIndex, setStepIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const steps = useMemo(() => buildStepSequence(answers), [answers]);

  useEffect(() => {
    if (stepIndex >= steps.length && steps.length > 0) {
      setStepIndex(steps.length - 1);
    }
  }, [steps.length, stepIndex]);

  const current = steps[stepIndex];
  const progress = steps.length > 1 ? Math.round((stepIndex / (steps.length - 1)) * 97) + 3 : 3;

  const onChange = useCallback((id: string, value: unknown) => {
    setAnswers((prev) => {
      const next = { ...prev, [id]: value };
      if (id === 'q0_type' && value !== 'D') {
        delete next.q0d_describe;
        delete next.q0d_nearest;
      }
      return next;
    });
    setError(null);
  }, []);

  const goNext = async () => {
    if (!current) return;
    const err = validateStep(current, answers);
    if (err) {
      setError(err);
      scrollToElement('consultation-form', true);
      return;
    }

    if (stepIndex >= steps.length - 1) {
      setSubmitting(true);
      setSubmitError(null);
      try {
        await submitConsultation(answers);
        setDone(true);
        scrollToElement('consultation-thanks', true);
      } catch (e) {
        setSubmitError(e instanceof Error ? e.message : 'Submission failed. Please try again.');
      } finally {
        setSubmitting(false);
      }
      return;
    }

    setStepIndex((i) => i + 1);
    scrollToElement('consultation-form', true);
  };

  const goBack = () => {
    if (stepIndex > 0) setStepIndex((i) => i - 1);
    setError(null);
    scrollToElement('consultation-form', true);
  };

  if (done) {
    return (
      <>
        {hero}
        <section className="form-wrap">
          <div className="form-box">
            <div className="ty-wrap" id="consultation-thanks" style={{ display: 'block' }}>
              <div className="ty-icon" aria-hidden="true">✓</div>
              <h2>Thank you.</h2>
              <p>
                Your input goes directly to the team designing the EECA Lung Health Sovereignty Hub.
                No response will be shared publicly without your consent. If you indicated willingness
                to be contacted, you will hear from us within two weeks.
              </p>
              <div className="ty-box">
                <strong>Questions or direct contact:</strong>
                <br />
                <a className="ty-email" href="mailto:alesia.matusevych@globaltbcaucus.org">
                  alesia.matusevych@globaltbcaucus.org
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {hero}
      <section className="form-wrap" id="consultation-form" aria-label="Stakeholder consultation form">
        <div className="form-box">
          <div className="prog-wrap">
            <div className="prog-top">
              <span className="prog-label">{STEP_LABELS[current?.id ?? ''] ?? 'Consultation'}</span>
              <span className="prog-count">
                {stepIndex + 1} of {steps.length}
              </span>
            </div>
            <div className="prog-track">
              <div className="prog-fill" style={{ width: `${progress}%` }} />
            </div>
          </div>

          {current && (
            <div className="step active">
              <div className="step-tag">Step {stepIndex + 1} · {current.tag}</div>
              <h2>{current.title}</h2>
              {current.hint && <p className="step-hint">{current.hint}</p>}

              {current.fields.map((field) => {
                if (field.showWhen && !field.showWhen(answers)) return null;
                if (field.type === 'group') {
                  return (
                    <FieldRenderer
                      key={field.id}
                      field={field}
                      value={null}
                      answers={answers}
                      onChange={onChange}
                    />
                  );
                }
                return (
                  <FieldRenderer
                    key={field.id}
                    field={field}
                    value={answers[field.id]}
                    answers={answers}
                    onChange={onChange}
                    entryCards={field.id === 'q0_type'}
                  />
                );
              })}

              {error && <div className="c-field-err show">{error}</div>}
              {submitError && <div className="c-field-err show">{submitError}</div>}

              <div className="step-nav">
                <button type="button" className="btn-back" disabled={stepIndex === 0} onClick={goBack}>
                  Back
                </button>
                <button type="button" className="btn-next" disabled={submitting} onClick={goNext}>
                  {stepIndex >= steps.length - 1
                    ? submitting
                      ? 'Submitting…'
                      : 'Submit'
                    : 'Continue'}
                </button>
              </div>
            </div>
          )}

          {resolveBranch(answers) && (
            <p className="max-note" style={{ marginTop: 16 }}>
              Track: {resolveBranch(answers)} — branch-specific questions follow shared section.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
