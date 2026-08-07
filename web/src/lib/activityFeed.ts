export type ActivityItem = {
  id: string;
  dateISO: string;
  titleKey: string;
  descKey: string;
  linkTo?: string;
  linkHref?: string;
};

export const ACTIVITY_FEED: ActivityItem[] = [
  {
    id: 'alpha-launch',
    dateISO: '2026-09-15',
    titleKey: 'activity-1-t',
    descKey: 'activity-1-d',
    linkTo: '/solution',
  },
  {
    id: 'who-alignment',
    dateISO: '2026-08-20',
    titleKey: 'activity-2-t',
    descKey: 'activity-2-d',
    linkTo: '/for-funders',
  },
  {
    id: 'gtbc-network-review',
    dateISO: '2026-07-30',
    titleKey: 'activity-3-t',
    descKey: 'activity-3-d',
    linkTo: '/for-funders',
  },
];
