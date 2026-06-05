import {
  computeAutoTags,
  computePartnerReadinessScore,
  computeUrgencyScore,
} from './scoring';
import { type FormAnswers } from './formSchema';
import { apiSubmitConsultation } from './api';

function str(v: unknown): string {
  return typeof v === 'string' ? v : '';
}

const FILE_FIELDS = ['qa8_upload', 'qb8_upload', 'qc10_upload'];

function serializeAnswers(answers: FormAnswers): Record<string, unknown> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(answers)) {
    if (v instanceof File) continue;
    out[k] = v;
  }
  return out;
}

function buildContact(answers: FormAnswers): Record<string, unknown> | null {
  const consent = str(answers.q8_consent);
  if (!consent) return null;
  return {
    consent,
    name: str(answers.q8a_name) || null,
    email: str(answers.q8a_email) || null,
    organization: str(answers.q8a_org) || null,
    language: str(answers.q8a_lang) || null,
  };
}

export async function submitConsultation(answers: FormAnswers) {
  const responseId = crypto.randomUUID();
  const serialized = serializeAnswers(answers);
  const urgencyScore = computeUrgencyScore(serialized);
  const partnerScore = computePartnerReadinessScore(serialized);
  const autoTags = computeAutoTags(serialized);

  const payload = {
    id: responseId,
    form_version: 'discovery-v1',
    respondent_type: str(answers.q0_type) || 'D',
    country: str(answers.q1_country) || null,
    role: str(answers.q2_role) || null,
    language: str(answers.q8a_lang) || null,
    answers: serialized,
    urgency_score: urgencyScore,
    partner_readiness_score: partnerScore,
    auto_tags: autoTags,
    contact: buildContact(answers),
  };

  const formData = new FormData();
  formData.append('payload', JSON.stringify(payload));

  for (const fieldId of FILE_FIELDS) {
    const file = answers[fieldId];
    if (file instanceof File) {
      formData.append(fieldId, file);
    }
  }

  return apiSubmitConsultation(formData);
}
