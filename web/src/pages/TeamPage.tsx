import { Link } from 'react-router';
import { SiteLayout } from '../components/Layout';
import { T } from '../i18n/I18nProvider';

const team = [
  {
    name: 'team-gayane-name',
    role: 'team-gayane-role',
    bio1: 'team-gayane-bio1',
    bio2: 'team-gayane-bio2',
    roleHub: 'team-gayane-role-hub',
    roleText: 'team-gayane-role-text',
    photo: '/assets/images/team/team-gayane.png',
    alt: 'Portrait of Gayané Arustamyan',
  },
  {
    name: 'team-alesia-name',
    role: 'team-alesia-role',
    bio1: 'team-alesia-bio1',
    bio2: 'team-alesia-bio2',
    roleHub: 'team-alesia-role-hub',
    roleText: 'team-alesia-role-text',
    photo: '/assets/images/team/team-alesia.png',
    alt: 'Portrait of Alesia Matusevich',
  },
  {
    name: 'team-daniel-name',
    role: 'team-daniel-role',
    bio1: 'team-daniel-bio1',
    bio2: 'team-daniel-bio2',
    roleHub: 'team-daniel-role-hub',
    roleText: 'team-daniel-role-text',
    photo: '/assets/images/team/team-daniel.png',
    alt: 'Portrait of Daniel Fernandes',
  },
] as const;

export function TeamPage() {
  return (
    <SiteLayout current="team">
      <section className="page-hero">
        <div className="page-hero-inner container">
          <p className="page-hero-eyebrow"><T k="nav-team" /></p>
          <h1><T k="team-title" /></h1>
          <p className="page-hero-lead"><T k="team-lead" /></p>
        </div>
      </section>
      <section className="section team-page">
        <div className="container">
          <div className="team-list" aria-label="Core team profiles">
            {team.map((member) => (
              <article className="team-profile" key={member.name}>
                <figure className="team-photo-wrap">
                  <img className="team-photo" src={member.photo} alt={member.alt} />
                </figure>
                <div className="team-content">
                  <h2><T k={member.name} /></h2>
                  <p className="team-title"><T k={member.role} /></p>
                  <p><T k={member.bio1} /></p>
                  <p><T k={member.bio2} /></p>
                  <p>
                    <strong><T k={member.roleHub} /></strong>{' '}
                    <T k={member.roleText} />
                  </p>
                </div>
              </article>
            ))}
          </div>
          <p>
            <Link className="link-arrow" to="/"><T k="team-back" /></Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
