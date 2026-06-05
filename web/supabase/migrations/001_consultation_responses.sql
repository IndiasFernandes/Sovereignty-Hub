-- EECA Consultation responses schema
-- Run in Supabase SQL Editor (Dashboard → SQL → New query)

create table if not exists public.consultation_responses (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  form_version text not null check (form_version in ('discovery-v1', 'quick-v1')),
  respondent_type text not null,
  country text,
  role text,
  language text,
  answers jsonb not null default '{}',
  urgency_score integer not null default 0,
  partner_readiness_score integer,
  auto_tags text[] not null default '{}',
  contact jsonb,
  uploads jsonb,
  admin_notes text
);

create index if not exists consultation_responses_created_at_idx
  on public.consultation_responses (created_at desc);

create index if not exists consultation_responses_country_idx
  on public.consultation_responses (country);

create index if not exists consultation_responses_respondent_type_idx
  on public.consultation_responses (respondent_type);

alter table public.consultation_responses enable row level security;

-- Public form: insert only (anon)
drop policy if exists "anon_insert_responses" on public.consultation_responses;
create policy "anon_insert_responses"
  on public.consultation_responses
  for insert
  to anon
  with check (true);

-- Admin: authenticated users can read and update notes
drop policy if exists "auth_select_responses" on public.consultation_responses;
create policy "auth_select_responses"
  on public.consultation_responses
  for select
  to authenticated
  using (true);

drop policy if exists "auth_update_responses" on public.consultation_responses;
create policy "auth_update_responses"
  on public.consultation_responses
  for update
  to authenticated
  using (true)
  with check (true);

-- Storage bucket for file uploads
insert into storage.buckets (id, name, public)
values ('consultation-uploads', 'consultation-uploads', false)
on conflict (id) do nothing;

drop policy if exists "anon_upload_consultation_files" on storage.objects;
create policy "anon_upload_consultation_files"
  on storage.objects
  for insert
  to anon
  with check (bucket_id = 'consultation-uploads');

drop policy if exists "auth_read_consultation_files" on storage.objects;
create policy "auth_read_consultation_files"
  on storage.objects
  for select
  to authenticated
  using (bucket_id = 'consultation-uploads');

-- Optional: invoke notify edge function on insert via Database Webhook (recommended)
-- Dashboard → Database → Webhooks → Create hook:
--   Table: consultation_responses, Event: INSERT
--   URL: https://YOUR_PROJECT.supabase.co/functions/v1/notify-submission
--   HTTP Headers: Authorization: Bearer YOUR_SERVICE_ROLE_KEY
