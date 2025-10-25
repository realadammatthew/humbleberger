import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/useLanguage';
import withBanner from '../../utils/with-banner';
import ReturnToBlogPosts from '../../components/return-to-blog-posts';
import CallToActionButtons from '../../components/call-to-action-buttons';
import SeriesNavigation from '../../components/series-navigation';

// Function to map page slugs to audio file names
const getAudioFileName = (slug) => {
  const audioMap = {
    'who-is-yeshua': '01-who-is-yeshua.wav',
    'did-yeshua-really-exist': '02-did-yeshua-really-exist.wav',
    'was-yeshua-really-sinless': '03-was-yeshua-really-sinless.wav',
    'was-yeshua-really-born-of-a-virgin': '04-was-yeshua-really-born-of-a-virgin.wav',
    'did-yeshua-really-die-on-a-cross': '05-did-yeshua-really-die-on-a-cross.wav',
    'did-yeshua-really-rise-from-the-dead': '06-did-yeshua-really-rise-from-the-dead.wav',
    'did-yeshua-really-ascend-into-heaven': '07-did-yeshua-really-ascend-into-heaven.wav',
    'is-yeshua-still-alive-today': '08-is-yeshua-still-alive-today.wav',
    'could-yeshua-be-the-messiah': '09-could-yeshua-be-the-messiah-prophesied-in-the-hebrew-bible.wav',
    'has-messiah-already-come': '10-is-it-possible-that-the-messiah-has-already-come.wav',
    'what-will-the-messiah-do': '11-what-do-the-hebrew-scriptures-say-the-messiah-will-do.wav',
    'what-does-the-tanakh-say-about-messiah': '12-what-does-the-tanakh-say-about-the-messiah.wav',
    'when-was-the-messiah-supposed-to-come': '13-what-does-daniel-9-say-about-when-the-messiah-would-come.wav',
    'who-is-the-suffering-servant': '14-who-or-what-is-isaiah-53-referring-to-in-the-hebrew-bible.wav',
    'the-new-covenant-that-was-promised': '15-what-does-jeremiah-31-say-about-the-new-covenant-in-the-hebrew-bible.wav',
    'the-fulfillment-of-the-hebrew-scriptures': '16-are-there-ways-that-yeshua-fulfills-rather-than-replaces-the-hebrew-scriptures.wav',
    'redemption-in-the-hebrew-scriptures': '17-what-does-the-hebrew-bible-teach-about-redemption.wav',
    'what-is-sin': '18-what-is-sin.wav',
    'the-heart-of-atonement': '19-what-role-did-sacrifice-play-in-atonement-in-the-torah-and-how-is-it-handled-today.wav',
    'atonement-without-the-temple': '20-how-do-you-understand-atonement-today-without-the-temple.wav',
    'right-relationship-with-god': '21-what-does-it-mean-to-be-in-right-relationship-with-god.wav',
    'what-must-i-do-to-be-saved': '22-what-do-i-need-to-do-to-be-saved.wav',
    'how-to-become-a-jewish-christian': '23-how-do-i-become-a-jewish-christian.wav',
    'how-to-get-to-heaven': '24-what-does-it-mean-to-go-to-heaven.wav',
    'does-hell-exist': '25-does-hell-exist.wav',
    'is-it-possible-to-be-a-jewish-christian': '26-can-someone-be-jewish-and-believe-in-yeshua.wav',
    'why-some-jews-believe': '27-why-do-some-jewish-people-believe-in-yeshua-today.wav',
    'why-some-jews-reject': '28-why-do-some-jewish-people-reject-yeshua-as-messiah.wav',
    'what-about-the-613-mitzvot': '29-do-i-need-to-follow-all-613-mitzvot.wav',
    'what-about-the-kosher-laws': '30-do-jewish-christians-keep-kosher.wav',
    'what-about-shabbat': '31-do-jewish-christians-keep-shabbat.wav',
    'how-do-i-fellowship-with-the-spirit': '32-what-does-it-mean-to-have-a-personal-relationship-with-the-messiah.wav',
    'how-do-i-meet-messiah': '33-how-can-i-personally-encounter-yeshua-today.wav'
  };
  
  return audioMap[slug] || null;
};

