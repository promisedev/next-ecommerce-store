"use client";
import React from "react";
import styles from "../styles/outerwear.module.css";
import Link from "next/link";
import { Outerwear } from "../utils/componentmetadata";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import Split from "react-split";
const OuterwearComp = () => {
  return (
    <section className={styles.outerwear}>
      <article className={styles.outerwear_desc}>
        <h2>{Outerwear().caption}</h2>
        <Link href={Outerwear().link.link} className={styles.link}>
          {Outerwear().link.title}
        </Link>
      </article>
      {/* ------------------------- */}
      <Split className={styles.split_image} minSize={[0]} gutterSize={3}>
        <div className={styles.image1}>
          <img
            src={Outerwear().hero1}
            alt=""
            className={styles.overflow_image}
          />
        </div>
        {/* -----------second child------------------- */}
        <div className={styles.image2}>
          <img
            src={Outerwear().hero2}
            alt=""
            className={styles.overflow_image}
          />
        </div>
        {/* -------------------------------------- */}

        {/* --------------------- */}
      </Split>
    </section>
  );
};

export default OuterwearComp;
