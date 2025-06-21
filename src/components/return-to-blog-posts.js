import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const ReturnToBlogPosts = ({ referrer }) => {
  const [returnUrl, setReturnUrl] = useState("/blog");
  const [returnText, setReturnText] = useState("Blog Posts");
  const router = useRouter();

  useEffect(() => {
    // If a specific referrer is provided, use it
    if (referrer) {
      setReturnUrl(referrer);
      if (referrer === "/encountering-messiah") {
        setReturnText("Encountering Messiah");
      } else if (referrer === "/") {
        setReturnText("Home");
      } else {
        setReturnText("Blog Posts");
      }
      return;
    }

    // Check URL parameters for referrer information
    if (typeof window !== "undefined" && router.query.from) {
      if (router.query.from === "encountering-messiah") {
        setReturnUrl("/encountering-messiah");
        setReturnText("Encountering Messiah");
      } else if (router.query.from === "home") {
        setReturnUrl("/");
        setReturnText("Home");
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
          ← Return to {returnText}
        </a>
      </Link>
    </nav>
  );
};

export default ReturnToBlogPosts; 