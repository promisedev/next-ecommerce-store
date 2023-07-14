import styles from "../styles/hero.module.css";
import Header from "./header";
import { Intro } from "../utils/metadata";
import Link from "next/link";
// ---------------------making all imports above---------------------
const Hero = () => {
  return (
    <section className={styles.main}>
      <video
        autoPlay={true}
        loop
        mute="true"
        src="/assets/hero.mp4"
        className={styles.vid}
      />
      <article className={styles.hero_cont}>
        <div className={styles.header}>
          <Header />
        </div>
        {/* ------------------------------------- */}
        <div className={styles.intro}>
          <article className={styles.intro_cont}>
            <h4>{Intro().time}</h4>
            <h2>{Intro().title}</h2>
            <p>{Intro().discount}</p>
            <div className={styles.intro_link}>
              <Link href={Intro().singleshop.link} className={styles.link1}>
                {Intro().singleshop.title}
              </Link>
              <Link href={Intro().allshop.link} className={styles.link2}>
                {Intro().allshop.title}
              </Link>
            </div>
          </article>
        </div>
      </article>
    </section>
  );
};

export default Hero;
