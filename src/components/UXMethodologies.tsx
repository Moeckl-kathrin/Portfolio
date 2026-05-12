import { useLanguage } from '../i18n/LanguageContext';

const METHODOLOGIES = [
  'Card Sorting',
  'Prototyping',
  'Usability Testing',
  'User Interviews',
  'Wireframing',
  'Journey Mapping',
  'Power Apps Development',
  'Design Thinking',
  'Persona Development',
  'User Flows',
  'Component Libraries',
  'Graphic Design',
];

const TOOLS = [
  'Figma',
  'Illustrator',
  'Photoshop',
  'Indesign',
  'Power Apps',
  'Claude',
  'ChatGPT',
  'Copilot',
];

export default function UXMethodologies() {
  const { language } = useLanguage();
  const label = language === 'de' ? 'UX Methoden' : 'UX methodologies I use';

  // Double the items for seamless infinite scroll
  const items = [...METHODOLOGIES, ...METHODOLOGIES];

  return (
    <section className="ux-methodologies">
      <h2 className="section__title">{label}</h2>
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
