import Link from "next/link";

const ReturnToHome = () => (
  <nav style={{ marginTop: "2rem", textAlign: "center" }}>
    <Link href="/" legacyBehavior>
      <a
        style={{
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ← Return to Home
      </a>
    </Link>
  </nav>
);

export default ReturnToHome; 