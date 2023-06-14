import styles from "../styles/hero.module.css";
import Header from "./header";

// ---------------------making all imports above---------------------
const Hero = () => {
  return (
    <section className={styles.main}>
      <video autoPlay={true} loop mute={true} src="/assets/hero.mp4"  className={styles.vid} />
      <article className={styles.hero_cont}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.intro}></div>
      </article>
    </section>
  );
};

export default Hero;
