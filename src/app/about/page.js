import styles from './About.module.css';
import { 
  FaCompass, FaHeart, FaStar, FaBookOpen, 
  FaUsers, FaGem, FaHandshake, FaTrophy, 
  FaSeedling, FaClock, FaEnvelope, FaGraduationCap,
  FaAward, FaMedal, FaChartLine, FaCalendarAlt,
  FaMapMarkerAlt, FaSchool, FaUniversity
} from 'react-icons/fa';
import { FaHeartHands } from 'react-icons/fa6';
import Image from 'next/image';

export default function About() {
  // Data for achievements chart
  const achievements = [
    { label: 'Academic Awards', value: 75 },
    { label: 'Sports Trophies', value: 42 },
    { label: 'Cultural Events', value: 63 },
    { label: 'Social Initiatives', value: 38 }
  ];

  // Data for alumni statistics
  const alumniStats = [
    { label: 'Higher Education', value: '68%', icon: <FaUniversity /> },
    { label: 'Employment Rate', value: '92%', icon: <FaChartLine /> },
    { label: 'Entrepreneurs', value: '15%', icon: <FaAward /> },
    { label: 'Abroad', value: '22%', icon: <FaMapMarkerAlt /> }
  ];

  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>
        {/* Page Header */}
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About ONUSURJO-22</h1>
          <p className={styles.pageSubtitle}>
            Discover our journey, values, and the unbreakable bonds that unite the class of 2022
          </p>
        </div>

        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImageWrapper}>
                <Image 
                  src="/school_banner.png" 
                  alt="ONUSURJO-22 Class Photo" 
                  width={800} 
                  height={400} 
                  className={styles.heroImage}
                />
              </div>
            </div>
            <h2 className={styles.heroTitle}>ONUSURJO-22&lsquo;s Story</h2>
            <p className={styles.heroDescription}>
              We are more than just a batch - we are a constellation of dreams, aspirations, and unbreakable bonds. 
              Founded in 2018, our journey together has shaped us into a community that values excellence, 
              camaraderie, and lifelong learning. Through challenges and triumphs, we&lsquo;ve grown together as 
              a family that supports each other beyond the classroom.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>150+</span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>4</span>
                <span className={styles.statLabel}>Years Together</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>500+</span>
                <span className={styles.statLabel}>Memories</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>∞</span>
                <span className={styles.statLabel}>Friendships</span>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FaCompass />
            </div>
            Our Mission & Vision
          </h2>
          <div className={styles.missionVision}>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <FaHeart />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDescription}>
                To foster lifelong connections among our batch mates, creating a supportive network that empowers each member to achieve their fullest potential. We strive to maintain the bonds formed during our academic years and extend them into our professional lives.
              </p>
            </div>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <FaStar />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDescription}>
                To become a beacon of unity and excellence, where every member of ONUSURJO-22 contributes to society with integrity and innovation. We envision our batch as a distinguished alumni network known for its collaborative spirit and commitment to positive change.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story & Bond */}
        <section className={styles.contentSection}>
          <div className={styles.twoColumn}>
            <div className={styles.column}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <FaBookOpen />
                </div>
                Our Story
              </h2>
              <div className={styles.sectionContent}>
                <p>ONUSURJO-22&lsquo;s genesis traces back to 2018 when we first gathered as freshmen, bright-eyed and eager to embark on our academic journey. The name &ldquo;ONUSURJO&ldquo; (অনুসূর্য) symbolizes our collective aspiration to follow the path of light and knowledge, much like the sun that illuminates and nurtures life.</p>
                <p>Through four transformative years, we&lsquo;ve navigated academic challenges, celebrated achievements, and forged connections that transcend the classroom. From intense study sessions to cultural events and sports competitions, every experience has contributed to our shared narrative.</p>
                <div className={styles.storyImage}>
                  <Image 
                    src="/onusurjo_22.png" 
                    alt="ONUSURJO-22 Logo" 
                    width={200} 
                    height={200} 
                    className={styles.logoImage}
                  />
                </div>
              </div>
            </div>
            <div className={styles.column}>
              <h2 className={styles.sectionTitle}>
                <div className={styles.sectionIcon}>
                  <FaUsers />
                </div>
                Our Bond
              </h2>
              <div className={styles.sectionContent}>
                <p>What distinguishes ONUSURJO-22 isn&lsquo;t merely our academic excellence but the profound bonds we&lsquo;ve cultivated. Our strength lies in our diversity – different backgrounds, talents, and aspirations united by mutual respect and camaraderie.</p>
                <p>We&lsquo;ve celebrated birthdays together, comforted each other during setbacks, and cheered each other&lsquo;s victories. These shared experiences have woven a tapestry of friendship that extends beyond graduation. As we transition to alumni status, we carry these connections forward, supporting each other through career challenges and life milestones.</p>
                <div className={styles.achievementsChart}>
                  {achievements.map((item, index) => (
                    <div key={index} className={styles.chartItem}>
                      <div className={styles.chartLabel}>{item.label}</div>
                      <div className={styles.chartBarContainer}>
                        <div 
                          className={styles.chartBar} 
                          style={{width: `${item.value}%`}}
                        ></div>
                        <span className={styles.chartValue}>{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Alumni Statistics */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FaGraduationCap />
            </div>
            Alumni Pathways
          </h2>
          <p className={styles.sectionIntro}>
            Our graduates have embarked on diverse paths, making their mark across various fields and geographies.
            Here&lsquo;s a snapshot of where ONUSURJO-22 alumni are now:
          </p>
          <div className={styles.alumniStatsGrid}>
            {alumniStats.map((stat, index) => (
              <div key={index} className={styles.alumniStatCard}>
                <div className={styles.alumniStatIcon}>
                  {stat.icon}
                </div>
                <div className={styles.alumniStatValue}>{stat.value}</div>
                <div className={styles.alumniStatLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
          <div className={styles.alumniQuote}>
            <blockquote>
            &ldquo;The connections we formed at ONUSURJO-22 continue to be our greatest asset as we navigate our professional journeys.&ldquo;
              <cite>— Class Representative, 2022</cite>
            </blockquote>
          </div>
        </section>

        {/* Our Values */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FaGem />
            </div>
            Our Core Values
          </h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaHandshake />
              </div>
              <h3 className={styles.valueTitle}>Unity & Solidarity</h3>
              <p className={styles.valueDescription}>
                We champion the transformative power of unity, believing that our collective strength far exceeds the sum of our individual capabilities. Through solidarity, we support each other&lsquo;s growth and face challenges together.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaTrophy />
              </div>
              <h3 className={styles.valueTitle}>Excellence & Innovation</h3>
              <p className={styles.valueDescription}>
                We pursue excellence in all endeavors, constantly pushing boundaries and embracing innovative approaches. We believe in setting high standards and inspiring each other to achieve remarkable outcomes in academics and beyond.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                {/* <FaHeartHands /> */}
              </div>
              <h3 className={styles.valueTitle}>Mutual Support</h3>
              <p className={styles.valueDescription}>
                We are committed to being there for each other through life&lsquo;s ups and downs. Our support network extends beyond academic assistance to emotional encouragement, career guidance, and celebrating personal milestones together.
              </p>
            </div>

            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>
                <FaSeedling />
              </div>
              <h3 className={styles.valueTitle}>Growth & Learning</h3>
              <p className={styles.valueDescription}>
                We embrace continuous learning and personal growth, recognizing that education extends far beyond the classroom. We encourage curiosity, critical thinking, and the courage to step outside comfort zones to discover new possibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className={styles.contentSection}>
          <h2 className={styles.sectionTitle}>
            <div className={styles.sectionIcon}>
              <FaClock />
            </div>
            Our Journey Timeline
          </h2>
          <div className={styles.timeline}>
            {[
              { 
                date: '2018', 
                title: 'The Beginning', 
                desc: 'Our journey began as freshmen, forming initial bonds during orientation week and first-semester activities. We established our batch identity and elected our first representatives.',
                icon: <FaSchool />
              },
              { 
                date: '2019-2020', 
                title: 'Building Bonds', 
                desc: 'Through shared experiences in classrooms, cultural festivals, and sports competitions, our connections deepened. We organized our first batch retreat and launched community service initiatives.',
                icon: <FaCalendarAlt />
              },
              { 
                date: '2021', 
                title: 'Overcoming Challenges', 
                desc: 'Together we faced the unprecedented challenges of the pandemic, adapting to remote learning while maintaining our community spirit through virtual events and support groups.',
                icon: <FaMedal />
              },
              { 
                date: '2022-Present', 
                title: 'Continuing Legacy', 
                desc: 'As we graduate and transition to alumni status, we establish structures to maintain our connections and support network. Our alumni association begins taking shape with regular meetups and mentorship programs.',
                icon: <FaGraduationCap />
              }
            ].map((item, i) => (
              <div key={i} className={styles.timelineItem}>
                <div className={styles.timelineDate}>{item.date}</div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineIcon}>{item.icon}</div>
                  <h3 className={styles.timelineTitle}>{item.title}</h3>
                  <p className={styles.timelineDescription}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Join Our Journey</h2>
          <p className={styles.ctaDescription}>
            Whether you&lsquo;re a fellow student, alumni, or someone interested in connecting with ONUSURJO-22, 
            we welcome you to be part of our continuing story. Reach out to learn more about our community, 
            upcoming events, or collaboration opportunities.
          </p>
          <div className={styles.ctaButtons}>
            <a href="#" className={styles.ctaBtn}>
              <FaEnvelope />
              Get In Touch
            </a>
            <a href="#" className={`${styles.ctaBtn} ${styles.secondary}`}>
              <FaUsers />
              Join Alumni Network
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
