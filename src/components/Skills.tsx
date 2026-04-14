import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const { t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section id="skills" className="section" ref={ref}>
      <div className={`fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <h2 className="section__title">{t.skills.sectionTitle}</h2>
        <p className="section__subtitle">{t.skills.sectionSubtitle}</p>
        <div className="services__layout">
          <div className="services__media">
            <div className="services__media-frame">
              <img
                src="https://ik.imagekit.io/1levduhdq/IMG_1289.JPG?updatedAt=1"
                alt={t.skills.sectionTitle}
                className="services__media-image"
              />
            </div>
            <div className="services__media-glow" aria-hidden="true" />
          </div>
          <div className="services__content">
            <div className="services__hero">
              <span className="services__eyebrow">{t.skills.sectionSubtitle}</span>
              <h3 className="services__hero-title">{t.skills.items[0].title}</h3>
              <p className="services__hero-text">{t.skills.items[0].description}</p>
            </div>
            <div className="services__list">
              {t.skills.items.slice(1).map((skill) => (
                <div key={skill.title} className="services__item">
                  <h4 className="services__item-title">{skill.title}</h4>
                  <p className="services__item-desc">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
