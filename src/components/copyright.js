import Link from "next/link";

const Copyright = () => (
  <footer>
    <div className="footer-content">
      <p>
        © {new Date().getFullYear()} Humbleberger Ministries. All rights
        reserved.
      </p>
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
