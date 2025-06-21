import Head from "next/head";
import Link from "next/link";
import withBanner from "../utils/with-banner";

const PrivacyPolicy = () => (
  <>
    <Head>
      <title>Privacy Policy - Humbleberger Ministries</title>
      <meta
        name="description"
        content="Privacy policy for Humbleberger Ministries website."
      />
    </Head>
    <main>
      <section>
        <h2>Privacy Policy</h2>

        <div class="policy-content">
          <p>
            <em>Last Updated: April 18, 2025</em>
          </p>

          <p>
            At Humbleberger Ministries, we are committed to protecting your
            privacy and ensuring the security of your personal information. This
            Privacy Policy outlines how we collect, use, and safeguard the
            information you provide when using our website and services.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email
            address, and location when you voluntarily submit this information
            through our website, such as when signing up for our newsletter or
            contacting us. Additionally, we automatically collect certain
            information about your device, including your IP address, browser
            type, and operating system.
          </p>

          <h3>How We Use Your Information</h3>
          <p>We use the information we collect to:</p>
          <ul>
            <li>
              Respond to your inquiries and provide you with information about
              our ministry
            </li>
            <li>
              Send you our newsletter and updates about our activities (with
              your consent)
            </li>
            <li>Improve our website and services</li>
            <li>
              Fulfill any specific purpose for which you provided the
              information
            </li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            Our website uses cookies and similar tracking technologies to
            improve your browsing experience and collect information about how
            you use our site. You can manage your cookie preferences through
            your browser settings.
          </p>

          <h3>Third-Party Service Providers</h3>
          <p>
            We may share your information with trusted third-party service
            providers who assist us in operating our website, conducting our
            ministry, or servicing you. These third parties are obligated to
            keep your information confidential.
          </p>

          <h3>Your Rights</h3>
          <p>You have the right to:</p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of receiving communications from us</li>
          </ul>

          <h3>Children's Privacy</h3>
          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h3>Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. The updated policy will be posted on this page
            with a revised "Last Updated" date.
          </p>

          <h3>Contact Us</h3>
          <p>
            If you have any questions or concerns about our Privacy Policy,
            please contact us at:
          </p>
          <p>
            Email:
            <a href="mailto:shalom@humbleberger.org">shalom@humbleberger.org</a>
          </p>
        </div>

        <nav className="blog-post-nav">
          <Link href="/" legacyBehavior>
            <a className="blog-post-back">← Return to Home</a>
          </Link>
        </nav>
      </section>
    </main>
  </>
);

export default withBanner(PrivacyPolicy);
