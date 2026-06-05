import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { SiteLayout } from '../../components/Layout';
import {
  apiGetSession,
  apiListResponses,
  apiLogout,
  type ConsultationResponseRow,
} from '../../lib/api';
import { labelForOption } from '../../lib/formSchema';
import { partnerTier } from '../../lib/scoring';
import { AdminAnalytics } from './AdminAnalytics';

function csvEscape(v: string): string {
  if (v.includes(',') || v.includes('"') || v.includes('\n')) {
    return `"${v.replace(/"/g, '""')}"`;
  }
  return v;
}

export function AdminDashboardPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<ConsultationResponseRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState<'responses' | 'analytics'>('responses');
  const [filterCountry, setFilterCountry] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterTag, setFilterTag] = useState('');
  const [search, setSearch] = useState('');
  const [authChecked, setAuthChecked] = useState(false);
  const [authed, setAuthed] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await apiListResponses();
      setRows(data);
    } catch {
      setRows([]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    apiGetSession()
      .then((s) => {
        setAuthed(s.authenticated);
        setAuthChecked(true);
        if (s.authenticated) load();
      })
      .catch(() => {
        setAuthed(false);
        setAuthChecked(true);
      });
  }, [load]);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      if (filterCountry && r.country !== filterCountry) return false;
      if (filterType && r.respondent_type !== filterType) return false;
      if (filterTag && !r.auto_tags?.includes(filterTag)) return false;
      if (search) {
        const q = search.toLowerCase();
        const contact = r.contact as Record<string, string> | null;
        const hay = [
          r.country,
          r.role,
          contact?.name,
          contact?.email,
          contact?.organization,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [rows, filterCountry, filterType, filterTag, search]);

  const countries = useMemo(
    () => [...new Set(rows.map((r) => r.country).filter(Boolean))].sort() as string[],
    [rows],
  );

  const allTags = useMemo(
    () => [...new Set(rows.flatMap((r) => r.auto_tags ?? []))].sort(),
    [rows],
  );

  const exportCsv = () => {
    const header = [
      'id',
      'created_at',
      'form_version',
      'respondent_type',
      'country',
      'role',
      'urgency_score',
      'partner_readiness_score',
      'auto_tags',
      'contact_email',
    ];
    const lines = filtered.map((r) => {
      const contact = r.contact as Record<string, string> | null;
      return [
        r.id,
        r.created_at,
        r.form_version,
        r.respondent_type,
        r.country ?? '',
        r.role ?? '',
        String(r.urgency_score),
        String(r.partner_readiness_score ?? ''),
        (r.auto_tags ?? []).join(';'),
        contact?.email ?? '',
      ]
        .map((c) => csvEscape(String(c)))
        .join(',');
    });
    const blob = new Blob([[header.join(','), ...lines].join('\n')], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `consultation-responses-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const signOut = async () => {
    await apiLogout();
    navigate('/admin/login');
  };

  if (!authChecked) {
    return (
      <SiteLayout>
        <div className="admin-loading">Loading…</div>
      </SiteLayout>
    );
  }
  if (!authed) return <Navigate to="/admin/login" replace />;

  return (
    <SiteLayout>
      <div className="admin-shell">
      <header className="admin-header">
        <h1>Consultation Admin</h1>
        <div className="admin-header-actions">
          <Link to="/">← Site</Link>
          <button type="button" onClick={signOut}>Sign out</button>
        </div>
      </header>

      <nav className="admin-tabs">
        <button type="button" className={tab === 'responses' ? 'active' : ''} onClick={() => setTab('responses')}>
          Responses ({filtered.length})
        </button>
        <button type="button" className={tab === 'analytics' ? 'active' : ''} onClick={() => setTab('analytics')}>
          Analytics
        </button>
      </nav>

      {tab === 'analytics' ? (
        <AdminAnalytics rows={rows} />
      ) : (
        <>
          <div className="admin-filters">
            <input
              type="search"
              placeholder="Search name, email, org…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={filterCountry} onChange={(e) => setFilterCountry(e.target.value)}>
              <option value="">All countries</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="">All types</option>
              <option value="A">Community (A)</option>
              <option value="B">Parliament (B)</option>
              <option value="C">Partner (C)</option>
              <option value="D">Other (D)</option>
            </select>
            <select value={filterTag} onChange={(e) => setFilterTag(e.target.value)}>
              <option value="">All tags</option>
              {allTags.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <button type="button" onClick={exportCsv}>Export CSV</button>
            <button type="button" onClick={load}>Refresh</button>
          </div>

          {loading ? (
            <p>Loading responses…</p>
          ) : (
            <div className="admin-table-wrap">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Country</th>
                    <th>Urgency</th>
                    <th>Tags</th>
                    <th>Follow-up</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r) => {
                    const contact = r.contact as Record<string, string> | null;
                    const answers = r.answers as Record<string, unknown>;
                    const urgencyLabel = labelForOption(
                      'q3_urgency',
                      String(answers.q3_urgency ?? ''),
                      'full',
                    );
                    return (
                      <tr key={r.id}>
                        <td>{new Date(r.created_at).toLocaleString()}</td>
                        <td>{r.respondent_type}</td>
                        <td>{r.country ?? '—'}</td>
                        <td>
                          {urgencyLabel} ({r.urgency_score})
                        </td>
                        <td>{(r.auto_tags ?? []).join(', ') || '—'}</td>
                        <td>{contact?.consent ?? '—'}</td>
                        <td>
                          <Link to={`/admin/responses/${r.id}`}>View</Link>
                          {r.partner_readiness_score != null && (
                            <span className="admin-tier"> {partnerTier(r.partner_readiness_score)}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {!filtered.length && <p className="admin-empty">No responses match filters.</p>}
            </div>
          )}
        </>
      )}
      </div>
    </SiteLayout>
  );
}