const Post = ({ content, data, hebrewContent, hebrewData }) => {
  const { t } = useTranslation();
  const { isHebrew } = useLanguage();
  const [referrer, setReferrer] = useState(null);
  const router = useRouter();

  // Use Hebrew content if available and we're on Hebrew page
  const displayContent = isHebrew && hebrewContent ? hebrewContent : content;
  const displayData = isHebrew && hebrewData ? hebrewData : data;

  // Get the audio file name based on the current page slug
  const audioFileName = getAudioFileName(router.query.id);

  useEffect(() => {
    // Check URL parameters for referrer information
    if (router.query.from === "encountering-messiah") {
      setReferrer("/encountering-messiah");
    } else if (router.query.from === "home") {
      setReferrer("/");
    }
  }, [router.query.from]);

  return (
    <main style={{ direction: isHebrew ? 'rtl' : 'ltr' }}>
      <section>
        <header className="blog-post-header">
          <h2 className="blog-post-title big-title">{displayData.title}</h2>
          {displayData.date && <div className="blog-post-date">{displayData.date}</div>}
        </header>
        {/* {audioFileName && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <audio controls>
              <source src={`/audio/${audioFileName}`} type='audio/wav' />
              Your browser does not support the audio element.
            </audio>
          </div>
        )} */}
        <article className="blog-post-article">
          <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: marked(displayContent) }} />
          <CallToActionButtons />
          <SeriesNavigation />
        </article>
      </section>
      <ReturnToBlogPosts referrer={referrer} />
    </main>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('src', 'copy'))
    .filter(filename => filename.endsWith('.md')); // Only include .md files, not directories
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  // Load English content
  const markdownWithMeta = fs.readFileSync(path.join('src', 'copy', id + '.md'), 'utf-8');
  const { data, content } = matter(markdownWithMeta);
  
  // Get first non-empty line, remove leading # and whitespace
  const lines = content.split('\n');
  const firstLine = lines.find(line => line.trim().length > 0) || '';
  const mdTitle = firstLine.replace(/^#+\s*/, '');

  // Remove all H1 headings (# Title) from the content to avoid duplication
  const contentWithoutTitle = lines
    .filter(line => !line.trim().match(/^#\s+/))
    .join('\n')
    .trim(); // Remove any extra whitespace

  // Try to load Hebrew content if it exists
  let hebrewContent = null;
  let hebrewData = null;
  
  try {
    const hebrewPath = path.join('src', 'copy', 'he', id + '.md');
    if (fs.existsSync(hebrewPath)) {
      const hebrewMarkdownWithMeta = fs.readFileSync(hebrewPath, 'utf-8');
      const { data: hebrewDataFromFile, content: hebrewContentFromFile } = matter(hebrewMarkdownWithMeta);
      
      // Get first non-empty line, remove leading # and whitespace
      const hebrewLines = hebrewContentFromFile.split('\n');
      const hebrewFirstLine = hebrewLines.find(line => line.trim().length > 0) || '';
      const hebrewMdTitle = hebrewFirstLine.replace(/^#+\s*/, '');

      // Remove all H1 headings (# Title) from the content to avoid duplication
      const hebrewContentWithoutTitle = hebrewLines
        .filter(line => !line.trim().match(/^#\s+/))
        .join('\n')
        .trim(); // Remove any extra whitespace

      hebrewContent = hebrewContentWithoutTitle;
      hebrewData = { ...hebrewDataFromFile, title: hebrewMdTitle || hebrewDataFromFile.title || id };
    }
  } catch (error) {
    console.log(`Hebrew version not found for ${id}`);
  }
    
  return {
    props: {
      content: contentWithoutTitle,
      data: { ...data, title: mdTitle || data.title || id },
      hebrewContent,
      hebrewData,
    },
  };
}

export default withBanner(Post);
