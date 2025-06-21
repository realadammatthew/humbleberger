import React from "react";
import Link from "next/link";

const Banner = () => (
  <header>
    <div
      className="header-container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "1rem",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "0 1.5rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Link href="/" legacyBehavior>
          <a>
            <img
              src="/logo.png"
              alt="Humbleberger Ministries Logo"
              style={{ maxWidth: "120px", height: "auto" }}
            />
          </a>
        </Link>
        <h1
          style={{
            margin: 0,
            lineHeight: 1.1,
            fontSize: "3.5rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 2px 4px rgba(0,0,0,0.1)",
          }}
        >
          Humbleberger
          <br />
          Ministries
        </h1>
      </div>
      <p
        style={{
          marginTop: "0.25rem",
          fontSize: "2rem",
          color: "#e0e0e0",
          maxWidth: "600px",
        }}
      >
        Jewish Evangelism.
      </p>
      <p
        style={{
          marginTop: "-3rem",
          fontSize: "1.6rem",
          color: "#e0e0e0",
          maxWidth: "600px",
        }}
      >
        Gospel Proclamation.
      </p>
      <p
        style={{
          marginTop: "-2.65rem",
          fontSize: "1.8rem",
          color: "#e0e0e0",
          maxWidth: "600px",
          fontWeight: "bold",
          fontStyle: "italic",
        }}
      >
        Messiah-Centered Mission.
      </p>
      <p
        style={{
          marginTop: "-2rem",
          fontSize: "0.85rem",
          color: "#e0e0e0",
          maxWidth: "600px",
        }}
      >
        – <em>A <b>Jeremiah 20:9</b> Ministry</em> –
      </p>
    </div>
  </header>
);

export default Banner;
