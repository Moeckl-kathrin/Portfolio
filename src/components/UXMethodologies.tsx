import { useLanguage } from '../i18n/LanguageContext';

const METHODOLOGIES = [
  'Card Sorting',
  'Prototyping',
  'Usability Testing',
  'User Interviews',
  'A/B Testing',
  'Wireframing',
  'Journey Mapping',
  'Heatmap Analysis',
  'Eye-Tracking',
  'Accessibility Audits',
];

export default function UXMethodologies() {
  const { language } = useLanguage();
  const label = language === 'de' ? 'UX Methoden, die ich anwende' : 'UX methodologies I use';

  // Double the items for seamless infinite scroll
  const items = [...METHODOLOGIES, ...METHODOLOGIES];

  return (
    <section className="ux-methodologies">
      <p className="ux-methodologies__label">{label}</p>
      <div className="ux-methodologies__track">
        <div className="ux-methodologies__marquee">
          {items.map((method, i) => (
            <span key={i} className="ux-methodologies__item">
              {method}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
