"use client";
import React from "react";
import Link from "next/link";
import styles from "../styles/arrivals.module.css";
import { Floral } from "../utils/componentmetadata";
// ----------making all imports from above

const Arrivals = () => {
  return (
    <section className={styles.arrivals}>
      <article className={styles.arrivals_image}>
        <img src={Floral().hero} alt={Floral().title} />
      </article>
      {/* ------------------------*/}
      <article className={styles.arrivals_desc}>
        <p>{Floral().title}</p>
        <h2>{Floral().caption}</h2>
        <div className={styles.floral_link}>
          <Link href={Floral().link1.link} className={styles.link1}>
            {Floral().link1.title}
          </Link>
          <Link href={Floral().link2.link} className={styles.link2}>
            {Floral().link2.title}
          </Link>
        </div>
      </article>
    </section>
  );
};

export default Arrivals;
