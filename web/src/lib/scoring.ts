import type { FormAnswers } from './formSchema';

function str(v: unknown): string {
  return typeof v === 'string' ? v : '';
}

function arr(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x): x is string => typeof x === 'string') : [];
}

export function computeUrgencyScore(answers: FormAnswers): number {
  let score = 0;
  const urgency = str(answers.q3_urgency);
  if (urgency === 'critical') score += 3;
  else if (urgency === 'high') score += 2;

  if (str(answers.q6_migration) === 'major') score += 2;

  const crisis = str(answers.q10_crisis);
  if (crisis === 'poor' || crisis === 'not') score += 2;

  if (str(answers.q11_crossborder) === 'no') score += 1;

  if (arr(answers.q4_risks).length >= 3) score += 1;

  return score;
}

export function computePartnerReadinessScore(answers: FormAnswers): number | null {
  if (str(answers.q0_type) !== 'C') return null;

  let score = 0;
  const pilot = str(answers.qc7_pilot);
  if (pilot === 'yes') score += 3;

  if (arr(answers.qc5_evidence).includes('now')) score += 3;

  const mvp = str(answers.qc8_fundable);
  if (mvp && mvp !== 'none' && mvp !== 'uncertain') score += 2;

  const dataHeld = arr(answers.qc2_data);
  const dataCount = dataHeld.filter((d) => d !== 'none' && d !== 'unsure').length;
  if (dataCount >= 3) score += 2;

  if (arr(answers.qc3_share).includes('open')) score += 2;

  if (str(answers.q8_consent) === 'yes') score += 1;

  return score;
}

export function computeAutoTags(answers: FormAnswers): string[] {
  const tags = new Set<string>();

  if (str(answers.q3_urgency) === 'critical') tags.add('HIGH-URGENCY-CONTEXT');
  if (str(answers.q8_consent) === 'yes') tags.add('FOLLOW-UP-REQUIRED');
  if (str(answers.qc7_pilot) === 'yes') tags.add('PILOT-CANDIDATE');

  const resp = str(answers.q0_type);
  if (resp === 'B') {
    const windows = arr(answers.qb5_windows);
    const hasWindow = windows.some(
      (w) => w !== 'none' && w !== 'unsure',
    );
    if (hasWindow) tags.add('URGENT-POLITICAL-WINDOW');
  }

  if (resp === 'A' && str(answers.qa4_migrant) === 'yes-reg') {
    tags.add('DISPLACEMENT-CONTINUITY-RISK');
  }

  if (resp === 'C' && str(answers.qc4_funding) === 'very') {
    tags.add('FUNDING-TRANSITION-RISK');
  }

  const contributes = arr(answers.q7_contribute);
  const hasDataContribution = contributes.some(
    (c) => c !== 'none' && c !== 'more-info',
  );
  if (hasDataContribution && ['yes', 'maybe'].includes(str(answers.q8_consent))) {
    tags.add('TIER-1-DATA-PARTNER');
  }

  return [...tags];
}

export function partnerTier(score: number | null): 'Tier 1' | 'Tier 2' | 'Monitor' | '—' {
  if (score === null) return '—';
  if (score >= 7) return 'Tier 1';
  if (score >= 4) return 'Tier 2';
  return 'Monitor';
}
