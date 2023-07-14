"use client";
import Link from "next/link";
import React from "react";
import styles from "../styles/springsales.module.css";
import { Dressedit } from "../utils/componentmetadata";
import Hero from "./hero";
import Image from "next/image";
const DressComponent = () => {
  return (
    <section className={styles.spring_cont2}>
      <article className={styles.caption}>
        <p>{Dressedit().title}</p>
        <h2>{Dressedit().caption}</h2>
        <div className={styles.link_cont}>
          <Link href={Dressedit().link1.link} className={styles.link1}>
            {Dressedit().link1.title}
          </Link>
          <Link href={Dressedit().link2.link} className={styles.link2}>
            {Dressedit().link2.title}
          </Link>
        </div>
      </article>
      {/* ---------------------------------- */}
      <article className={styles.images}>
        <div className={styles.spring_hero}>
          <Image
            src={Dressedit().hero1}
            width={500}
            height={700}
            className={styles.hero_image}
            alt="spring hero"
          />
        </div>
        {/* -------------------------- */}
        <div className={styles.spring_sub}>
          <Image
            src={Dressedit().hero2}
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

export default DressComponent;
