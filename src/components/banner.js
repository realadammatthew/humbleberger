import React from "react";

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
        <img
          src="/logo.png"
          alt="Humbleberger Ministries Logo"
          style={{ maxWidth: "120px", height: "auto" }}
        />
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
          marginTop: "0.75rem",
          fontSize: "1.2rem",
          color: "#e0e0e0",
          maxWidth: "600px",
        }}
      >
        Jewish Evangelism. Gospel Proclamation. Christ-Centered Mission.
      </p>
    </div>
  </header>
);

export default Banner;
