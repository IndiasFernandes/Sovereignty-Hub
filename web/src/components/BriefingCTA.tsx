import { useI18n } from '../i18n/I18nProvider';

type Variant = 'primary' | 'secondary' | 'inline';
type Kind = 'briefing' | 'mou';

const EMAIL = 'alesia.matusevych@globaltbcaucus.org';
const CC = 'hello@innerflect.tech';

function buildMailto(kind: Kind, lang: 'en' | 'ru'): string {
  const subject =
    kind === 'briefing'
      ? lang === 'ru'
        ? 'Запрос брифинга — EECA Lung Health Sovereignty Hub'
        : 'Briefing request — EECA Lung Health Sovereignty Hub'
      : lang === 'ru'
        ? 'MoU — EECA Lung Health Sovereignty Hub'
        : 'MoU pathway — EECA Lung Health Sovereignty Hub';

  const body =
    kind === 'briefing'
      ? lang === 'ru'
        ? 'Здравствуйте, Алесия,\n\nМы хотели бы назначить 30-минутный брифинг по EECA Lung Health Sovereignty Hub.\n\nОрганизация:\nИмя:\nРоль:\nУдобное время (следующие 2 недели):\n\nСпасибо.'
        : "Hello Alesia,\n\nWe'd like to schedule a 30-minute briefing on the EECA Lung Health Sovereignty Hub.\n\nOrganisation:\nName:\nRole:\nPreferred times (next 2 weeks):\n\nThanks."
      : lang === 'ru'
        ? 'Здравствуйте, Алесия,\n\nМы хотели бы обсудить MoU с EECA Lung Health Sovereignty Hub.\n\nОрганизация:\nИмя:\nРоль:\nПредлагаемая сфера сотрудничества:\n\nСпасибо.'
        : "Hello Alesia,\n\nWe'd like to discuss an MoU pathway with the EECA Lung Health Sovereignty Hub.\n\nOrganisation:\nName:\nRole:\nProposed area of collaboration:\n\nThanks.";

  const params = new URLSearchParams({
    cc: CC,
    subject,
    body,
  });
  return `mailto:${EMAIL}?${params.toString().replace(/\+/g, '%20')}`;
}

type Props = {
  variant?: Variant;
  kind?: Kind;
  labelKey?: string;
  className?: string;
};

export function BriefingCTA({
  variant = 'primary',
  kind = 'briefing',
  labelKey,
  className,
}: Props) {
  const { lang, t } = useI18n();
  const href = buildMailto(kind, lang);

  const defaultLabelKey =
    kind === 'briefing' ? 'cta-briefing-primary' : 'cta-mou-tertiary';
  const label = t(labelKey ?? defaultLabelKey);

  const classes =
    variant === 'primary'
      ? 'btn btn-primary'
      : variant === 'secondary'
        ? 'btn btn-secondary'
        : 'link-arrow';

  return (
    <a
      href={href}
      className={[classes, className].filter(Boolean).join(' ')}
    >
      {label}
    </a>
  );
}
