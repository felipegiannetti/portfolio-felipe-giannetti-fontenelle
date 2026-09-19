import React, { useEffect } from 'react';
import { FaDownload, FaTimes } from 'react-icons/fa';

const CvModal = ({ language, onClose }) => {
  const file = language === 'pt' ? '/curriculo.pdf' : '/curriculo-en.pdf';
  const title = language === 'en' ? 'My Resume' : 'Meu Currículo';

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="glass bg-surface flex max-h-[92vh] w-full max-w-4xl animate-pop-in flex-col overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-line/10 px-6 py-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-line/10 hover:text-ink">
            <FaTimes />
          </button>
        </div>

        <iframe src={file} title={title} className="min-h-[60vh] w-full flex-1 bg-white" />

        <div className="flex justify-end gap-3 border-t border-line/10 px-6 py-4">
          <a href={file} download={language === 'pt' ? 'Curriculo_Felipe.pdf' : 'CV_Felipe.pdf'} className="btn-primary">
            <FaDownload />
            Download
          </a>
          <button onClick={onClose} className="btn-ghost">
            {language === 'en' ? 'Close' : 'Fechar'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CvModal;
