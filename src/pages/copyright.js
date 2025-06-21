import Head from "next/head";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const CopyrightPage = () => (
  <>
    <Head>
      <title>Copyright - Humbleberger Ministries</title>
      <meta
        name="description"
        content="Copyright information for Humbleberger Ministries."
      />
      <link rel="stylesheet" href="/styles.css" />
    </Head>
    <main>
      <section>
        <h2>Copyright Notice</h2>

        <div class="copyright-content">
          <p>
            <em>Last Updated: April 18, 2025</em>
          </p>

          <h3>Website Content</h3>
          <p>
            © {new Date().getFullYear()} Humbleberger Ministries. All rights
            reserved. The content on this website, including but not limited to
            text, graphics, logos, images, audio clips, digital downloads, and
            data compilations, is the property of Humbleberger Ministries and is
            protected by United States and international copyright laws.
          </p>

          <h3>Trademarks</h3>
          <p>
            The Humbleberger Ministries name, logo, and all related names,
            logos, product and service names, designs, and slogans are
            trademarks of Humbleberger Ministries or its affiliates. You may not
            use such marks without the prior written permission of Humbleberger
            Ministries.
          </p>

          <h3>Biblical Content</h3>
          <p>
            Scripture quotations marked CSB® are taken from the Christian
            Standard Bible®, Copyright © 2017 by Holman Bible Publishers. Used
            by permission. Christian Standard Bible® and CSB® are federally
            registered trademarks of Holman Bible Publishers.
          </p>
          <p>
            Scripture quotations marked ESV® are from the ESV® Bible (The Holy
            Bible, English Standard Version®), copyright © 2001 by Crossway, a
            publishing ministry of Good News Publishers. Used by permission. All
            rights reserved.
          </p>
          <p>
            Scripture quotations marked NIV® are taken from the Holy Bible, New
            International Version®, NIV®. Copyright © 1973, 1978, 1984, 2011
            by Biblica, Inc.™ Used by permission of Zondervan. All rights
            reserved worldwide. www.zondervan.com The "NIV" and "New
            International Version" are trademarks registered in the United
            States Patent and Trademark Office by Biblica, Inc.™
          </p>

          <h3>Educational and Ministry Use</h3>
          <p>
            We encourage the use of our materials for educational and ministry
            purposes. You may download and print content from our website for
            non-commercial, educational, personal, or congregational use,
            provided that:
          </p>
          <ul>
            <li>You do not modify the content</li>
            <li>You include proper attribution to Humbleberger Ministries</li>
            <li>
              You do not remove any copyright or other proprietary notices
            </li>
            <li>
              You do not use the content in a way that suggests Humbleberger
              Ministries endorses you or your use
            </li>
          </ul>

          <h3>Permission Requests</h3>
          <p>
            For permission to use content from our website beyond the scope
            described above, please contact us at:
          </p>
          <p>
            Contact us using our <a href="/contact" style={{ color: "#2563eb" }}>online form</a>.
          </p>

          <h3>Copyright Infringement</h3>
          <p>
            If you believe that your copyrighted work has been used on our
            website in a way that constitutes copyright infringement, please
            provide us with the following information:
          </p>
          <ul>
            <li>
              A description of the copyrighted work that you claim has been
              infringed
            </li>
            <li>
              A description of where the allegedly infringing material is
              located on our website
            </li>
            <li>
              Your contact information, including address, telephone number, and
              email address
            </li>
            <li>
              A statement by you that you have a good faith belief that the
              disputed use is not authorized by the copyright owner, its agent,
              or the law
            </li>
            <li>
              A statement by you, made under penalty of perjury, that the
              information in your notice is accurate and that you are the
              copyright owner or authorized to act on the copyright owner's
              behalf
            </li>
          </ul>

          <p>Such notices should be sent to:</p>
          <p>
            Humbleberger Ministries
            <br />
            Attn: Copyright Agent
            <br />
            Contact us using our <a href="/contact" style={{ color: "#2563eb" }}>online form</a>.
          </p>
        </div>
      </section>
      <ReturnToHome />
    </main>
  </>
);

export default withBanner(CopyrightPage);
