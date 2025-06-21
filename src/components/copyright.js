import Link from "next/link";

const Copyright = () => (
  <footer>
    <div className="footer-content">
      <p>
        © {new Date().getFullYear()} Humbleberger Ministries. All rights
        reserved.
      </p>
      <p
        style={{
          marginTop: "1.5rem",
          fontSize: "0.9rem",
          color: "#666",
          textAlign: "center",
        }}
      >
        Humbleberger Ministries is officially registered with the state of
        North Carolina and the Internal Revenue Service as a 501(c)(3)
        non-profit organization. All donations are tax-deductible.
      </p>
      <div
        style={{
          textAlign: "center",
          marginTop: "1.5rem",
          fontSize: "0.9rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Link href="/mission" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Our Mission
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/statement-of-faith" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Statement of Faith
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/anti-semitism" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Statement on Antisemitism
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/blog/counting-the-cost" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Counting the Cost
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/blog/who-is-yeshua" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Who is Yeshua?
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/blog/from-the-trenches-an-evangelism-guide" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            From the Trenches
          </a>
        </Link>
        <span style={{ color: "#666" }}>|</span>
        <Link href="/blog/yeshua-and-the-shema" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            The Shema
          </a>
        </Link>
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          marginTop: "0.5rem",
          color: "#999",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Link href="/" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Home
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>
        <Link
          href="https://chat.humbleberger.org/en?translation=csb"
          legacyBehavior
        >
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Chat
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>
        <Link href="/blog" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Blog
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>

        <Link href="https://eepurl.com/ja6zNY" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Subscribe
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>
        <Link
          href="https://donorbox.org/humbleberger-ministries"
          legacyBehavior
        >
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Donate
          </a>
        </Link>
      </div>
      <div
        style={{
          fontSize: "0.8rem",
          marginTop: "0.5rem",
          color: "#888",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
        }}
      >
        <Link href="/privacy-policy" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>
        <Link href="/terms-of-use" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Terms of Use
          </a>
        </Link>
        <span style={{ color: "#888" }}>|</span>
        <Link href="/copyright" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 5px",
              textDecoration: "underline",
            }}
          >
            Copyright
          </a>
        </Link>
      </div>
      <p style={{ fontSize: "0.7rem", marginTop: "1rem", color: "#666" }}>
        FEIN: 33-4533201
      </p>
    </div>
  </footer>
);

export default Copyright;
