import { useLanguage } from '../i18n/LanguageContext';

const COMPANIES = [
  'Google',
  'Siemens',
  'BMW Group',
  'SAP',
  'Deutsche Telekom',
  'Zalando',
];

export default function TrustBanner() {
  const { language } = useLanguage();
  const label = language === 'de' ? 'Unternehmen, mit denen ich gearbeitet habe' : 'Companies I\'ve worked with';

  return (
    <section className="trust-banner">
      <p className="trust-banner__label">{label}</p>
      <div className="trust-banner__grid">
        {COMPANIES.map((company, i) => (
          <div key={i} className="trust-banner__logo">
            <span>{company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
