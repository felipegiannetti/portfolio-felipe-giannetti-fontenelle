import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

/** Ctrl/⌘ + K quick-actions menu. `actions` is [{ id, label, group, icon, run }]. */
const CommandPalette = ({ open, onClose, actions, language }) => {
  const [query, setQuery] = useState('');
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const filtered = actions.filter((action) => action.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    if (open) {
      setQuery('');
      setIndex(0);
      inputRef.current?.focus();
    }
  }, [open]);

  useEffect(() => {
    setIndex(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [index]);

  if (!open) return null;

  const runAction = (action) => {
    onClose();
    action.run();
  };

  const handleKey = (e) => {
    if (e.key === 'Escape') onClose();
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIndex((current) => Math.min(current + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setIndex((current) => Math.max(current - 1, 0));
    } else if (e.key === 'Enter' && filtered[index]) {
      e.preventDefault();
      runAction(filtered[index]);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center bg-black/60 px-4 pt-[15vh] backdrop-blur-sm" onClick={onClose} role="dialog" aria-modal="true" aria-label="Command menu">
      <div className="glass bg-surface w-full max-w-lg animate-pop-in overflow-hidden rounded-2xl shadow-2xl" onClick={(e) => e.stopPropagation()} onKeyDown={handleKey}>
        <div className="flex items-center gap-3 border-b border-line/10 px-4 py-3">
          <FaSearch className="text-muted" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={language === 'en' ? 'Type a command or search…' : 'Digite um comando ou busque…'}
            className="w-full bg-transparent text-base outline-none placeholder:text-muted"
          />
          <kbd className="rounded-md border border-line/15 px-1.5 py-0.5 text-[10px] text-muted">ESC</kbd>
        </div>

        <ul ref={listRef} className="max-h-[50vh] overflow-y-auto p-2" role="listbox">
          {filtered.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted">{language === 'en' ? 'No results' : 'Nenhum resultado'}</li>}
          {filtered.map((action, i) => (
            <li key={action.id} role="option" aria-selected={i === index}>
              <button
                onClick={() => runAction(action)}
                onMouseMove={() => setIndex(i)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${i === index ? 'bg-accent/15 text-ink' : 'text-muted'}`}
              >
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-surface2 text-accent2">{action.icon}</span>
                <span className="flex-1 font-medium">{action.label}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted">{action.group}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommandPalette;
