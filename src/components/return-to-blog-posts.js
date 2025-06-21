import Link from "next/link";

const ReturnToBlogPosts = () => (
  <nav style={{ marginTop: "2rem", textAlign: "center" }}>
    <Link href="/blog" legacyBehavior>
      <a
        style={{
          color: "#2563eb",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        ← Return to Blog Posts
      </a>
    </Link>
  </nav>
);

export default ReturnToBlogPosts; 