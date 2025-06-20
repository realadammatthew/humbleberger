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
        }}
      >
        <Link href="/mission" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Our Mission
          </a>
        </Link>
        |
        <Link href="/statement-of-faith" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Statement of Faith
          </a>
        </Link>
        |
        <Link href="/anti-semitism" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Statement on Antisemitism
          </a>
        </Link>
        |
        <Link href="/counting-the-cost" legacyBehavior>
          <a
            style={{
              color: "#666",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Counting the Cost
          </a>
        </Link>
      </div>
      <div style={{ fontSize: "0.8rem", marginTop: "0.5rem", color: "#888" }}>
        <Link href="/privacy-policy" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Privacy Policy
          </a>
        </Link>
        |
        <Link href="/terms-of-use" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 10px",
              textDecoration: "underline",
            }}
          >
            Terms of Use
          </a>
        </Link>
        |
        <Link href="/copyright" legacyBehavior>
          <a
            style={{
              color: "#888",
              margin: "0 10px",
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
