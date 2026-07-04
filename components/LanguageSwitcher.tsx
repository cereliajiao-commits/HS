'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage, languages } from './LanguageProvider';

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="lang-switcher" ref={dropdownRef}>
      <button className="lang-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="lang-flag">{currentLang.flag}</span>
        <span className="lang-code">{currentLang.code.toUpperCase()}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {isOpen && (
        <div className="lang-dropdown">
          {languages.map((l) => (
            <button
              key={l.code}
              className={`lang-option ${l.code === lang ? 'active' : ''}`}
              onClick={() => {
                setLang(l.code);
                setIsOpen(false);
              }}
            >
              <span className="lang-flag">{l.flag}</span>
              <span className="lang-label">{l.label}</span>
              {l.code === lang && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
