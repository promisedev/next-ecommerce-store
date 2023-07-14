"use client";
import React, { useRef, useEffect } from "react";
import { Singleoutfit } from "../utils/componentmetadata";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/shopoutfit.module.css";
// --------------------------getting all imports above
const Outfit = () => {
  // --------------------setting up function--------------------------------
  const dotp1 = useRef(null);
  const dotp2 = useRef(null);
  const dotp3 = useRef(null);
  const circle = () => {
    const ele1 = dotp1.current;
    const ele2 = dotp2.current;
    const ele3 = dotp3.current;
    setInterval(() => {
      ele1.classList.toggle(`${styles.show_dotcircle}`);
      clearInterval();
    }, 2000);

    setInterval(() => {
      ele2.classList.toggle(`${styles.show_dotcircle}`);
      clearInterval();
    }, 4000);
    setInterval(() => {
      ele3.classList.toggle(`${styles.show_dotcircle}`);
      clearInterval();
    }, 6000);
  };
  useEffect(() => {
    circle();
  });

  const activate = (e) => {
    const ele = e.currentTarget.parentElement.parentElement.children;
    const len = ele.length;

    for (let i = 1; i < len; i++) {
      const dot = ele[i].children;
      dot[0].classList.remove(`${styles.show_outline}`);
      dot[1].classList.remove(`${styles.show_desc}`);
    }
    // -----------------add effect to curent element
    const myele = e.currentTarget.parentElement.children;
    myele[0].classList.add(`${styles.show_outline}`);
    myele[1].classList.add(`${styles.show_desc}`);
  };

  // ------------------------------------------------
  return (
    <section className={styles.outfit_wrapper}>
      <h3 className={styles.outfit_title}>{Singleoutfit().title}</h3>
      <Link href={Singleoutfit().link.link} className={styles.outfit_link}>
        {" "}
        {Singleoutfit().link.title}
      </Link>
      <div className={styles.outfit_image_cont}>
        <Image
          src={Singleoutfit().image.image}
          width={1200}
          height={700}
          alt={""}
          className={styles.outfit_image}
        />
        {/* ---------------single dot1--------------------- */}
        <div className={styles.dot1}>
          <span className={styles.outfit_dots} onClick={activate}>
            <span className={styles.dotp1} ref={dotp1}></span>
            <span className={styles.dot_small}> </span>
          </span>
          <div className={styles.dot_desc}>
            <span className={styles.dot_title}>
              {Singleoutfit().image.pointer[0].title}
            </span>
            <span className={styles.dot_price}>
              ${Singleoutfit().image.pointer[0].price}.00
            </span>
          </div>
        </div>
        {/* -------------------------- */}
        {/* ---------------single dot2------------------------------- */}
        <div className={styles.dot2}>
          <span className={styles.outfit_dots} onClick={activate}>
            <span className={styles.dotp2} ref={dotp2}></span>
            <span className={styles.dot_small}></span>
          </span>
          <div className={styles.dot_desc}>
            <span className={styles.dot_title}>
              {Singleoutfit().image.pointer[1].title}
            </span>
            <span className={styles.dot_price}>
              ${Singleoutfit().image.pointer[1].price}.00
            </span>
          </div>
        </div>
        {/* -------------------------- */}
        {/* ---------------single dot3------------------- */}
        <div className={styles.dot3}>
          <span className={styles.outfit_dots} onClick={activate}>
            <span className={styles.dotp3} ref={dotp3}></span>
            <span className={styles.dot_small}></span>
          </span>
          <div className={styles.dot_desc}>
            <span className={styles.dot_title}>
              {Singleoutfit().image.pointer[2].title}
            </span>
            <span className={styles.dot_price}>
              ${Singleoutfit().image.pointer[2].price}.00
            </span>
          </div>
        </div>
        {/* -------------------------- */}
      </div>
    </section>
  );
};

export default Outfit;
