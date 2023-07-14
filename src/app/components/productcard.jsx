"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/productslide.module.css";
import Link from "next/link";
// -------------------------------making all imports above
const Productcard = ({ data, type }) => {
  const [price, setPrice] = useState(0);
  const discount = 15;
  const tagprice = 150;
  const newitem = true;
  const images = ["/assets/top-front.jpg", "/assets/top-back.webp"];
  const colors = ["grey", "black"];
  useEffect(() => {
    if (discount > 0) {
      const actual = tagprice - (discount / 100) * tagprice;
      setPrice(actual);
    }
  }, []);

  // ----------------------function to toggle behaviour of product card

  const showMore = (e) => {
    const parent = e.currentTarget.parentElement;
    parent.classList.add(`${styles.add_border}`);
    const img = e.currentTarget.children[0].children[1];
    img.classList.add(`${styles.show_float_image}`);

    const links = e.currentTarget.children[0].children[2].children[1];
    links.classList.add(`${styles.show_tag_link}`);
    const dots = e.currentTarget.children[5].children;
    const len = dots.length;
    for (let i = 0; i < len; i++) {
      dots[i].classList.add(`${styles.show_dots}`);
    }
  };

  const removeMore = (e) => {
    const parent = e.currentTarget.parentElement;

    parent.classList.remove(`${styles.add_border}`);
    const img = e.currentTarget.children[0].children[1];
    img.classList.remove(`${styles.show_float_image}`);

    const links = e.currentTarget.children[0].children[2].children[1];
    links.classList.remove(`${styles.show_tag_link}`);
    const dots = e.currentTarget.children[5].children;
    const len = dots.length;
    for (let i = 0; i < len; i++) {
      dots[i].classList.remove(`${styles.show_dots}`);
    }
  };
  // ---------------------------------------------------
  return (
    <div
      className={styles.card_item}
      onMouseOver={showMore}
      onMouseLeave={removeMore}
    >
      <div className={styles.p_image}>
        <Image
          src={images[0]}
          height={400}
          width={200}
          className={styles.myimage}
          alt=""
        />
        <Image
          src={images[1]}
          height={400}
          width={200}
          className={styles.float_image}
          alt=""
        />
        <div className={styles.item_tag}>
          <div className={styles.tags}>
            {discount && <span className={styles.dis_tag}>Sale</span>}
            {type == "new" && <span className={styles.new_tag}>New</span>}
            {type == "best sellers" && (
              <span className={styles.seller_tag}>best sellers</span>
            )}
          </div>

          <Link href={""} className={styles.tag_link}>
            quick view
          </Link>
        </div>
      </div>
      <h3 className={styles.p_title}>auckland bralette</h3>
      <p className={styles.p_type}>vogue</p>
      <p className={styles.p_price}>
        {discount > 0 ? (
          <span>
            <span className={styles.slashed}>${tagprice}</span>
            <span className={styles.discountprice}>
              ${price}
              <span className={styles.discounttag}>{discount}% off</span>
            </span>
          </span>
        ) : (
          <span className={styles.actualprice}>${tagprice}</span>
        )}
      </p>
      <p className={styles.p_color}>{colors.length} colors</p>
      <p className={styles.p_colors}>
        {colors.map((color, index) => (
          <span
            style={{
              background: `${color}`,
              padding: "6px",
              borderRadius: "50%",
              marginRight: "5px",
            }}
            className={styles.dots}
          ></span>
        ))}
      </p>
    </div>
  );
};

export default Productcard;
