import Head from "next/head";
import withBanner from "../utils/with-banner";

const TermsOfUse = () => {
  return (
    <>
      <Head>
        <title>Terms of Use - Humbleberger Ministries</title>
        <meta
          name="description"
          content="Terms of use for Humbleberger Ministries website."
        />
      </Head>
      <main>
        <section>
          <h2>Terms of Use</h2>

          <div class="terms-content">
            <p>
              <em>Last Updated: April 18, 2025</em>
            </p>

            <p>
              Welcome to the Humbleberger Ministries website. By accessing or
              using our website, you agree to be bound by these Terms of Use.
              Please read them carefully.
            </p>

            <h3>Acceptance of Terms</h3>
            <p>
              By accessing and using this website, you accept and agree to be
              bound by these Terms of Use, our Privacy Policy, and any other
              policies that may be published on our website. If you do not agree
              to these terms, please do not use our website.
            </p>

            <h3>Use of Content</h3>
            <p>
              The content on our website, including but not limited to text,
              graphics, logos, images, audio clips, and software, is owned by or
              licensed to Humbleberger Ministries and is protected by copyright
              and other intellectual property laws. You may access and view the
              content for personal, non-commercial use only. You may not
              reproduce, distribute, modify, create derivative works of,
              publicly display, or exploit any content from our website without
              our prior written permission.
            </p>

            <h3>User Conduct</h3>
            <p>When using our website, you agree not to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>
                Use our website in any manner that could disable, overburden, or
                impair the site
              </li>
              <li>
                Attempt to gain unauthorized access to any part of our website
              </li>
              <li>
                Use our website to transmit any malicious software or code
              </li>
              <li>
                Engage in any conduct that restricts or inhibits anyone's use of
                our website
              </li>
            </ul>

            <h3>Links to Third-Party Websites</h3>
            <p>
              Our website may contain links to third-party websites. These links
              are provided for your convenience only. We have no control over
              the content of these websites and accept no responsibility for
              them or for any loss or damage that may arise from your use of
              them. The inclusion of a link to a third-party website does not
              imply our endorsement of that website.
            </p>

            <h3>User-Generated Content</h3>
            <p>
              If you submit any content to our website, including comments or
              feedback, you grant Humbleberger Ministries a non-exclusive,
              royalty-free, perpetual, and worldwide license to use, reproduce,
              modify, adapt, publish, translate, and distribute such content in
              any media. You represent that you have the right to grant such a
              license.
            </p>

            <h3>Disclaimer of Warranties</h3>
            <p>
              Our website and its content are provided "as is" and "as
              available" without any warranties of any kind, either express or
              implied. We do not warrant that our website will be uninterrupted
              or error-free, that defects will be corrected, or that our website
              or the servers that make it available are free of viruses or other
              harmful components.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by applicable law, Humbleberger
              Ministries shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages, including loss of
              profits, data, or use, arising out of or in connection with your
              use of our website.
            </p>

            <h3>Indemnification</h3>
            <p>
              You agree to indemnify, defend, and hold harmless Humbleberger
              Ministries and its officers, directors, employees, agents, and
              affiliates from and against any and all claims, liabilities,
              damages, losses, costs, expenses, or fees (including reasonable
              attorneys' fees) arising from your use of our website or your
              violation of these Terms of Use.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms of Use at any time. Any
              changes will be effective immediately upon posting the revised
              Terms of Use on our website. Your continued use of our website
              after the posting of revised Terms of Use constitutes your
              acceptance of such changes.
            </p>

            <h3>Governing Law</h3>
            <p>
              These Terms of Use shall be governed by and construed in
              accordance with the laws of the State of North Carolina, without
              regard to its conflict of law provisions.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about these Terms of Use, please contact
              us at:
            </p>
            <p>
              Email:
              <a href="mailto:shalom@humbleberger.org">
                shalom@humbleberger.org
              </a>
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <a href="/" class="home-button">
              ← Return to Home
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default withBanner(TermsOfUse);
