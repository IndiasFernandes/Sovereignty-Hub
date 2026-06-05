document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('concept-note-modal');
  const openBtn = document.getElementById('open-concept-note');
  const closeBtn = document.getElementById('close-concept-note');

  if (!modal || !openBtn || !closeBtn) return;

  openBtn.addEventListener('click', () => {
    modal.showModal();
    openBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modal.close();
    openBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.close();
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });

  modal.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      modal.close();
      openBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
});
