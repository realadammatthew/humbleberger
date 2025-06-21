import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ReturnToBlogPosts = ({ referrer }) => {
  const [returnUrl, setReturnUrl] = useState("/blog");
  const router = useRouter();

  useEffect(() => {
    // If a specific referrer is provided, use it
    if (referrer) {
      setReturnUrl(referrer);
      return;
    }

    // Check URL parameters for referrer information
    if (typeof window !== "undefined" && router.query.from) {
      if (router.query.from === "encountering-messiah") {
        setReturnUrl("/encountering-messiah");
      }
    }
  }, [referrer, router.query.from]);

  return (
    <nav style={{ marginTop: "2rem", textAlign: "center" }}>
      <Link href={returnUrl} legacyBehavior>
        <a
          style={{
            color: "#2563eb",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          ← Return to {returnUrl === "/encountering-messiah" ? "Encountering Messiah" : "Blog Posts"}
        </a>
      </Link>
    </nav>
  );
};

export default ReturnToBlogPosts; 