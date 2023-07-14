"use client";
import React from "react";
import { Sunrise } from "../utils/componentmetadata";
import styles from "../styles/sunrise.module.css";
import Image from "next/image";
import Link from "next/link";
// ---------------------------------getting all imports above
const sunriseComp = () => {
  return (
    <section className={styles.sunrise_wrapper}>
      <Image
        src={Sunrise().image}
        height={800}
        width={1200}
        alt={"blazer"}
        className={styles.sunrise_image}
      />
      <div className={styles.sunrise_cont}>
        <p className={styles.title1}>{Sunrise().header}</p>
        <h3 className={styles.header}>{Sunrise().title}</h3>
        <p className={styles.title2}>{Sunrise().subtitle}</p>
        <Link href={Sunrise().link.link} className={styles.link}>
          {Sunrise().link.title}
        </Link>
      </div>
    </section>
  );
};

export default sunriseComp;
