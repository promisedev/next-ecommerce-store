"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../styles/productslide.module.css";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Productcard from "./productcard";
import { IconButton } from "@mui/material";
// ------------------------------getting all imports above
const Productslide = ({ data, title, link, type, extra }) => {
  const [position, setPosition] = useState(0);

  const Forward = (e) => {
    let len = data?.length;
    let pos = position;
    if (pos < len) {
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
      <div className={styles.slide_cont}>
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
              <Productcard data={data} type={type} />
            </div>
          ))}
          <div
            className={styles.product_card}
            style={{
              left: `${data.length * 100}%`,
              transform: `translateX(-${(position * 100) / 2}%)`,
            }}
          >
            <div className={styles.card_item1}>
              <div className={styles.card_view}>
                <h4 className={styles.card_view_title}>{extra.title}</h4>
                <Link href={extra.link.link} className={styles.card_view_link}>
                  {extra.link.title}
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Productslide;
