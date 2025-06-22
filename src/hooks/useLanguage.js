import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    // Determine language from URL path
    const path = router.asPath;
    const isHebrew = path.startsWith('/he');
    const language = isHebrew ? 'he' : 'en';
    
    setCurrentLanguage(language);
    i18n.changeLanguage(language);
  }, [router.asPath, i18n]);

  const switchLanguage = (newLanguage) => {
    const currentPath = router.asPath;
    let newPath;

    if (newLanguage === 'he') {
      // Switch to Hebrew
      if (currentPath.startsWith('/he')) {
        newPath = currentPath; // Already Hebrew
      } else {
        newPath = `/he${currentPath}`;
      }
    } else {
      // Switch to English
      if (currentPath.startsWith('/he')) {
        newPath = currentPath.replace('/he', '');
        if (!newPath) newPath = '/';
      } else {
        newPath = currentPath; // Already English
      }
    }

    router.push(newPath);
  };

  return {
    currentLanguage,
    switchLanguage,
    isHebrew: currentLanguage === 'he',
    isEnglish: currentLanguage === 'en'
  };
}; 