"use client";
import React from "react";
import styles from "../styles/bosekemper.module.css";
import { Bosekemper } from "../utils/componentmetadata";
import Link from "next/link";
import Image from "next/image";
// ------------making all imports above---------------------
const BosekemperComp = () => {
  return (
    <section className={styles.bose}>
      {/* --------card container-------------------- */}
      <article className={styles.bose_cont}>
        {Bosekemper().map((bose, index) => (
          <Link href={bose?.link.link} className={styles.bosecard} key={index}>
            <Image
              src={bose.image}
              height={600}
              width={400}
              alt={bose.title}
              className={styles.bose_image}
            />
            <div className={styles.bose_overlay}>
              <h4>{bose.title}</h4>
              <Link href={bose.link.link}>{bose.link.title}</Link>
            </div>
          </Link>
        ))}
      </article>
    </section>
  );
};

export default BosekemperComp;
