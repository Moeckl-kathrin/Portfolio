import { useLanguage } from '../i18n/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <p>{t.footer.copyright}</p>
      <p>{t.footer.madeWith} ♥</p>
      <p style={{ fontSize: '0.75rem', opacity: 0.5, marginTop: '0.25rem', color: '#ffffff' }}>{t.footer.disclaimer}</p>
    </footer>
  );
}
