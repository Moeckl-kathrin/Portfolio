import { useLanguage } from '../i18n/LanguageContext';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const { t } = useLanguage();
  const [ref, isVisible] = useInView<HTMLElement>();

  return (
    <section id="skills" className="section section--skills" ref={ref}>
      <div className={`fade-in${isVisible ? ' fade-in--visible' : ''}`}>
        <div className="skills__hero-grid">
          <div className="skills__visual">
            <div className="skills__visual-grid">
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="skills__visual-card">
                  <div className="skills__visual-dot" />
                </div>
              ))}
            </div>
          </div>

          <div className="skills__info">
            <span className="skills__eyebrow">{t.skills.sectionSubtitle}</span>
            <h2 className="skills__title">{t.skills.sectionTitle}</h2>
            {t.skills.sectionIntro ? <p className="skills__text">{t.skills.sectionIntro}</p> : null}
            <div className="skills__list">
              {t.skills.items.map((skill) => (
                <article key={skill.title} className="skills__list-item">
                  <h3 className="skills__list-title">{skill.title}</h3>
                  <p className="skills__list-desc">{skill.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
