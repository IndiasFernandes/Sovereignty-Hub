import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { SiteLayout } from '../../components/Layout';
import { getAllSteps, labelForOption, type FormVariant } from '../../lib/formSchema';
import {
  apiGetResponse,
  apiGetSession,
  apiUpdateNotes,
  type ConsultationResponseRow,
} from '../../lib/api';

export function AdminResponseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [row, setRow] = useState<ConsultationResponseRow | null>(null);
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(true);
  const [authed, setAuthed] = useState<boolean | null>(null);

  useEffect(() => {
    if (!id) return;
    apiGetSession()
      .then(async (s) => {
        if (!s.authenticated) {
          setAuthed(false);
          setLoading(false);
          return;
        }
        setAuthed(true);
        try {
          const r = await apiGetResponse(id);
          setRow(r);
          setNotes(r.admin_notes ?? '');
        } catch {
          setRow(null);
        }
        setLoading(false);
      })
      .catch(() => {
        setAuthed(false);
        setLoading(false);
      });
  }, [id]);

  const saveNotes = async () => {
    if (!id) return;
    await apiUpdateNotes(id, notes);
  };

  if (loading) {
    return (
      <SiteLayout>
        <div className="admin-loading">Loading…</div>
      </SiteLayout>
    );
  }
  if (authed === false) return <Navigate to="/admin/login" replace />;
  if (!row) {
    return (
      <SiteLayout>
        <div className="admin-shell"><p>Response not found.</p></div>
      </SiteLayout>
    );
  }

  const variant: FormVariant = 'full';
  const answers = row.answers as Record<string, unknown>;
  const steps = getAllSteps(variant);

  return (
    <SiteLayout>
      <div className="admin-shell">
      <header className="admin-header">
        <h1>Response detail</h1>
        <Link to="/admin">← Back to list</Link>
      </header>

      <div className="admin-detail-meta">
        <p><strong>Submitted:</strong> {new Date(row.created_at).toLocaleString()}</p>
        <p><strong>Type:</strong> {row.respondent_type} · <strong>Form:</strong> {row.form_version}</p>
        <p><strong>Country:</strong> {row.country ?? '—'} · <strong>Role:</strong> {row.role ?? '—'}</p>
        <p><strong>Urgency score:</strong> {row.urgency_score}</p>
        <p><strong>Tags:</strong> {(row.auto_tags ?? []).join(', ') || '—'}</p>
      </div>

      <section className="admin-detail-section">
        <h2>Answers</h2>
        {steps.map((step) => (
          <div key={step.id} className="admin-detail-step">
            <h3>{step.title}</h3>
            <dl>
              {step.fields.flatMap((field) => {
                if (field.type === 'group' && field.fields) {
                  return field.fields.map((sub) => {
                    const val = answers[sub.id];
                    if (val == null || val === '') return null;
                    return (
                      <div key={sub.id} className="admin-detail-row">
                        <dt>{sub.label ?? sub.id}</dt>
                        <dd>{String(val)}</dd>
                      </div>
                    );
                  });
                }
                const val = answers[field.id];
                if (val == null || val === '') return [];
                const label = field.label ?? field.id;
                const display =
                  field.type === 'radio' || field.type === 'select'
                    ? labelForOption(field.id, String(val), variant)
                    : Array.isArray(val)
                      ? val.join(', ')
                      : String(val);
                return (
                  <div key={field.id} className="admin-detail-row">
                    <dt>{label}</dt>
                    <dd>{display}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        ))}
      </section>

      <section className="admin-detail-section">
        <h2>Admin notes</h2>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} rows={4} />
        <button type="button" onClick={saveNotes}>Save notes</button>
      </section>
      </div>
    </SiteLayout>
  );
}
