import fs from "fs";
import path from "path";
import matter from "gray-matter";
import withBanner from "../utils/with-banner";
import Link from "next/link";

const BlogPage = ({ posts }) => (
  <div
    style={{
      maxWidth: "700px",
      margin: "3rem auto",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      padding: "2.5rem 2rem",
      minHeight: "60vh",
    }}
  >
    <h1
      style={{
        fontSize: "2.5rem",
        fontWeight: 800,
        marginBottom: "1.5rem",
        letterSpacing: "-0.03em",
        color: "#1a202c",
        textAlign: "center",
      }}
    >
      Blog Posts
    </h1>
    <ul
      style={{
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}
    >
      {posts.map((post) => (
        <li
          key={post.slug}
          style={{
            marginBottom: "1.25rem",
          }}
        >
          <a
            href={`/blog/${post.slug}`}
            style={{
              display: "block",
              padding: "1.1rem 1.5rem",
              background: "#f7fafc",
              borderRadius: "8px",
              color: "#222",
              fontWeight: 600,
              fontSize: "1.15rem",
              textDecoration: "none",
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
              transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = "#e2e8f0";
              e.currentTarget.style.color = "#1a202c";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.10)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = "#f7fafc";
              e.currentTarget.style.color = "#222";
              e.currentTarget.style.boxShadow = "0 1px 4px rgba(0,0,0,0.04)";
            }}
          >
            {post.title}
          </a>
        </li>
      ))}
    </ul>
    {posts.length === 0 && (
      <p style={{ textAlign: "center", color: "#888", marginTop: "2rem" }}>
        No blog posts found.
      </p>
    )}
    <nav style={{ marginBottom: "2rem", display: "flex", gap: "1.5rem" }}>
      <Link href="/" legacyBehavior>
        <a
          style={{ color: "#2563eb", textDecoration: "none", fontWeight: 600 }}
        >
          Home
        </a>
      </Link>
    </nav>
  </div>
);

export async function getStaticProps() {
  const blogDir = path.join(process.cwd(), "src", "copy");
  const files = fs.readdirSync(blogDir);
  const posts = files
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const filePath = path.join(blogDir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      let title = data.title;
      if (!title) {
        const match = fileContent.match(/^#\s+(.+)/m);
        if (match) {
          title = match[1].trim();
        } else {
          title = filename.replace(/\.md$/, "");
        }
      }
      return {
        title,
        slug: filename.replace(/\.md$/, ""),
      };
    });
  return { props: { posts } };
}

export default withBanner(BlogPage);
