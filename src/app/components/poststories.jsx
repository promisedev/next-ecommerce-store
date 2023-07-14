"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/productslide.module.css";
import cstyles from "../styles/poststories.module.css";
import Image from "next/image";

// ------------------------------getting all imports above
const Posts = ({ data, title, link }) => {
  return (
    <section className={styles.product_wrapper}>
      {/* --title of the product */}
      <div className={styles.title_cont}>
        <h3>{title}</h3>
      </div>
      {/* ---controls containing navigation and slide move */}
      <div className={styles.control_cont}>
        <Link href={link.link} className={styles.control_link}>
          {link.title}
        </Link>
      </div>
      {/*----slides container  */}
      <div className={cstyles.stories_cont}>
        {data?.map((item, index) => {
          return (
            <div className={cstyles.single_story} key={index}>
              <Link href={item.link.link} className={cstyles.image_cont}>
                <Image
                  src={item?.image}
                  width={400}
                  height={400}
                  alt={""}
                  className={cstyles.image}
                />
              </Link>
              <div className={cstyles.post_cont}>
                <Link href={item.link.link} className={cstyles.title}>{item?.title}</Link>
                <p className={cstyles.date}>{item?.date}</p>
                <p className={cstyles.desc}>
                  {item?.description.substring(0, 150)}...
                </p>
                <Link href={item.link.link} className={cstyles.link}>
                  {item.link.title}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
