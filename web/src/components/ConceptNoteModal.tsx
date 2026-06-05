import { useEffect, useState } from 'react';
import { useI18n, T } from '../i18n/I18nProvider';

export function ConceptNoteModal() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [html, setHtml] = useState('');

  useEffect(() => {
    if (!open || html) return;
    fetch('/concept-note-body.html')
      .then((r) => r.text())
      .then(setHtml)
      .catch(() => setHtml('<p>Unable to load concept note.</p>'));
  }, [open, html]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <T k="cta-concept" />
      </button>
      {open && (
        <dialog open className="concept-modal" aria-labelledby="concept-note-title">
          <div className="modal-inner">
            <header className="modal-header">
              <h2 id="concept-note-title">{t('modal-title')}</h2>
              <button
                type="button"
                className="modal-close"
                aria-label={t('modal-close')}
                onClick={() => setOpen(false)}
              >
                &times;
              </button>
            </header>
            <div className="modal-body">
              <div className="concept-note-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
