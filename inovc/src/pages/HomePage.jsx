import styles from './HomePage.module.css';

const heroImage =
  'https://static.wixstatic.com/media/11062b_0b96bc1023ad478aa0e11510b179795e~mv2.jpeg/v1/crop/x_269,y_0,w_6181,h_4480/fill/w_1962,h_980,al_c,q_90,enc_avif,quality_auto/Engineers.jpeg';

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <img src={heroImage} alt="Healthcare professionals using technology" />
        <div className={styles.overlay} />
        <div className={styles.copy}>
          <h1>Robotic disinfection solutions for healthcare facilities</h1>
          <p>
            We work to make the greatest technological advances to reach hospitals,
            where it can be most beneficial.
          </p>
        </div>
      </section>

      <section id="ultrabot" className={styles.logoSection}>
        <h2>ULTRABOT</h2>
      </section>

      <section id="benefits" className={`section ${styles.section}`}>
        <div className="container">
          <h3>Benefits</h3>
          <div className={styles.cards}>
            <article>
              <h4>Safe autonomous operation</h4>
              <p>Disinfection routes can be planned to reduce human exposure and improve consistency.</p>
            </article>
            <article>
              <h4>Hospital-ready integration</h4>
              <p>Designed for healthcare workflows, including wards, laboratories and high-contact spaces.</p>
            </article>
            <article>
              <h4>Data-driven reporting</h4>
              <p>Session tracking and clear summaries to support process audits and quality compliance.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="company" className={`section ${styles.sectionAlt}`}>
        <div className="container">
          <h3>The Company</h3>
          <p>
            Med ROBOTS develops robotic systems focused on infection prevention and
            operational efficiency in clinical environments.
          </p>
        </div>
      </section>

      <section id="contacts" className={`section ${styles.section}`}>
        <div className="container">
          <h3>Contacts</h3>
          <p>Email: geral@medrobots.pt · Phone: +351 000 000 000</p>
        </div>
      </section>
    </>
  );
}
