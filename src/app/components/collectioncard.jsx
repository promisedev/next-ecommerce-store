"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/collectionslides.module.css";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
// -------------------------------making all imports above
const Collectioncard = ({ data }) => {
  const images = "/assets/collection.webp";

  // ----------------------function to toggle behaviour of product card

  const showMore = (e) => {
    const ele = e.currentTarget.children;

    ele[0].classList.add(`${styles.enlarge_image}`);
    ele[1].children[0].children[1].classList.add(`${styles.shift_link}`);
  };

  const removeMore = (e) => {
    const ele = e.currentTarget.children;

    ele[0].classList.remove(`${styles.enlarge_image}`);
    ele[1].children[0].children[1].classList.remove(`${styles.shift_link}`);
  };
  // ---------------------------------------------------
  return (
    <Link
      href={""}
      className={styles.card_item}
      onMouseOver={showMore}
      onMouseLeave={removeMore}
    >
      <Image
        src={images}
        height={400}
        width={200}
        className={styles.myimage}
        alt=""
      />
      {/* --------------------------- */}
      <div className={styles.item_tag_cont}>
        <div className={styles.item_tag}>
          <span className={styles.item_title}>minis</span>
          <Link href={""} className={styles.item_icon}>
            <FiArrowRight style={{ fontSize: "17px" }} />
          </Link>
        </div>
      </div>
      {/* --------------------------------------- */}
    </Link>
  );
};

export default Collectioncard;
