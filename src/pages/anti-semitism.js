import Head from "next/head";
import Link from "next/link";
import withBanner from "../utils/with-banner";

const AntiSemitism = () => {
  return (
    <>
      <Head>
        <title>Statement on Antisemitism - Humbleberger Ministries</title>
        <meta
          name="description"
          content="Humbleberger Ministries' statement on antisemitism and our commitment to biblical truth and love for the Jewish people."
        />
      </Head>
      <main>
        <section>
          <h2>Statement on Antisemitism, Jewish Identity, and Gospel Love</h2>
          <p
            style={{
              textAlign: "center",
              fontSize: "1.1rem",
              marginBottom: "2.5rem",
            }}
          >
            As a ministry founded upon the gospel of Jesus Christ and committed
            to the salvation of the Jewish people and the nations, Humbleberger
            Ministries stands firmly and unequivocally against all forms of
            antisemitism, both past and present, whether political, cultural,
            social, or theological.
          </p>

          <div class="statement-item">
            <h3>I. A Posture of Love and Respect</h3>
            <p>
              Humbleberger Ministries is deeply committed to honoring the Jewish
              people as beloved in God's redemptive history and heritage. We
              grieve the ways Jewish communities have suffered throughout
              history, including injustices carried out in the name of
              Christianity. As followers of Jesus, we are called to walk in
              humility and love — not only in doctrine, but in how we carry and
              communicate the gospel.
            </p>
          </div>

          <div class="statement-item">
            <h3>II. Honoring the Jewish People and Their Calling</h3>
            <p>
              We recognize and rejoice in the unique role of the Jewish people
              in God's redemptive plan. The covenants, the promises, the
              patriarchs, the prophets, and ultimately the Messiah have come
              through them (Romans 9:4–5). We do not seek to erase Jewish
              identity or heritage, but to affirm its deep significance —
              believing that its fullest expression is found in Yeshua, the
              Messiah promised in the Hebrew Scriptures.
            </p>
          </div>

          <div class="statement-item">
            <h3>III. A Ministry of Invitation, Not Coercion</h3>
            <p>
              We believe that Jesus is the Messiah of Israel and Savior of the
              world. With deep respect, we seek to share this good news with
              Jewish people not through pressure or argument, but through
              Scripture, prayer, relationship, and testimony — always grounded
              in love and reverence.
            </p>
          </div>

          <div class="statement-item">
            <h3>IV. A Commitment to Reconciliation and Integrity</h3>
            <p>
              We acknowledge the Church's need to walk humbly before the Jewish
              people, recognizing past failures and seeking to be a bridge, not
              a barrier. We stand against every form of antisemitism — not
              simply as a historical evil, but as something contrary to the
              heart of God.
            </p>
          </div>

          <div class="statement-item">
            <h3>V. Our Heart for the Jewish People</h3>
            <p>
              Our desire is not to win arguments but to share hope. We long for
              Jewish people everywhere to encounter the Messiah foretold in
              their own Scriptures — the One who fulfills the law and the
              prophets, brings peace with God, and invites all people, Jew and
              Gentile, into one redeemed family in Christ.
            </p>
          </div>

          <nav className="blog-post-nav">
            <Link href="/" legacyBehavior>
              <a className="blog-post-back">← Return to Home</a>
            </Link>
          </nav>
        </section>
      </main>
    </>
  );
};

export default withBanner(AntiSemitism);
