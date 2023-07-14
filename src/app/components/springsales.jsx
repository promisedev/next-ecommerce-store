"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "../styles/springsales.module.css";
import { Spring } from "../utils/componentmetadata";
import Hero from "./hero";
const SpringComponent = () => {
  return (
    <section className={styles.spring_cont}>
      <article className={styles.caption}>
        <p>{Spring().title}</p>
        <h2>{Spring().caption}</h2>
        <Link href={Spring().link} className={styles.link1}>
          {Spring().linktitle}
        </Link>
      </article>
      {/* ---------------------------------- */}
      <article className={styles.images}>
        <div className={styles.spring_hero}>
          <Image
            src={Spring().hero1}
            width={500}
            height={700}
            className={styles.hero_image}
            alt="spring hero"
          />
        </div>
        {/* -------------------------- */}
        <div className={styles.spring_sub}>
          <Image
            src={Spring().hero2}
            width={300}
            height={500}
            className={styles.hero_image}
            alt="spring sub"
          />
        </div>
      </article>{" "}
    </section>
  );
};

export default SpringComponent;
