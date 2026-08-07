import { useEffect, useState, type FormEvent } from 'react';
import { Navigate, useNavigate } from 'react-router';
import { SiteLayout } from '../../components/Layout';
import { apiGetSession, apiLogin } from '../../lib/api';

export function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState<boolean | null>(null);

  useEffect(() => {
    apiGetSession()
      .then((s) => setSession(s.authenticated))
      .catch(() => setSession(false));
  }, []);

  if (session === null) {
    return (
      <SiteLayout>
        <div className="admin-loading">Loading…</div>
      </SiteLayout>
    );
  }
  if (session) return <Navigate to="/admin" replace />;

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiLogin(username, password);
      navigate('/admin');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteLayout>
      <div className="admin-login-wrap">
        <form className="admin-login-card" onSubmit={onSubmit}>
        <h1>EECA Hub Admin</h1>
        <p>Sign in to view consultation responses and analytics.</p>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error && <p className="admin-error">{error}</p>}
        <button type="submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
        </form>
      </div>
    </SiteLayout>
  );
}
