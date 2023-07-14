"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/productslide.module.css";
import cstyles from "../styles/collectionslides.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Collectioncard from "./collectioncard";
import { IconButton } from "@mui/material";
// ------------------------------getting all imports above
const Collectionslide = ({ data, title, link }) => {
  const [position, setPosition] = useState(0);

  const Forward = (e) => {
    let len = data?.length;
    let pos = position;
    if (pos < len + 1) {
      pos++;
      setPosition(pos);
    }
  };

  const Backward = (e) => {
    let len = data?.length;
    let pos = position;
    if (pos !== 0) {
      pos--;
      setPosition(pos);
    }
  };

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
        <div className={styles.control_box}>
          <IconButton onClick={Backward}>
            <BsArrowLeft
              style={{ fontSize: "25px" }}
              className={styles.control_icon}
            />
          </IconButton>
          <IconButton onClick={Forward}>
            <BsArrowRight
              style={{ fontSize: "25px" }}
              className={styles.control_icon}
            />
          </IconButton>
        </div>
      </div>
      {/*----slides container  */}
      <div className={styles.slide_cont2}>
        <article className={styles.slide_body}>
          {data.map((data, index) => (
            <div
              className={styles.product_card}
              style={{
                left: `${index * 100}%`,
                transform: `translateX(-${(position * 100) / 2}%)`,
              }}
            >
              {" "}
              <Collectioncard data={data} />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default Collectionslide;
