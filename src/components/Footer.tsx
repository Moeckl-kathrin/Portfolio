import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.copyright}</p>
      <p>{t.footer.madeWith} ♥</p>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.25rem', color: '#ffffff' }}>{t.footer.disclaimer}</p>
      <a href="mailto:kathrin.moeckl@gmail.com" className="footer__email">
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
        kathrin.moeckl@gmail.com
      </a>
    </footer>
  );
}
