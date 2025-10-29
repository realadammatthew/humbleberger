import React, { Fragment } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/useLanguage";
import { Menu, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const { t } = useTranslation();
  const { isHebrew, toggleLanguage } = useLanguage();

  // Navigation items organized by category
  const primaryNav = [
    { key: "home", label: t("common.home"), href: t("urls.internal.home") },
    { key: "whoIsYeshua", label: t("nav.whoIsYeshua"), href: t("urls.internal.whoIsYeshuaFromHome") },
    { key: "encounteringMessiah", label: t("nav.encounteringMessiah"), href: t("urls.internal.encounteringMessiah") },
    { key: "mission", label: t("common.mission"), href: t("urls.internal.mission") },
    { key: "ourStory", label: t("common.ourStory"), href: t("urls.internal.ourStory") },
    { key: "blog", label: t("common.blog"), href: t("urls.internal.blog") },
    { key: "contact", label: t("common.contact"), href: t("urls.internal.contact") },
  ];

  const contentNav = [
    { key: "encounteringMessiah", label: t("nav.encounteringMessiah"), href: t("urls.internal.encounteringMessiah") },
    { key: "countingCost", label: t("nav.countingCost"), href: t("urls.internal.countingCostFromHome") },
    { key: "whoIsYeshua", label: t("nav.whoIsYeshua"), href: t("urls.internal.whoIsYeshuaFromHome") },
    { key: "shema", label: t("nav.shema"), href: t("urls.internal.shemaFromHome") },
    { key: "fromTrenches", label: t("nav.fromTrenches"), href: t("urls.internal.fromTrenchesFromHome") },
    { key: "meetMessiah", label: t("nav.meetMessiah"), href: t("urls.internal.meetMessiah") },
  ];

  const aboutNav = [
    { key: "statementOfFaith", label: t("copyright.statement"), href: t("urls.internal.statementOfFaith") },
    { key: "antisemitism", label: t("nav.antisemitism"), href: t("urls.internal.antisemitism") },
    { key: "contact", label: t("common.contact"), href: t("urls.internal.contact") },
  ];

  return (
    <nav
      className="navbar"
      style={{
        direction: isHebrew ? "rtl" : "ltr",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "linear-gradient(135deg, #1a1d23 0%, #23272e 100%)",
        borderBottom: "1px solid rgba(184, 134, 11, 0.3)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0.75rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo Section */}
        <Link href={isHebrew ? "/he" : "/"} legacyBehavior>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src="/logo.png"
              alt={t("banner.logoAlt")}
              style={{
                height: "48px",
                width: "auto",
              }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.125rem",
              }}
            >
              <span
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  background: "linear-gradient(135deg, #f5d976 0%, #daa520 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "0.02em",
                }}
              >
                {t("org.name").split("\n")[0]}
              </span>
              {t("org.name").split("\n").length > 1 && (
                <span
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    background: "linear-gradient(135deg, #f5d976 0%, #daa520 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.02em",
                  }}
                >
                  {t("org.name").split("\n")[1]}
                </span>
              )}
            </div>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div
          className="desktop-nav"
          style={{
            display: "none",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {primaryNav.map((item) => (
            <Link key={item.key} href={item.href} legacyBehavior>
              <a
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#e8e8e8",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  padding: "0.5rem 0",
                  borderBottom: "2px solid transparent",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#f5d976";
                  e.currentTarget.style.borderBottomColor = "#daa520";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#e8e8e8";
                  e.currentTarget.style.borderBottomColor = "transparent";
                }}
              >
                {item.label}
              </a>
            </Link>
          ))}

          {/* Donate Button */}
          <Link href={t("urls.internal.donate")} legacyBehavior>
            <a
              style={{
                background: "linear-gradient(135deg, #b8860b 0%, #daa520 100%)",
                color: "#1a1d23",
                padding: "0.5rem 1.25rem",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 700,
                textDecoration: "none",
                transition: "all 0.2s ease",
                boxShadow: "0 2px 8px rgba(184, 134, 11, 0.3)",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 4px 12px rgba(184, 134, 11, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(184, 134, 11, 0.3)";
              }}
            >
              {t("common.donate")}
            </a>
          </Link>

          {/* Language Toggle - Desktop Only */}
          <button
            onClick={toggleLanguage}
            className="desktop-lang-toggle"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(184, 134, 11, 0.3)",
              borderRadius: "8px",
              padding: "0.5rem 1rem",
              color: "#e8e8e8",
              fontSize: "0.9rem",
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(184, 134, 11, 0.15)";
              e.currentTarget.style.borderColor = "#daa520";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
              e.currentTarget.style.borderColor = "rgba(184, 134, 11, 0.3)";
            }}
          >
            {isHebrew ? "EN" : "עב"}
          </button>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="mobile-nav" style={{ display: "none" }}>
          <Menu as="div" style={{ position: "relative" }}>
            {({ open }) => (
              <>
                <Menu.Button
                  style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(184, 134, 11, 0.3)",
                    borderRadius: "8px",
                    padding: "0.5rem",
                    color: "#e8e8e8",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                  }}
                >
                  {open ? <HiX size={24} /> : <HiMenu size={24} />}
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    style={{
                      position: "absolute",
                      [isHebrew ? "left" : "right"]: 0,
                      marginTop: "0.5rem",
                      width: "320px",
                      maxWidth: "calc(100vw - 2rem)",
                      background: "linear-gradient(135deg, #1a1d23 0%, #23272e 100%)",
                      border: "1px solid rgba(184, 134, 11, 0.3)",
                      borderRadius: "12px",
                      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
                      padding: "0.5rem",
                      maxHeight: "calc(100vh - 100px)",
                      overflowY: "auto",
                    }}
                  >
                    {/* Primary Navigation */}
                    <div style={{ marginBottom: "0.5rem" }}>
                      {primaryNav.map((item) => (
                        <Menu.Item key={item.key}>
                          {({ active }) => (
                            <Link href={item.href} legacyBehavior>
                              <a
                                style={{
                                  display: "block",
                                  padding: "0.75rem 1rem",
                                  borderRadius: "8px",
                                  color: "#e8e8e8",
                                  textDecoration: "none",
                                  fontWeight: 500,
                                  background: active ? "rgba(184, 134, 11, 0.15)" : "transparent",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {item.label}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(184, 134, 11, 0.2)",
                        margin: "0.5rem 0",
                      }}
                    />

                    {/* Content Section */}
                    <div style={{ marginBottom: "0.5rem" }}>
                      <div
                        style={{
                          padding: "0.5rem 1rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#daa520",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t("common.content") || "Content"}
                      </div>
                      {contentNav.map((item) => (
                        <Menu.Item key={item.key}>
                          {({ active }) => (
                            <Link href={item.href} legacyBehavior>
                              <a
                                style={{
                                  display: "block",
                                  padding: "0.75rem 1rem",
                                  borderRadius: "8px",
                                  color: "#d0d0d0",
                                  textDecoration: "none",
                                  fontSize: "0.9rem",
                                  background: active ? "rgba(184, 134, 11, 0.15)" : "transparent",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {item.label}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(184, 134, 11, 0.2)",
                        margin: "0.5rem 0",
                      }}
                    />

                    {/* About Section */}
                    <div style={{ marginBottom: "0.5rem" }}>
                      <div
                        style={{
                          padding: "0.5rem 1rem",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#daa520",
                          textTransform: "uppercase",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {t("common.about") || "About"}
                      </div>
                      {aboutNav.map((item) => (
                        <Menu.Item key={item.key}>
                          {({ active }) => (
                            <Link href={item.href} legacyBehavior>
                              <a
                                style={{
                                  display: "block",
                                  padding: "0.75rem 1rem",
                                  borderRadius: "8px",
                                  color: "#d0d0d0",
                                  textDecoration: "none",
                                  fontSize: "0.9rem",
                                  background: active ? "rgba(184, 134, 11, 0.15)" : "transparent",
                                  transition: "all 0.15s ease",
                                }}
                              >
                                {item.label}
                              </a>
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>

                    {/* Divider */}
                    <div
                      style={{
                        height: "1px",
                        background: "rgba(184, 134, 11, 0.2)",
                        margin: "0.5rem 0",
                      }}
                    />

                    {/* Actions */}
                    <div style={{ padding: "0.5rem" }}>
                      <Menu.Item>
                        {({ active }) => (
                          <Link href={t("urls.internal.donate")} legacyBehavior>
                            <a
                              style={{
                                display: "block",
                                padding: "0.75rem 1rem",
                                borderRadius: "8px",
                                background: "linear-gradient(135deg, #b8860b 0%, #daa520 100%)",
                                color: "#1a1d23",
                                textDecoration: "none",
                                fontWeight: 700,
                                textAlign: "center",
                                marginBottom: "0.5rem",
                                boxShadow: active ? "0 4px 12px rgba(184, 134, 11, 0.5)" : "0 2px 8px rgba(184, 134, 11, 0.3)",
                                transform: active ? "scale(1.02)" : "scale(1)",
                                transition: "all 0.15s ease",
                              }}
                            >
                              {t("common.donate")}
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <button
                        onClick={toggleLanguage}
                        style={{
                          width: "100%",
                          padding: "0.75rem 1rem",
                          borderRadius: "8px",
                          background: "rgba(255, 255, 255, 0.05)",
                          border: "1px solid rgba(184, 134, 11, 0.3)",
                          color: "#e8e8e8",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          cursor: "pointer",
                          textAlign: "center",
                          transition: "all 0.15s ease",
                        }}
                      >
                        {isHebrew ? "Switch to English" : "עבור לעברית"}
                      </button>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 899px) {
          .mobile-nav {
            display: flex !important;
          }
          .desktop-nav,
          .desktop-lang-toggle {
            display: none !important;
          }
        }
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
