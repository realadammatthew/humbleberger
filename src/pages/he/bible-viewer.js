import { useTranslation } from "react-i18next";
import withBanner from "../../utils/with-banner";
import Head from "next/head";

const HebrewBibleViewer = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>הברית החדשה בעברית</title>
      </Head>
      <iframe
        src="/assets/Modern-Hebrew-New-Testament.pdf"
        style={{
          width: '100vw',
          height: '100vh',
          border: 'none',
          position: 'fixed',
          top: 0,
          left: 0
        }}
        title="הברית החדשה בעברית"
      />
    </>
  );
};

export default withBanner(HebrewBibleViewer); 