import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const OurStory = () => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>{t('ourStory.title')}</h2>

        <div
          className="our-story-content"
          style={{
            padding: "0 2rem 2rem",
          }}
        >
          {/* Headshot - floats on desktop */}
          <a
            href="https://hire.adam.matthewsteinberger.com"
            target="_blank"
            rel="noopener noreferrer"
            className="our-story-image-link"
          >
            <img
              src="/profile-picture.jpg"
              alt={t('ourStory.imageAlt')}
              className="our-story-image"
              style={{
                display: "block",
                maxWidth: "300px",
                width: "100%",
                margin: "0 auto 1rem",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            />
          </a>

          {/* Content */}
          <div
            className="our-story-text"
            style={{
              fontSize: "1.25rem",
              lineHeight: "1.8",
              textAlign: isHebrew ? 'right' : 'left',
            }}
            dangerouslySetInnerHTML={{ __html: t('ourStory.content') }}
          />
        </div>
      </section>
      <ReturnToHome />

      {/* Desktop layout styles */}
      <style jsx>{`
        .our-story-text :global(p) {
          font-size: 1.6rem !important;
          line-height: 1.8 !important;
          margin-bottom: 1.5rem !important;
        }

        .our-story-text :global(p.clear-float) {
          clear: both;
        }

        .our-story-image-link {
          display: block;
        }

        .our-story-image-link:hover .our-story-image {
          transform: scale(1.02);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4) !important;
        }

        @media (min-width: 768px) {
          .our-story-image-link {
            float: ${isHebrew ? 'right' : 'left'};
            margin: ${isHebrew ? '0 0 1.5rem 2rem' : '0 2rem 1.5rem 0'};
            max-width: 300px;
          }
        }
      `}</style>
    </main>
  );
};

export default withBanner(OurStory);
