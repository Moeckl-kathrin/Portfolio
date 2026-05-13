import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          MK
        </Link>

        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
          <button
            className="navbar__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <span />
            <span />
          </button>
          <li>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>
              {t.nav.about}
            </a>
          </li>
          <li>
            <a href="#skills" onClick={(e) => { e.preventDefault(); scrollTo('skills'); }}>
              {t.nav.skills}
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => { e.preventDefault(); scrollTo('projects'); }}>
              {t.nav.projects}
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              {t.nav.contact}
            </a>
          </li>
          <li>
            <div className="lang-switch">
              <button
                className={`lang-switch__btn${language === 'en' ? ' lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
              <button
                className={`lang-switch__btn${language === 'de' ? ' lang-switch__btn--active' : ''}`}
                onClick={() => setLanguage('de')}
              >
                DE
              </button>
            </div>
          </li>
        </ul>
      </nav>

      {menuOpen && createPortal(
        <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />,
        document.body
      )}
    </>
  );
}
