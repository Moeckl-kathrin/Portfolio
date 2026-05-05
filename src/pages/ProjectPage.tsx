import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';
import { projects } from '../data/projects';
import Footer from '../components/Footer';
import { useEffect } from 'react';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const { language, t } = useLanguage();
  const project = projects[language].find((p) => p.id === id);
  const detailProject = project;
  const nextProject = detailProject?.nextProject
    ? projects[language].find((p) => p.id === detailProject.nextProject)
    : null;
  const prevProject = detailProject
    ? projects[language].find((p) => p.nextProject === detailProject.id) ?? null
    : null;
  const hasSolutionContent = detailProject ? Boolean(detailProject.solution?.trim()) || detailProject.solutionDetails.length > 0 : false;
  const hasResultsContent = detailProject ? detailProject.results.length > 0 : false;
  const hasLearningsContent = detailProject ? detailProject.learnings.length > 0 : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!detailProject) {
    return (
      <div className="project-detail" style={{ textAlign: 'center', padding: '10rem 2rem' }}>
        <h2>Project not found</h2>
        <Link to="/" style={{ color: 'var(--color-accent)', marginTop: '1rem', display: 'inline-block' }}>
          {t.projects.backToProjects}
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail">
      {/* Header */}
      <div className="project-detail__header">
        <Link to="/" className="project-detail__back">
          {t.projects.backToProjects}
        </Link>
        <p className="project-detail__category">{detailProject.category}</p>
        <h1 className="project-detail__title">{detailProject.title}</h1>
        <p className="project-detail__overview">{detailProject.overview}</p>
      </div>

      <div className="project-detail__body">
        {/* Hero Image */}
        <div className="project-detail__hero-img">
          {detailProject.thumbnail ? (
            <img
              src={detailProject.thumbnail}
              alt={detailProject.title}
              style={{ width: '100%', height: '100%', objectFit: detailProject.detailThumbnailFit ?? 'cover', objectPosition: 'center' }}
            />
          ) : (
            <span>{detailProject.title.split('—')[0].trim()}</span>
          )}
        </div>

        {/* Meta Grid */}
        <div className="project-detail__meta">
          <div className="project-detail__meta-item">
            <h4>{t.projects.role}</h4>
            <p>{detailProject.role}</p>
          </div>
          <div className="project-detail__meta-item">
            <h4>{t.projects.duration}</h4>
            <p>{detailProject.duration}</p>
          </div>
          <div className="project-detail__meta-item">
            <h4>{language === 'en' ? 'Team' : 'Team'}</h4>
            <p>{detailProject.team}</p>
          </div>
          <div className="project-detail__meta-item">
            <h4>{language === 'en' ? 'Client' : 'Kunde'}</h4>
            <p>{detailProject.client}</p>
          </div>
          <div className="project-detail__meta-item">
            <h4>{t.projects.tools}</h4>
            <p>{detailProject.tools.join(', ')}</p>
          </div>
        </div>

        {/* Challenge */}
        <div className="project-detail__section">
          <h3>{t.projects.challenge}</h3>
          <p>{detailProject.challenge}</p>
          <ul className="project-detail__detail-list">
            {detailProject.challengeDetails.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Design Process */}
        <div className="project-detail__section">
          <h3>{language === 'en' ? 'Design Process' : 'Designprozess'}</h3>
          <div className="project-detail__process">
            {detailProject.process.map((step, i) => (
              <div key={i} className="project-detail__process-step">
                <div className="project-detail__process-icon">{i + 1}</div>
                <div className="project-detail__process-line" />
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Solution */}
        {hasSolutionContent && (
          <div className="project-detail__section">
            <h3>{t.projects.solution}</h3>
            {detailProject.solution && <p>{detailProject.solution}</p>}
            {detailProject.solutionDetails.length > 0 && (
              <ul className="project-detail__detail-list">
                {detailProject.solutionDetails.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Solution Image */}
        {detailProject.solutionImage && (
          <div className="project-detail__hero-img" style={{ height: 'auto' }}>
            <img
              src={detailProject.solutionImage}
              alt={`${detailProject.title} – Solution`}
              style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
            />
          </div>
        )}

        {/* Key Features */}
        {detailProject.keyFeatures.length > 0 && (
          <div className="project-detail__section">
            <h3>{language === 'en' ? 'Key Features' : 'Kernfunktionen'}</h3>
            <div className="project-detail__features-grid">
              {detailProject.keyFeatures.map((feature, i) => (
                <div key={i} className="project-detail__feature-card">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        {hasResultsContent && (
          <div className="project-detail__section project-detail__results-section">
            <h3>{t.projects.results}</h3>
            <div className="project-detail__results-grid">
              {detailProject.results.map((result, i) => (
                <div key={i} className="project-detail__result-card">
                  <span className="project-detail__result-icon">✦</span>
                  <p>{result}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonial */}
        {detailProject.testimonial && (
          <div className="project-detail__testimonial">
            <blockquote>"{detailProject.testimonial.quote}"</blockquote>
            <div className="project-detail__testimonial-author">
              <strong>{detailProject.testimonial.author}</strong>
              <span>{detailProject.testimonial.role}</span>
            </div>
          </div>
        )}

        {/* Learnings */}
        {hasLearningsContent && (
          <div className="project-detail__section">
            <h3>{language === 'en' ? 'Key Learnings' : 'Wichtige Erkenntnisse'}</h3>
            <div className="project-detail__learnings">
              {detailProject.learnings.map((learning, i) => (
                <div key={i} className="project-detail__learning-card">
                  <span className="project-detail__learning-num">{String(i + 1).padStart(2, '0')}</span>
                  <p dangerouslySetInnerHTML={{ __html: learning }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Navigation */}
        {(prevProject || nextProject) && (
          <div className="project-detail__nav-row">
            {prevProject ? (
              <Link to={`/project/${prevProject.id}`} className="project-detail__prev-project">
                <span className="project-detail__next-arrow project-detail__prev-arrow">←</span>
                <span className="project-detail__next-title">{prevProject.title}</span>
                <span className="project-detail__next-label">
                  {language === 'en' ? 'Previous Project' : 'Vorheriges Projekt'}
                </span>
              </Link>
            ) : <div />}
            {nextProject ? (
              <Link to={`/project/${nextProject.id}`} className="project-detail__next-project project-detail__next-project--nav">
                <span className="project-detail__next-label">
                  {language === 'en' ? 'Next Project' : 'Nächstes Projekt'}
                </span>
                <span className="project-detail__next-title">{nextProject.title}</span>
                <span className="project-detail__next-arrow">→</span>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
