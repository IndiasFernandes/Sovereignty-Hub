import { useMemo } from 'react';
import type { ConsultationResponseRow } from '../../lib/api';
import { partnerTier } from '../../lib/scoring';

type Props = { rows: ConsultationResponseRow[] };

function countBy<T extends string>(items: T[]): Record<string, number> {
  return items.reduce<Record<string, number>>((acc, item) => {
    acc[item] = (acc[item] ?? 0) + 1;
    return acc;
  }, {});
}

export function AdminAnalytics({ rows }: Props) {
  const urgencyByCountry = useMemo(() => {
    const map = new Map<string, { total: number; count: number }>();
    for (const r of rows) {
      const c = r.country ?? 'Unknown';
      const cur = map.get(c) ?? { total: 0, count: 0 };
      cur.total += r.urgency_score;
      cur.count += 1;
      map.set(c, cur);
    }
    return [...map.entries()]
      .map(([country, { total, count }]) => ({
        country,
        avg: count ? (total / count).toFixed(1) : '0',
        count,
      }))
      .sort((a, b) => Number(b.avg) - Number(a.avg));
  }, [rows]);

  const pillarFirst = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of rows) {
      const ranked = r.answers.q5_pillars;
      if (Array.isArray(ranked) && ranked[0]) {
        const k = String(ranked[0]);
        counts[k] = (counts[k] ?? 0) + 1;
      }
    }
    return counts;
  }, [rows]);

  const mvpFirst = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of rows) {
      const mvp = r.answers.q12_mvp;
      if (Array.isArray(mvp) && mvp[0]) {
        counts[String(mvp[0])] = (counts[String(mvp[0])] ?? 0) + 1;
      } else if (typeof mvp === 'string' && mvp) {
        counts[mvp] = (counts[mvp] ?? 0) + 1;
      }
    }
    return counts;
  }, [rows]);

  const riskFreq = useMemo(() => {
    const all: string[] = [];
    for (const r of rows) {
      const risks = r.answers.q4_risks;
      if (Array.isArray(risks)) all.push(...risks.map(String));
    }
    return Object.entries(countBy(all)).sort((a, b) => b[1] - a[1]);
  }, [rows]);

  const tagCounts = useMemo(() => {
    const all = rows.flatMap((r) => r.auto_tags ?? []);
    return Object.entries(countBy(all)).sort((a, b) => b[1] - a[1]);
  }, [rows]);

  const partnerTiers = useMemo(() => {
    const tiers = { 'Tier 1': 0, 'Tier 2': 0, Monitor: 0 };
    for (const r of rows) {
      if (r.respondent_type !== 'C' || r.partner_readiness_score == null) continue;
      const t = partnerTier(r.partner_readiness_score);
      if (t in tiers) tiers[t as keyof typeof tiers] += 1;
    }
    return tiers;
  }, [rows]);

  const byType = useMemo(() => countBy(rows.map((r) => r.respondent_type)), [rows]);

  const fundableMvp = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const r of rows) {
      if (r.respondent_type !== 'C') continue;
      const v = r.answers.qc8_fundable;
      if (v) counts[String(v)] = (counts[String(v)] ?? 0) + 1;
    }
    return counts;
  }, [rows]);

  return (
    <div className="admin-analytics">
      <div className="admin-stat-grid">
        <div className="admin-stat-card">
          <h3>Total responses</h3>
          <p className="admin-stat-num">{rows.length}</p>
        </div>
        <div className="admin-stat-card">
          <h3>By stakeholder type</h3>
          <ul>{Object.entries(byType).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
        </div>
        <div className="admin-stat-card">
          <h3>Partner tiers (C branch)</h3>
          <ul>
            <li>Tier 1: {partnerTiers['Tier 1']}</li>
            <li>Tier 2: {partnerTiers['Tier 2']}</li>
            <li>Monitor: {partnerTiers.Monitor}</li>
          </ul>
        </div>
      </div>

      <section className="admin-analytics-section">
        <h2>Urgency by country (avg score)</h2>
        <table className="admin-table">
          <thead><tr><th>Country</th><th>Avg urgency</th><th>n</th></tr></thead>
          <tbody>
            {urgencyByCountry.map((r) => (
              <tr key={r.country}><td>{r.country}</td><td>{r.avg}</td><td>{r.count}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="admin-analytics-section">
        <h2>Pillar #1 priority (Q5)</h2>
        <ul>{Object.entries(pillarFirst).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
      </section>

      <section className="admin-analytics-section">
        <h2>MVP #1 signal (Q12)</h2>
        <ul>{Object.entries(mvpFirst).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
      </section>

      <section className="admin-analytics-section">
        <h2>Partner fundable MVP (Q-C8)</h2>
        <ul>{Object.entries(fundableMvp).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
      </section>

      <section className="admin-analytics-section">
        <h2>Top risks (Q4 frequency)</h2>
        <ul>{riskFreq.slice(0, 12).map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
      </section>

      <section className="admin-analytics-section">
        <h2>Auto-tags</h2>
        <ul>{tagCounts.map(([k, v]) => <li key={k}>{k}: {v}</li>)}</ul>
      </section>
    </div>
  );
}
