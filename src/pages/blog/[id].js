import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import withBanner from "../../utils/with-banner";
import Link from "next/link";

const Post = ({ content }) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      <nav style={{ marginBottom: "2rem", display: "flex", gap: "1.5rem" }}>
        <Link href="/" legacyBehavior>
          <a
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Home
          </a>
        </Link>
        <Link href="/blog" legacyBehavior>
          <a
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Blog Posts
          </a>
        </Link>
      </nav>
    </div>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("src", "copy"));
  const paths = files.map((filename) => ({
    params: {
      id: filename.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("src", "copy", id + ".md"),
    "utf-8",
  );
  const { content } = matter(markdownWithMeta);
  return {
    props: {
      content,
    },
  };
}

export default withBanner(Post);
