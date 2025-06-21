import Head from "next/head";
import ReturnToHome from "../components/return-to-home";
import withBanner from "../utils/with-banner";

const StatementOfFaith = () => (
  <>
    <Head>
      <title>Statement of Faith - Humbleberger Ministries</title>
      <meta
        name="description"
        content="Humbleberger Ministries' statement of faith and core beliefs."
      />
    </Head>
    <main>
      <section>
        <h2>Statement of Faith</h2>
        <p
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginBottom: "2.5rem",
          }}
        >
          These are the biblical principles and theological convictions that
          guide our ministry.
        </p>

        <div class="statement-item">
          <h3>1. The Authority and Unity of Scripture</h3>
          <p>
            We believe that the entire Bible — both the Old and New Testaments —
            is the inspired, inerrant, and infallible Word of God. It is the
            final and sufficient authority in all matters of faith, doctrine,
            and practice. The Hebrew Scriptures are foundational and point
            directly to the Messiah, Jesus Christ.
          </p>
        </div>

        <div class="statement-item">
          <h3>2. The Triune God</h3>
          <p>
            We believe in one God, eternally existing in three Persons: Father,
            Son, and Holy Spirit. Each is fully God, equal in glory, power, and
            essence, yet distinct in role and relation.
          </p>
        </div>

        <div class="statement-item">
          <h3>3. The Person and Work of Christ</h3>
          <p>
            Jesus Christ, fully God and fully man, was conceived by the Holy
            Spirit and born of a virgin. He lived a sinless life, died a
            substitutionary death on the cross, rose bodily from the dead, and
            now reigns at the right hand of the Father. Salvation is found in
            Him alone.
          </p>
        </div>

        <div class="statement-item">
          <h3>4. Salvation by Grace Through Faith</h3>
          <p>
            Salvation is by grace alone, through faith alone, in Christ alone.
            This includes regeneration, justification, sanctification, and
            glorification. It is the free gift of God and cannot be earned by
            works or human effort.
          </p>
        </div>

        <div class="statement-item">
          <h3>5. Believer's Baptism by Immersion</h3>
          <p>
            We believe baptism is for believers only, as a public profession of
            faith and obedience to Christ. It is by immersion, symbolizing the
            believer's union with Christ in His death, burial, and resurrection.
            It is not salvific but is commanded by Jesus for all who follow Him.
          </p>
        </div>

        <div class="statement-item">
          <h3>6. The Church</h3>
          <p>
            The Church consists of all true believers in Christ. The local
            church is an autonomous body of baptized believers committed to
            worship, fellowship, teaching, the ordinances, and mission. Christ
            is the head of the Church.
          </p>
        </div>

        <div class="statement-item">
          <h3>7. Spiritual Gifts</h3>
          <p>
            We affirm the continuing presence and operation of spiritual gifts
            within the Church, as described in the New Testament. We believe
            these gifts are to be exercised in a spirit of humility, under the
            authority of Scripture, and in accordance with the order and purpose
            taught in the New Testament.
          </p>
        </div>

        <div class="statement-item">
          <h3>8. The Guidance of the Holy Spirit and Personal Experience</h3>
          <p>
            We affirm the authority of Scripture as supreme yet also recognize
            the Holy Spirit's ongoing personal guidance. Spirit-led experience
            is sacred and legitimate when submitted to Scripture, discerned with
            wisdom, and practiced in community.
          </p>
        </div>

        <div class="statement-item">
          <h3>9. Biblical Anthropology: Gender and Identity</h3>
          <p>
            We affirm that all people are created by God in His image with
            inherent dignity and worth. We believe that God intentionally
            created humanity as male and female, and that both are equal in
            value and distinct in role. We affirm that marriage is a sacred
            covenant between one man and one woman, designed by God for human
            flourishing. We uphold the sanctity of life from conception to
            natural death, trusting in God's good design for human identity and
            purpose.
          </p>
        </div>

        <div class="statement-item">
          <h3>10. Doctrine of Humanity and Transhumanism</h3>
          <p>
            We affirm that humanity, created in the image of God, is a sacred
            and purposeful design. We believe that attempts to alter or enhance
            human nature through technological, genetic, or artificial means
            oppose God's intention for human identity and dignity. We affirm
            that human value is not found in artificial enhancements, but in
            being fearfully and wonderfully made by our Creator.
          </p>
        </div>

        <div class="statement-item">
          <h3>11. God's Redemptive Plan and the Hope of Jewish Evangelism</h3>
          <p>
            We believe that God's plan of salvation, revealed throughout the
            Scriptures, has always been by grace through faith — and is
            fulfilled in Jesus, the Messiah. In Christ, God is drawing both Jews
            and Gentiles into one redeemed people, united by the Spirit and
            anchored in the promises of the New Covenant. Honoring the priority
            of the gospel "to the Jew first" (Romans 1:16), we embrace a
            particular calling to lovingly share the good news of Yeshua with
            Jewish people around the world, inviting them to receive the Messiah
            foretold in their own Scriptures.
          </p>
        </div>

        <div class="statement-item">
          <h3>
            12. Love for the Jewish People and the Fulfillment of God's Promise
          </h3>
          <p>
            We affirm God's enduring covenantal love for the Jewish people and
            recognize the rich spiritual heritage given through them — the
            patriarchs, the prophets, the Scriptures, and ultimately the
            Messiah. We honor Jewish identity as part of God's redemptive plan
            and believe that the promises of the Hebrew Scriptures find their
            fulfillment in Jesus, the Messiah of Israel. In this conviction, we
            approach Jewish people not with pressure or coercion, but with
            humility, gratitude, and hope — longing to share the good news of
            Yeshua with compassion and deep respect.
          </p>
        </div>

        <div class="statement-item">
          <h3>13. Non-Political Affiliation</h3>
          <p>
            We as an organization are not political in nature. We do not promote
            any party or ideology. Our citizenship is in heaven, and our mission
            is spiritual: to proclaim the gospel and advance the kingdom of
            Christ.
          </p>
        </div>

        <div class="statement-item">
          <h3>14. Spiritual Warfare</h3>
          <p>
            We affirm the reality of spiritual warfare. The gospel is proclaimed
            in contested territory. We are equipped with the full armor of God
            and empowered by the Spirit to resist the enemy and advance the
            gospel in power and truth.
          </p>
        </div>

        <div class="statement-item">
          <h3>15. The Great Commission and Global Missions</h3>
          <p>
            We exist to make disciples of all nations, especially the Jewish
            people. We proclaim the gospel, plant churches, disciple believers,
            and raise up leaders. We affirm Christ's command to go into all the
            world until every people hears. We follow the biblical pattern of
            gospel expansion from Jerusalem to Judea, Samaria, and the ends of
            the earth (Acts 1:8), laboring first for the Jewish people and then
            for the nations. Our evangelism is grounded in Scripture, both Old
            and New Testaments.
          </p>
        </div>

        <div class="statement-item">
          <h3>16. Truth and the Exclusivity of the Gospel</h3>
          <p>
            We affirm that Jesus is the only way to God, and that salvation is
            found in Him alone. We affirm the absolute truth and authority of
            God's Word in all generations. While we engage diverse cultures with
            humility and compassion, we hold fast to the exclusive truth of the
            gospel without compromise.
          </p>
        </div>

        <div class="statement-item">
          <h3>17. The Witness of the Church in a Secular World</h3>
          <p>
            We affirm the existence of a personal, holy, and sovereign God, who
            created and sustains all things. We affirm that true knowledge and
            wisdom begin with the fear of the Lord, and that any worldview which
            denies God's existence is ultimately incomplete and spiritually
            bankrupt.
          </p>
        </div>

        <div class="statement-item">
          <h3>18. The Sanctity of Life</h3>
          <p>
            We affirm the sanctity of all human life from conception to natural
            death. Every person bears the image of God and deserves dignity and
            protection. We affirm that all people, regardless of ability, age,
            or social status, are fearfully and wonderfully made.
          </p>
        </div>

        <div class="statement-item">
          <h3>19. Unity in the Essentials, Liberty in the Non-Essentials</h3>
          <p>
            We do not divide over secondary issues. We respect diverse views on
            creation, eschatology, spiritual gifts, and theological systems such
            as Reformed theology. However, we do not affirm classical
            dispensationalism, as we believe God has one people in Christ. We
            strive for unity in the gospel and charity in all things, provided
            that these positions uphold the inerrancy and authority of
            Scripture. We affirm, for example, the historical reality of Adam
            and Eve, as Jesus Himself spoke of them as literal persons (Matthew
            19:4–6).
          </p>
        </div>

        <div class="statement-item">
          <h3>20. Final Affirmation</h3>
          <p>
            We affirm these doctrines not as a cold creed but as a living
            confession — a call to proclaim Christ to all people, especially to
            the Jewish people, with clarity, compassion, and boldness. We pledge
            to hold fast to the truth, preach the Word in season and out, and go
            wherever the Lord leads — from New York to Tel Aviv — until every
            knee bows and every tongue confesses that Jesus the Messiah is Lord,
            to the glory of God the Father. Amen.
          </p>
        </div>
      </section>
      <ReturnToHome />
    </main>
  </>
);

export default withBanner(StatementOfFaith);
