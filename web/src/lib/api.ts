export type ConsultationResponseRow = {
  id: string;
  created_at: string;
  form_version: 'discovery-v1' | 'quick-v1';
  respondent_type: string;
  country: string | null;
  role: string | null;
  language: string | null;
  answers: Record<string, unknown>;
  urgency_score: number;
  partner_readiness_score: number | null;
  auto_tags: string[];
  contact: Record<string, unknown> | null;
  uploads: Record<string, unknown> | null;
  admin_notes: string | null;
};

const API = '/api';

async function parseJson(res: Response): Promise<unknown> {
  const text = await res.text();
  try {
    return JSON.parse(text);
  } catch {
    throw new Error(text || res.statusText);
  }
}

export async function apiGetSession(): Promise<{ authenticated: boolean; username?: string }> {
  const res = await fetch(`${API}/session.php`, { credentials: 'include' });
  return (await parseJson(res)) as { authenticated: boolean; username?: string };
}

export async function apiLogin(username: string, password: string): Promise<void> {
  const res = await fetch(`${API}/login.php`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
  const data = (await parseJson(res)) as { error?: string };
  if (!res.ok) throw new Error(data.error ?? 'Login failed');
}

export async function apiLogout(): Promise<void> {
  await fetch(`${API}/logout.php`, { method: 'POST', credentials: 'include' });
}

export async function apiListResponses(): Promise<ConsultationResponseRow[]> {
  const res = await fetch(`${API}/responses.php`, { credentials: 'include' });
  const data = (await parseJson(res)) as ConsultationResponseRow[] | { error?: string };
  if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Failed to load responses');
  return data as ConsultationResponseRow[];
}

export async function apiGetResponse(id: string): Promise<ConsultationResponseRow> {
  const res = await fetch(`${API}/responses.php?id=${encodeURIComponent(id)}`, {
    credentials: 'include',
  });
  const data = (await parseJson(res)) as ConsultationResponseRow | { error?: string };
  if (!res.ok) throw new Error((data as { error?: string }).error ?? 'Not found');
  return data as ConsultationResponseRow;
}

export async function apiUpdateNotes(id: string, adminNotes: string): Promise<void> {
  const res = await fetch(`${API}/responses.php`, {
    method: 'PATCH',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, admin_notes: adminNotes }),
  });
  const data = (await parseJson(res)) as { error?: string };
  if (!res.ok) throw new Error(data.error ?? 'Update failed');
}

export async function apiSubmitConsultation(formData: FormData): Promise<{ id: string; stored: boolean }> {
  const res = await fetch(`${API}/submit.php`, { method: 'POST', body: formData });
  const data = (await parseJson(res)) as { id?: string; stored?: boolean; error?: string };
  if (!res.ok) throw new Error(data.error ?? 'Submission failed');
  return { id: data.id ?? '', stored: Boolean(data.stored) };
}
