import styles from "../styles/hero.module.css";
import Header from "./header";

// ---------------------making all imports above---------------------
const Hero = () => {
  return (
    <section className={styles.main}>
      <article className={styles.hero_cont}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.intro}></div>
      </article>
      <video autoPlay="true" loop mute src="/assets/hero.mp4"  className={styles.vid} />
    </section>
  );
};

export default Hero;
